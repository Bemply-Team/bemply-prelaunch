"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { storageService } from "@/services/storage";

export default function NotifyButton() {
  const router = useRouter();

  const handleClick = () => {
    // Check if user has already joined waitlist
    if (storageService.hasUserJoinedWaitlist()) {
      // Redirect to thank you page if already joined
      router.push("/thank-you");
    } else {
      // Redirect to waitlist form if not joined
      router.push("/waitlist");
    }
  };

  return (
    <div className="px-6 sm:px-8 ">
      <button
        onClick={handleClick}
        className="bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-purple-500 px-10 sm:px-12 lg:px-12 xl:px-14 py-4 sm:py-5 lg:py-4 xl:py-5 rounded-full font-montserrat font-semibold text-base sm:text-lg lg:text-lg xl:text-2xl transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center mx-auto"
      >
        <Image
          src="/icons/mail.png"
          alt="Mail"
          width={26}
          height={22}
          className="mr-3 sm:w-6 sm:h-6 lg:w-6 lg:h-6 xl:w-10 xl:h-7"
        />
        Notify Me
      </button>
    </div>
  );
}
