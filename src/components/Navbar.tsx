"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Brands", href: "/brands" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Reviews", href: "/reviews" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-border-custom shadow-md py-3"
            : "bg-white/80 backdrop-blur-sm py-5"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
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
                  Trusted Electronics Since 2005
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-semibold text-text-secondary hover:text-primary transition-colors duration-200 relative group py-2"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Right Side CTA */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                href="tel:+919948020830"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white text-sm font-semibold hover:bg-accent transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="h-4 w-4" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
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
              className="fixed top-0 right-0 bottom-0 w-80 max-w-full bg-white shadow-2xl p-6 flex flex-col z-50"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0.1, duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-8">
                <Link href="/" className="flex items-center gap-2">
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
                      Trusted Electronics Since 2005
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

              <nav className="flex flex-col gap-5 py-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-base font-semibold text-text-secondary hover:text-primary hover:pl-2 transition-all duration-200 border-b border-border-custom/50 pb-2"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              <div className="mt-auto pt-6 flex flex-col gap-4">
                <a
                  href="tel:+919948020830"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary text-white font-semibold hover:bg-accent transition-all duration-300 shadow-md"
                >
                  <Phone className="h-4 w-4" />
                  <span>Call: +91 99480 20830</span>
                </a>
                <p className="text-xs text-center text-text-secondary font-medium">
                  CTM Road, Madanapalle
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
