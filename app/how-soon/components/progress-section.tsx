"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { apiService } from "@/services/api"
import { storageService } from "@/services/storage"

export default function ProgressSection() {
  const [progress, setProgress] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const loadWaitlistStatus = async () => {
      try {
        // First check localStorage for cached data
        const cachedStatus = storageService.getWaitlistStatus()
        if (cachedStatus) {
          setProgress(cachedStatus.percentage)
          setCount(cachedStatus.count)
        }

        // Then fetch fresh data
        const status = await apiService.getWaitlistStatus()
        setProgress(status.percentage)
        setCount(status.count)

        // Store updated status
        storageService.storeWaitlistStatus(status.percentage, status.count)
      } catch (error) {
        console.error("Failed to load waitlist status:", error)
        // Keep cached data or default to 0
      }
    }

    loadWaitlistStatus()
  }, [])

  return (
    <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-4 xl:space-y-5 max-w-sm sm:max-w-md md:max-w-lg mx-auto px-6 sm:px-8">
      {/* Progress Bar */}
      <div className="relative">
        <div className="w-full h-6 sm:h-6 md:h-7 lg:h-6 xl:h-7 bg-white/40 rounded-full border-2 border-teal-400/60 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-teal-400 to-cyan-400 transition-all duration-1000 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-montserrat font-semibold text-sm sm:text-base text-gray-700">{progress}%</span>
        </div>
      </div>

      {/* Company Logos and Text - Stacked horizontally with optimized spacing */}
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-4 xl:space-x-5">
        <div className="flex items-center -space-x-1">
          <Image
            src="/company-logos/homey.png"
            alt="Homey"
            width={20}
            height={20}
            className="rounded-full sm:w-5 sm:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6 border-2 border-white/50 relative z-10"
          />
          <Image
            src="/company-logos/uber.png"
            alt="Uber"
            width={20}
            height={20}
            className="rounded-full sm:w-5 sm:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6 border-2 border-white/50 relative z-20"
          />
          <Image
            src="/company-logos/raven.png"
            alt="Raven"
            width={20}
            height={20}
            className="rounded-full sm:w-5 sm:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6 border-2 border-white/50 relative z-30"
          />
          <Image
            src="/company-logos/airbnb.png"
            alt="Airbnb"
            width={20}
            height={20}
            className="rounded-full sm:w-5 sm:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6 border-2 border-white/50 relative z-40"
          />
        </div>
        <span className="font-montserrat font-semibold text-sm sm:text-base lg:text-base xl:text-sm text-gray-700 text-center">
          Join {count}+ others on the waitlist
        </span>
      </div>
    </div>
  )
}
