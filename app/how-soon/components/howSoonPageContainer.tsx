"use client";
import SharedNavigation from "@/components/shared-navigation";
import Logo from "./logo";
import ComingSoonSection from "./coming-soon-section";
import ProgressSection from "./progress-section";
import NotifyButton from "@/components/notify-button";
import SocialIcons from "./social-icons";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useWaitlist } from "@/context/waitlist-context";

export default function HowSoonPageContainer() {
  const router = useRouter();
  const { isComplete, isLoading } = useWaitlist();

  useEffect(() => {
    if (!isLoading && isComplete) {
      // Redirect to the appropriate page based on waitlist status
      router.push("/early-access");
    }
  }, [isComplete, isLoading, router]);

  return (
    <>
      {/* Main content that uses full height with consistent structure */}
      <div className="flex flex-col justify-between h-full min-h-[500px] sm:min-h-[550px] md:min-h-[600px] lg:min-h-[480px] xl:min-h-[520px]">
        {/* Top Section - Fixed height */}
        <div className="flex-shrink-0">
          <SharedNavigation variant="default" />
          <div className="mt-0 lg:mt-8">
            <Logo />
          </div>
        </div>

        {/* Middle Section - Flexible height with consistent spacing */}
        <div className="text-center space-y-6  sm:space-y-8 md:space-y-10 lg:space-y-6 xl:space-y-8 flex-1 flex flex-col justify-center min-h-[200px]">
          <ComingSoonSection />
          <ProgressSection />
          <div className="lg:absolute lg:bottom-5  lg:left-1/2 lg:-translate-x-1/2">
            <NotifyButton />
          </div>
        </div>

        {/* Bottom spacer for social icons - Fixed height */}
        <div className="h-10 sm:h-12 md:h-14 lg:h-10 xl:h-12 flex-shrink-0"></div>
      </div>

      {/* Social Icons - Absolutely positioned */}
      <SocialIcons />
    </>
  );
}
