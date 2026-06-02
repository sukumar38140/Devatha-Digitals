"use client";

import React from "react";
import { MapPin, Phone, MessageSquare, Compass, Clock } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export default function Location() {
  const { t, locale } = useLanguage();
  const mapQueryUrl = "https://maps.google.com/maps?q=Devatha%20Digitals,%20CTM%20Road,%20Madanapalle&t=&z=16&ie=UTF8&iwloc=&output=embed";
  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=Devatha+Digitals,+CTM+Road,+Madanapalle";

  const getWhatsappLocationText = (loc: string) => {
    switch (loc) {
      case "te":
        return "నమస్కారం దేవత డిజిటల్స్, నేను మీ ఉత్పత్తులు మరియు సేవల గురించి తెలుసుకోవాలనుకుంటున్నాను.";
      case "hi":
        return "नमस्ते देवता डिजिटल्स, मैं आपके उत्पादों और सेवाओं के बारे में पूछताछ करना चाहता हूँ।";
      case "ta":
        return "வணக்கம் தேவதா டிஜிட்டல்ஸ், நான் உங்கள் தயாரிப்புகள் மற்றும் சேவைகளைப் பற்றி விசாரிக்க விரும்புகிறேன்.";
      case "kn":
        return "ನಮಸ್ಕಾರ ದೇವತಾ ಡಿಜಿಟಲ್ಸ್, ನಾನು ನಿಮ್ಮ ಉತ್ಪನ್ನಗಳು ಮತ್ತು ಸೇವೆಗಳ ಬಗ್ಗೆ ವಿಚಾರಿಸಲು ಬಯಸುತ್ತೇನೆ.";
      case "ml":
        return "ഹലോ ദേവത ഡിജിറ്റൽസ്, നിങ്ങളുടെ ഉൽപ്പന്നങ്ങളെയും സേവനങ്ങളെയും കുറിച്ച് ചോദിച്ചറിയാൻ ഞാൻ ആഗ്രഹിക്കുന്നു.";
      case "mr":
        return "नमस्कार देवता डिजिटल्स, मी आपल्या उत्पादनांविषयी आणि सेवांविषयी चौकशी करू इच्छितो.";
      case "gu":
        return "નમસ્તે દેવતા ડિજિટલ્સ, હું તમારા ઉત્પાદનો અને સેવાઓ વિશે પૂછપરછ કરવા માંગું છું.";
      case "bn":
        return "হ্যালো দেবতাদিজিটালস, আমি আপনার পণ্য ও সেবা সম্পর্কে অনুসন্ধান করতে চাই।";
      case "pa":
        return "ਨਮਸਤੇ ਦੇਵਤਾ ਡਿਜੀਟਲਸ, ਮੈਂ ਤੁਹਾਡੇ ਉਤਪਾਦਾਂ ਅਤੇ ਸੇਵਾਵਾਂ ਬਾਰੇ ਪੁੱਛਗਿੱਛ ਕਰਨਾ ਚਾਹੁੰਦਾ ਹਾਂ।";
      case "ur":
        return "ہیلو دیوتا ڈیجیٹلز، میں آپ کی مصنوعات اور خدمات کے بارے میں پوچھ گچھ کرنا چاہتا ہوں۔";
      default:
        return "Hi Devatha Digitals, I would like to inquire about your products and services.";
    }
  };

  const addressParts = t("contact.addressText").split(", ");
  const hoursTextVal = t("contact.hoursText");
  const hoursParts = hoursTextVal.includes(" | ") ? hoursTextVal.split(" | ") : [hoursTextVal, ""];

  return (
    <section id="location" className="py-24 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-3 mb-16">
          <span className="text-sm font-bold text-primary tracking-wider uppercase">
            {t("contact.badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
            {t("contact.titleStart")}<span className="text-primary">{t("contact.titleAccent")}</span>{t("contact.titleEnd")}
          </h2>
          <p className="text-sm text-text-secondary max-w-xl font-medium mt-1">
            {t("contact.desc")}
          </p>
        </div>

        {/* Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Address Details Card */}
          <div className="lg:col-span-4 bg-brand-alt-bg/60 p-8 rounded-3xl border border-primary/10 flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-primary tracking-widest uppercase">
                  {t("contact.addressTitle")}
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
                    {addressParts.map((part, index) => (
                      <span key={index}>
                        {part}
                        {index < addressParts.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 p-3 rounded-2xl text-primary shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-base text-text-primary">
                    {t("contact.hoursTitle")}
                  </h4>
                  <p className="text-sm text-text-secondary leading-relaxed font-medium mt-1">
                    {hoursParts[0]}
                    {hoursParts[1] && <><br />{hoursParts[1]}</>}
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
                <span>{t("contact.btnDirections")}</span>
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href="tel:+919948020830"
                  className="flex items-center justify-center gap-2 py-3 border-2 border-primary/20 bg-white text-primary font-bold rounded-2xl hover:bg-brand-alt-bg transition-all duration-300"
                >
                  <Phone className="h-4.5 w-4.5" />
                  <span>{t("contact.btnCall")}</span>
                </a>
                <a
                  href={`https://wa.me/919948020830?text=${encodeURIComponent(getWhatsappLocationText(locale))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border-2 border-emerald-500/20 bg-white text-emerald-600 font-bold rounded-2xl hover:bg-emerald-50/50 transition-all duration-300"
                >
                  <MessageSquare className="h-4.5 w-4.5" />
                  <span>{t("contact.btnWhatsapp")}</span>
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
