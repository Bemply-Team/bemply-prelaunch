"use client";

import Image from "next/image";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Check } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export default function LanguageSelector() {
  const { language, setLanguage, availableLanguages, t } = useLanguage();

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button
            type="button"
            aria-label={t("languageSelector.triggerLabel")}
            className="flex items-center justify-center rounded-full   p-2 sm:p-2.5 transition-all duration-200 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          >
            <Image
              src="/icons/globe.png"
              alt={t("languageSelector.triggerLabel")}
              width={28}
              height={28}
              className="w-6 h-6 sm:w-7 sm:h-7"
            />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            sideOffset={10}
            align="end"
            className="min-w-[10rem] rounded-xl bg-white/95 backdrop-blur-md border border-gray-200/80 shadow-xl p-1.5 text-sm sm:text-base animate-in fade-in-0 zoom-in-95 data-[side=top]:slide-in-from-bottom-2 data-[side=bottom]:slide-in-from-top-2 will-change-[transform,opacity] z-50"
          >
            {availableLanguages.map((item) => (
              <DropdownMenu.Item
                key={item.code}
                onSelect={(event) => {
                  event.preventDefault();
                  setLanguage(item.code);
                }}
                className="flex items-center justify-between gap-2 rounded-lg px-3 py-2 cursor-pointer outline-none select-none text-gray-800 data-[highlighted]:bg-purple-50 data-[highlighted]:text-purple-700 data-[highlighted]:outline-none"
              >
                <span className="flex items-center gap-2">
                  <span className="text-base">
                    {item.code === "en" && "🇺🇸"}
                    {item.code === "fr" && "🇫🇷"}
                    {item.code === "es" && "🇪🇸"}
                  </span>
                  <span>{item.label}</span>
                </span>
                {language === item.code && (
                  <Check
                    className="w-4 h-4 text-purple-600"
                    aria-hidden="true"
                  />
                )}
              </DropdownMenu.Item>
            ))}

            <DropdownMenu.Arrow className="fill-white/95" />
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
}
