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
import { useLanguage } from "./LanguageProvider";

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      title: t("services.s1Title"),
      icon: ShoppingBag,
      desc: t("services.s1Desc"),
    },
    {
      title: t("services.s2Title"),
      icon: Wrench,
      desc: t("services.s2Desc"),
    },
    {
      title: t("services.s3Title"),
      icon: Settings,
      desc: t("services.s3Desc"),
    },
    {
      title: t("services.s4Title"),
      icon: Smartphone,
      desc: t("services.s4Desc"),
    },
    {
      title: t("services.s5Title"),
      icon: Filter,
      desc: t("services.s5Desc"),
    },
    {
      title: t("services.s6Title"),
      icon: Truck,
      desc: t("services.s6Desc"),
    },
  ];

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
            {t("services.badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
            {t("services.titleStart")} <span className="text-primary">{t("services.titleAccent")}</span>{t("services.titleEnd")}
          </h2>
          <p className="text-sm text-text-secondary max-w-xl font-medium mt-1">
            {t("services.subtitle")}
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
                className="group flex flex-col sm:flex-row gap-5 p-6 bg-white dark:bg-slate-800 border border-border-custom hover:border-primary/10 shadow-premium shadow-premium-hover cursor-default"
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
