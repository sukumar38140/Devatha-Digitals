"use client";

import React from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t-4 border-primary mt-auto relative z-10">
      {/* Upper Footer: Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Business Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Devatha Digitals HD Logo"
                width={160}
                height={40}
                className="h-10 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="font-bold text-lg text-text-primary tracking-tight font-poppins">
                  DEVATHA <span className="text-primary">DIGITALS</span>
                </span>
                <span className="text-[10px] text-text-secondary font-medium tracking-wider -mt-1 uppercase font-poppins">
                  Trusted Electronics Since 2005
                </span>
              </div>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed font-medium">
              Madanapalle&apos;s most trusted electronics destination since 2005. 
              Providing genuine products, same-day delivery, and excellent after-sales service 
              for over 21 years.
            </p>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex text-yellow-400 text-base">★★★★★</div>
              <span className="text-xs font-bold text-text-primary">
                4.4+ Google Rating (600+ Reviews)
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Brands", href: "/brands" },
                { name: "Services", href: "/services" },
                { name: "Gallery", href: "/gallery" },
                { name: "Customer Reviews", href: "/reviews" },
                { name: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider">
              Product Categories
            </h3>
            <ul className="flex flex-col gap-2.5">
              {[
                "Smartphones & Mobiles",
                "Smart LED TVs",
                "Air Conditioners",
                "Refrigerators",
                "Washing Machines",
                "Water Purifiers",
                "Laptops & Accessories",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#products"
                    className="text-sm text-text-secondary hover:text-primary transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider">
              Contact Details
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3 items-start">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-text-secondary leading-relaxed">
                  Above HDFC Bank, CTM Road,
                  Madanapalle, Chittoor District,
                  Andhra Pradesh - 517325
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="tel:+919948020830"
                  className="text-sm text-text-secondary hover:text-primary transition-colors font-medium"
                >
                  +91 99480 20830
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="mailto:info@devathadigitals.com"
                  className="text-sm text-text-secondary hover:text-primary transition-colors font-medium"
                >
                  info@devathadigitals.com
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Clock className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm text-text-secondary font-medium">
                  10:00 AM – 9:00 PM (Daily)
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Lower Footer: Copyright & Legal */}
      <div className="bg-brand-alt-bg py-6 border-t border-border-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-secondary text-center sm:text-left">
            &copy; {currentYear} Devatha Digitals. All rights reserved. 
            Designed for trust and premium quality. Owner: D Babu.
          </p>
          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-border-custom rounded-md text-xs font-semibold text-text-secondary hover:text-primary hover:border-primary transition-all duration-300 shadow-sm"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
