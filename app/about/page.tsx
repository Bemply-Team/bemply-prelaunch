"use client"

import SharedLayout from "@/components/shared-layout"
import SharedNavigation from "@/components/shared-navigation"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useWaitlist } from "@/context/waitlist-context"

export default function AboutPage() {
  const router = useRouter()
  const { isComplete } = useWaitlist()

  const handleNotifyClick = () => {
    router.push(isComplete ? "/early-access" : "/waitlist")
  }

  return (
    <SharedLayout variant="compact" showFooter={true}>
      {/* Navigation - Fixed height */}
      <div className="flex-shrink-0">
        <SharedNavigation variant="compact" />
      </div>

      {/* Scrollable Content Container - Flexible height */}
      <div className="flex-1 overflow-y-auto pr-4 mt-4 lg:mt-6 min-h-0">
        {/* Welcome Message - Left aligned */}
        <div className="text-left mb-6 lg:mb-8">
          <h2 className="font-cuprum text-gray-800 font-normal text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl leading-tight">
            Welcome to Bemply — Where Belonging Meets Opportunity.
          </h2>
        </div>

        {/* About Content - Left aligned with consistent spacing */}
        <div className="text-left space-y-4">
          <p className="font-cuprum text-gray-800 text-xs sm:text-sm md:text-base lg:text-base xl:text-lg leading-relaxed">
            We believe that people thrive where they feel seen, supported, and safe.
          </p>

          <p className="font-cuprum text-gray-800 text-xs sm:text-sm md:text-base lg:text-base xl:text-lg leading-relaxed">
            That's why Bemply isn't just another job platform — it's a new kind of space where companies, universities,
            and individuals connect through trust, transparency, and meaningful matches.
          </p>

          <p className="font-cuprum text-gray-800 text-xs sm:text-sm md:text-base lg:text-base xl:text-lg leading-relaxed">
            In a world where candidates ghost and companies scam, we're building a platform with security, clarity, and
            fairness at the core.
          </p>

          <p className="font-cuprum text-gray-800 text-xs sm:text-sm md:text-base lg:text-base xl:text-lg leading-relaxed">
            Our mission is simple:
          </p>

          <p className="font-cuprum text-gray-800 text-xs sm:text-sm md:text-base lg:text-base xl:text-lg leading-relaxed">
            Help people find the right place to grow — not just any place that hires.
          </p>

          <p className="font-cuprum text-gray-800 text-xs sm:text-sm md:text-base lg:text-base xl:text-lg leading-relaxed">
            And we do it by blending:
          </p>

          {/* Bulleted List with consistent spacing */}
          <div className="ml-4 space-y-2">
            <div className="flex items-start">
              <span className="font-cuprum text-gray-800 mr-2 text-xs sm:text-sm md:text-base lg:text-base xl:text-lg leading-relaxed">
                •
              </span>
              <p className="font-cuprum text-gray-800 text-xs sm:text-sm md:text-base lg:text-base xl:text-lg leading-relaxed">
                Smart AI matching for quality connections
              </p>
            </div>
            <div className="flex items-start">
              <span className="font-cuprum text-gray-800 mr-2 text-xs sm:text-sm md:text-base lg:text-base xl:text-lg leading-relaxed">
                •
              </span>
              <p className="font-cuprum text-gray-800 text-xs sm:text-sm md:text-base lg:text-base xl:text-lg leading-relaxed">
                Real reviews and public profiles to keep everyone accountable
              </p>
            </div>
            <div className="flex items-start">
              <span className="font-cuprum text-gray-800 mr-2 text-xs sm:text-sm md:text-base lg:text-base xl:text-lg leading-relaxed">
                •
              </span>
              <p className="font-cuprum text-gray-800 text-xs sm:text-sm md:text-base lg:text-base xl:text-lg leading-relaxed">
                Verification systems to block scams before they start
              </p>
            </div>
            <div className="flex items-start">
              <span className="font-cuprum text-gray-800 mr-2 text-xs sm:text-sm md:text-base lg:text-base xl:text-lg leading-relaxed">
                •
              </span>
              <p className="font-cuprum text-gray-800 text-xs sm:text-sm md:text-base lg:text-base xl:text-lg leading-relaxed">
                A focus on belonging, not just "applying"
              </p>
            </div>
          </div>

          <p className="font-cuprum text-gray-800 pt-2 text-xs sm:text-sm md:text-base lg:text-base xl:text-lg leading-relaxed">
            Whether you're hiring your next intern or looking for your next challenge, Bemply is the platform built with
            care — and built for you.
          </p>
        </div>
      </div>

      {/* Notify Me Button - Fixed at bottom */}
      <div className="mt-4 lg:mt-6 flex justify-center flex-shrink-0">
        <button
          onClick={handleNotifyClick}
          className="bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-purple-400 px-10 sm:px-12 lg:px-12 xl:px-14 py-4 sm:py-5 lg:py-4 xl:py-5 rounded-full font-montserrat font-semibold text-base sm:text-lg lg:text-lg xl:text-xl transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center"
        >
          <Image
            src="/icons/mail.png"
            alt="Mail"
            width={22}
            height={22}
            className="mr-3 sm:w-6 sm:h-6 lg:w-6 lg:h-6 xl:w-7 xl:h-7"
          />
          {isComplete ? "Get Started" : "Notify Me"}
        </button>
      </div>
    </SharedLayout>
  )
}
