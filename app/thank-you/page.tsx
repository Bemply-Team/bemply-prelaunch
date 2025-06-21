"use client";

import SharedLayout from "@/components/shared-layout";
import SharedNavigation from "@/components/shared-navigation";
import SocialIcons from "./components/social-icons";
import Image from "next/image";

export default function ThankYouPage() {
  return (
    <SharedLayout variant="default" showFooter={true}>
      {/* Main content with consistent structure */}
      <div className="flex flex-col justify-between h-full min-h-[500px] sm:min-h-[550px] md:min-h-[600px] lg:min-h-[480px] xl:min-h-[520px]">
        {/* Top Section - Fixed height */}
        <div className="flex-shrink-0">
          <SharedNavigation variant="default" />

          {/* Decorative Line */}
          <div className="flex justify-center mt-6 lg:mt-8 mb-8 lg:mb-12">
            <div className="w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 h-1 bg-gray-600 rounded-full"></div>
          </div>
        </div>

        {/* Middle Section - Flexible height */}
        <div className="text-center space-y-6 lg:space-y-8 max-w-4xl mx-auto flex-1 flex flex-col justify-center">
          {/* Main Title - Using Josefin Sans */}
          <h1
            className="font-josefin font-bold text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl tracking-[0.2em] sm:tracking-[0.25em] lg:tracking-[0.3em]"
            style={{ color: "#5741FF" }}
          >
            THANK YOU FOR JOINING
          </h1>

          {/* Content Text - Using Cousine with exact line breaks */}
          <div>
            <p className="font-cousine text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl text-gray-700 leading-relaxed">
              Thank you for your interest in Bemply !
            </p>

            <p className="font-cousine text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl text-gray-700 leading-relaxed">
              Keep an eye on your inbox for exciting updates and your
              <br />
              invite when we go live.
            </p>

            <p className="font-cousine text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl text-gray-700 leading-relaxed">
              Follow us and get ready to transform the way hiring (and
              <br />
              job hunting) happens.
            </p>
          </div>

          {/* Signature */}
          <div className="pt-4 lg:pt-6">
            <p className="font-cousine text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl text-gray-700">
              — The Bemply Team ✨
            </p>
          </div>
        </div>

        {/* Bottom spacer - Fixed height */}
        <div className="h-10 sm:h-12 md:h-14 lg:h-10 xl:h-12 flex-shrink-0"></div>
      </div>

      {/* Social Icons - Positioned in bottom left */}
      <SocialIcons />

      {/* Logo - Positioned at bottom right with screenshot-accurate size */}
      <div className="hidden lg:block absolute bottom-6 right-8 xl:bottom-8 xl:right-10">
        <Image
          src="/bemply-logo.png"
          alt="Bemply Logo"
          width={240}
          height={72}
          className="h-16 xl:h-20 2xl:h-24 w-auto opacity-80"
        />
      </div>
    </SharedLayout>
  );
}
