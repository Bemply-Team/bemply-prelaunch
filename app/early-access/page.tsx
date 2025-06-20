"use client"

import SharedLayout from "@/components/shared-layout"
import SharedNavigation from "@/components/shared-navigation"
import SocialIcons from "./components/social-icons"
import Image from "next/image"

export default function EarlyAccessPage() {
  const handleEarlyAccessClick = () => {
    // Handle early access button click - could redirect to platform or show coming soon
    console.log("Early Access clicked")
  }

  return (
    <SharedLayout variant="default">
      {/* Main content that uses full height with consistent structure */}
      <div className="flex flex-col justify-between h-full min-h-[500px] sm:min-h-[550px] md:min-h-[600px] lg:min-h-[480px] xl:min-h-[520px]">
        {/* Top Section - Fixed height */}
        <div className="flex-shrink-0">
          <SharedNavigation variant="default" />

          {/* Large Logo with consistent spacing */}
          <div className="flex justify-center mb-8 sm:mb-10 md:mb-12 lg:mb-8 xl:mb-10">
            <Image
              src="/bemply-logo.png"
              alt="Bemply Logo"
              width={500}
              height={150}
              className="h-20 xs:h-22 sm:h-24 md:h-28 lg:h-24 xl:h-28 2xl:h-32 w-auto"
              priority
            />
          </div>
        </div>

        {/* Middle Section - Flexible height with consistent spacing */}
        <div className="text-center space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-6 xl:space-y-8 flex-1 flex flex-col justify-center min-h-[200px]">
          {/* Main Title - Using JejuGothic */}
          <h1
            className="font-jeju text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-normal"
            style={{ color: "#8B7CF6", letterSpacing: "0.3em" }}
          >
            The Platform Awaits You
          </h1>

          {/* Subtitle - Using Cousine */}
          <p
            className="font-cousine text-base xs:text-lg sm:text-xl md:text-2xl lg:text-lg xl:text-xl 2xl:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-6 sm:px-8 lg:px-10"
            style={{ letterSpacing: "0.1em" }}
          >
            Ready ? Get Familiar With Bemply and All
            <br />
            Its Features.
          </p>

          {/* Early Access Button */}
          <div className="px-6 sm:px-8">
            <button
              onClick={handleEarlyAccessClick}
              className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-3 py-3 sm:px-4 sm:py-4 transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center mx-auto"
            >
              {/* Inner pill - EARLY ACCESS */}
              <div className="bg-white/90 backdrop-blur-md rounded-full px-6 py-3 sm:px-8 sm:py-4 mr-4 shadow-sm">
                <span
                  className="font-sans font-bold text-sm sm:text-base text-teal-700"
                  style={{ letterSpacing: "0.1em" }}
                >
                  EARLY ACCESS
                </span>
              </div>

              {/* Get started text and arrow */}
              <div className="flex items-center pr-2">
                <span
                  className="font-sans font-medium text-base sm:text-lg text-white mr-3"
                  style={{ letterSpacing: "0.05em" }}
                >
                  Get started
                </span>
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Bottom Section - Fixed height */}
        <div className="text-center mt-6 lg:mt-8 flex-shrink-0">
          <p className="font-ag text-sm sm:text-base lg:text-base xl:text-lg text-gray-700">
            We Have a Little Gift For You : 1 Month Free Trial for Early Sign-Ups
          </p>
        </div>
      </div>

      {/* Social Icons - Absolutely positioned */}
      <SocialIcons />
    </SharedLayout>
  )
}
