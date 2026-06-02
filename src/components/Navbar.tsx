"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, Globe, Palette, ChevronDown, Check } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { useTheme } from "./ThemeProvider";
import { Language } from "./translations";

const navLinks = [
  { nameKey: "nav.home", href: "/" },
  { nameKey: "nav.about", href: "/about" },
  { nameKey: "nav.products", href: "/products" },
  { nameKey: "nav.brands", href: "/brands" },
  { nameKey: "nav.services", href: "/services" },
  { nameKey: "nav.gallery", href: "/gallery" },
  { nameKey: "nav.reviews", href: "/reviews" },
  { nameKey: "nav.contact", href: "/contact" },
];

const languagesList = [
  { code: "en", name: "English" },
  { code: "te", name: "తెలుగు" },
  { code: "hi", name: "हिन्दी" },
  { code: "ta", name: "தமிழ்" },
  { code: "kn", name: "ಕನ್ನಡ" },
  { code: "ml", name: "മലയാളം" },
  { code: "mr", name: "मराठी" },
  { code: "gu", name: "ગુજરાતી" },
  { code: "bn", name: "বাংলা" },
  { code: "pa", name: "ਪੰਜਾਬੀ" },
  { code: "ur", name: "اردو" },
];

const themesList = [
  { code: "orange", name: "Orange Theme", key: "nav.themeOrange" },
  { code: "blue", name: "Blue Theme", key: "nav.themeBlue" },
  { code: "dark", name: "Dark Theme", key: "nav.themeDark" },
];

export default function Navbar() {
  const { locale, t, changeLocale, isRtl } = useLanguage();
  const { theme, setTheme } = useTheme();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isThemeDropdownOpen, setIsThemeDropdownOpen] = useState(false);

  const langRef = useRef<HTMLDivElement>(null);
  const themeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns on clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangDropdownOpen(false);
      }
      if (themeRef.current && !themeRef.current.contains(event.target as Node)) {
        setIsThemeDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLanguageName = languagesList.find((l) => l.code === locale)?.name || "English";
  const currentThemeName = t(themesList.find((th) => th.code === theme)?.key || "nav.themeOrange");

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-border-custom shadow-md py-3"
            : "bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm py-5"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href={`/${locale}`} className="flex items-center gap-3 group">
              <Image
                src="/images/logo.png"
                alt="Devatha Digitals HD Logo"
                width={160}
                height={40}
                className="h-10 w-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="flex flex-col">
                <span className="font-bold text-xl text-text-primary tracking-tight font-poppins">
                  DEVATHA <span className="text-primary">DIGITALS</span>
                </span>
                <span className="text-[10px] text-text-secondary font-medium tracking-wider -mt-1 uppercase font-poppins">
                  {t("footer.since")}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.nameKey}
                  href={`/${locale}${link.href === "/" ? "" : link.href}`}
                  className="text-xs xl:text-sm font-semibold text-text-secondary hover:text-primary transition-colors duration-200 relative group py-2"
                >
                  {t(link.nameKey)}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Right Side Actions (Desktop) */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Language Selector Dropdown */}
              <div className="relative" ref={langRef}>
                <button
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  className="flex items-center gap-1.5 px-3 py-2 border border-border-custom rounded-xl text-xs font-bold text-text-secondary hover:text-primary hover:border-primary/30 transition-all bg-white dark:bg-slate-800 cursor-pointer"
                >
                  <Globe className="h-3.5 w-3.5" />
                  <span>{currentLanguageName}</span>
                  <ChevronDown className={`h-3 w-3 transition-transform ${isLangDropdownOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {isLangDropdownOpen && (
                    <motion.div
                      className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 border border-border-custom rounded-2xl shadow-xl overflow-hidden py-1.5 flex flex-col z-50 max-h-72 overflow-y-auto"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                    >
                      {languagesList.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            changeLocale(lang.code as Language);
                            setIsLangDropdownOpen(false);
                          }}
                          className="flex items-center justify-between px-4 py-2 text-left text-xs font-semibold text-text-primary hover:bg-primary/5 hover:text-primary transition-colors cursor-pointer"
                        >
                          <span>{lang.name}</span>
                          {locale === lang.code && <Check className="h-3.5 w-3.5 text-primary" />}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Theme Selector Dropdown */}
              <div className="relative" ref={themeRef}>
                <button
                  onClick={() => setIsThemeDropdownOpen(!isThemeDropdownOpen)}
                  className="flex items-center gap-1.5 px-3 py-2 border border-border-custom rounded-xl text-xs font-bold text-text-secondary hover:text-primary hover:border-primary/30 transition-all bg-white dark:bg-slate-800 cursor-pointer"
                >
                  <Palette className="h-3.5 w-3.5" />
                  <span>{currentThemeName}</span>
                  <ChevronDown className={`h-3 w-3 transition-transform ${isThemeDropdownOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {isThemeDropdownOpen && (
                    <motion.div
                      className="absolute right-0 mt-2 w-44 bg-white dark:bg-slate-800 border border-border-custom rounded-2xl shadow-xl overflow-hidden py-1.5 flex flex-col z-50"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                    >
                      {themesList.map((th) => (
                        <button
                          key={th.code}
                          onClick={() => {
                            setTheme(th.code as any);
                            setIsThemeDropdownOpen(false);
                          }}
                          className="flex items-center justify-between px-4 py-2 text-left text-xs font-semibold text-text-primary hover:bg-primary/5 hover:text-primary transition-colors cursor-pointer"
                        >
                          <span>{t(th.key)}</span>
                          {theme === th.code && <Check className="h-3.5 w-3.5 text-primary" />}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Phone Call CTA */}
              <a
                href="tel:+919948020830"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-white text-xs font-bold hover:bg-accent transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>{t("nav.callStore")}</span>
              </a>
            </div>

            {/* Mobile Menu Button + Selector Icons */}
            <div className="lg:hidden flex items-center gap-3">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-text-primary hover:text-primary p-1.5 rounded-lg focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Drawer Content */}
            <motion.div
              className={`fixed top-0 ${isRtl ? "left-0" : "right-0"} bottom-0 w-80 max-w-full bg-white dark:bg-slate-900 shadow-2xl p-6 flex flex-col z-50`}
              initial={{ x: isRtl ? "-100%" : "100%" }}
              animate={{ x: 0 }}
              exit={{ x: isRtl ? "-100%" : "100%" }}
              transition={{ type: "spring", bounce: 0.1, duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-6">
                <Link href={`/${locale}`} className="flex items-center gap-2">
                  <Image
                    src="/images/logo.png"
                    alt="Devatha Digitals HD Logo"
                    width={120}
                    height={32}
                    className="h-8 w-auto object-contain"
                  />
                  <div className="flex flex-col">
                    <span className="font-bold text-base text-text-primary tracking-tight font-poppins">
                      DEVATHA <span className="text-primary">DIGITALS</span>
                    </span>
                    <span className="text-[9px] text-text-secondary font-medium tracking-wider -mt-1.5 uppercase font-poppins">
                      {t("footer.since")}
                    </span>
                  </div>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-text-secondary hover:text-primary p-1.5 rounded-lg"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Mobile Hrefs Navigation */}
              <nav className="flex flex-col gap-4 py-2 max-h-[40vh] overflow-y-auto">
                {navLinks.map((link) => (
                  <a
                    key={link.nameKey}
                    href={`/${locale}${link.href === "/" ? "" : link.href}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-sm font-semibold text-text-secondary hover:text-primary hover:pl-2 transition-all duration-200 border-b border-border-custom/50 pb-2"
                  >
                    {t(link.nameKey)}
                  </a>
                ))}
              </nav>

              {/* Accessibility selectors inside drawer */}
              <div className="flex flex-col gap-4 border-t border-border-custom/80 pt-4 mt-4">
                {/* Language selection dropdown on mobile */}
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-bold text-text-secondary uppercase tracking-widest flex items-center gap-1">
                    <Globe className="h-3 w-3" />
                    <span>Select Language</span>
                  </span>
                  <select
                    value={locale}
                    onChange={(e) => {
                      changeLocale(e.target.value as Language);
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full px-3 py-2 text-xs font-bold border border-border-custom rounded-xl bg-brand-bg text-text-primary focus:outline-none focus:border-primary cursor-pointer"
                  >
                    {languagesList.map((lang) => (
                      <option key={lang.code} value={lang.code}>
                        {lang.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Theme Selector Segment Picker on mobile */}
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-bold text-text-secondary uppercase tracking-widest flex items-center gap-1">
                    <Palette className="h-3 w-3" />
                    <span>Select Theme</span>
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    {themesList.map((th) => (
                      <button
                        key={th.code}
                        onClick={() => {
                          setTheme(th.code as any);
                        }}
                        className={`py-2 text-[10px] font-bold rounded-xl border text-center transition-all cursor-pointer ${
                          theme === th.code
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border-custom bg-brand-bg dark:bg-slate-800 text-text-secondary"
                        }`}
                      >
                        {t(th.key)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Call store button at the bottom */}
              <div className="mt-auto pt-4 flex flex-col gap-4">
                <a
                  href="tel:+919948020830"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary text-white font-semibold hover:bg-accent transition-all duration-300 shadow-md"
                >
                  <Phone className="h-4 w-4" />
                  <span>Call: +91 99480 20830</span>
                </a>
                <p className="text-[10px] text-center text-text-secondary font-medium">
                  {t("footer.address")}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
