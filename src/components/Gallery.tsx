"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const galleryImages = [
  {
    src: "/images/devatha-digitals-showroom.avif",
    alt: "Devatha Digitals Premium Showroom Interior",
    title: "Main Showroom",
  },
  {
    src: "/images/Devatha showroom daytime photo.jpg",
    alt: "Devatha Digitals Storefront Daytime View",
    title: "Storefront Exterior",
  },
  {
    src: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=600&auto=format&fit=crop",
    alt: "Premium Smart LED TV Display Wall",
    title: "Smart TV Display",
  },
  {
    src: "/images/devatha show room portfolio.png",
    alt: "Devatha Digitals Mobile Section and Service Counter",
    title: "Mobile & Accessories Desk",
  },
  {
    src: "https://images.unsplash.com/photo-1557180295-76eee20ae8aa?q=80&w=600&auto=format&fit=crop",
    alt: "Latest Smartphones Retail Counter Showcase",
    title: "Premium Mobile Hub",
  },
  {
    src: "/images/devatha digitals orange theme.png",
    alt: "Devatha Digitals Premium Orange Branding",
    title: "Brand Banner Showcase",
  },
  {
    src: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=600&auto=format&fit=crop",
    alt: "Air Conditioner & Cooling Solutions Aisle",
    title: "AC & Appliances",
  },
  {
    src: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=600&auto=format&fit=crop",
    alt: "Modern Electronics Retail Showroom Layout",
    title: "Appliances Showroom",
  },
];

import { useLanguage } from "./LanguageProvider";

export default function Gallery() {
  const { locale } = useLanguage();
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const galleryTranslations: Record<string, Record<string, string>> = {
    badge: {
      en: "Store Gallery",
      te: "షోరూమ్ గ్యాలరీ",
      hi: "शोरूम गैलरी",
      ta: "ஷோரூம் கேலரி",
      kn: "ಶೋರೂಮ್ ಗ್ಯಾಲರಿ",
      ml: "ഷോറൂം ഗാലറി",
      mr: "शोरूम गॅलरी",
      gu: "શોરૂમ ગેલેરી",
      bn: "শোরুম গ্যালারি",
      pa: "ਸ਼ੋਰੂਮ ਗੈਲਰੀ",
      ur: "شوروم گیلری"
    },
    titleStart: {
      en: "Take a Virtual ",
      te: "షోరూమ్ యొక్క ",
      hi: "शोरूम का ",
      ta: "ஷோரூமின் ",
      kn: "शೋರೂಮ್‌ನ ",
      ml: "ഷോറൂമിന്റെ ",
      mr: "शोरूमची ",
      gu: "શોરૂમની ",
      bn: "শোরুমের ",
      pa: "ਸ਼ੋਰੂਮ ਦਾ ",
      ur: "شوروم کا "
    },
    titleAccent: {
      en: "Showroom Tour",
      te: "వర్చువల్ టూర్",
      hi: "भर्चुअल दौरा",
      ta: "மெய்நிகர் பயணம்",
      kn: "ವರ್ಚುವಲ್ ಪ್ರವಾಸ",
      ml: "വെർച്വൽ ടൂർ",
      mr: "व्हर्च्युअल टूर",
      gu: "વર્ચ્યુઅલ ટૂર",
      bn: "ভার্চুয়াল ট্যুর",
      pa: "ਵਰਚੁਅਲ ਦੌਰਾ",
      ur: "ورچوئل ٹور"
    },
    titleEnd: {
      en: "", te: "", hi: "", ta: "", kn: "", ml: "", mr: "", gu: "", bn: "", pa: "", ur: ""
    },
    desc: {
      en: "Browse images of our physical retail floor and product departments located at CTM Road, Madanapalle.",
      te: "మదనపల్లెలోని సీటీఎం రోడ్డులో ఉన్న మా భౌతిక రిటైల్ ఫ్లోర్ మరియు ఉత్పత్తి విభాగాల చిత్రాలను బ్రౌజ్ చేయండి.",
      hi: "मदनपल्ले में सीटीएम रोड पर स्थित हमारे शोरूम और उत्पाद विभागों की तस्वीरें देखें।",
      ta: "மதனப்பள்ளியில் உள்ள சிடிஎம் சாலையில் அமைந்துள்ள எங்களது ஷோரூம் மற்றும் தயாரிப்பு பிரிவுகளின் படங்களை பார்க்கவும்.",
      kn: "ಮದನಪಲ್ಲಿಯ ಸಿಟಿಎಂ ರಸ್ತೆಯಲ್ಲಿರುವ ನಮ್ಮ ಶೋರೂಮ್ ಮತ್ತು ಉತ್ಪನ್ನ ವಿಭಾಗಗಳ ಚಿತ್ರಗಳನ್ನು ವೀಕ್ಷಿಸಿ.",
      ml: "മദനപ്പള്ളിയിലെ സിടിഎം റോഡിലുള്ള ഞങ്ങളുടെ ഷോറൂമിന്റെയും ഉൽപ്പന്ന വിഭാഗങ്ങളുടെയും ചിത്രങ്ങൾ കാണുക.",
      mr: "मदनपल्ले येथील सीटीएम रोडवर असलेल्या आमच्या शोरूम आणि उत्पादन विभागांची चित्रे पहा.",
      gu: "મદનપલ્લેના સીટીએમ రోడ్ पर स्थित અમારા શોરૂમ અને ઉત્પાદન વિભાગોની તસવીરો જુઓ.",
      bn: "মদনপল্লীর সিটিএম রোডে অবস্থিত আমাদের শোরুম এবং পণ্য বিভাগের ছবিগুলি দেখুন।",
      pa: "ਮਦਨਪੱਲੇ ਦੇ ਸੀਟੀਐਮ ਰੋਡ 'ਤੇ ਸਥਿਤ ਸਾਡੇ ਸ਼ੋਰੂਮ ਅਤੇ ਉਤਪਾਦ ਵਿਭਾਗਾਂ ਦੀਆਂ ਤਸਵੀਰਾਂ ਦੇਖੋ।",
      ur: "مدنپلی میں سی ٹی ایم روڈ پر واقع ہمارے شوروم اور مصنوعات کے شعبوں کی تصاویر دیکھیں۔"
    }
  };

  const imageTitleTranslations: Record<string, Record<string, string>> = {
    "Main Showroom": {
      en: "Main Showroom", te: "ప్రధాన షోరూమ్", hi: "मुख्य शोरूम", ta: "முக்கிய ஷோரூம்",
      kn: "ಮುಖ್ಯ ಶೋರೂಮ್", ml: "പ്രധാന ഷോറൂം", mr: "मुख्य शोरूम", gu: "मुख्य શોરૂમ",
      bn: "প্রধান শোরুম", pa: "ਮੁੱਖ ਸ਼ੋਰੂਮ", ur: "مرکزی شوروم"
    },
    "Storefront Exterior": {
      en: "Storefront Exterior", te: "బయటి వైపు దృశ్యం", hi: "बाहरी दृश्य", ta: "외부ப்புறக் காட்சி",
      kn: "ಹೊರಭಾಗದ ನೋಟ", ml: "പുറംഭാഗം", mr: "बाह्य देखावा", gu: "બહારનો દેખાવ",
      bn: "বাহ্যিক দৃশ্য", pa: "ਬਾਹਰੀ ਦਿੱਖ", ur: "بیرونی منظر"
    },
    "Smart TV Display": {
      en: "Smart TV Display", te: "స్మార్ట్ టీవీ ప్రదర్శన", hi: "स्मार्ट टीवी डिस्प्ले", ta: "ஸ்மார்ட் டிவி காட்சி",
      kn: "ಸ್ಮಾರ್ಟ್ ಟಿವಿ ಪ್ರದರ್ಶನ", ml: "സ്മാർട്ട് ടിവി ഡിസ്പ്ലേ", mr: "स्मार्ट टीव्ही प्रदर्शन", gu: "સ્માર્ટ ટીવી ડિસ્પ્લે",
      bn: "স্মার্ট টিভি প্রদর্শন", pa: "ਸਮਾਰਟ ਟੀਵੀ ਡਿਸਪਲੇ", ur: "اسمارٹ ٹی وی ڈسپلے"
    },
    "Mobile & Accessories Desk": {
      en: "Mobile & Accessories Desk", te: "మొబైల్స్ & యాక్సెసరీస్ డెస్క్", hi: "मोबाइल और एक्सेसरीज काउंटर", ta: "மொபைல் & பாகங்கள் பகுதி",
      kn: "ಮೊಬೈಲ್ ಮತ್ತು ಪರಿಕರಗಳ ವಿಭಾಗ", ml: "മൊബൈൽ & ആക്സസറീസ് ഡെസ്ക്", mr: "मोबाईल आणि ऍक्सेसरीज काउंटर", gu: "મોબાઈલ અને એક્સેસરીઝ ડેસ્ક",
      bn: "মোবাইল এবং অ্যাক্সেসরিজ বিভাগ", pa: "ਮੋਬਾਈਲ ਅਤੇ ਐਕਸੈਸਰੀਜ਼ ਕਾਊਂਟਰ", ur: "موبائل اور لوازمات کا ڈیسک"
    },
    "Premium Mobile Hub": {
      en: "Premium Mobile Hub", te: "ప్రీమియం మొబైల్ హబ్", hi: "प्रीमियम मोबाइल हब", ta: "பிரீமியம் மொபைல் மையம்",
      kn: "ಪ್ರೀಮಿಯಂ மொಬೈಲ್ ಹಬ್", ml: "പ്രീമിയം മൊബൈൽ ഹബ്", mr: "प्रीमियम मोबाईल हब", gu: "પ્રિમિયમ મોબાઈલ હબ",
      bn: "প্রিমিয়াম মোবাইল হাব", pa: "ਪ੍ਰੀਮੀਅਮ ਮੋਬਾਈਲ ਹੱਬ", ur: "پریمیم موبائل ہب"
    },
    "Brand Banner Showcase": {
      en: "Brand Banner Showcase", te: "బ్రాండ్ బ్యానర్ ప్రదర్శన", hi: "ब्रांड बैनर शोकेस", ta: "பிராண்ட் பேனர் காட்சி",
      kn: "ಬ್ರಾಂಡ್ ಬ್ಯಾನರ್ ಪ್ರದರ್ಶನ", ml: "ബ്രാൻഡ് ബാനർ ഡിസ്പ്ലേ", mr: "ब्रँड बॅनर प्रदर्शन", gu: "બ્રાન્ડ બેનર શોકેસ",
      bn: "ব্র্যান্ড ব্যানার প্রদর্শন", pa: "ਬਰਾਂਡ ਬੈਨਰ ਸ਼ੋਅਕੇਸ", ur: "برانڈ بینر شوکیس"
    },
    "AC & Appliances": {
      en: "AC & Appliances", te: "ఏసీ & గృహోపకరణాలు", hi: "एसी और घरेलू उपकरण", ta: "ஏசி & உபகரணங்கள்",
      kn: "ಎಸಿ ಮತ್ತು ಗೃಹೋಪಯೋಗಿ ಉಪಕರಣಗಳು", ml: "എസി & ഉപകരണങ്ങൾ", mr: "एसी आणि उपकरणे", gu: "એસી અને ઘરગથ્થુ ઉપકરણો",
      bn: "এসি এবং গৃহস্থালী যন্ত্রপাতি", pa: "ਏਸੀ ਅਤੇ ਘਰੇਲੂ ਉਪਕਰਣ", ur: "اے سی اور گھریلو سامان"
    },
    "Appliances Showroom": {
      en: "Appliances Showroom", te: "గృహోపకరణాల విభాగం", hi: "उपकरण शोरूम", ta: "உபகரணங்கள் ஷோரூம்",
      kn: "ಉಪಕರಣಗಳ ಶೋರೂಮ್", ml: "ഉപകരണങ്ങളുടെ ഷോറൂം", mr: "उपकरणे शोरूम", gu: "ઉપકરણોનું શોરૂમ",
      bn: "যন্ত্রপাতি শোরুম", pa: "ਉਪਕਰਣਾਂ ਦਾ ਸ਼ੋਰੂਮ", ur: "سامان کا شوروم"
    }
  };

  const tVal = (key: string) => {
    return galleryTranslations[key]?.[locale] || galleryTranslations[key]?.["en"] || "";
  };

  const getImgTitle = (title: string) => {
    return imageTitleTranslations[title]?.[locale] || title;
  };

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="gallery" className="py-24 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-3 mb-16">
          <span className="text-sm font-bold text-primary tracking-wider uppercase">
            {tVal("badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
            {tVal("titleStart")}<span className="text-primary">{tVal("titleAccent")}</span>{tVal("titleEnd")}
          </h2>
          <p className="text-sm text-text-secondary max-w-xl font-medium mt-1">
            {tVal("desc")}
          </p>
        </div>

        {/* Masonry Columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 [column-fill:_balance]">
          {galleryImages.map((img, idx) => {
            const localizedImgTitle = getImgTitle(img.title);
            return (
              <div
                key={idx}
                onClick={() => setActiveImage(img.src)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveImage(img.src);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`View larger image: ${localizedImgTitle}`}
                className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-premium border border-border-custom bg-brand-alt-bg cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={400}
                  style={{ width: "100%", height: "auto" }}
                  className="object-cover transform transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                  <div className="bg-white p-3 rounded-full text-primary shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <ZoomIn className="h-5 w-5" />
                  </div>
                  <span className="text-white font-extrabold text-sm tracking-wide transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 text-center px-4">
                    {localizedImgTitle}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {activeImage && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Close Area */}
              <div
                className="absolute inset-0 cursor-zoom-out"
                onClick={() => setActiveImage(null)}
              />

              {/* Close Button */}
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-6 right-6 z-10 p-3 bg-brand-alt-bg hover:bg-primary/10 rounded-full text-text-primary hover:text-primary transition-colors duration-200"
                aria-label="Close Lightbox"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Image Frame */}
              <motion.div
                className="relative max-w-[90vw] max-h-[85vh] p-2 bg-white rounded-3xl shadow-2xl border border-border-custom overflow-hidden z-10 flex items-center justify-center"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
              >
                <Image
                  src={activeImage}
                  alt="Devatha Showroom Preview"
                  width={1200}
                  height={800}
                  unoptimized
                  className="rounded-2xl max-w-full max-h-[80vh] object-contain"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
