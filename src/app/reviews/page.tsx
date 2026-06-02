import React from "react";
import Navbar from "@/components/Navbar";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Customer Reviews | Devatha Digitals Madanapalle",
  description: "Read verified customer testimonials and learn why Devatha Digitals holds a 4.4+ rating based on 612 reviews in Madanapalle.",
};

export default function ReviewsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-10">
        <Reviews />
      </main>
      <Footer />
    </>
  );
}
