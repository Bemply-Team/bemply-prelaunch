"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useWaitlist } from "@/context/waitlist-context";
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

  // Determine the home page based on waitlist status
  const homePage = isComplete ? "/early-access" : "/how-soon";

  // Check if a nav item is active
  const isActive = (path: string) => {
    if (path === homePage && (pathname === "/" || pathname === homePage)) {
      return true;
    }
    return pathname === path;
  };

  // Determine the text for the home page link
  const homeText = isComplete ? "Early Access" : "How Soon";

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
          <div className="flex space-x-8 lg:space-x-12 xl:space-x-14">
            <Link
              href={homePage}
              className={`font-josefin font-medium text-base lg:text-lg xl:text-xl ${
                isActive(homePage)
                  ? "text-eagle border-b-[3px] border-eagle pb-1"
                  : "text-eagle opacity-[42%] hover:opacity-100 hover:text-eagle transition-colors"
              }`}
            >
              {homeText}
            </Link>
            <Link
              href="/features"
              className={`font-josefin font-medium text-base lg:text-lg xl:text-xl ${
                isActive("/features")
                  ? "text-eagle border-b-[3px] border-eagle pb-1"
                  : "text-eagle opacity-[42%] hover:opacity-100 hover:text-eagle transition-colors"
              }`}
            >
              Features
            </Link>
          </div>

          {/* Center Logo */}
          {showLogo && (
            <div className="flex justify-center">
              <Image
                src="/bemply-logo.png"
                alt="Bemply Logo"
                width={200}
                height={60}
                className="h-12 lg:h-14 xl:h-16 w-auto"
                priority
              />
            </div>
          )}

          {/* Right Navigation Items */}
          <div className="flex space-x-8 lg:space-x-12 xl:space-x-14">
            <Link
              href="/about"
              className={`font-josefin font-medium text-base lg:text-lg xl:text-xl ${
                isActive("/about")
                  ? "text-eagle border-b-[3px] border-eagle pb-1"
                  : "text-eagle opacity-[42%] hover:opacity-100 hover:text-eagle transition-colors"
              }`}
            >
              About
            </Link>
            <Link
              href="/contacts"
              className={`font-josefin font-medium text-base lg:text-lg xl:text-xl ${
                isActive("/contacts")
                  ? "text-eagle border-b-[3px] border-eagle pb-1"
                  : "text-eagle opacity-[42%] hover:opacity-100 hover:text-eagle transition-colors"
              }`}
            >
              Contacts
            </Link>
          </div>
        </div>
      ) : (
        <div className="hidden md:flex w-full justify-between items-center">
          <div className="flex space-x-8 lg:space-x-12 xl:space-x-14">
            <Link
              href={homePage}
              className={`font-josefin font-medium text-base lg:text-lg xl:text-xl ${
                isActive(homePage)
                  ? "text-eagle border-b-[3px] border-eagle pb-1"
                  : "text-eagle opacity-[42%] hover:opacity-100 hover:text-eagle transition-colors"
              }`}
            >
              {homeText}
            </Link>
            <Link
              href="/features"
              className={`font-josefin font-medium text-base lg:text-lg xl:text-xl ${
                isActive("/features")
                  ? "text-eagle border-b-[3px] border-eagle pb-1"
                  : "text-eagle opacity-[42%] hover:opacity-100 hover:text-eagle transition-colors"
              }`}
            >
              Features
            </Link>
          </div>
          <div className="flex space-x-8 lg:space-x-12 xl:space-x-14">
            <Link
              href="/about"
              className={`font-josefin font-medium text-base lg:text-lg xl:text-xl ${
                isActive("/about")
                  ? "text-eagle border-b-[3px] border-eagle pb-1"
                  : "text-eagle opacity-[42%] hover:opacity-100 hover:text-eagle transition-colors"
              }`}
            >
              About
            </Link>
            <Link
              href="/contacts"
              className={`font-josefin font-medium text-base lg:text-lg xl:text-xl ${
                isActive("/contacts")
                  ? "text-eagle border-b-[3px] border-eagle pb-1"
                  : "text-eagle opacity-[42%] hover:opacity-100 hover:text-eagle transition-colors"
              }`}
            >
              Contacts
            </Link>
          </div>
        </div>
      )}

      {/* Mobile Navigation */}
      {variant === "default" ? (
        <div className="md:hidden w-full flex justify-end">
          <MobileMenu isEarlyAccess={isComplete} />
        </div>
      ) : (
        <div className="md:hidden w-full flex justify-center space-x-6">
          <Link
            href={homePage}
            className={`font-josefin font-medium text-sm ${
              isActive(homePage)
                ? "text-eagle border-b-[3px] border-eagle pb-1"
                : "text-eagle opacity-[42%] hover:opacity-100 hover:text-eagle transition-colors"
            }`}
          >
            {homeText}
          </Link>
          <Link
            href="/features"
            className={`font-josefin font-medium text-sm ${
              isActive("/features")
                ? "text-eagle border-b-[3px] border-eagle pb-1"
                : "text-eagle opacity-[42%] hover:opacity-100 hover:text-eagle transition-colors"
            }`}
          >
            Features
          </Link>
          <Link
            href="/about"
            className={`font-josefin font-medium text-sm ${
              isActive("/about")
                ? "text-eagle border-b-[3px] border-eagle pb-1"
                : "text-eagle opacity-[42%] hover:opacity-100 hover:text-eagle transition-colors"
            }`}
          >
            About
          </Link>
          <Link
            href="/contacts"
            className={`font-josefin font-medium text-sm ${
              isActive("/contacts")
                ? "text-eagle border-b-[3px] border-eagle pb-1"
                : "text-eagle opacity-[42%] hover:opacity-100 hover:text-eagle transition-colors"
            }`}
          >
            Contacts
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
