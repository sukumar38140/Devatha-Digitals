"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Mail, Phone, User, Tag, MessageSquare } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "",
    message: "",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedInterest = window.sessionStorage.getItem("inquiry_interest");
      const savedMessage = window.sessionStorage.getItem("inquiry_message");
      if (savedInterest || savedMessage) {
        setTimeout(() => {
          setFormData((prev) => ({
            ...prev,
            interest: savedInterest || prev.interest,
            message: savedMessage || prev.message,
          }));
          window.sessionStorage.removeItem("inquiry_interest");
          window.sessionStorage.removeItem("inquiry_message");
        }, 0);
      }
    }
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.interest) {
      setErrorMessage("Please fill out all required fields (Name, Phone, and Product Interest).");
      return;
    }
    
    setErrorMessage("");
    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        interest: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-brand-alt-bg/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-border-custom shadow-premium p-8 sm:p-12 relative overflow-hidden">
          
          {/* Header */}
          <div className="text-center flex flex-col items-center gap-3 mb-10">
            <span className="text-sm font-bold text-primary tracking-wider uppercase">
              Get In Touch
            </span>
            <h2 className="text-3xl font-extrabold text-text-primary tracking-tight">
              Request a <span className="text-primary">Custom Quote</span>
            </h2>
            <p className="text-sm text-text-secondary max-w-md font-medium mt-1">
              Interested in a product? Fill out the form below, and our electronics consultants 
              will get back to you with the best deals.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="flex flex-col gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {errorMessage && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-2xl text-sm font-bold text-red-600">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-bold text-text-primary uppercase tracking-wider flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5 text-primary" />
                      <span>Full Name <span className="text-primary">*</span></span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="px-4 py-3 border border-border-custom rounded-2xl text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 bg-brand-alt-bg/10"
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-xs font-bold text-text-primary uppercase tracking-wider flex items-center gap-1.5">
                      <Phone className="h-3.5 w-3.5 text-primary" />
                      <span>Phone Number <span className="text-primary">*</span></span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 98765 43210"
                      className="px-4 py-3 border border-border-custom rounded-2xl text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 bg-brand-alt-bg/10"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-bold text-text-primary uppercase tracking-wider flex items-center gap-1.5">
                      <Mail className="h-3.5 w-3.5 text-primary" />
                      <span>Email Address</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email (optional)"
                      className="px-4 py-3 border border-border-custom rounded-2xl text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 bg-brand-alt-bg/10"
                    />
                  </div>

                  {/* Product Interest Select */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="interest" className="text-xs font-bold text-text-primary uppercase tracking-wider flex items-center gap-1.5">
                      <Tag className="h-3.5 w-3.5 text-primary" />
                      <span>Product Interest <span className="text-primary">*</span></span>
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      required
                      value={formData.interest}
                      onChange={handleChange}
                      className="px-4 py-3 border border-border-custom rounded-2xl text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 bg-brand-alt-bg/10 text-text-primary cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23F58220%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25em] bg-[right_1rem_center] bg-no-repeat"
                    >
                      <option value="">Select Category</option>
                      <option value="Smartphones">Smartphones</option>
                      <option value="Smart TVs">Smart TVs</option>
                      <option value="Air Conditioners">Air Conditioners</option>
                      <option value="Refrigerators">Refrigerators</option>
                      <option value="Washing Machines">Washing Machines</option>
                      <option value="Water Purifiers">Water Purifiers</option>
                      <option value="Laptops">Laptops</option>
                      <option value="Accessories">Accessories</option>
                      <option value="General Service">Service / Repairs</option>
                    </select>
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-bold text-text-primary uppercase tracking-wider flex items-center gap-1.5">
                    <MessageSquare className="h-3.5 w-3.5 text-primary" />
                    <span>Your Message</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your requirements (brands, budget, specifications...)"
                    className="px-4 py-3 border border-border-custom rounded-2xl text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 bg-brand-alt-bg/10 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-4 flex items-center justify-center gap-2 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-accent disabled:bg-primary/50 transition-all duration-300 shadow-md hover:shadow-lg w-full cursor-pointer"
                >
                  {isSubmitting ? (
                    <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Enquiry</span>
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              // Success Screen Overlay
              <motion.div
                key="success"
                className="flex flex-col items-center justify-center py-12 text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <div className="bg-emerald-50 text-emerald-600 p-4 rounded-full border border-emerald-100 mb-6">
                  <CheckCircle className="h-16 w-16" />
                </div>
                <h3 className="text-2xl font-extrabold text-text-primary mb-2">
                  Enquiry Submitted Successfully!
                </h3>
                <p className="text-sm text-text-secondary max-w-md font-semibold mb-8 leading-relaxed">
                  Thank you for contacting Devatha Digitals. Our team will contact you shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 bg-brand-alt-bg border border-border-custom hover:bg-primary/10 text-xs font-bold text-text-primary hover:text-primary rounded-xl transition-colors duration-200"
                >
                  Send another request
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
