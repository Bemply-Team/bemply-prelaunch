"use client";

import { storageService } from "@/services/storage";
import { useWaitlist } from "@/context/waitlist-context";
import CompanyAvatar from "@/components/company-avatar";

export default function ProgressSection() {
  const { percentage: progress, count, submissions } = useWaitlist();
  const myWaitlistData = storageService.getWaitlistData();

  return (
    <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:pb-20 lg:space-y-4 xl:space-y-5 max-w-sm sm:max-w-md md:max-w-lg mx-auto px-6 sm:px-8">
      {/* Progress Bar */}
      <div className="relative">
        <div className="w-full h-6 sm:h-6 md:h-7 lg:h-6 xl:h-7 bg-white/40 rounded-full border-2 border-teal-400/60 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-teal-400 to-cyan-400 transition-all duration-1000 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-montserrat font-semibold text-sm sm:text-base text-gray-700">
            {progress}%
          </span>
        </div>
      </div>

      {/* Company Logos and Text - Stacked horizontally with optimized spacing */}
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-4 xl:space-x-5">
        <div className="flex items-center -space-x-1">
          {submissions && submissions.length
            ? submissions
                .slice(0, myWaitlistData?.company ? 3 : 4)
                .map((submission, index) => (
                  <CompanyAvatar
                    key={submission.id}
                    companyName={submission.company}
                    size="md"
                    className={`relative z-${
                      10 + index * 10
                    } sm:w-5 sm:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6`}
                  />
                ))
            : null}
          {myWaitlistData ? (
            <CompanyAvatar
              key={myWaitlistData.id}
              companyName={myWaitlistData.company}
              size="md"
              className={`relative z-${
                10 + 4 * 10
              } sm:w-5 sm:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6`}
            />
          ) : null}
          {/* Show placeholder avatars if we have less than 4 submissions */}
          {submissions.length < 4 &&
            Array.from({ length: 4 - submissions.length }).map((_, index) => (
              <CompanyAvatar
                key={`placeholder-${index}`}
                companyName="Company"
                size="md"
                className={`relative z-${
                  10 + (submissions.length + index) * 10
                } sm:w-5 sm:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6 opacity-50`}
              />
            ))}
        </div>
        <span className="font-montserrat font-semibold text-base sm:text-sm lg:text-base xl:text-sm text-gray-700 text-center">
          Join {count}+ others on the waitlist
        </span>
      </div>
    </div>
  );
}
