"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Phone, MapPin, CheckCircle, Smartphone, Tv, Laptop, ShieldCheck } from "lucide-react";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const floatVariants = (delay: number): Variants => ({
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      },
    },
  });

  return (
    <section
      id="home"
      className="relative min-h-[95vh] pt-24 pb-16 flex items-center bg-gradient-to-br from-brand-alt-bg via-white to-brand-alt-bg/40 overflow-hidden"
    >
      {/* Background visual element */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 bg-radial-gradient from-primary/30 to-transparent pointer-events-none" />

      {/* Floating Electronic Icons */}
      <motion.div
        variants={floatVariants(0)}
        animate="animate"
        className="absolute top-1/4 left-10 md:left-24 text-primary/20 hidden md:block"
      >
        <Smartphone className="h-12 w-12" />
      </motion.div>
      <motion.div
        variants={floatVariants(1)}
        animate="animate"
        className="absolute bottom-1/4 left-20 text-accent/30 hidden lg:block"
      >
        <Tv className="h-16 w-16" />
      </motion.div>
      <motion.div
        variants={floatVariants(2)}
        animate="animate"
        className="absolute top-1/3 right-1/2 text-primary/20 hidden lg:block"
      >
        <Laptop className="h-10 w-10" />
      </motion.div>
      <motion.div
        variants={floatVariants(1.5)}
        animate="animate"
        className="absolute top-20 right-1/3 text-accent/25 hidden md:block"
      >
        <ShieldCheck className="h-12 w-12" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Content Left */}
          <motion.div
            className="lg:col-span-7 flex flex-col gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Tagline Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 self-start bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-bold text-primary tracking-wider uppercase">
                Trusted Since 2005
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-primary tracking-tight leading-[1.1] text-shadow-premium"
            >
              21+ Years of <br />
              <span className="text-primary">Trusted Electronics</span> Excellence
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-text-secondary leading-relaxed max-w-xl font-medium"
            >
              Your One-Stop Destination for Mobile Phones, Smart TVs, Air Conditioners, 
              Refrigerators, Washing Machines, and premium electronic solutions in Madanapalle.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-2"
            >
              <a
                href="tel:+919948020830"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-white font-bold hover:bg-accent transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <Phone className="h-5 w-5" />
                <span>Call Now</span>
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white border-2 border-primary/20 text-primary font-bold hover:bg-brand-alt-bg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <MapPin className="h-5 w-5" />
                <span>Visit Store</span>
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-border-custom"
            >
              {[
                "Since 2005",
                "Genuine Products",
                "Same Day Delivery",
                "Trusted by Thousands",
              ].map((trust) => (
                <div key={trust} className="flex items-center gap-2">
                  <CheckCircle className="h-4.5 w-4.5 text-primary shrink-0" />
                  <span className="text-xs font-bold text-text-primary">
                    {trust}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image Right */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Premium Glow effect background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-3xl transform rotate-3 scale-105 filter blur-xl pointer-events-none" />
              
              {/* Main Showroom Image Frame */}
              <div className="relative bg-white p-3 rounded-3xl shadow-xl border border-border-custom/50 overflow-hidden">
                <div className="relative h-[400px] w-full rounded-2xl overflow-hidden bg-brand-alt-bg">
                  {/* Showroom main image with soft orange overlay */}
                  <Image
                    src="/images/devatha-digitals-showroom.avif"
                    alt="Devatha Digitals Showroom Madanapalle"
                    fill
                    priority
                    className="object-cover transform hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent mix-blend-multiply pointer-events-none" />
                </div>

                {/* Overlaid Badges */}
                <div className="absolute -bottom-4 -left-4 bg-white px-5 py-3 rounded-2xl shadow-lg border border-border-custom/60 flex items-center gap-3">
                  <div className="bg-primary/10 p-2.5 rounded-xl text-primary">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-text-primary leading-none">
                      Authorized Dealer
                    </h4>
                    <p className="text-[10px] text-text-secondary font-bold mt-1 uppercase">
                      All Top Brands
                    </p>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 bg-white px-5 py-3 rounded-2xl shadow-lg border border-border-custom/60 flex items-center gap-3">
                  <div>
                    <h4 className="text-sm font-extrabold text-primary leading-none">
                      4.4 ★
                    </h4>
                    <p className="text-[10px] text-text-secondary font-bold mt-1 uppercase">
                      600+ Reviews
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
