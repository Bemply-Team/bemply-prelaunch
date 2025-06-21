"use client";

import SharedLayout from "@/components/shared-layout";
import SharedNavigation from "@/components/shared-navigation";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useWaitlist } from "@/context/waitlist-context";
import NotifyButton from "@/components/notify-button";

export default function AboutPage() {
  const router = useRouter();
  const { isComplete } = useWaitlist();

  const handleNotifyClick = () => {
    router.push(isComplete ? "/early-access" : "/waitlist");
  };

  return (
    <SharedLayout variant="compact" showFooter={true}>
      {/* Navigation - Fixed height */}
      <div className="flex-shrink-0">
        <SharedNavigation logoPosition="center" showLogo variant="default" />
      </div>

      {/* Scrollable Content Container - Flexible height */}
      <div className="flex-1 overflow-y-auto pr-4 mt-4 lg:mt-6 min-h-0">
        {/* Welcome Message - Left aligned */}
        <div className="text-left mb-6 lg:mb-8">
          <h2 className="font-cuprum font-semibold text-gray-800 text-md md:text-lg lg:text-xl leading- tracking-wide">
            Welcome to Bemply — Where Belonging Meets Opportunity.
          </h2>
        </div>

        {/* About Content - Left aligned with consistent spacing */}
        <div className="text-left space-y-2">
          <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
            We believe that people thrive where they feel seen, supported, and
            safe.
          </p>

          <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
            That's why Bemply isn't just another job platform — it's a new kind
            of space where companies, universities, and individuals connect
            through trust, transparency, and meaningful matches.
          </p>

          <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
            In a world where candidates ghost and companies scam, we're building
            a platform with security, clarity, and fairness at the core.
          </p>

          <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
            Our mission is simple:
          </p>

          <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
            Help people find the right place to grow — not just any place that
            hires.
          </p>

          <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
            And we do it by blending:
          </p>

          {/* Bulleted List with consistent spacing */}
          <div className="ml-4 space-y-2">
            <div className="flex items-start">
              <span className="font-cuprum text-gray-800 mr-2 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
                •
              </span>
              <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
                Smart AI matching for quality connections
              </p>
            </div>
            <div className="flex items-start">
              <span className="font-cuprum text-gray-800 mr-2 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
                •
              </span>
              <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
                Real reviews and public profiles to keep everyone accountable
              </p>
            </div>
            <div className="flex items-start">
              <span className="font-cuprum text-gray-800 mr-2 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
                •
              </span>
              <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
                Verification systems to block scams before they start
              </p>
            </div>
            <div className="flex items-start">
              <span className="font-cuprum text-gray-800 mr-2 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
                •
              </span>
              <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
                A focus on belonging, not just "applying"
              </p>
            </div>
          </div>

          <p className="font-cuprum text-gray-800 pt-2 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
            Whether you're hiring your next intern or looking for your next
            challenge, Bemply is the platform built with care — and built for
            you.
          </p>
        </div>
      </div>

      {/* Notify Me Button - Fixed at bottom */}
      <NotifyButton />
    </SharedLayout>
  );
}
