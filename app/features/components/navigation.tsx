import Link from "next/link"
import Image from "next/image"

export default function Navigation() {
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      {/* Desktop Navigation with Logo in Center */}
      <div className="hidden md:flex w-full justify-between items-center">
        {/* Left Navigation Items */}
        <div className="flex space-x-8 lg:space-x-12 xl:space-x-14">
          <Link
            href="/how-soon"
            className="font-josefin font-medium text-base lg:text-lg xl:text-xl text-gray-500 hover:text-gray-700 transition-colors"
          >
            How Soon
          </Link>
          <button className="font-josefin font-medium text-base lg:text-lg xl:text-xl text-gray-700 border-b-2 border-gray-700 pb-1">
            Features
          </button>
        </div>

        {/* Center Logo */}
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

        {/* Right Navigation Items */}
        <div className="flex space-x-8 lg:space-x-12 xl:space-x-14">
          <Link
            href="/about"
            className="font-josefin font-medium text-base lg:text-lg xl:text-xl text-gray-500 hover:text-gray-700 transition-colors"
          >
            About
          </Link>
          <Link
            href="/contacts"
            className="font-josefin font-medium text-base lg:text-lg xl:text-xl text-gray-500 hover:text-gray-700 transition-colors"
          >
            Contacts
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden w-full">
        {/* Mobile Navigation Items */}
        <div className="flex justify-center space-x-6 mb-4">
          <Link
            href="/how-soon"
            className="font-josefin font-medium text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            How Soon
          </Link>
          <button className="font-josefin font-medium text-sm text-gray-700 border-b-2 border-gray-700 pb-1">
            Features
          </button>
          <Link
            href="/about"
            className="font-josefin font-medium text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            About
          </Link>
          <Link
            href="/contacts"
            className="font-josefin font-medium text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            Contacts
          </Link>
        </div>

        {/* Mobile Logo */}
        <div className="flex justify-center">
          <Image src="/bemply-logo.png" alt="Bemply Logo" width={160} height={48} className="h-10 w-auto" priority />
        </div>
      </div>
    </nav>
  )
}
