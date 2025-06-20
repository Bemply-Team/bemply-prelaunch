"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { apiService } from "@/services/api"
import { storageService } from "@/services/storage"

interface WaitlistContextType {
  isComplete: boolean
  percentage: number
  count: number
  isLoading: boolean
}

const WaitlistContext = createContext<WaitlistContextType>({
  isComplete: false,
  percentage: 0,
  count: 0,
  isLoading: true,
})

export const useWaitlist = () => useContext(WaitlistContext)

export const WaitlistProvider = ({ children }: { children: ReactNode }) => {
  const [status, setStatus] = useState<WaitlistContextType>({
    isComplete: false,
    percentage: 0,
    count: 0,
    isLoading: true,
  })

  useEffect(() => {
    const checkWaitlistStatus = async () => {
      try {
        // First check localStorage for cached data
        const cachedStatus = storageService.getWaitlistStatus()
        if (cachedStatus) {
          setStatus({
            isComplete: cachedStatus.percentage >= 100,
            percentage: cachedStatus.percentage,
            count: cachedStatus.count,
            isLoading: false,
          })
        }

        // Then fetch fresh data
        const freshStatus = await apiService.getWaitlistStatus()

        // Store updated status
        storageService.storeWaitlistStatus(freshStatus.percentage, freshStatus.count)

        setStatus({
          isComplete: freshStatus.percentage >= 100,
          percentage: freshStatus.percentage,
          count: freshStatus.count,
          isLoading: false,
        })
      } catch (error) {
        console.error("Failed to load waitlist status:", error)
        // Keep cached data or default to loading state
        setStatus((prev) => ({ ...prev, isLoading: false }))
      }
    }

    checkWaitlistStatus()
  }, [])

  return <WaitlistContext.Provider value={status}>{children}</WaitlistContext.Provider>
}
