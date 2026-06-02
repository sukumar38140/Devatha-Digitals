import React from "react";
import Navbar from "@/components/Navbar";
import Brands from "@/components/Brands";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Authorized Brands | Devatha Digitals Madanapalle",
  description: "Check out the leading global brand partners of Devatha Digitals, including Samsung, LG, Sony, Daikin, IFB, and Vivo.",
};

export default function BrandsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-10">
        <Brands detailed={true} />
      </main>
      <Footer />
    </>
  );
}
