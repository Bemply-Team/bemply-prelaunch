import type { WaitlistData } from "./api"

const STORAGE_KEYS = {
  WAITLIST_DATA: "bemply_waitlist_data",
  WAITLIST_STATUS: "bemply_waitlist_status",
  USER_JOINED: "bemply_user_joined",
} as const

export interface StoredWaitlistData extends WaitlistData {
  joinedAt: string
  id: string
}

class StorageService {
  // Check if user has joined waitlist
  hasUserJoinedWaitlist(): boolean {
    if (typeof window === "undefined") return false
    return localStorage.getItem(STORAGE_KEYS.USER_JOINED) === "true"
  }

  // Store waitlist data when user joins
  storeWaitlistData(data: WaitlistData): void {
    if (typeof window === "undefined") return

    const storedData: StoredWaitlistData = {
      ...data,
      joinedAt: new Date().toISOString(),
      id: this.generateId(),
    }

    localStorage.setItem(STORAGE_KEYS.WAITLIST_DATA, JSON.stringify(storedData))
    localStorage.setItem(STORAGE_KEYS.USER_JOINED, "true")
  }

  // Get stored waitlist data
  getWaitlistData(): StoredWaitlistData | null {
    if (typeof window === "undefined") return null

    const data = localStorage.getItem(STORAGE_KEYS.WAITLIST_DATA)
    return data ? JSON.parse(data) : null
  }

  // Store waitlist status (percentage, etc.)
  storeWaitlistStatus(percentage: number, count: number): void {
    if (typeof window === "undefined") return

    const status = {
      percentage,
      count,
      lastUpdated: new Date().toISOString(),
    }

    localStorage.setItem(STORAGE_KEYS.WAITLIST_STATUS, JSON.stringify(status))
  }

  // Get stored waitlist status
  getWaitlistStatus(): { percentage: number; count: number; lastUpdated: string } | null {
    if (typeof window === "undefined") return null

    const status = localStorage.getItem(STORAGE_KEYS.WAITLIST_STATUS)
    return status ? JSON.parse(status) : null
  }

  // Clear all stored data (for testing/reset)
  clearAllData(): void {
    if (typeof window === "undefined") return

    Object.values(STORAGE_KEYS).forEach((key) => {
      localStorage.removeItem(key)
    })
  }

  // Generate simple ID
  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2)
  }
}

export const storageService = new StorageService()
