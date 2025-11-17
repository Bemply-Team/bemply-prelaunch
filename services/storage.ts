import type { WaitlistData } from "./api";

const STORAGE_KEYS = {
  WAITLIST_DATA: "bemply_waitlist_data",
  WAITLIST_STATUS: "bemply_waitlist_status",
  USER_JOINED: "bemply_user_joined",
  LANGUAGE_PREFERENCE: "bemply_language_preference",
} as const;

export interface StoredWaitlistData extends WaitlistData {
  joinedAt: string;
  company: string;
  id: string;
}

class StorageService {
  // Check if user has joined waitlist
  hasUserJoinedWaitlist(): boolean {
    if (typeof window === "undefined") return false;
    return sessionStorage.getItem(STORAGE_KEYS.USER_JOINED) === "true";
  }

  // Store waitlist data when user joins
  storeWaitlistData(data: WaitlistData): void {
    if (typeof window === "undefined") return;

    const storedData: StoredWaitlistData = {
      ...data,
      joinedAt: new Date().toISOString(),
      id: this.generateId(),
    };

    sessionStorage.setItem(
      STORAGE_KEYS.WAITLIST_DATA,
      JSON.stringify(storedData)
    );
    sessionStorage.setItem(STORAGE_KEYS.USER_JOINED, "true");
  }

  // Get stored waitlist data
  getWaitlistData(): StoredWaitlistData | null {
    if (typeof window === "undefined") return null;

    const data = sessionStorage.getItem(STORAGE_KEYS.WAITLIST_DATA);
    return data ? JSON.parse(data) : null;
  }

  // Store waitlist status (percentage, etc.)
  storeWaitlistStatus(percentage: number, count: number): void {
    if (typeof window === "undefined") return;

    const status = {
      percentage,
      count,
      lastUpdated: new Date().toISOString(),
    };

    sessionStorage.setItem(
      STORAGE_KEYS.WAITLIST_STATUS,
      JSON.stringify(status)
    );
  }

  // Get stored waitlist status
  getWaitlistStatus(): {
    percentage: number;
    count: number;
    lastUpdated: string;
  } | null {
    if (typeof window === "undefined") return null;

    const status = sessionStorage.getItem(STORAGE_KEYS.WAITLIST_STATUS);
    return status ? JSON.parse(status) : null;
  }
  // Store language preference (persist between sessions)
  storeLanguagePreference(language: string): void {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(STORAGE_KEYS.LANGUAGE_PREFERENCE, language);
    } catch {
      // Ignore if localStorage is unavailable or blocked
    }
  }

  // Get stored language preference
  getLanguagePreference(): string | null {
    if (typeof window === "undefined") return null;
    try {
      return localStorage.getItem(STORAGE_KEYS.LANGUAGE_PREFERENCE);
    } catch {
      return null;
    }
  }

  // Clear all stored data (for testing/reset)
  clearAllData(): void {
    if (typeof window === "undefined") return;

    Object.values(STORAGE_KEYS).forEach((key) => {
      sessionStorage.removeItem(key);
      try {
        localStorage.removeItem(key);
      } catch {
        // Ignore if localStorage is unavailable
      }
    });
  }

  // Generate simple ID
  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
}

export const storageService = new StorageService();
