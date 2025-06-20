import Image from "next/image"

export default function Logo() {
  return (
    <div className="flex justify-center mb-6 sm:mb-8 md:mb-10 lg:mb-6 xl:mb-8">
      <Image
        src="/bemply-logo.png"
        alt="Bemply Logo"
        width={500}
        height={150}
        className="h-16 xs:h-18 sm:h-20 md:h-22 lg:h-20 xl:h-24 2xl:h-28 w-auto"
        priority
      />
    </div>
  )
}
