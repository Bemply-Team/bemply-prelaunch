import Link from "next/link"

export default function Navigation() {
  return (
    <nav className="flex justify-between items-center">
      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8 lg:space-x-12 xl:space-x-14">
        <Link
          href="/how-soon"
          className="font-josefin font-medium text-base lg:text-lg xl:text-xl text-gray-500 hover:text-gray-700 transition-colors"
        >
          How Soon
        </Link>
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
        <button className="font-josefin font-medium text-base lg:text-lg xl:text-xl text-gray-700 border-b-2 border-gray-700 pb-1">
          Contacts
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden w-full flex justify-center space-x-6">
        <Link
          href="/how-soon"
          className="font-josefin font-medium text-sm text-gray-500 hover:text-gray-700 transition-colors"
        >
          How Soon
        </Link>
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
        <button className="font-josefin font-medium text-sm text-gray-700 border-b-2 border-gray-700 pb-1">
          Contacts
        </button>
      </div>
    </nav>
  )
}
