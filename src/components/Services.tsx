"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { 
  ShoppingBag, 
  Wrench, 
  Settings, 
  Smartphone, 
  Filter, 
  Truck 
} from "lucide-react";

const services = [
  {
    title: "Electronic Sales",
    icon: ShoppingBag,
    desc: "A wide catalog of home entertainment, washing machines, refrigerators, and utility appliances under one roof.",
  },
  {
    title: "AC Sales & Installation",
    icon: Wrench,
    desc: "Seamless purchase experience paired with professional mounting and ducting by brand-certified technicians.",
  },
  {
    title: "Electronic Repairs",
    icon: Settings,
    desc: "Prompt troubleshooting and replacement of genuine spare parts to restore your home appliances to mint condition.",
  },
  {
    title: "Mobile Phone Sales",
    icon: Smartphone,
    desc: "Official mobile handsets, pre-applied screen guards, cases, chargers, and complete configurations guidance.",
  },
  {
    title: "Water Purifier Solutions",
    icon: Filter,
    desc: "Specialized TDS-level diagnostics, installation of RO/UV filtration systems, and custom filter updates.",
  },
  {
    title: "Delivery Services",
    icon: Truck,
    desc: "Stress-free shipping options using secure transport vehicles to protect your valuable electronics.",
  },
];

export default function Services() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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

  return (
    <section id="services" className="py-24 bg-brand-alt-bg/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center flex flex-col items-center gap-3 mb-16">
          <span className="text-sm font-bold text-primary tracking-wider uppercase">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
            Comprehensive <span className="text-primary">Electronic Solutions</span>
          </h2>
          <p className="text-sm text-text-secondary max-w-xl font-medium mt-1">
            Beyond offering top-shelf brands, we support you with expert technical services 
            to guarantee long-term performance.
          </p>
        </div>

        {/* Services List */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group flex flex-col sm:flex-row gap-5 p-6 bg-white rounded-3xl border border-border-custom hover:border-primary/10 shadow-premium shadow-premium-hover cursor-default"
              >
                {/* Icon Container */}
                <div className="bg-brand-alt-bg group-hover:bg-primary/10 w-12 h-12 rounded-2xl flex items-center justify-center text-primary shrink-0 transition-colors duration-300">
                  <IconComponent className="h-6 w-6" />
                </div>

                {/* Content Details */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-extrabold text-text-primary group-hover:text-primary transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed font-medium">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
