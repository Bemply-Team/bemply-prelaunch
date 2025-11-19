"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useWaitlist } from "@/context/waitlist-context";
import { useLanguage } from "@/context/language-context";
import MobileMenu from "@/app/how-soon/components/mobile-menu";

interface SharedNavigationProps {
  showLogo?: boolean;
  logoPosition?: "top" | "center";
  variant?: "default" | "compact";
}

export default function SharedNavigation({
  showLogo = false,
  logoPosition = "top",
  variant = "default",
}: SharedNavigationProps) {
  const pathname = usePathname();
  const { isComplete } = useWaitlist();
  const { t } = useLanguage();

  // Always use how-soon as the home page
  const homePage = "/how-soon";

  // Check if a nav item is active
  const isActive = (path: string) => {
    if (path === homePage && (pathname === "/" || pathname === homePage)) {
      return true;
    }
    return pathname === path;
  };

  // Determine the text for the home page link
  const homeText = isComplete ? t("nav.earlyAccess") : t("nav.howSoon");

  return (
    <nav
      className={`flex ${
        variant === "compact"
          ? "justify-between"
          : "flex-col md:flex-row justify-between"
      } items-center ${
        !showLogo || logoPosition === "center" ? "space-y-4 md:space-y-0" : ""
      }`}
    >
      {/* Desktop Navigation */}
      {logoPosition === "center" ? (
        <div className="hidden md:flex w-full justify-between items-center">
          {/* Left Navigation Items */}
          <div className="flex space-x-4 lg:space-x-6 xl:space-x-8">
            <Link
              href={homePage}
              className={`font-josefin font-medium text-sm lg:text-base xl:text-lg whitespace-nowrap ${
                isActive(homePage)
                  ? "text-eagle border-b-[3px] border-eagle pb-1"
                  : "text-eagle opacity-[42%] hover:opacity-100 hover:text-eagle transition-colors"
              }`}
            >
              {homeText}
            </Link>
            <Link
              href="/features"
              className={`font-josefin font-medium text-sm lg:text-base xl:text-lg whitespace-nowrap ${
                isActive("/features")
                  ? "text-eagle border-b-[3px] border-eagle pb-1"
                  : "text-eagle opacity-[42%] hover:opacity-100 hover:text-eagle transition-colors"
              }`}
            >
              {t("nav.features")}
            </Link>
          </div>

          {/* Center Logo */}
          {showLogo && (
            <div className="flex justify-center flex-shrink-0 mx-4">
              <Image
                src="/bemply-logo.png"
                alt="Bemply Logo"
                width={200}
                height={60}
                className="h-10 lg:h-12 xl:h-14 w-auto"
                priority
              />
            </div>
          )}

          {/* Right Navigation Items */}
          <div className="flex space-x-4 lg:space-x-6 xl:space-x-8">
            <Link
              href="/about"
              className={`font-josefin font-medium text-sm lg:text-base xl:text-lg whitespace-nowrap ${
                isActive("/about")
                  ? "text-eagle border-b-[3px] border-eagle pb-1"
                  : "text-eagle opacity-[42%] hover:opacity-100 hover:text-eagle transition-colors"
              }`}
            >
              {t("nav.about")}
            </Link>
            <Link
              href="/contacts"
              className={`font-josefin font-medium text-sm lg:text-base xl:text-lg whitespace-nowrap ${
                isActive("/contacts")
                  ? "text-eagle border-b-[3px] border-eagle pb-1"
                  : "text-eagle opacity-[42%] hover:opacity-100 hover:text-eagle transition-colors"
              }`}
            >
              {t("nav.contacts")}
            </Link>
          </div>
        </div>
      ) : (
        <div className="hidden md:flex w-full justify-between items-center">
          <div className="flex space-x-4 lg:space-x-6 xl:space-x-8">
            <Link
              href={homePage}
              className={`font-josefin font-medium text-sm lg:text-base xl:text-lg whitespace-nowrap ${
                isActive(homePage)
                  ? "text-eagle border-b-[3px] border-eagle pb-1"
                  : "text-eagle opacity-[42%] hover:opacity-100 hover:text-eagle transition-colors"
              }`}
            >
              {homeText}
            </Link>
            <Link
              href="/features"
              className={`font-josefin font-medium text-sm lg:text-base xl:text-lg whitespace-nowrap ${
                isActive("/features")
                  ? "text-eagle border-b-[3px] border-eagle pb-1"
                  : "text-eagle opacity-[42%] hover:opacity-100 hover:text-eagle transition-colors"
              }`}
            >
              {t("nav.features")}
            </Link>
          </div>
          <div className="flex space-x-4 lg:space-x-6 xl:space-x-8">
            <Link
              href="/about"
              className={`font-josefin font-medium text-sm lg:text-base xl:text-lg whitespace-nowrap ${
                isActive("/about")
                  ? "text-eagle border-b-[3px] border-eagle pb-1"
                  : "text-eagle opacity-[42%] hover:opacity-100 hover:text-eagle transition-colors"
              }`}
            >
              {t("nav.about")}
            </Link>
            <Link
              href="/contacts"
              className={`font-josefin font-medium text-sm lg:text-base xl:text-lg whitespace-nowrap ${
                isActive("/contacts")
                  ? "text-eagle border-b-[3px] border-eagle pb-1"
                  : "text-eagle opacity-[42%] hover:opacity-100 hover:text-eagle transition-colors"
              }`}
            >
              {t("nav.contacts")}
            </Link>
          </div>
        </div>
      )}

      {/* Mobile Navigation */}
      {variant === "default" ? (
        <div className="md:hidden w-full flex justify-end">
          <MobileMenu isEarlyAccess={false} />
        </div>
      ) : (
        <div className="md:hidden w-full flex justify-center space-x-3 sm:space-x-4">
          <Link
            href={homePage}
            className={`font-josefin font-medium text-xs sm:text-sm whitespace-nowrap ${
              isActive(homePage)
                ? "text-eagle border-b-[3px] border-eagle pb-1"
                : "text-eagle opacity-[42%] hover:opacity-100 hover:text-eagle transition-colors"
            }`}
          >
            {homeText}
          </Link>
          <Link
            href="/features"
            className={`font-josefin font-medium text-xs sm:text-sm whitespace-nowrap ${
              isActive("/features")
                ? "text-eagle border-b-[3px] border-eagle pb-1"
                : "text-eagle opacity-[42%] hover:opacity-100 hover:text-eagle transition-colors"
            }`}
          >
            {t("nav.features")}
          </Link>
          <Link
            href="/about"
            className={`font-josefin font-medium text-xs sm:text-sm whitespace-nowrap ${
              isActive("/about")
                ? "text-eagle border-b-[3px] border-eagle pb-1"
                : "text-eagle opacity-[42%] hover:opacity-100 hover:text-eagle transition-colors"
            }`}
          >
            {t("nav.about")}
          </Link>
          <Link
            href="/contacts"
            className={`font-josefin font-medium text-xs sm:text-sm whitespace-nowrap ${
              isActive("/contacts")
                ? "text-eagle border-b-[3px] border-eagle pb-1"
                : "text-eagle opacity-[42%] hover:opacity-100 hover:text-eagle transition-colors"
            }`}
          >
            {t("nav.contacts")}
          </Link>
        </div>
      )}

      {/* Logo for top position */}
      {showLogo && logoPosition === "top" && (
        <div className="flex justify-center mt-4 md:mt-0">
          <Image
            src="/bemply-logo.png"
            alt="Bemply Logo"
            width={160}
            height={48}
            className="h-10 w-auto"
            priority
          />
        </div>
      )}
    </nav>
  );
}
