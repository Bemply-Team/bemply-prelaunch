import Image from "next/image";

export default function SocialIcons() {
  return (
    <div className="absolute bottom-4 left-6 sm:bottom-6 sm:left-8 md:bottom-8 md:left-10 lg:bottom-4 lg:left-6 xl:bottom-6 xl:left-8 flex items-center space-x-4 sm:space-x-5 lg:space-x-4 xl:space-x-5">
      <a
        href="https://www.instagram.com/bemplyhq"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity"
      >
        <Image
          src="/icons/instagram.png"
          alt="Instagram"
          width={18}
          height={18}
          className="sm:w-5 sm:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6"
        />
      </a>
      <a
        href="https://x.com/BemplyHQ"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity"
      >
        <Image
          src="/icons/twitter.png"
          alt="Twitter"
          width={18}
          height={18}
          className="sm:w-5 sm:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6"
        />
      </a>
      <a
        href="https://www.tiktok.com/@bemply"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity"
      >
        <Image
          src="/icons/tiktok.png"
          alt="TikTok"
          width={18}
          height={18}
          className="sm:w-5 sm:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/Bemply"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity"
      >
        <Image
          src="/icons/linkedin.png"
          alt="LinkedIn"
          width={18}
          height={18}
          className="sm:w-5 sm:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6"
        />
      </a>
    </div>
  );
}
