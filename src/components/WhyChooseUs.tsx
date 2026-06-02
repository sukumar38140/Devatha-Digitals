"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { 
  Award, 
  ShieldCheck, 
  Tag, 
  Truck, 
  HeartHandshake, 
  UserCheck 
} from "lucide-react";

const reasons = [
  {
    title: "Trusted Since 2005",
    icon: Award,
    desc: "Over 21 years of delivering premium customer service and electronic reliability in Madanapalle.",
  },
  {
    title: "100% Genuine Products",
    icon: ShieldCheck,
    desc: "All our electronics are sourced directly from official brand partners with full warranty coverage.",
  },
  {
    title: "Best Price Guarantee",
    icon: Tag,
    desc: "Get competitive retail rates and exciting seasonal discounts on top home appliances.",
  },
  {
    title: "Same Day Delivery",
    icon: Truck,
    desc: "Fast and reliable shipping directly to your doorstep in and around Madanapalle.",
  },
  {
    title: "Excellent After-Sales Support",
    icon: HeartHandshake,
    desc: "Dedicated post-purchase query support, product installation assistance, and maintenance guidance.",
  },
  {
    title: "Expert Assistance",
    icon: UserCheck,
    desc: "Get personalized tech advice from our store staff to choose the perfect appliance for your home.",
  },
];

export default function WhyChooseUs() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-24 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-3 mb-16">
          <span className="text-sm font-bold text-primary tracking-wider uppercase">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
            Our Commitment to <span className="text-primary">Your Experience</span>
          </h2>
          <p className="text-sm text-text-secondary max-w-xl font-medium mt-1">
            Discover why generations of families in Madanapalle trust Devatha Digitals for 
            their electronic purchases.
          </p>
        </div>

        {/* Feature Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group p-8 bg-white border border-border-custom hover:border-primary/20 rounded-3xl shadow-premium shadow-premium-hover flex flex-col gap-4 cursor-default"
              >
                {/* Icon Box */}
                <div className="bg-brand-alt-bg/85 group-hover:bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary group-hover:text-accent transition-colors duration-300">
                  <Icon className="h-6 w-6" />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-extrabold text-text-primary group-hover:text-primary transition-colors duration-200">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed font-medium">
                    {reason.desc}
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
