import React from "react";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Showroom Services | Devatha Digitals Madanapalle",
  description: "Learn about electronic sales, AC installation, appliance repairs, and water purifier filter solutions offered by Devatha Digitals.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-10">
        <Services />
      </main>
      <Footer />
    </>
  );
}
