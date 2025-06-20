import Link from "next/link"

export default function Navigation() {
  return (
    <nav className="flex justify-between items-center mb-6 sm:mb-8 md:mb-10 lg:mb-6 xl:mb-8">
      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8 lg:space-x-12 xl:space-x-14">
        <button className="font-josefin font-medium text-base lg:text-lg xl:text-xl text-gray-700 border-b-2 border-gray-700 pb-1">
          Early Access
        </button>
        <Link
          href="/features"
          className="font-josefin font-medium text-base lg:text-lg xl:text-xl text-gray-500 hover:text-gray-700 transition-colors"
        >
          Features
        </Link>
      </div>
      <div className="hidden md:flex space-x-8 lg:space-x-12 xl:space-x-14">
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

      {/* Mobile Navigation */}
      <div className="md:hidden w-full flex justify-center space-x-6">
        <button className="font-josefin font-medium text-sm text-gray-700 border-b-2 border-gray-700 pb-1">
          Early Access
        </button>
        <Link
          href="/features"
          className="font-josefin font-medium text-sm text-gray-500 hover:text-gray-700 transition-colors"
        >
          Features
        </Link>
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
    </nav>
  )
}
