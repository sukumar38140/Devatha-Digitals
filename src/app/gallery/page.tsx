import React from "react";
import Navbar from "@/components/Navbar";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Showroom Photo Gallery | Devatha Digitals Madanapalle",
  description: "View high-resolution images of the Devatha Digitals electronics showroom, departments, and storefront at CTM Road, Madanapalle.",
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-10">
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
