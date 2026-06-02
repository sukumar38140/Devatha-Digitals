import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Products from "@/components/Products";
import WhyChooseUs from "@/components/WhyChooseUs";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Premium Sticky Navigation */}
      <Navbar />

      <main className="flex-grow flex flex-col">
        {/* Hero Landing Section */}
        <Hero />

        {/* Brand Partner Carousel */}
        <Brands />

        {/* Department Categories (Live Catalog Hidden, Links to /products) */}
        <Products hideShowcase={true} />

        {/* Why Choose Us Trust Factors */}
        <WhyChooseUs />

        {/* Showroom Map & Contact CTAs */}
        <Location />
      </main>

      {/* 4-Column Business Footer */}
      <Footer />
    </>
  );
}

