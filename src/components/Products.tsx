"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  Smartphone, 
  Tv, 
  Wind, 
  Laptop, 
  Headphones, 
  Droplet,
  Waves,
  Cpu,
  ShoppingBag,
  Sparkles
} from "lucide-react";

const categories = [
  {
    title: "Smartphones",
    icon: Smartphone,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=600&auto=format&fit=crop",
    desc: "Latest models from Apple, Samsung, Vivo, Oppo, Realme, and Xiaomi.",
  },
  {
    title: "Smart TVs",
    icon: Tv,
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=600&auto=format&fit=crop",
    desc: "Ultra HD 4K, QLED, OLED screens from Sony, LG, Samsung, and OnePlus.",
  },
  {
    title: "Air Conditioners",
    icon: Wind,
    image: "/images/air-conditioner-category.png",
    desc: "Energy-efficient split and inverter ACs from Daikin, Lloyd, and Panasonic.",
  },
  {
    title: "Refrigerators",
    icon: Cpu,
    image: "/images/refrigerator-category.png",
    desc: "Single-door, double-door, and side-by-side models from Samsung, LG, and Whirlpool.",
  },
  {
    title: "Washing Machines",
    icon: Waves,
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=600&auto=format&fit=crop",
    desc: "Top-load, front-load, and semi-automatic machines from IFB, LG, and Samsung.",
  },
  {
    title: "Water Purifiers",
    icon: Droplet,
    image: "/images/water-purifier-category.png",
    desc: "RO + UV water purification systems from Kent, Aquaguard, and Havells.",
  },
  {
    title: "Laptops",
    icon: Laptop,
    image: "/images/laptop-category.png",
    desc: "Premium computing notebooks for work, study, and gaming from HP, Dell, and Lenovo.",
  },
  {
    title: "Electronic Accessories",
    icon: Headphones,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=600&auto=format&fit=crop",
    desc: "Smartwatches, earbuds, soundbars, chargers, and utility electronic accessories.",
  },
];

const productsList = [
  // Smartphones (6)
  {
    name: "Apple iPhone 15 Pro Max",
    brand: "Apple",
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=500&auto=format&fit=crop",
    specs: "A17 Pro Chip | 120Hz ProMotion | Titanium Design",
  },
  {
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=500&auto=format&fit=crop",
    specs: "200MP Camera | S-Pen Included | Galaxy AI Built-in",
  },
  {
    name: "OnePlus 12 5G",
    brand: "OnePlus",
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=500&auto=format&fit=crop",
    specs: "100W SuperVOOC | Hasselblad Camera | Snapdragon 8 Gen 3",
  },
  {
    name: "Vivo V30 Pro 5G",
    brand: "Vivo",
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=500&auto=format&fit=crop",
    specs: "Zeiss Portrait Camera | Aura Light LED | Slim design",
  },
  {
    name: "Oppo Reno11 Pro 5G",
    brand: "Oppo",
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1565849906660-4469279f5793?q=80&w=500&auto=format&fit=crop",
    specs: "32MP Telephoto Portrait | 80W SuperVOOC | 120Hz Curved OLED",
  },
  {
    name: "Realme 12 Pro+ 5G",
    brand: "Realme",
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=500&auto=format&fit=crop",
    specs: "64MP Periscope Camera | 120Hz Curved Display | Luxury Watch Design",
  },

  // Smart TVs (4)
  {
    name: "Sony Bravia XR OLED TV",
    brand: "Sony",
    category: "Smart TVs",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=500&auto=format&fit=crop",
    specs: "55\" 4K HDR | Cognitive Processor | Acoustic Surface Sound",
  },
  {
    name: "Samsung Neo QLED 4K Smart TV",
    brand: "Samsung",
    category: "Smart TVs",
    image: "https://images.unsplash.com/photo-1552533171-ee34570fa228?q=80&w=500&auto=format&fit=crop",
    specs: "65\" 4K TV | Quantum Mini LEDs | Dolby Atmos Object Sound",
  },
  {
    name: "LG OLED C3 Series Smart TV",
    brand: "LG",
    category: "Smart TVs",
    image: "https://images.unsplash.com/photo-1461151304267-38535e780c79?q=80&w=500&auto=format&fit=crop",
    specs: "55\" 4K | α9 AI Processor Gen6 | Pixel Dimming Technology",
  },
  {
    name: "Xiaomi Smart LED TV X Series",
    brand: "Xiaomi",
    category: "Smart TVs",
    image: "https://images.unsplash.com/photo-1601944179066-297cbd3cdef3?q=80&w=500&auto=format&fit=crop",
    specs: "43\" 4K Ultra HD | Google TV OS | Dolby Audio 30W Soundbar",
  },

  // Air Conditioners (3)
  {
    name: "Daikin Inverter Split AC",
    brand: "Daikin",
    category: "Air Conditioners",
    image: "https://images.unsplash.com/photo-1621905252507-b354bc25edac?q=80&w=500&auto=format&fit=crop",
    specs: "1.5 Ton 5 Star | Inverter Compressor | PM 2.5 Filters",
  },
  {
    name: "Lloyd Power Cool Split AC",
    brand: "Lloyd",
    category: "Air Conditioners",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=500&auto=format&fit=crop",
    specs: "1.5 Ton 3 Star | 5-in-1 Expandable AC | Anti-Viral Filter",
  },
  {
    name: "Panasonic Smart Wi-Fi AC",
    brand: "Panasonic",
    category: "Air Conditioners",
    image: "https://images.unsplash.com/photo-1509782774605-f0b985a6dbb5?q=80&w=500&auto=format&fit=crop",
    specs: "1.5 Ton 5 Star | Wi-Fi Connected | MirAIe Alexa/Google Control",
  },

  // Refrigerators (3)
  {
    name: "Samsung Double Door Refrigerator",
    brand: "Samsung",
    category: "Refrigerators",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=500&auto=format&fit=crop",
    specs: "253L 3 Star | Convertible 5-in-1 | Digital Inverter Motor",
  },
  {
    name: "LG Single Door Smart Refrigerator",
    brand: "LG",
    category: "Refrigerators",
    image: "https://images.unsplash.com/photo-1571175432240-5b5f87b68a35?q=80&w=500&auto=format&fit=crop",
    specs: "185L 5 Star | Direct Cool | Smart Inverter Auto-connect",
  },
  {
    name: "Whirlpool Double Door Convertible",
    brand: "Whirlpool",
    category: "Refrigerators",
    image: "https://images.unsplash.com/photo-1536331988406-0b59b58ad982?q=80&w=500&auto=format&fit=crop",
    specs: "340L 3 Star | IntelliSense Inverter | convertible 10-in-1",
  },

  // Washing Machines (3)
  {
    name: "IFB Front Load Washing Machine",
    brand: "IFB",
    category: "Washing Machines",
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=500&auto=format&fit=crop",
    specs: "7kg 5 Star | 2D Wash system | Aqua Energie hard water filter",
  },
  {
    name: "Samsung Eco Bubble Top Load",
    brand: "Samsung",
    category: "Washing Machines",
    image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=500&auto=format&fit=crop",
    specs: "7kg Fully Automatic | Eco Bubble wash | Dual Storm pulsator",
  },
  {
    name: "LG Front Load Inverter Washer",
    brand: "LG",
    category: "Washing Machines",
    image: "https://images.unsplash.com/photo-1545173168-9f1947eebd01?q=80&w=500&auto=format&fit=crop",
    specs: "8kg AI DD Inverter | Direct Drive Motor | Steam Wash tech",
  },

  // Water Purifiers (2)
  {
    name: "Kent Grand+ RO Water Purifier",
    brand: "Kent",
    category: "Water Purifiers",
    image: "https://images.unsplash.com/photo-1585832770485-e386d415e8c1?q=80&w=500&auto=format&fit=crop",
    specs: "RO + UV + UF + TDS Controller | 9L Water Tank | Auto flushing",
  },
  {
    name: "Aquaguard Ritz Purifier",
    brand: "Aquaguard",
    category: "Water Purifiers",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=500&auto=format&fit=crop",
    specs: "RO + UV + Active Copper | Stainless Steel tank | Mineral Guard",
  },

  // Laptops (3)
  {
    name: "HP Pavilion 15 Notebook",
    brand: "HP",
    category: "Laptops",
    image: "https://images.unsplash.com/photo-1496181130204-755241524eab?q=80&w=500&auto=format&fit=crop",
    specs: "AMD Ryzen 5 | 16GB RAM | 512GB NVMe SSD | 15.6\" FHD Screen",
  },
  {
    name: "Dell Inspiron 14 Laptop",
    brand: "Dell",
    category: "Laptops",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=500&auto=format&fit=crop",
    specs: "Intel Core i5 13th Gen | 16GB RAM | 512GB SSD | Backlit Keyboard",
  },
  {
    name: "Lenovo IdeaPad Slim 3",
    brand: "Lenovo",
    category: "Laptops",
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=500&auto=format&fit=crop",
    specs: "Intel Core i3 | 8GB RAM | 512GB SSD | Dolby Audio Speaker",
  },

  // Accessories (3)
  {
    name: "Samsung Galaxy Buds2 Pro",
    brand: "Samsung",
    category: "Electronic Accessories",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=500&auto=format&fit=crop",
    specs: "24-bit Hi-Fi Audio | Intelligent Active Noise Cancellation | 360 sound",
  },
  {
    name: "OnePlus Nord Buds 2",
    brand: "OnePlus",
    category: "Electronic Accessories",
    image: "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?q=80&w=500&auto=format&fit=crop",
    specs: "25dB Active Noise Cancellation | 12.4mm Dynamic drivers | 36h Playback",
  },
  {
    name: "boAt Wave Call Smartwatch",
    brand: "boAt",
    category: "Electronic Accessories",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=500&auto=format&fit=crop",
    specs: "1.69\" HD Display | Bluetooth Calling | SpO2 Heart Rate monitor",
  }
];

const filterCategories = [
  "All",
  "Smartphones",
  "Smart TVs",
  "Air Conditioners",
  "Refrigerators",
  "Washing Machines",
  "Water Purifiers",
  "Laptops",
  "Electronic Accessories"
];

export default function Products({ hideShowcase = false }: { hideShowcase?: boolean }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = productsList.filter(
    (product) => selectedCategory === "All" || product.category === selectedCategory
  );

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="products" className="py-24 bg-brand-alt-bg/35 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Grid Section */}
        <div className="text-center flex flex-col items-center gap-3 mb-16">
          <span className="text-sm font-bold text-primary tracking-wider uppercase">
            Showroom Categories
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
            Explore Our <span className="text-primary">Department Sections</span>
          </h2>
          <p className="text-sm text-text-secondary max-w-xl font-medium mt-1">
            Browse through our wide selection of certified home appliances and electronics 
            sourced directly from the world&apos;s most trusted manufacturers.
          </p>
        </div>

        {/* Categories Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-28"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {categories.map((cat, idx) => {
            const IconComponent = cat.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                onClick={() => {
                  const targetCategory = filterCategories.find(c => c.toLowerCase() === cat.title.toLowerCase()) || 
                                        (cat.title === "Electronic Accessories" ? "Electronic Accessories" : "All");
                  setSelectedCategory(targetCategory);
                  document.getElementById("live-showcase")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group bg-white rounded-3xl overflow-hidden shadow-premium shadow-premium-hover border border-border-custom flex flex-col cursor-pointer"
              >
                {/* Image Wrap */}
                <div className="relative h-48 w-full overflow-hidden bg-brand-alt-bg shrink-0">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-108"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Subtle Orange overlay */}
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/0 transition-colors duration-300" />
                  
                  {/* Category Floating Icon Badge */}
                  <div className="absolute bottom-4 right-4 bg-white p-3 rounded-2xl shadow-md text-primary border border-border-custom/50 transform group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="h-5 w-5" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow gap-2">
                  <h3 className="text-lg font-bold text-text-primary group-hover:text-primary transition-colors duration-200">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed font-medium">
                    {cat.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {hideShowcase ? (
          <div className="flex justify-center mt-16">
            <a
              href="/products"
              className="flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-white font-bold hover:bg-accent transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <span>Explore Live Product Showcase</span>
              <span className="text-base font-bold">→</span>
            </a>
          </div>
        ) : (
          <div id="live-showcase" className="scroll-mt-24 border-t border-border-custom/80 pt-20">
            
            {/* Header */}
            <div className="text-center flex flex-col items-center gap-3 mb-12">
              <span className="text-sm font-bold text-primary tracking-wider uppercase">
                Showroom Catalog
              </span>
              <h2 className="text-3xl font-extrabold text-text-primary tracking-tight">
                Featured <span className="text-primary">Appliance Catalog</span> ({productsList.length} Items)
              </h2>
              <p className="text-sm text-text-secondary max-w-xl font-medium mt-1">
                Select a category tab below to filter current in-stock appliances and inquire 
                about pricing directly.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-5xl mx-auto">
              {filterCategories.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedCategory(tab)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                    selectedCategory === tab
                      ? "bg-primary text-white shadow-md shadow-primary/20 scale-105"
                      : "bg-white border border-border-custom text-text-secondary hover:text-primary hover:border-primary/30"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Products Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              layout
            >
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((prod) => (
                  <motion.div
                    key={prod.name}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="group bg-white rounded-2xl overflow-hidden shadow-premium border border-border-custom flex flex-col justify-between"
                  >
                    {/* Product Image */}
                    <div className="relative h-44 w-full overflow-hidden bg-brand-alt-bg shrink-0">
                      <Image
                        src={prod.image}
                        alt={prod.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      />
                      
                      {/* Brand Badge */}
                      <span className="absolute top-3 left-3 bg-primary text-white text-[10px] font-extrabold px-3 py-1 rounded-full shadow-sm">
                        {prod.brand}
                      </span>

                      {/* Stock Status */}
                      <span className="absolute top-3 right-3 bg-emerald-500 text-white text-[9px] font-extrabold px-2 py-0.5 rounded-md flex items-center gap-1 shadow-sm uppercase tracking-wide">
                        <Sparkles className="h-3 w-3 fill-current" />
                        In Stock
                      </span>
                    </div>

                    {/* Product Details */}
                    <div className="p-5 flex flex-col flex-grow gap-2">
                      <span className="text-[10px] font-bold text-primary tracking-wider uppercase">
                        {prod.category}
                      </span>
                      <h4 className="text-sm font-extrabold text-text-primary leading-tight group-hover:text-primary transition-colors duration-200">
                        {prod.name}
                      </h4>
                      <p className="text-xs text-text-secondary leading-relaxed font-semibold mt-1">
                        {prod.specs}
                      </p>
                    </div>

                    {/* Action Button */}
                    <div className="p-5 pt-0 mt-auto">
                      <a
                        href={`https://wa.me/919948020830?text=${encodeURIComponent(
                          `Hi Devatha Digitals, I am interested in purchasing:\n\n` +
                          `*Product:* ${prod.name}\n` +
                          `*Specs:* ${prod.specs}\n` +
                          `*Category:* ${prod.category}\n\n` +
                          `Please let me know the availability and best price.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 w-full py-2.5 bg-brand-alt-bg group-hover:bg-primary text-text-primary group-hover:text-white text-xs font-bold rounded-xl transition-all duration-300 border border-border-custom group-hover:border-primary cursor-pointer"
                      >
                        <ShoppingBag className="h-3.5 w-3.5" />
                        <span>Inquire Best Price</span>
                      </a>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        )}

      </div>
    </section>
  );
}
