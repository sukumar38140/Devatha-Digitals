"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowLeft, ArrowRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "D. Rajesh",
    role: "Local Guide",
    location: "Madanapalle",
    rating: 5,
    date: "2 weeks ago",
    comment: "Bought a Samsung Neo QLED Smart TV here. The showroom experience is outstanding. The staff is highly knowledgeable and explained all features in detail. Delivery and wall mounting installation were completed on the same day!",
  },
  {
    name: "S. Anitha",
    role: "Verified Buyer",
    location: "CTM Road",
    rating: 5,
    date: "1 month ago",
    comment: "I have been purchasing home appliances from Devatha Digitals for the last 10 years. They always offer the best competitive pricing, way better than online, and provide genuine brand warranty cards. Owner Babu Garu is extremely helpful.",
  },
  {
    name: "K. Imtiaz",
    role: "AC Client",
    location: "Madanapalle",
    rating: 5,
    date: "3 months ago",
    comment: "Excellent service! Bought a Daikin Inverter AC for my office. The technician crew arrived within 4 hours of my payment, conducted clean drilling, and finished setup without any hassle. True professionals.",
  },
  {
    name: "Manoj Kumar",
    role: "Mobile Enthusiast",
    location: "Madanapalle",
    rating: 5,
    date: "4 months ago",
    comment: "Got my new Vivo phone from Devatha. They matched the online discounts, helped me set up my email, transferred my entire data from the old handset, and gave a free protective tempered glass. Best offline purchase experience.",
  },
  {
    name: "Lakshmi Prasanna",
    role: "Homeowner",
    location: "Madanapalle",
    rating: 5,
    date: "6 months ago",
    comment: "Prompt after-sales assistance. When our washing machine had a minor error, we called Devatha Digitals. They immediately registered the service request with the company, and the engineer arrived the next morning.",
  },
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    }),
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const activeReview = testimonials[currentIndex];

  return (
    <section id="reviews" className="py-24 bg-brand-alt-bg/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 flex flex-col gap-3">
            <span className="text-sm font-bold text-primary tracking-wider uppercase">
              Customer Reviews
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
              What Madanapalle Says <span className="text-primary">About Us</span>
            </h2>
            <p className="text-sm text-text-secondary max-w-xl font-medium mt-1">
              Read authentic feedback from local homeowners and buyers who have experienced 
              our showroom hospitality and after-sales care.
            </p>
          </div>

          {/* Google Ratings Card */}
          <div className="lg:col-span-5 bg-white p-6 rounded-3xl shadow-premium border border-border-custom flex items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-1">
                <span className="text-3xl font-extrabold text-text-primary">4.4</span>
                <div className="flex text-yellow-400">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current opacity-50" />
                </div>
              </div>
              <p className="text-xs font-bold text-text-secondary uppercase tracking-wider mt-1">
                Google Business Rating
              </p>
            </div>
            <div className="border-l border-border-custom pl-6">
              <span className="text-2xl font-extrabold text-text-primary">612+</span>
              <p className="text-xs font-bold text-text-secondary uppercase tracking-wider mt-1">
                Verified Reviews
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial Slider Container */}
        <div className="relative max-w-3xl mx-auto min-h-[300px]">
          {/* Decorative Quote Icon */}
          <div className="absolute -top-6 -left-6 text-primary/10 select-none pointer-events-none">
            <Quote className="h-20 w-20 transform rotate-180" />
          </div>

          <div className="overflow-hidden bg-white p-8 sm:p-12 rounded-3xl shadow-premium border border-border-custom">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="flex flex-col gap-6"
              >
                {/* Stars and Date */}
                <div className="flex items-center justify-between">
                  <div className="flex text-yellow-400">
                    {Array.from({ length: activeReview.rating }).map((_, i) => (
                      <Star key={i} className="h-4.5 w-4.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-text-secondary uppercase tracking-widest">
                    {activeReview.date}
                  </span>
                </div>

                {/* Comment */}
                <blockquote className="text-base sm:text-lg text-text-primary font-medium italic leading-relaxed">
                  &ldquo;{activeReview.comment}&rdquo;
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-4 border-t border-border-custom pt-6 mt-2">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center font-bold text-primary text-lg">
                    {activeReview.name[0]}
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-text-primary">
                      {activeReview.name}
                    </h4>
                    <p className="text-xs font-bold text-text-secondary uppercase tracking-wider mt-0.5">
                      {activeReview.role} • {activeReview.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="p-3 bg-white border border-border-custom hover:border-primary/20 rounded-full text-text-secondary hover:text-primary shadow-sm hover:shadow-md transition-all duration-300"
              aria-label="Previous Review"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <span className="text-xs font-extrabold text-text-secondary select-none tracking-widest uppercase">
              {currentIndex + 1} / {testimonials.length}
            </span>
            <button
              onClick={handleNext}
              className="p-3 bg-white border border-border-custom hover:border-primary/20 rounded-full text-text-secondary hover:text-primary shadow-sm hover:shadow-md transition-all duration-300"
              aria-label="Next Review"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
