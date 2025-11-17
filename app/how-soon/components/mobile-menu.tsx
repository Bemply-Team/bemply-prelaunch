"use client";

import { useState } from "react";
import { X, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/language-context";

interface MobileMenuProps {
  isEarlyAccess?: boolean;
}

export default function MobileMenu({ isEarlyAccess = false }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  // Determine the home page based on waitlist status
  const homePage = isEarlyAccess ? "/early-access" : "/how-soon";

  // Check if a nav item is active
  const isActive = (path: string) => {
    if (path === homePage && (pathname === "/" || pathname === homePage)) {
      return true;
    }
    return pathname === path;
  };

  // Determine the text for the home page link
  const homeText = isEarlyAccess ? t("nav.earlyAccess") : t("nav.howSoon");

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-2 hover:bg-white/30 transition-all duration-300"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-gray-700" />
        ) : (
          <Menu className="w-6 h-6 text-gray-700" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu Panel */}
          <div className="fixed top-4 right-4 left-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-2xl z-50 md:hidden">
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-center mb-4">
                <span className="font-josefin font-medium text-lg text-gray-700">
                  {t("nav.menu")}
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-1 hover:bg-white/30 transition-all duration-300"
                >
                  <X className="w-5 h-5 text-gray-700" />
                </button>
              </div>

              <div className="space-y-3">
                <Link
                  href={homePage}
                  onClick={() => setIsOpen(false)}
                  className={`block w-full text-left font-josefin font-medium text-base ${
                    isActive(homePage)
                      ? "text-gray-700 border-b border-gray-300 pb-2"
                      : "text-gray-500 hover:text-gray-700 transition-colors py-2"
                  }`}
                >
                  {homeText}
                </Link>
                <Link
                  href="/features"
                  onClick={() => setIsOpen(false)}
                  className={`block w-full text-left font-josefin font-medium text-base ${
                    isActive("/features")
                      ? "text-gray-700 border-b border-gray-300 pb-2"
                      : "text-gray-500 hover:text-gray-700 transition-colors py-2"
                  }`}
                >
                  {t("nav.features")}
                </Link>
                <Link
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className={`block w-full text-left font-josefin font-medium text-base ${
                    isActive("/about")
                      ? "text-gray-700 border-b border-gray-300 pb-2"
                      : "text-gray-500 hover:text-gray-700 transition-colors py-2"
                  }`}
                >
                  {t("nav.about")}
                </Link>
                <Link
                  href="/contacts"
                  onClick={() => setIsOpen(false)}
                  className={`block w-full text-left font-josefin font-medium text-base ${
                    isActive("/contacts")
                      ? "text-gray-700 border-b border-gray-300 pb-2"
                      : "text-gray-500 hover:text-gray-700 transition-colors py-2"
                  }`}
                >
                  {t("nav.contacts")}
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
