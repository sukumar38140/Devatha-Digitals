"use client";

import React from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock, ArrowUp } from "lucide-react";

import { useLanguage } from "./LanguageProvider";

export default function Footer() {
  const { t, locale } = useLanguage();
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: t("nav.home"), href: `/${locale}` },
    { name: t("nav.about"), href: `/${locale}/about` },
    { name: t("nav.brands"), href: `/${locale}/brands` },
    { name: t("nav.services"), href: `/${locale}/services` },
    { name: t("nav.gallery"), href: `/${locale}/gallery` },
    { name: t("nav.reviews"), href: `/${locale}/reviews` },
    { name: t("nav.contact"), href: `/${locale}/contact` },
  ];

  const categoriesList = [
    locale === "en" ? "Smartphones & Mobiles" : (locale === "te" ? "స్మార్ట్‌ఫోన్లు & మొబైల్స్" : locale === "hi" ? "स्मार्टफोन और मोबाइल" : locale === "ta" ? "ஸ்மார்ட்போன்கள் & மொபைல்கள்" : locale === "kn" ? "ಸ್ಮಾರ್ಟ್‌ಫೋನ್‌ಗಳು ಮತ್ತು ಮೊಬೈಲ್‌ಗಳು" : locale === "ml" ? "സ്മാർട്ട്ഫോണുകളും മൊബൈലുകളും" : locale === "mr" ? "स्मार्टफोन आणि मोबाईल्स" : locale === "gu" ? "સ્માર્ટફોન અને મોબાઈલ" : locale === "bn" ? "স্মার্টফোন এবং মোবাইল" : locale === "pa" ? "ਸਮਾਰਟਫੋਨ ਅਤੇ ਮੋਬਾਈਲ" : "اسمارٹ فونز اور موبائلز"),
    locale === "en" ? "Smart LED TVs" : (locale === "te" ? "స్మార్ట్ LED టీవీలు" : locale === "hi" ? "स्मार्ट एलईडी टीवी" : locale === "ta" ? "ஸ்மார்ட் எல்இடி டிவிகள்" : locale === "kn" ? "ಸ್మార్ಟ್ ಎಲ್ಇಡಿ ಟಿವಿಗಳು" : locale === "ml" ? "സ്മാര്ട്ട് എൽഇഡി ടിവികൾ" : locale === "mr" ? "स्मार्ट एलईडी टीव्ही" : locale === "gu" ? "સ્માર્ટ એલઇડી ટીવી" : locale === "bn" ? "স্মার্ট एलईडी टीवी" : locale === "pa" ? "ਸਮਾਰਟ ਐਲਈਡੀ ਟੀਵੀ" : "اسمارٹ ایل ای ڈی ٹی وی"),
    locale === "en" ? "Air Conditioners" : (locale === "te" ? "ఎయిర్ కండీషనర్లు" : locale === "hi" ? "एयर कंडीशनर" : locale === "ta" ? "ஏர் கண்டிஷனர்கள்" : locale === "kn" ? "ಏರ್ ಕಂಡಿಷನರ್‌ಗಳು" : locale === "ml" ? "എയർ കണ്ടീഷണറുകൾ" : locale === "mr" ? "एअर कंडिशनर" : locale === "gu" ? "એર કંડિશનર" : locale === "bn" ? "এয়ার কন্ডিশনার" : locale === "pa" ? "ਏਅਰ ਕੰਡੀਸ਼ਨਰ" : "ایئر کنڈیشنر"),
    locale === "en" ? "Refrigerators" : (locale === "te" ? "రిఫ్రిజిరేటర్లు" : locale === "hi" ? "रेफ्रिजरेटर" : locale === "ta" ? "குளிர்சாதன பெட்டிகள்" : locale === "kn" ? "ರೆಫ್ರಿಜರೇಟರ್‌ಗಳು" : locale === "ml" ? "റഫ്രിജറേറ്ററുകൾ" : locale === "mr" ? "रेफ्रिजरेटर" : locale === "gu" ? "રેફ્રિજરેટર" : locale === "bn" ? "রেফ্রিজারেটর" : locale === "pa" ? "ਰੈਫ੍ਰਿਜਰੇਟਰ" : "ریفریجریٹرز"),
    locale === "en" ? "Washing Machines" : (locale === "te" ? "వాషింగ్ మెషీన్లు" : locale === "hi" ? "वाशिंग मशीन" : locale === "ta" ? "சலவை இயந்திரங்கள்" : locale === "kn" ? "ವಾಷಿಂಗ್ ಮೆಷಿನ್‌ಗಳು" : locale === "ml" ? "വാഷിംഗ് മെഷീനുകൾ" : locale === "mr" ? "वॉशिंग मशीन" : locale === "gu" ? "વોશિંગ મશીન" : locale === "bn" ? "ওয়াশিং মেশিন" : locale === "pa" ? "ਵਾਸ਼ਿੰਗ ਮਸ਼ੀਨ" : "واشنگ مشینیں"),
    locale === "en" ? "Water Purifiers" : (locale === "te" ? "వాటర్ ప్యూరిఫైయర్లు" : locale === "hi" ? "वाٹر प्यूरिफायर" : locale === "ta" ? "நீர் சுத்திகரிப்பாளர்கள்" : locale === "kn" ? "ವಾಟರ್ ಪ್ಯೂರಿಫೈಯರ್‌ಗಳು" : locale === "ml" ? "വാട്ടർ പ്യൂരിഫയറുകൾ" : locale === "mr" ? "वॉटर प्यूरिफायर" : locale === "gu" ? "વોટર પ્યુરિફાયર" : locale === "bn" ? "ওয়াটার পিউরিফায়ার" : locale === "pa" ? "ਵਾਟਰ ਪਿਊਰੀਫਾਇਰ" : "واٹر پیوریفائر"),
    locale === "en" ? "Laptops & Accessories" : (locale === "te" ? "ల్యాప్‌టాప్‌లు & యాక్సెసరీలు" : locale === "hi" ? "लैपटॉप और एक्सेसरीज" : locale === "ta" ? "மடிக்கணினிகள் & துணைக்கருவிகள்" : locale === "kn" ? "ಲ್ಯಾಪ್‌ಟಾಪ್‌ಗಳು ಮತ್ತು ಪರಿಕರಗಳು" : locale === "ml" ? "ലാപ്‌ടോപ്പുകളും ആക്‌സസറികളും" : locale === "mr" ? "लॅपटॉप आणि एक्सेसरीज" : locale === "gu" ? "લેપટોપ અને એક્સેસરીઝ" : locale === "bn" ? "ল্যাপটপ এবং অ্যাক্সেসরিজ" : locale === "pa" ? "ਲੈਪਟਾਪ ਅਤੇ ਐਕਸੈਸਰੀਜ਼" : "لیپ ٹاپس اور لوازمات")
  ];

  const footerAddressParts = t("footer.address").split(", ");

  const getDailyHoursText = () => {
    switch (locale) {
      case "te":
        return "ఉదయం 10:00 – రాత్రి 09:00 (ప్రతిరోజూ)";
      case "hi":
        return "सुबह 10:00 – रात 09:00 (प्रतिदिन)";
      case "ta":
        return "முற்பகல் 10:00 – பிற்பகல் 09:00 (தினமும்)";
      case "kn":
        return "ಬೆಳಿಗ್ಗೆ 10:00 – ರಾತ್ರಿ 09:00 (ಪ್ರತಿದಿನ)";
      case "ml":
        return "രാവിലെ 10:00 – രാത്രി 09:00 (ദിവസവും)";
      case "mr":
        return "सकाळी 10:00 – रात्री 09:00 (दररोज)";
      case "gu":
        return "સવારે 10:00 – રાત્રે 09:00 (દરરોજ)";
      case "bn":
        return "সকাল ১০:০০ – রাত ০৯:০০ (প্রতিদিন)";
      case "pa":
        return "ਸਵੇਰੇ 10:00 – ਰਾਤ 09:00 (ਰੋਜ਼ਾਨਾ)";
      case "ur":
        return "صبح 10:00 – رات 09:00 (روزانہ)";
      default:
        return "10:00 AM – 09:00 PM (Daily)";
    }
  };

  return (
    <footer className="bg-white border-t-4 border-primary mt-auto relative z-10">
      {/* Upper Footer: Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Business Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Devatha Digitals HD Logo"
                width={160}
                height={40}
                className="h-10 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="font-bold text-lg text-text-primary tracking-tight font-poppins">
                  DEVATHA <span className="text-primary">DIGITALS</span>
                </span>
                <span className="text-[10px] text-text-secondary font-medium tracking-wider -mt-1 uppercase font-poppins">
                  {t("footer.since")}
                </span>
              </div>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed font-medium">
              {t("footer.desc")}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex text-yellow-400 text-base">★★★★★</div>
              <span className="text-xs font-bold text-text-primary">
                {t("footer.googleRating")}
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider">
              {t("footer.quickLinks")}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider">
              {t("footer.categories")}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {categoriesList.map((item) => (
                <li key={item}>
                  <a
                    href="#products"
                    className="text-sm text-text-secondary hover:text-primary transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider">
              {t("footer.contactUs")}
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3 items-start">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-text-secondary leading-relaxed">
                  {footerAddressParts.map((part, index) => (
                    <span key={index}>
                      {part}
                      {index < footerAddressParts.length - 1 && <br />}
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="tel:+919948020830"
                  className="text-sm text-text-secondary hover:text-primary transition-colors font-medium"
                >
                  +91 99480 20830
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="mailto:info@devathadigitals.com"
                  className="text-sm text-text-secondary hover:text-primary transition-colors font-medium"
                >
                  info@devathadigitals.com
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Clock className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm text-text-secondary font-medium">
                  {getDailyHoursText()}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Lower Footer: Copyright & Legal */}
      <div className="bg-brand-alt-bg py-6 border-t border-border-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-secondary text-center sm:text-left">
            &copy; {currentYear} {t("footer.copyright")}
          </p>
          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-border-custom rounded-md text-xs font-semibold text-text-secondary hover:text-primary hover:border-primary transition-all duration-300 shadow-sm"
          >
            {t("footer.backToTop")}
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
