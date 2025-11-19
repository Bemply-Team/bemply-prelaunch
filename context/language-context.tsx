"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
  Suspense,
} from "react";
import { useSearchParams } from "next/navigation";
import { storageService } from "@/services/storage";
import { enMessages } from "@/locales/en";
import { frMessages } from "@/locales/fr";
import { esMessages } from "@/locales/es";

export type LanguageCode = "en" | "fr" | "es";

interface LanguageContextValue {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: (key: string, vars?: Record<string, string | number>) => string;
  availableLanguages: { code: LanguageCode; label: string }[];
}

const DEFAULT_LANGUAGE: LanguageCode = "en";

const messagesByLanguage: Record<LanguageCode, Record<string, any>> = {
  en: enMessages,
  fr: frMessages,
  es: esMessages,
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

function resolveMessage(dictionary: any, key: string): string | undefined {
  return key
    .split(".")
    .reduce<any>(
      (acc, part) => (acc && typeof acc === "object" ? acc[part] : undefined),
      dictionary
    );
}

function normalizeLanguage(input: string | null): LanguageCode | null {
  if (!input) return null;
  const value = input.toLowerCase();
  if (value.startsWith("fr")) return "fr";
  if (value.startsWith("es")) return "es";
  if (value.startsWith("en")) return "en";
  return null;
}

// Separate component that uses useSearchParams
function LanguageParamHandler({
  onLanguageFromParam,
}: {
  onLanguageFromParam: (lang: LanguageCode | null) => void;
}) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const paramLang = searchParams?.get("lang");
    const fromParam = normalizeLanguage(paramLang);
    onLanguageFromParam(fromParam);
  }, [searchParams, onLanguageFromParam]);

  return null;
}

function LanguageProviderInner({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>(DEFAULT_LANGUAGE);

  // Determine initial language on first client render
  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = normalizeLanguage(storageService.getLanguagePreference());

    let initial: LanguageCode = DEFAULT_LANGUAGE;

    if (stored) {
      initial = stored;
    } else if (typeof navigator !== "undefined") {
      initial =
        normalizeLanguage(navigator.language) ??
        normalizeLanguage((navigator as any).userLanguage) ??
        DEFAULT_LANGUAGE;
      storageService.storeLanguagePreference(initial);
    }

    setLanguageState(initial);
  }, []);

  // Handle language from URL params
  const handleLanguageFromParam = (fromParam: LanguageCode | null) => {
    if (fromParam) {
      setLanguageState(fromParam);
      storageService.storeLanguagePreference(fromParam);
    }
  };

  // Reflect language on the <html> element for accessibility/SEO
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
    }
  }, [language]);

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      storageService.storeLanguagePreference(lang);
      if (typeof document !== "undefined") {
        document.documentElement.lang = lang;
      }
    }
  };

  const value = useMemo<LanguageContextValue>(() => {
    const t = (key: string, vars?: Record<string, string | number>): string => {
      const currentDict = messagesByLanguage[language];
      const fallbackDict = messagesByLanguage[DEFAULT_LANGUAGE];

      const raw =
        resolveMessage(currentDict, key) ??
        resolveMessage(fallbackDict, key) ??
        key;

      if (typeof raw !== "string") return key;
      if (!vars) return raw;

      return raw.replace(/\{(\w+)\}/g, (_, varKey: string) => {
        const value = vars[varKey];
        return value === undefined || value === null ? "" : String(value);
      });
    };

    return {
      language,
      setLanguage,
      t,
      availableLanguages: [
        { code: "en", label: enMessages.languages.en },
        { code: "fr", label: enMessages.languages.fr },
        { code: "es", label: enMessages.languages.es },
      ],
    };
  }, [language]);

  return (
    <LanguageContext.Provider value={value}>
      <Suspense fallback={null}>
        <LanguageParamHandler onLanguageFromParam={handleLanguageFromParam} />
      </Suspense>
      {children}
    </LanguageContext.Provider>
  );
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Suspense fallback={<div>{children}</div>}>
      <LanguageProviderInner>{children}</LanguageProviderInner>
    </Suspense>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    // During SSR/build time, return a default implementation
    if (typeof window === "undefined") {
      return {
        language: DEFAULT_LANGUAGE,
        setLanguage: () => {},
        t: (key: string) => key,
        availableLanguages: [
          { code: "en" as LanguageCode, label: "English" },
          { code: "fr" as LanguageCode, label: "Français" },
          { code: "es" as LanguageCode, label: "Español" },
        ],
      };
    }
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
};
