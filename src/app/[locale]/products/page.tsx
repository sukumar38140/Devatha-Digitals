import React from "react";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Product Catalog | Devatha Digitals Madanapalle",
  description: "Browse 27+ premium appliances, smartphones, smart TVs, refrigerators, and ACs available in stock at Devatha Digitals showroom.",
};

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-10">
        <Products />
      </main>
      <Footer />
    </>
  );
}
