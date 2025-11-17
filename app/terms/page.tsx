"use client";

import SharedLayout from "@/components/shared-layout";
import SharedNavigation from "@/components/shared-navigation";
import { useLanguage } from "@/context/language-context";

export default function TermsPage() {
  const { t } = useLanguage();
  return (
    <SharedLayout variant="compact" showFooter={true}>
      {/* Navigation - Fixed height */}
      <div className="flex-shrink-0">
        <SharedNavigation logoPosition="center" showLogo variant="default" />
      </div>

      {/* Scrollable Content Container - Flexible height */}
      <div className="flex-1 overflow-y-auto pr-4 mt-4 lg:mt-6 min-h-0">
        {/* Page Title */}
        <div className="text-left mb-6 lg:mb-8">
          <h1 className="font-cuprum font-bold text-gray-900 text-xl md:text-2xl lg:text-3xl leading-tight tracking-wide mb-2">
            {t("terms.title")}
          </h1>
        </div>

        {/* Terms Content */}
        <div className="text-left space-y-4">
          <div>
            <h3 className="font-cuprum font-bold text-gray-900 text-md md:text-lg lg:text-xl leading-tight tracking-wide mb-2">
              {t("terms.section1Title")}
            </h3>
            <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
              {t("terms.section1Content")}
            </p>
          </div>

          <div>
            <h3 className="font-cuprum font-bold text-gray-900 text-md md:text-lg lg:text-xl leading-tight tracking-wide mb-2">
              {t("terms.section2Title")}
            </h3>
            <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
              {t("terms.section2Content")}
            </p>
          </div>

          <div>
            <h3 className="font-cuprum font-bold text-gray-900 text-md md:text-lg lg:text-xl leading-tight tracking-wide mb-2">
              {t("terms.section3Title")}
            </h3>
            <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
              {t("terms.section3Content")}
            </p>
          </div>

          <div>
            <h3 className="font-cuprum font-bold text-gray-900 text-md md:text-lg lg:text-xl leading-tight tracking-wide mb-2">
              {t("terms.section4Title")}
            </h3>
            <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
              {t("terms.section4Content")}
            </p>
          </div>

          <div>
            <h3 className="font-cuprum font-bold text-gray-900 text-md md:text-lg lg:text-xl leading-tight tracking-wide mb-2">
              {t("terms.section5Title")}
            </h3>
            <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
              {t("terms.section5Content")}
            </p>
          </div>

          <div>
            <h3 className="font-cuprum font-bold text-gray-900 text-md md:text-lg lg:text-xl leading-tight tracking-wide mb-2">
              {t("terms.section6Title")}
            </h3>
            <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
              {t("terms.section6Content")}
            </p>
          </div>

          <div>
            <h3 className="font-cuprum font-bold text-gray-900 text-md md:text-lg lg:text-xl leading-tight tracking-wide mb-2">
              {t("terms.section7Title")}
            </h3>
            <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
              {t("terms.section7Content")}
            </p>
          </div>

          <div className="pt-4">
            <p className="font-cuprum text-gray-600 text-sm md:text-base lg:text-lg leading-tight tracking-wide">
              {t("terms.lastUpdated", {
                date: new Date().toLocaleDateString(),
              })}
            </p>
          </div>
        </div>
      </div>
    </SharedLayout>
  );
}
