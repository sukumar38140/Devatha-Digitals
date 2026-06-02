"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const galleryImages = [
  {
    src: "/images/devatha-digitals-showroom.avif",
    alt: "Devatha Digitals Premium Showroom Interior",
    title: "Main Showroom",
  },
  {
    src: "/images/Devatha showroom daytime photo.jpg",
    alt: "Devatha Digitals Storefront Daytime View",
    title: "Storefront Exterior",
  },
  {
    src: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=600&auto=format&fit=crop",
    alt: "Premium Smart LED TV Display Wall",
    title: "Smart TV Display",
  },
  {
    src: "/images/devatha show room portfolio.png",
    alt: "Devatha Digitals Mobile Section and Service Counter",
    title: "Mobile & Accessories Desk",
  },
  {
    src: "https://images.unsplash.com/photo-1557180295-76eee20ae8aa?q=80&w=600&auto=format&fit=crop",
    alt: "Latest Smartphones Retail Counter Showcase",
    title: "Premium Mobile Hub",
  },
  {
    src: "/images/devatha digitals orange theme.png",
    alt: "Devatha Digitals Premium Orange Branding",
    title: "Brand Banner Showcase",
  },
  {
    src: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=600&auto=format&fit=crop",
    alt: "Air Conditioner & Cooling Solutions Aisle",
    title: "AC & Appliances",
  },
  {
    src: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=600&auto=format&fit=crop",
    alt: "Modern Electronics Retail Showroom Layout",
    title: "Appliances Showroom",
  },
];

export default function Gallery() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="gallery" className="py-24 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-3 mb-16">
          <span className="text-sm font-bold text-primary tracking-wider uppercase">
            Store Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
            Take a Virtual <span className="text-primary">Showroom Tour</span>
          </h2>
          <p className="text-sm text-text-secondary max-w-xl font-medium mt-1">
            Browse images of our physical retail floor and product departments located at 
            CTM Road, Madanapalle.
          </p>
        </div>

        {/* Masonry Columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 [column-fill:_balance]">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setActiveImage(img.src)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveImage(img.src);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View larger image: ${img.title}`}
              className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-premium border border-border-custom bg-brand-alt-bg cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                style={{ width: "100%", height: "auto" }}
                className="object-cover transform transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                <div className="bg-white p-3 rounded-full text-primary shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <ZoomIn className="h-5 w-5" />
                </div>
                <span className="text-white font-extrabold text-sm tracking-wide transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {img.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {activeImage && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Close Area */}
              <div
                className="absolute inset-0 cursor-zoom-out"
                onClick={() => setActiveImage(null)}
              />

              {/* Close Button */}
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-6 right-6 z-10 p-3 bg-brand-alt-bg hover:bg-primary/10 rounded-full text-text-primary hover:text-primary transition-colors duration-200"
                aria-label="Close Lightbox"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Image Frame */}
              <motion.div
                className="relative max-w-[90vw] max-h-[85vh] p-2 bg-white rounded-3xl shadow-2xl border border-border-custom overflow-hidden z-10 flex items-center justify-center"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
              >
                <Image
                  src={activeImage}
                  alt="Devatha Showroom Preview"
                  width={1200}
                  height={800}
                  unoptimized
                  className="rounded-2xl max-w-full max-h-[80vh] object-contain"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
