import SharedLayout from "@/components/shared-layout";
import SharedNavigation from "@/components/shared-navigation";
import Logo from "./components/logo";
import ComingSoonSection from "./components/coming-soon-section";
import ProgressSection from "./components/progress-section";
import NotifyButton from "./components/notify-button";
import SocialIcons from "./components/social-icons";

export default function HowSoonPage() {
  return (
    <SharedLayout variant="default">
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
          <NotifyButton />
        </div>

        {/* Bottom spacer for social icons - Fixed height */}
        <div className="h-10 sm:h-12 md:h-14 lg:h-10 xl:h-12 flex-shrink-0"></div>
      </div>

      {/* Social Icons - Absolutely positioned */}
      <SocialIcons />
    </SharedLayout>
  );
}
