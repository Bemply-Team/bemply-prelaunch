import Link from "next/link";
import MobileMenu from "./mobile-menu";

export default function Navigation() {
  return (
    <nav className="flex justify-between items-center mb-6 sm:mb-8 md:mb-10 lg:mb-6 xl:mb-8">
      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8 lg:space-x-12 xl:space-x-14">
        <button className="font-josefin font-medium text-base lg:text-lg xl:text-xl text-eagle border-b-2 border-eagle pb-1">
          How Soon
        </button>
        <Link
          href="/features"
          className="font-josefin font-medium text-base lg:text-lg xl:text-xl text-eagle/50 hover:text-eagle transition-colors"
        >
          Features
        </Link>
      </div>
      <div className="hidden md:flex space-x-8 lg:space-x-12 xl:space-x-14">
        <Link
          href="/about"
          className="font-josefin font-medium text-base lg:text-lg xl:text-xl text-gray-500 hover:text-eagle transition-colors"
        >
          About
        </Link>
        <Link
          href="/contacts"
          className="font-josefin font-medium text-base lg:text-lg xl:text-xl text-gray-500 hover:text-eagle transition-colors"
        >
          Contacts
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden w-full flex justify-end">
        <MobileMenu />
      </div>
    </nav>
  );
}
