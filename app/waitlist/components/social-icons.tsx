import Image from "next/image"

export default function SocialIcons() {
  return (
    <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 md:bottom-10 md:left-10 lg:bottom-8 lg:left-8 xl:bottom-10 xl:left-10 flex items-center space-x-5 sm:space-x-6 lg:space-x-6 xl:space-x-7">
      <button className="hover:opacity-80 transition-opacity">
        <Image
          src="/icons/instagram.png"
          alt="Instagram"
          width={22}
          height={22}
          className="sm:w-6 sm:h-6 lg:w-6 lg:h-6 xl:w-7 xl:h-7"
        />
      </button>
      <button className="hover:opacity-80 transition-opacity">
        <Image
          src="/icons/twitter.png"
          alt="Twitter"
          width={22}
          height={22}
          className="sm:w-6 sm:h-6 lg:w-6 lg:h-6 xl:w-7 xl:h-7"
        />
      </button>
      <button className="hover:opacity-80 transition-opacity">
        <Image
          src="/icons/tiktok.png"
          alt="TikTok"
          width={22}
          height={22}
          className="sm:w-6 sm:h-6 lg:w-6 lg:h-6 xl:w-7 xl:h-7"
        />
      </button>
      <button className="hover:opacity-80 transition-opacity">
        <Image
          src="/icons/linkedin.png"
          alt="LinkedIn"
          width={22}
          height={22}
          className="sm:w-6 sm:h-6 lg:w-6 lg:h-6 xl:w-7 xl:h-7"
        />
      </button>
    </div>
  )
}
