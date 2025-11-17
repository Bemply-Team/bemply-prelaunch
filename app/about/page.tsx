"use client";

import SharedLayout from "@/components/shared-layout";
import SharedNavigation from "@/components/shared-navigation";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useWaitlist } from "@/context/waitlist-context";
import NotifyButton from "@/components/notify-button";
import { useLanguage } from "@/context/language-context";

export default function AboutPage() {
  const { t } = useLanguage();
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
            {t("about.welcome")}
          </h2>
        </div>

        {/* About Content - Left aligned with consistent spacing */}
        <div className="text-left space-y-2">
          <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
            {t("about.paragraph1")}
          </p>

          <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
            {t("about.paragraph2")}
          </p>

          <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
            {t("about.paragraph3")}
          </p>

          <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
            {t("about.mission")}
          </p>

          <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
            {t("about.missionStatement")}
          </p>

          <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
            {t("about.approach")}
          </p>

          {/* Bulleted List with consistent spacing */}
          <div className="ml-4 space-y-2">
            <div className="flex items-start">
              <span className="font-cuprum text-gray-800 mr-2 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
                •
              </span>
              <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
                {t("about.feature1")}
              </p>
            </div>
            <div className="flex items-start">
              <span className="font-cuprum text-gray-800 mr-2 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
                •
              </span>
              <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
                {t("about.feature2")}
              </p>
            </div>
            <div className="flex items-start">
              <span className="font-cuprum text-gray-800 mr-2 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
                •
              </span>
              <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
                {t("about.feature3")}
              </p>
            </div>
            <div className="flex items-start">
              <span className="font-cuprum text-gray-800 mr-2 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
                •
              </span>
              <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
                {t("about.feature4")}
              </p>
            </div>
          </div>

          <p className="font-cuprum text-gray-800 pt-2 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
            {t("about.closing")}
          </p>
        </div>
      </div>

      {/* Notify Me Button - Fixed at bottom */}
      <NotifyButton />
    </SharedLayout>
  );
}
