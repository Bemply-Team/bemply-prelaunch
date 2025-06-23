// Mock API service - replace with real endpoints later
export interface WaitlistData {
  first_name: string;
  last_name: string;
  email: string;
  company: string;
  position: string;
  industry: string;
  recaptcha: string;
}

export interface ContactData {
  first_name: string;
  last_name: string;
  email: string;
  company: string;
  message: string;
}

export interface WaitlistResponse {
  success: boolean;
  message: string;
  percentage?: number;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

export interface WaitlistStatusResponse {
  percentage: number;
  count: number;
  isComplete: boolean;
}

class ApiService {
  private baseUrl = process.env.NEXT_PUBLIC_API_URL || "https://api.bemply.com";

  // Get waitlist status and percentage
  async getWaitlistStatus(): Promise<WaitlistStatusResponse> {
    try {
      // Mock response - replace with real API call
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Mock different scenarios for testing
      const mockPercentage =
        Math.random() > 0.8 ? 100 : Math.floor(Math.random() * 95) + 1;

      return {
        percentage: mockPercentage,
        count: Math.floor((mockPercentage / 100) * 150), // Mock total count
        isComplete: mockPercentage >= 100,
      };

      // Real API call would be:
      // const response = await fetch(`${this.baseUrl}/waitlist/status`)
      // return await response.json()
    } catch (error) {
      console.error("Failed to get waitlist status:", error);
      return { percentage: 0, count: 0, isComplete: false };
    }
  }

  // Send waitlist form
  async submitWaitlist(data: WaitlistData): Promise<WaitlistResponse> {
    try {
      // Real API call would be:
      const response = await fetch(`${this.baseUrl}/waitlist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();

      if (!response.ok) {
        const errorKeys = Object.keys(responseData);
        return {
          success: false,
          message: responseData[errorKeys[0]],
        };
      }
      return { success: true, message: "Successfully joined the waitlist." };
    } catch (error) {
      console.error("Failed to submit waitlist:", error);
      return {
        success: false,
        message: "Network error. Please try again.",
      };
    }
  }

  // Send contact form
  async submitContact(
    data: ContactData & { recaptcha: string }
  ): Promise<ContactResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();

      if (!response.ok) {
        const errorKeys = Object.keys(responseData);
        return {
          success: false,
          message: responseData[errorKeys[0]],
        };
      }
      return {
        success: true,
        message: "Your message has been sent!! We'll reply shortly.",
      };
    } catch (error) {
      console.error("Failed to submit contact:", error);
      return {
        success: false,
        message: "Network error. Please try again.",
      };
    }
  }
}

export const apiService = new ApiService();
