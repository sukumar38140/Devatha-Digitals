"use client";

import React from "react";
import { ShoppingBag } from "lucide-react";

const brands = [
  { name: "Samsung", logoText: "SAMSUNG", fontStyle: "font-sans tracking-widest font-black text-blue-900" },
  { name: "LG", logoText: "LG Life's Good", fontStyle: "font-sans font-bold tracking-tight text-red-700" },
  { name: "Sony", logoText: "SONY", fontStyle: "font-serif tracking-[0.25em] font-extrabold text-black" },
  { name: "Vivo", logoText: "vivo", fontStyle: "font-sans italic font-bold text-blue-600 lowercase" },
  { name: "Oppo", logoText: "OPPO", fontStyle: "font-sans font-medium tracking-widest text-emerald-600" },
  { name: "Realme", logoText: "realme", fontStyle: "font-sans font-bold text-yellow-500 lowercase" },
  { name: "Xiaomi", logoText: "mi", fontStyle: "font-sans font-extrabold text-orange-600 lowercase bg-orange-100 px-2.5 py-0.5 rounded" },
  { name: "Panasonic", logoText: "Panasonic", fontStyle: "font-serif italic font-bold tracking-wide text-blue-950" },
  { name: "Whirlpool", logoText: "Whirlpool", fontStyle: "font-sans font-semibold tracking-wide text-orange-400" },
  { name: "Daikin", logoText: "DAIKIN", fontStyle: "font-sans tracking-wide font-black text-sky-500" },
  { name: "IFB", logoText: "IFB", fontStyle: "font-sans tracking-widest font-black text-red-600" },
];

const brandDetailsList = [
  {
    name: "Samsung",
    tagline: "Smart Innovation Leaders",
    nameStyle: "text-blue-950 font-sans tracking-wide font-black",
    products: [
      "Galaxy S24 Ultra & Z Fold/Flip Series",
      "Neo QLED 4K & Crystal UHD Smart TVs",
      "Side-by-Side & Double Door Refrigerators",
      "Fully Automatic Front & Top Load Washers"
    ],
    borderGlow: "group-hover:border-blue-500/30"
  },
  {
    name: "Sony",
    tagline: "Cinematic Audio & Video",
    nameStyle: "text-black font-serif tracking-[0.1em] font-extrabold uppercase",
    products: [
      "Bravia XR OLED 4K Google TVs",
      "Dolby Atmos Home Theater Soundbars",
      "Premium Headphones & Wireless Earbuds",
      "Alpha Mirrorless Professional Cameras"
    ],
    borderGlow: "group-hover:border-zinc-500/30"
  },
  {
    name: "LG",
    tagline: "Pioneering Smart Life",
    nameStyle: "text-red-700 font-sans font-black tracking-tight",
    products: [
      "OLED Evo C-Series Smart TVs",
      "AI Direct-Drive Front Load Washers",
      "Smart Inverter Double Door Fridges",
      "Dual Inverter Window & Split ACs"
    ],
    borderGlow: "group-hover:border-rose-500/30"
  },
  {
    name: "Daikin",
    tagline: "Air Conditioning Experts",
    nameStyle: "text-sky-500 font-sans tracking-wide font-black uppercase",
    products: [
      "Premium 5 Star Inverter Split ACs",
      "Heavy-Duty Cooling Window AC units",
      "Triple Display Power Saving ACs",
      "Commercial Cassette Cooling Solutions"
    ],
    borderGlow: "group-hover:border-sky-500/30"
  },
  {
    name: "IFB",
    tagline: "Laundry Engineering Experts",
    nameStyle: "text-red-600 font-sans tracking-widest font-black uppercase",
    products: [
      "Senator Smart Front Load Washers",
      "Aqua-Energie Hard Water Washers",
      "Fully Automatic Clothes Dryers",
      "Premium Kitchen Microwave Ovens"
    ],
    borderGlow: "group-hover:border-red-500/30"
  },
  {
    name: "Vivo",
    tagline: "Vanguard Mobile Photography",
    nameStyle: "text-blue-600 font-sans italic font-bold lowercase",
    products: [
      "Vivo V30 & V30 Pro 5G Handsets",
      "Vivo T2 & Y200 Youth Series",
      "Zeiss Lens Portrait Smartphones",
      "V-Shield Extended Warranty Phones"
    ],
    borderGlow: "group-hover:border-indigo-500/30"
  },
  {
    name: "Oppo",
    tagline: "Aesthetic Phone Durability",
    nameStyle: "text-emerald-600 font-sans font-semibold tracking-wider uppercase",
    products: [
      "Oppo Reno11 & Reno11 Pro 5G",
      "Oppo F25 Pro Series Handsets",
      "SuperVOOC High-Speed Chargers",
      "Oppo Enco Wireless Air Earbuds"
    ],
    borderGlow: "group-hover:border-emerald-500/30"
  },
  {
    name: "Realme",
    tagline: "High-Performance Value",
    nameStyle: "text-amber-500 font-sans font-black lowercase",
    products: [
      "Realme 12 Pro+ Curved OLED Phones",
      "Realme Narzo Performance Series",
      "Realme TechLife Buds & Wearables",
      "Realme Smart Android Accessories"
    ],
    borderGlow: "group-hover:border-amber-500/30"
  },
  {
    name: "Xiaomi",
    tagline: "Smart Connected Living",
    nameStyle: "text-orange-600 font-sans font-black lowercase bg-orange-50 px-2.5 py-0.5 rounded inline-block",
    products: [
      "Redmi Note 13 Pro 5G Smartphones",
      "Mi Smart TV Horizon 4K Screens",
      "Xiaomi Smart Home IoT System Devices",
      "Mi Powerbanks & Charging Plugs"
    ],
    borderGlow: "group-hover:border-orange-500/30"
  },
  {
    name: "Whirlpool",
    tagline: "6th Sense Refrigeration",
    nameStyle: "text-orange-400 font-sans font-bold tracking-wide",
    products: [
      "IntelliFresh Double Door Refrigerators",
      "Protton Triple Door Fridges",
      "Convertible 10-in-1 Cooling Fridges",
      "Whirlpool Magicook Microwave Ovens"
    ],
    borderGlow: "group-hover:border-yellow-500/30"
  },
  {
    name: "Panasonic",
    tagline: "Japanese Precision Engineering",
    nameStyle: "text-blue-900 font-serif italic font-extrabold",
    products: [
      "Panasonic Smart Wi-Fi Inverter ACs",
      "Panasonic nanoe™ Air Purifying ACs",
      "Panasonic Convection Microwave Ovens",
      "Panasonic Carbon Condenser AC Units"
    ],
    borderGlow: "group-hover:border-teal-500/30"
  }
];

export default function Brands({ detailed = false }: { detailed?: boolean }) {
  // Duplicate list to create a seamless marquee loop
  const marqueeItems = [...brands, ...brands];

  return (
    <section id="brands" className={`py-16 bg-white ${detailed ? "" : "border-y border-border-custom"} overflow-hidden`}>
      {/* Heading Block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <span className="text-xs font-bold text-primary tracking-widest uppercase">
          Authorized Showroom Partner
        </span>
        <h3 className="text-xl font-extrabold text-text-primary tracking-tight mt-1">
          Top-Tier Brands Under One Roof
        </h3>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative w-full overflow-hidden py-4 select-none">
        {/* Soft fading edges for premium look */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee whitespace-nowrap inline-flex gap-8 items-center">
          {marqueeItems.map((brand, index) => (
            <div
              key={index}
              className="inline-flex items-center justify-center min-w-[160px] h-20 bg-brand-alt-bg/30 px-6 rounded-2xl border border-border-custom/50 hover:border-primary/30 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 bg-white cursor-pointer"
            >
              <span className={`text-base select-none ${brand.fontStyle}`}>
                {brand.logoText}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Brand Profiles (Only shown on dedicated /brands page) */}
      {detailed && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          
          {/* Sub-header */}
          <div className="text-center flex flex-col items-center gap-3 mb-16">
            <div className="inline-flex items-center gap-1 text-primary">
              <ShoppingBag className="h-4.5 w-4.5" />
              <span className="text-xs font-bold tracking-widest uppercase">Brand Curations</span>
            </div>
            <h2 className="text-3xl font-extrabold text-text-primary tracking-tight">
              Our Authorized <span className="text-primary">Product Lines</span>
            </h2>
            <p className="text-sm text-text-secondary max-w-2xl font-medium mt-1">
              Browse through the specific premium appliances and smartphones we supply in 
              partnership with each authorized manufacturer.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brandDetailsList.map((brand) => (
              <div
                key={brand.name}
                className={`group p-8 bg-white border border-border-custom rounded-3xl shadow-premium shadow-premium-hover flex flex-col justify-between cursor-default transition-all duration-300 ${brand.borderGlow}`}
              >
                {/* Header details */}
                <div className="flex flex-col gap-4">
                  <div>
                    {/* Stylized Brand Name according to respective brand color guidelines */}
                    <h3 className={`text-2xl font-extrabold tracking-tight transition-transform duration-300 group-hover:scale-[1.02] ${brand.nameStyle}`}>
                      {brand.name}
                    </h3>
                    <p className="text-xs font-bold text-text-secondary mt-1 uppercase tracking-wider">
                      {brand.tagline}
                    </p>
                  </div>

                  {/* Products Under Brand (Line-by-Line List) */}
                  <div className="flex flex-col gap-2 border-t border-border-custom/50 pt-4">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Featured Products:</span>
                    <ul className="flex flex-col gap-1.5 pl-1">
                      {brand.products.map((item, idx) => (
                        <li key={idx} className="text-xs font-semibold text-text-primary leading-tight list-none flex items-start gap-1.5">
                          <span className="text-primary shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      )}
    </section>
  );
}
