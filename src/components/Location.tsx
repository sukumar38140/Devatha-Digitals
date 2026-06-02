"use client";

import React from "react";
import { MapPin, Phone, MessageSquare, Compass, Clock } from "lucide-react";

export default function Location() {
  const mapQueryUrl = "https://maps.google.com/maps?q=Devatha%20Digitals,%20CTM%20Road,%20Madanapalle&t=&z=16&ie=UTF8&iwloc=&output=embed";
  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=Devatha+Digitals,+CTM+Road,+Madanapalle";

  return (
    <section id="location" className="py-24 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-3 mb-16">
          <span className="text-sm font-bold text-primary tracking-wider uppercase">
            Store Location
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
            Visit Our <span className="text-primary">Showroom Today</span>
          </h2>
          <p className="text-sm text-text-secondary max-w-xl font-medium mt-1">
            We are conveniently located in the commercial heart of Madanapalle. Walk in 
            to check out the latest deals in person.
          </p>
        </div>

        {/* Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Address Details Card */}
          <div className="lg:col-span-4 bg-brand-alt-bg/60 p-8 rounded-3xl border border-primary/10 flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-primary tracking-widest uppercase">
                  Showroom Address
                </span>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 p-3 rounded-2xl text-primary shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-lg text-text-primary">
                    Devatha Digitals
                  </h4>
                  <p className="text-sm text-text-secondary leading-relaxed font-medium mt-1.5">
                    Above HDFC Bank,<br />
                    CTM Road, Madanapalle,<br />
                    Andhra Pradesh - 517325
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 p-3 rounded-2xl text-primary shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-base text-text-primary">
                    Business Hours
                  </h4>
                  <p className="text-sm text-text-secondary leading-relaxed font-medium mt-1">
                    10:00 AM – 09:00 PM<br />
                    Open All 7 Days a Week
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-3">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full py-3.5 bg-primary text-white font-bold rounded-2xl hover:bg-accent transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Compass className="h-5 w-5" />
                <span>Get Directions</span>
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href="tel:+919948020830"
                  className="flex items-center justify-center gap-2 py-3 border-2 border-primary/20 bg-white text-primary font-bold rounded-2xl hover:bg-brand-alt-bg transition-all duration-300"
                >
                  <Phone className="h-4.5 w-4.5" />
                  <span>Call Store</span>
                </a>
                <a
                  href="https://wa.me/919948020830?text=Hi%20Devatha%20Digitals,%20I%20would%20like%20to%20inquire%20about%20your%20products%20and%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border-2 border-emerald-500/20 bg-white text-emerald-600 font-bold rounded-2xl hover:bg-emerald-50/50 transition-all duration-300"
                >
                  <MessageSquare className="h-4.5 w-4.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Large Embedded Map */}
          <div className="lg:col-span-8 bg-white p-3 rounded-3xl border border-border-custom shadow-premium min-h-[380px] overflow-hidden relative">
            <iframe
              src={mapQueryUrl}
              className="w-full h-full min-h-[360px] border-0 rounded-2xl grayscale-[20%] contrast-[110%]"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Devatha Digitals Google Map Location"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
