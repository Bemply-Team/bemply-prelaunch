"use client";

import SharedLayout from "@/components/shared-layout";
import SharedNavigation from "@/components/shared-navigation";
import Image from "next/image";
import { useRouter } from "next/navigation";
import NotifyButton from "@/components/notify-button";
import { useLanguage } from "@/context/language-context";

export default function FeaturesPage() {
  const { t } = useLanguage();
  const router = useRouter();

  const handleNotifyClick = () => {
    router.push("/waitlist");
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
        <div className="text-left mb-4 lg:mb-6">
          <h2
            style={{ wordSpacing: "0.2rem" }}
            className="font-cuprum text-gray-800 font-semibold text-lg  md:text-xl xl:text-2xl  tracking-wider   leading-tight"
          >
            {t("features.welcome")}
          </h2>
        </div>

        {/* Features Title - Left aligned */}
        <div className="text-left mb-4 lg:mb-6 md:mt-12">
          <h1 className="font-cuprum font-bold text-gray-900  text-md md:text-lg lg:text-xl leading-tight tracking-wide">
            {t("features.title")}
          </h1>
          <p className="font-cuprum text-gray-800  text-md md:text-lg lg:text-xl leading-tight tracking-wide">
            {t("features.subtitle")}
          </p>
        </div>

        {/* Features Content - Left aligned with consistent spacing */}
        <div className="space-y-4 text-left">
          {/* Feature I */}
          <div>
            <h3 className="font-cuprum font-bold  text-gray-900 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
              {t("features.feature1.title")}
            </h3>
            <p className="font-cuprum text-gray-800   text-md md:text-lg lg:text-xl leading-tight tracking-wide">
              {t("features.feature1.description1")}
            </p>
            <p className="font-cuprum text-gray-800  text-md md:text-lg lg:text-xl leading-tight tracking-wide">
              {t("features.feature1.description2")}
            </p>
          </div>

          {/* Feature II */}
          <div>
            <h3 className="font-cuprum font-bold text-gray-900  text-md md:text-lg lg:text-xl leading-tight tracking-wide">
              {t("features.feature2.title")}
            </h3>
            <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
              {t("features.feature2.description")}
            </p>
          </div>

          {/* Feature III */}
          <div>
            <h3 className="font-cuprum font-bold text-gray-900 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
              {t("features.feature3.title")}
            </h3>
            <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
              {t("features.feature3.description")}
            </p>
          </div>

          {/* Feature IV */}
          <div>
            <h3 className="font-cuprum font-bold text-gray-900 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
              {t("features.feature4.title")}
            </h3>
            <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
              {t("features.feature4.description")}
            </p>
          </div>

          {/* Feature V */}
          <div>
            <h3 className="font-cuprum font-bold text-md md:text-lg lg:text-xl leading-tight tracking-wide">
              {t("features.feature5.title")}
            </h3>
            <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
              {t("features.feature5.description")}
            </p>
          </div>

          {/* Feature VI */}
          <div>
            <h3 className="font-cuprum font-bold text-gray-900 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
              {t("features.feature6.title")}
            </h3>
            <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
              {t("features.feature6.description")}
            </p>
          </div>

          {/* Feature VII */}
          <div>
            <h3 className="font-cuprum font-bold text-gray-900 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
              {t("features.feature7.title")}
            </h3>
            <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
              {t("features.feature7.description1")}
            </p>
            <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
              {t("features.feature7.description2")}
            </p>
          </div>

          {/* Feature VIII */}
          <div>
            <h3 className="font-cuprum font-bold text-gray-900 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
              {t("features.feature8.title")}
            </h3>
            <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
              {t("features.feature8.description")}
            </p>
          </div>

          {/* Feature IX */}
          <div>
            <h3 className="font-cuprum font-bold text-gray-900 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
              {t("features.feature9.title")}
            </h3>
            <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
              {t("features.feature9.description")}
            </p>
          </div>
        </div>
      </div>

      {/* Notify Me Button - Fixed at bottom */}
      <NotifyButton />
    </SharedLayout>
  );
}
