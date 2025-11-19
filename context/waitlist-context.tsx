"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { apiService, type WaitlistSubmission } from "@/services/api";
import { storageService } from "@/services/storage";

interface WaitlistContextType {
  isComplete: boolean;
  percentage: number;
  count: number;
  isLoading: boolean;
  submissions: WaitlistSubmission[];
  refreshWaitlistData: () => Promise<void>;
}

const WaitlistContext = createContext<WaitlistContextType>({
  isComplete: false,
  percentage: 0,
  count: 0,
  isLoading: true,
  submissions: [],
  refreshWaitlistData: async () => {},
});

export const useWaitlist = () => useContext(WaitlistContext);

export const WaitlistProvider = ({ children }: { children: ReactNode }) => {
  const [status, setStatus] = useState<WaitlistContextType>({
    isComplete: false,
    percentage: 0,
    count: 0,
    isLoading: true,
    submissions: [],
    refreshWaitlistData: async () => {},
  });

  const checkWaitlistStatus = async () => {
    try {
      // First check localStorage for cached data
      const cachedStatus = storageService.getWaitlistStatus();
      if (cachedStatus) {
        setStatus((prev) => ({
          ...prev,
          isComplete: cachedStatus.percentage >= 100,
          percentage: cachedStatus.percentage,
          count: cachedStatus.count,
          isLoading: false,
          submissions: [], // We don't cache submissions, only get fresh data
        }));
      }

      // Then fetch fresh data
      const freshStatus = await apiService.getWaitlistStatus();

      // Store updated status
      storageService.storeWaitlistStatus(
        freshStatus.percentage,
        freshStatus.count
      );

      setStatus((prev) => ({
        ...prev,
        isComplete: freshStatus.percentage >= 100,
        percentage: freshStatus.percentage,
        count: freshStatus.count,
        isLoading: false,
        submissions: freshStatus.submissions,
      }));
    } catch (error) {
      console.error("Failed to load waitlist status:", error);
      // Set to 0% and 0 count when fetch fails
      setStatus({
        isComplete: false,
        percentage: 0,
        count: 0,
        isLoading: false,
        submissions: [],
        refreshWaitlistData: checkWaitlistStatus,
      });
    }
  };
  useEffect(() => {
    checkWaitlistStatus();
  }, []);

  useEffect(() => {
    setStatus((prev) => ({
      ...prev,
      refreshWaitlistData: checkWaitlistStatus,
    }));
  }, []);

  return (
    <WaitlistContext.Provider value={status}>
      {children}
    </WaitlistContext.Provider>
  );
};
