// Mock API service - replace with real endpoints later
export interface WaitlistData {
  firstName: string
  lastName: string
  email: string
  companyName: string
  position: string
  industry: string
}

export interface ContactData {
  firstName: string
  lastName: string
  email: string
  companyName: string
  message: string
}

export interface WaitlistResponse {
  success: boolean
  message: string
  percentage?: number
}

export interface ContactResponse {
  success: boolean
  message: string
}

export interface WaitlistStatusResponse {
  percentage: number
  count: number
  isComplete: boolean
}

class ApiService {
  private baseUrl = process.env.NEXT_PUBLIC_API_URL || "https://api.bemply.com"

  // Get waitlist status and percentage
  async getWaitlistStatus(): Promise<WaitlistStatusResponse> {
    try {
      // Mock response - replace with real API call
      await new Promise((resolve) => setTimeout(resolve, 500))

      // Mock different scenarios for testing
      const mockPercentage = Math.random() > 0.8 ? 100 : Math.floor(Math.random() * 95) + 1

      return {
        percentage: mockPercentage,
        count: Math.floor((mockPercentage / 100) * 150), // Mock total count
        isComplete: mockPercentage >= 100,
      }

      // Real API call would be:
      // const response = await fetch(`${this.baseUrl}/waitlist/status`)
      // return await response.json()
    } catch (error) {
      console.error("Failed to get waitlist status:", error)
      return { percentage: 0, count: 0, isComplete: false }
    }
  }

  // Send waitlist form
  async submitWaitlist(data: WaitlistData): Promise<WaitlistResponse> {
    try {
      // Mock API call - replace with real endpoint
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Mock response with high success rate
      const isSuccess = Math.random() > 0.2

      if (isSuccess) {
        return {
          success: true,
          message: "Successfully joined the waitlist!",
          percentage: Math.floor(Math.random() * 95) + 1,
        }
      } else {
        return {
          success: false,
          message: "Failed to join waitlist. Please try again.",
        }
      }

      // Real API call would be:
      // const response = await fetch(`${this.baseUrl}/waitlist`, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data)
      // })
      // return await response.json()
    } catch (error) {
      console.error("Failed to submit waitlist:", error)
      return {
        success: false,
        message: "Network error. Please try again.",
      }
    }
  }

  // Send contact form
  async submitContact(data: ContactData): Promise<ContactResponse> {
    try {
      // Mock API call - replace with real endpoint
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Mock response with high success rate
      const isSuccess = Math.random() > 0.2

      if (isSuccess) {
        return {
          success: true,
          message: "Your message has been sent! We'll reply shortly.",
        }
      } else {
        return {
          success: false,
          message: "Failed to send message. Please try again.",
        }
      }

      // Real API call would be:
      // const response = await fetch(`${this.baseUrl}/contact`, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data)
      // })
      // return await response.json()
    } catch (error) {
      console.error("Failed to submit contact:", error)
      return {
        success: false,
        message: "Network error. Please try again.",
      }
    }
  }
}

export const apiService = new ApiService()
