"use client";

import { type ReactNode } from "react";
import { WaitlistProvider } from "@/context/waitlist-context";
import { LanguageProvider } from "@/context/language-context";
import SplashScreen from "@/components/splash-wrapper";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <WaitlistProvider>
      <LanguageProvider>
        <SplashScreen>{children}</SplashScreen>
      </LanguageProvider>
    </WaitlistProvider>
  );
}

