"use client";

import { useLanguage } from "@/context/language-context";

export default function ComingSoonSection() {
  const { t } = useLanguage();

  return (
    <div className="space-y-4 mt-4 sm:space-y-5 md:space-y-6 lg:space-y-4 xl:space-y-5">
      <h1 className="font-jeju text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-normal tracking-[0.3em] sm:tracking-[0.35em] lg:tracking-[0.4em] text-gray-700">
        {t("howSoon.comingSoon")}
      </h1>
      <p className="font-cousine text-sm xs:text-base sm:text-lg md:text-xl lg:text-base xl:text-lg 2xl:text-xl text-gray-600 max-w-4xl mx-auto tracking-[0.12em] sm:tracking-[0.2em] leading-relaxed px-6 sm:px-8 lg:px-10">
        {t("howSoon.subtitle")}
      </p>
    </div>
  );
}
