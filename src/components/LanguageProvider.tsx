"use client";

import React, { createContext, useContext } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Language, translations, TranslationDictionary } from "./translations";

interface LanguageContextType {
  locale: Language;
  t: (key: string) => string;
  changeLocale: (newLocale: Language) => void;
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({
  locale,
  children,
}: {
  locale: Language;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  // Clean translation key lookup with dot-notation fallback
  const t = (path: string): string => {
    const dictionary = translations[locale] || translations.en;
    const parts = path.split(".");
    let current: any = dictionary;

    for (const part of parts) {
      if (current == null || typeof current !== "object") {
        break;
      }
      current = current[part];
    }

    if (typeof current === "string") {
      return current;
    }

    // Fallback: If the lookup is not a string (e.g. "products" is a page object), check if it exists in the 'nav' section directly
    if (dictionary.nav && typeof (dictionary.nav as any)[path] === "string") {
      return (dictionary.nav as any)[path];
    }

    return path;
  };

  const changeLocale = (newLocale: Language) => {
    if (!pathname) return;

    const segments = pathname.split("/");
    // segments[0] is empty because pathname starts with /
    // segments[1] is the current locale segment (e.g. 'en', 'te')
    if (segments.length > 1) {
      segments[1] = newLocale;
      const newPathname = segments.join("/");
      router.push(newPathname);
    } else {
      router.push(`/${newLocale}`);
    }
  };

  const isRtl = locale === "ur";

  return (
    <LanguageContext.Provider value={{ locale, t, changeLocale, isRtl }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
