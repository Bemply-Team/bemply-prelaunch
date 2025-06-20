"use client";

import type { ReactNode } from "react";
import AnimatedBackground from "@/app/how-soon/components/animated-background";
import Image from "next/image";

interface SharedLayoutProps {
  children: ReactNode;
  showFooter?: boolean;
  variant?: "default" | "compact" | "form";
}

export default function SharedLayout({
  children,
  showFooter = true,
  variant = "default",
}: SharedLayoutProps) {
  // Consistent container dimensions based on variant
  const getContainerClasses = () => {
    const baseClasses =
      "w-full mx-auto bg-white/20 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-white/30 shadow-2xl relative";

    switch (variant) {
      case "form":
        return `${baseClasses} max-w-sm sm:max-w-md md:max-w-4xl lg:max-w-5xl xl:max-w-6xl p-5 sm:p-6 md:p-8 lg:p-6 xl:p-8 pb-3 sm:pb-4 md:pb-6 lg:pb-4 xl:pb-6 min-h-[600px] sm:min-h-[650px] md:min-h-[700px] lg:min-h-[600px] xl:min-h-[650px]`;
      case "compact":
        return `${baseClasses} max-w-sm sm:max-w-md md:max-w-4xl lg:max-w-5xl xl:max-w-6xl p-6 sm:p-8 md:p-10 lg:p-8 xl:p-12 pb-4 sm:pb-6 md:pb-8 lg:pb-6 xl:pb-8 h-[85vh] lg:h-[80vh] flex flex-col`;
      default:
        return `${baseClasses} max-w-sm sm:max-w-md md:max-w-3xl lg:max-w-5xl xl:max-w-6xl p-8 sm:p-10 md:p-12 lg:p-10 xl:p-12 pb-6 sm:pb-8 md:pb-10 lg:pb-6 xl:pb-8 min-h-[500px] sm:min-h-[550px] md:min-h-[600px] lg:min-h-[480px] xl:min-h-[520px]`;
    }
  };

  // Consistent padding for main content area
  const getMainPadding = () => {
    switch (variant) {
      case "form":
        return "p-3 sm:p-4 md:p-6 lg:p-3 xl:p-4 py-3 sm:py-4 md:py-6 lg:py-3 xl:py-4";
      case "compact":
        return "p-3 sm:p-4 md:p-6 lg:p-4 xl:p-6 py-4 sm:py-6 md:py-8 lg:py-4 xl:py-6";
      default:
        return "p-4 sm:p-6 md:p-8 lg:p-4 xl:p-6 py-6 sm:py-8 md:py-10 lg:py-4 xl:py-6";
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col">
      <AnimatedBackground />

      {/* Main content area with consistent dimensions */}
      <div
        className={`relative z-10 flex-1 ${getMainPadding()} flex items-center justify-center`}
      >
        <div className={getContainerClasses()}>{children}</div>
      </div>

      {/* Footer with consistent spacing */}
      {showFooter && (
        <div className="relative z-10 w-full flex justify-between items-center py-2 sm:py-3 md:py-4 lg:py-2 xl:py-3 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-6xl mx-auto flex flex-col sm:flex-row  items-center space-y-1 sm:space-y-0">
            <div className="flex-1 flex justify-center">
              <p className="font-cousine font-medium text-xs sm:text-sm text-violet text-center sm:text-left">
                Built with care by Bemply Inc. |{" "}
                <button className="hover:underline">Learn more</button> -{" "}
                <button className="hover:underline">[About Us]</button> |{" "}
                <button className="hover:underline">Terms</button> |{" "}
                <button className="hover:underline">Privacy</button>
              </p>
            </div>

            <button className="hover:opacity-80 transition-opacity">
              <Image
                src="/icons/globe.png"
                alt="Globe"
                width={20}
                height={20}
                className="sm:w-6 sm:h-6 lg:w-7 lg:h-7"
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
