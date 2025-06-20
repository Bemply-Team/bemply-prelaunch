import Image from "next/image"

export default function GlobeIcon() {
  return (
    <button className="hover:opacity-80 transition-opacity">
      <Image src="/icons/globe.png" alt="Globe" width={24} height={24} className="sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
    </button>
  )
}
