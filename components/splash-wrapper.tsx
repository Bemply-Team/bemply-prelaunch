"use client";

import React, { useEffect, useState } from "react";
import { useLottie } from "lottie-react";
import { usePathname } from "next/navigation";
import * as animationData from "../public/animations/bemply-splash-modified.json";

export default function SplashWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSplash, setShowSplash] = useState(true);
  const [hasShownSplash, setHasShownSplash] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // On initial mount (page load/refresh), show the splash
    setShowSplash(true);
    setHasShownSplash(false);

    // Optionally, clear any previous session storage to ensure splash shows on refresh
    sessionStorage.removeItem("bemply-splash-shown");
  }, []); // Empty dependency array for initial mount only

  useEffect(() => {
    // When pathname changes (route change), do not reset splash state
    // This prevents the splash from showing during client-side navigation
    if (hasShownSplash) {
      setShowSplash(false);
    }
  }, [pathname, hasShownSplash]);

  const handleSplashComplete = () => {
    setShowSplash(false);
    setHasShownSplash(true);
    sessionStorage.setItem("bemply-splash-shown", "true");
  };

  const { View, animationItem } = useLottie({
    animationData,
    autoplay: true,
    loop: false,
    onComplete: handleSplashComplete,
    style: {
      width: "100%",
      height: "100%",
      maxWidth: "400px",
      maxHeight: "600px",
    },
  });

  return (
    <>
      {showSplash && !hasShownSplash && (
        <div
          className="fixed inset-0 bg-white z-50 flex items-center justify-center"
          style={{ width: "100%", height: "100%" }}
        >
          {View}
        </div>
      )}
      <div
        className={`transition-opacity duration-500 ${
          showSplash ? "opacity-0" : "opacity-100"
        }`}
      >
        {children}
      </div>
    </>
  );
}
