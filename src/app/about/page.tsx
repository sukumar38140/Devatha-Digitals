import React from "react";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Us | Devatha Digitals Madanapalle",
  description: "Learn more about Devatha Digitals, serving customers since 2005 with premium electronics, appliances, and expert advice in Madanapalle.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-10">
        <About />
      </main>
      <Footer />
    </>
  );
}
