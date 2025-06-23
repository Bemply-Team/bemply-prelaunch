"use client";

import SharedLayout from "@/components/shared-layout";
import SharedNavigation from "@/components/shared-navigation";
import SocialIcons from "../components/social-icons";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useWaitlist } from "@/context/waitlist-context";
import { useEffect } from "react";

export default function EarlyAccessPageContainer() {
  const router = useRouter();
  const { isComplete, isLoading } = useWaitlist();

  useEffect(() => {
    if (!isLoading) {
      // Redirect to the appropriate page based on waitlist status
      router.push(isComplete ? "/early-access" : "/how-soon");
    }
  }, [isComplete, isLoading, router]);
  const handleEarlyAccessClick = () => {
    // Handle early access button click - could redirect to platform or show coming soon
    console.log("Early Access clicked");
  };

  return (
    <>
      {/* Main content that uses full height with consistent structure */}
      <div className="flex flex-col gap-2  lg:justify-between h-full min-h-[580px] ">
        {/* Top Section - Fixed height */}
        <div className="flex-shrink-0">
          <SharedNavigation variant="default" />

          {/* Large Logo with consistent spacing */}
          <div className="flex  justify-center mb-6 md:mt-8">
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
        <div className="text-center  flex gap-2 flex-col justify-start ">
          {/* Main Title - Using JejuGothic */}
          <h1
            className="font-jeju text-2xl xs:text-2xl sm:text-3xl md:text-4xl  font-normal"
            style={{ color: "#8B7CF6", letterSpacing: "0.1em" }}
          >
            The Platform Awaits You
          </h1>

          {/* Subtitle - Using Cousine */}
          <p
            className="font-cousine text-base md:text-lg xl:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-6 sm:px-8 lg:px-10"
            style={{ letterSpacing: "0.1em" }}
          >
            Ready ? Get Familiar With Bemply and All
            <br />
            Its Features.
          </p>

          {/* Early Access Button */}
          <div className="">
            <button
              onClick={handleEarlyAccessClick}
              className="mt-10 md:mt-20 lg:mt-24 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-2 py-2 md:px-3 md:py-3  transition-all duration-300 hover:scale-105 shadow-sm flex items-center justify-center mx-auto"
            >
              {/* Inner pill - EARLY ACCESS */}
              <div className="bg-white/90 backdrop-blur-md rounded-full px-3 py-2  md:px-4 md:py-3  mr-4 shadow-sm">
                <span className="font-sans flex items-center justify-center font-bold text-[10px] sm:text-xs md:text-base text-teal-700">
                  EARLY ACCESS
                </span>
              </div>

              {/* Get started text and arrow */}
              <div className="flex items-center justify-center pr-2">
                <span className="font-sans font-medium text-[10px] sm:text-xs md:text-base text-white mr-3">
                  Get started
                </span>
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Bottom Section - Fixed height */}
        <div className="text-center mt-4 md:mt-0 ">
          <p className="font-ag font-bold text-sm sm:text-base lg:text-base xl:text-lg text-gray-700">
            We Have a Little Gift For You : 1 Month Free Trial for Early
            Sign-Ups
          </p>
        </div>
      </div>

      {/* Social Icons - Absolutely positioned */}
      <SocialIcons />
    </>
  );
}
