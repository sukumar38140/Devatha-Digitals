"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import { Award, Heart, CheckSquare, Star } from "lucide-react";

function Counter({ value, duration = 1.5 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const totalMiliseconds = duration * 1000;
      const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);
      
      const timer = setInterval(() => {
        start += Math.ceil(end / (totalMiliseconds / incrementTime));
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(start);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
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
    <section id="about" className="py-24 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left Side: Store Portfolio Image */}
          <motion.div className="lg:col-span-5 relative" variants={itemVariants}>
            <div className="relative">
              {/* Premium offset frame accent */}
              <div className="absolute -top-4 -left-4 w-2/3 h-2/3 border-t-4 border-l-4 border-primary rounded-tl-3xl pointer-events-none" />
              <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border-b-4 border-r-4 border-accent rounded-br-3xl pointer-events-none" />

              {/* Main Store image */}
              <div className="relative p-2 bg-white rounded-3xl shadow-xl border border-border-custom overflow-hidden">
                <div className="relative h-[480px] w-full rounded-2xl overflow-hidden bg-brand-alt-bg">
                  <Image
                    src="/images/devatha show room portfolio.png"
                    alt="Devatha Digitals Storefront Showcase"
                    fill
                    className="object-cover transform hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  {/* Subtle warm orange gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Business Story & Counter Cards */}
          <motion.div className="lg:col-span-7 flex flex-col gap-6" variants={itemVariants}>
            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold text-primary tracking-wider uppercase">
                Established 2005
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
                Our Story: Two Decades of <br />
                <span className="text-primary">Reliable service</span> & Trust
              </h2>
            </div>

            <p className="text-base text-text-secondary leading-relaxed font-medium">
              Devatha Digitals has been serving customers since 2005 and has become one of the most trusted 
              electronics showrooms in Madanapalle. Known for quality products, reliable service, and 
              unwavering customer satisfaction, the business continues to provide the latest electronics 
              from leading global brands.
            </p>

            <p className="text-base text-text-secondary leading-relaxed font-medium">
              Under the leadership of D Babu, we have built a reputation based on trust, transparent pricing, 
              and dedicated after-sales support. We don&apos;t just sell appliances; we deliver solutions 
              that elevate your everyday living.
            </p>

            {/* Counters Grid */}
            <div className="grid grid-cols-2 gap-6 mt-6">
              {/* Stat 1 */}
              <div className="p-5 bg-brand-alt-bg/60 rounded-2xl border border-primary/10 flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-xl text-primary">
                    <Award className="h-5 w-5" />
                  </div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-text-primary">
                    <Counter value={21} />+
                  </span>
                </div>
                <span className="text-xs font-bold text-text-secondary uppercase tracking-wider">
                  Years of Experience
                </span>
              </div>

              {/* Stat 2 */}
              <div className="p-5 bg-brand-alt-bg/60 rounded-2xl border border-primary/10 flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-xl text-primary">
                    <Star className="h-5 w-5" />
                  </div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-text-primary">
                    <Counter value={600} />+
                  </span>
                </div>
                <span className="text-xs font-bold text-text-secondary uppercase tracking-wider">
                  Customer Reviews
                </span>
              </div>

              {/* Stat 3 */}
              <div className="p-5 bg-brand-alt-bg/60 rounded-2xl border border-primary/10 flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-xl text-primary">
                    <Heart className="h-5 w-5" />
                  </div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-text-primary">
                    <Counter value={10000} />+
                  </span>
                </div>
                <span className="text-xs font-bold text-text-secondary uppercase tracking-wider">
                  Happy Customers
                </span>
              </div>

              {/* Stat 4 */}
              <div className="p-5 bg-brand-alt-bg/60 rounded-2xl border border-primary/10 flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-xl text-primary">
                    <CheckSquare className="h-5 w-5" />
                  </div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-text-primary">
                    <Counter value={15} />+
                  </span>
                </div>
                <span className="text-xs font-bold text-text-secondary uppercase tracking-wider">
                  Multiple Top Brands
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
