import React from "react";
import Navbar from "@/components/Navbar";
import Location from "@/components/Location";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact Us & Location Map | Devatha Digitals Madanapalle",
  description: "Get directions, contact numbers, and request a pricing quote from Devatha Digitals above HDFC Bank on CTM Road, Madanapalle.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-10">
        <Location />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
