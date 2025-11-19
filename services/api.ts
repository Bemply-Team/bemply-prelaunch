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

// Add new types for the real API response
export interface WaitlistSubmission {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  company: string;
  position: string;
  industry: string;
}
export interface WaitlistResponse {
  success: boolean;
  message: string;
  percentage?: number;
}

export interface WaitlistApiResponse {
  data: WaitlistSubmission[];
  count: number;
}
export interface ContactResponse {
  success: boolean;
  message: string;
}

export interface WaitlistStatusResponse {
  percentage: number;
  count: number;
  isComplete: boolean;
  submissions: WaitlistSubmission[];
}

class ApiService {
  private baseUrl = process.env.NEXT_PUBLIC_API_URL;

  // Get waitlist status and percentage
  async getWaitlistStatus(): Promise<WaitlistStatusResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/waitlist`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const apiResponse: WaitlistApiResponse = await response.json();

      // Calculate percentage out of 300 submissions
      const percentage = Math.min(
        Math.round((apiResponse.count / 300) * 100),
        100
      );

      return {
        percentage,
        count: apiResponse.count,
        isComplete: percentage >= 100,
        submissions: apiResponse.data,
      };
    } catch (error) {
      console.error("Failed to get waitlist status:", error);

      // Return 0% and 0 count when fetch fails
      return {
        percentage: 0,
        count: 0,
        isComplete: false,
        submissions: [],
      };
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
      const updatedStatus = await this.getWaitlistStatus();
      return {
        success: true,
        percentage: updatedStatus.percentage,
        message: "Successfully joined the waitlist.",
      };
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
