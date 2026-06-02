"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Mail, Phone, User, Tag, MessageSquare } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export default function ContactForm() {
  const { t, locale } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "",
    message: "",
  });

  const interestOptionTranslations: Record<string, string> = {
    "": t("contact.formInterestSelect"),
    "Smartphones": locale === "en" ? "Smartphones" : (locale === "te" ? "స్మార్ట్‌ఫోన్లు" : locale === "hi" ? "स्मार्टफोन" : locale === "ta" ? "ஸ்மார்ட்போன்கள்" : locale === "kn" ? "ಸ್ಮಾರ್ಟ್‌ಫೋನ್‌ಗಳು" : locale === "ml" ? "സ്മാർട്ട്ഫോണുകൾ" : locale === "mr" ? "स्मार्टफोन" : locale === "gu" ? "સ્માર્ટફોન" : locale === "bn" ? "স্মার্টফোন" : locale === "pa" ? "ਸਮਾਰਟਫੋਨ" : "اسمارٹ فونز"),
    "Smart TVs": locale === "en" ? "Smart TVs" : (locale === "te" ? "స్మార్ట్ టీవీలు" : locale === "hi" ? "स्मार्ट टीवी" : locale === "ta" ? "ஸ்மார்ட் டிவிகள்" : locale === "kn" ? "ಸ್ಮಾರ್ಟ್ ಟಿವಿಗಳು" : locale === "ml" ? "ಸ್మార్ട്ട് ടിവികൾ" : locale === "mr" ? "स्मार्ट टीव्ही" : locale === "gu" ? "સ્માર્ટ ટીવી" : locale === "bn" ? "স্মार्ट टीवी" : locale === "pa" ? "ਸਮਾਰਟ ਟੀਵੀ" : "اسمارٹ ٹی وی"),
    "Air Conditioners": locale === "en" ? "Air Conditioners" : (locale === "te" ? "ఎయిర్ కండీషనర్లు" : locale === "hi" ? "एयर कंडीशनर" : locale === "ta" ? "ஏர் கண்டிஷனர்கள்" : locale === "kn" ? "ಏರ್ ಕಂಡಿಷನರ್‌ಗಳು" : locale === "ml" ? "എയർ കണ്ടീഷണറുകൾ" : locale === "mr" ? "एअर कंडिशनर" : locale === "gu" ? "એર કંડિશનર" : locale === "bn" ? "এয়ার কন্ডিশনার" : locale === "pa" ? "ਏਅਰ ਕੰਡੀਸ਼ਨਰ" : "ایئر کنڈیشنر"),
    "Refrigerators": locale === "en" ? "Refrigerators" : (locale === "te" ? "రిఫ్రిజిరేటర్లు" : locale === "hi" ? "रेफ्रिजरेटर" : locale === "ta" ? "குளிர்சாதன பெட்டிகள்" : locale === "kn" ? "ರೆಫ್ರಿಜರೇಟರ್‌ಗಳು" : locale === "ml" ? "റഫ്രിജറേറ്ററുകൾ" : locale === "mr" ? "रेफ्रिजरेटर" : locale === "gu" ? "રેફ્રિજરેટર" : locale === "bn" ? "रेफ্রিজারেটর" : locale === "pa" ? "ਰੈਫ੍ਰਿਜਰੇਟਰ" : "ریفریجریٹرز"),
    "Washing Machines": locale === "en" ? "Washing Machines" : (locale === "te" ? "వాషింగ్ మెషీన్లు" : locale === "hi" ? "वाशिंग मशीन" : locale === "ta" ? "சலவை இயந்திரங்கள்" : locale === "kn" ? "ವಾಷಿಂಗ್ ಮೆಷಿನ್‌ಗಳು" : locale === "ml" ? "ವಾಷಿಂಗ್ മെഷീനുകൾ" : locale === "mr" ? "वॉशिंग मशीन" : locale === "gu" ? "વોશિંગ મશીન" : locale === "bn" ? "واশিং মেশিন" : locale === "pa" ? "ਵਾਸ਼ਿੰਗ ਮਸ਼ੀਨ" : "واشنگ مشینیں"),
    "Water Purifiers": locale === "en" ? "Water Purifiers" : (locale === "te" ? "వాటర్ ప్యూరిఫైయర్లు" : locale === "hi" ? "వాటర్ ప्यूरिफायर" : locale === "ta" ? "நீர் சுத்திகரிப்பாளர்கள்" : locale === "kn" ? "ವಾಟರ್ ప್ಯೂరిఫೈಯರ್‌ಗಳು" : locale === "ml" ? "ವಾട്ടర్ പ്യൂരിഫയറുകൾ" : locale === "mr" ? "वॉटर प्यूरिफायर" : locale === "gu" ? "વોટર પ્યુરિഫાયર" : locale === "bn" ? "ওয়াটার পিউরিফায়ার" : locale === "pa" ? "ਵਾਟਰ ਪਿਊਰੀਫਾਇਰ" : "واٹر پیوریفائر"),
    "Laptops": locale === "en" ? "Laptops" : (locale === "te" ? "ల్యాప్‌టాప్‌లు" : locale === "hi" ? "लैपटॉप" : locale === "ta" ? "மடிக்கணினிகள்" : locale === "kn" ? "ಲ್ಯಾಪ್‌ಟಾಪ್‌ಗಳು" : locale === "ml" ? "ലാപ്‌ടോപ്പുകൾ" : locale === "mr" ? "लॅपटॉप" : locale === "gu" ? "લેપટોપ" : locale === "bn" ? "ল্যাপটপ" : locale === "pa" ? "ਲੈਪਟਾਪ" : "لیپ ٹاپس"),
    "Accessories": locale === "en" ? "Accessories" : (locale === "te" ? "యాక్సెసరీలు" : locale === "hi" ? "एक्सेसरीज" : locale === "ta" ? "துணைக்கருவிகள்" : locale === "kn" ? "ಪರಿಕರಗಳು" : locale === "ml" ? "ആക്സസറികൾ" : locale === "mr" ? "एक्सेसरीज" : locale === "gu" ? "એક્સેસરીઝ" : locale === "bn" ? "অ্যাক্সেসরিজ" : locale === "pa" ? "ਐਕਸੈਸਰੀਜ਼" : "ایکسیسریز"),
    "General Service": locale === "en" ? "Service / Repairs" : (locale === "te" ? "సేవలు / రిపేర్లు" : locale === "hi" ? "सेवा / मरम्मत" : locale === "ta" ? "சேவை / பழுதுபார்ப்பு" : locale === "kn" ? "ಸೇವೆ / రిపೇರಿ" : locale === "ml" ? "സർവീസ് / റിപ്പയർ" : locale === "mr" ? "सेवा / दुरुस्ती" : locale === "gu" ? "સેવા / રિપેરિંગ" : locale === "bn" ? "সার্ভিস / মেরামত" : locale === "pa" ? "ਸੇਵਾ / ਮੁਰੰਮਤ" : "سروس / مرمت")
  };

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
      setErrorMessage(t("contact.errorRequired"));
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
              {t("contact.badge")}
            </span>
            <h2 className="text-3xl font-extrabold text-text-primary tracking-tight">
              {t("contact.formTitleStart")}<span className="text-primary">{t("contact.formTitleAccent")}</span>{t("contact.formTitleEnd")}
            </h2>
            <p className="text-sm text-text-secondary max-w-md font-medium mt-1">
              {t("contact.formDesc")}
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
                      <span>{t("contact.formName")} <span className="text-primary">*</span></span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t("contact.formNamePlac")}
                      className="px-4 py-3 border border-border-custom rounded-2xl text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 bg-brand-alt-bg/10"
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-xs font-bold text-text-primary uppercase tracking-wider flex items-center gap-1.5">
                      <Phone className="h-3.5 w-3.5 text-primary" />
                      <span>{t("contact.formPhone")} <span className="text-primary">*</span></span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t("contact.formPhonePlac")}
                      className="px-4 py-3 border border-border-custom rounded-2xl text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 bg-brand-alt-bg/10"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-bold text-text-primary uppercase tracking-wider flex items-center gap-1.5">
                      <Mail className="h-3.5 w-3.5 text-primary" />
                      <span>{t("contact.formEmail")}</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t("contact.formEmailPlac")}
                      className="px-4 py-3 border border-border-custom rounded-2xl text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 bg-brand-alt-bg/10"
                    />
                  </div>

                  {/* Product Interest Select */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="interest" className="text-xs font-bold text-text-primary uppercase tracking-wider flex items-center gap-1.5">
                      <Tag className="h-3.5 w-3.5 text-primary" />
                      <span>{t("contact.formInterest")} <span className="text-primary">*</span></span>
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      required
                      value={formData.interest}
                      onChange={handleChange}
                      className="px-4 py-3 border border-border-custom rounded-2xl text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 bg-brand-alt-bg/10 text-text-primary cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23F58220%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25em] bg-[right_1rem_center] bg-no-repeat"
                    >
                      <option value="">{interestOptionTranslations[""]}</option>
                      <option value="Smartphones">{interestOptionTranslations["Smartphones"]}</option>
                      <option value="Smart TVs">{interestOptionTranslations["Smart TVs"]}</option>
                      <option value="Air Conditioners">{interestOptionTranslations["Air Conditioners"]}</option>
                      <option value="Refrigerators">{interestOptionTranslations["Refrigerators"]}</option>
                      <option value="Washing Machines">{interestOptionTranslations["Washing Machines"]}</option>
                      <option value="Water Purifiers">{interestOptionTranslations["Water Purifiers"]}</option>
                      <option value="Laptops">{interestOptionTranslations["Laptops"]}</option>
                      <option value="Accessories">{interestOptionTranslations["Accessories"]}</option>
                      <option value="General Service">{interestOptionTranslations["General Service"]}</option>
                    </select>
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-bold text-text-primary uppercase tracking-wider flex items-center gap-1.5">
                    <MessageSquare className="h-3.5 w-3.5 text-primary" />
                    <span>{t("contact.formMessage")}</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t("contact.formMessagePlac")}
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
                      <span>{t("contact.formSubmit")}</span>
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
                  {t("contact.successTitle")}
                </h3>
                <p className="text-sm text-text-secondary max-w-md font-semibold mb-8 leading-relaxed">
                  {t("contact.successDesc")}
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 bg-brand-alt-bg border border-border-custom hover:bg-primary/10 text-xs font-bold text-text-primary hover:text-primary rounded-xl transition-colors duration-200"
                >
                  {t("contact.successBtn")}
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
