"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  Smartphone, 
  Tv, 
  Wind, 
  Laptop, 
  Headphones, 
  Droplet,
  Waves,
  Cpu,
  ShoppingBag,
  Sparkles
} from "lucide-react";
import { useLanguage } from "./LanguageProvider";

const categories = [
  {
    title: "Smartphones",
    icon: Smartphone,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=600&auto=format&fit=crop",
    desc: "Latest models from Apple, Samsung, Vivo, Oppo, Realme, and Xiaomi.",
  },
  {
    title: "Smart TVs",
    icon: Tv,
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=600&auto=format&fit=crop",
    desc: "Ultra HD 4K, QLED, OLED screens from Sony, LG, Samsung, and OnePlus.",
  },
  {
    title: "Air Conditioners",
    icon: Wind,
    image: "/images/air-conditioner-category.png",
    desc: "Energy-efficient split and inverter ACs from Daikin, Lloyd, and Panasonic.",
  },
  {
    title: "Refrigerators",
    icon: Cpu,
    image: "/images/refrigerator-category.png",
    desc: "Single-door, double-door, and side-by-side models from Samsung, LG, and Whirlpool.",
  },
  {
    title: "Washing Machines",
    icon: Waves,
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=600&auto=format&fit=crop",
    desc: "Top-load, front-load, and semi-automatic machines from IFB, LG, and Samsung.",
  },
  {
    title: "Water Purifiers",
    icon: Droplet,
    image: "/images/water-purifier-category.png",
    desc: "RO + UV water purification systems from Kent, Aquaguard, and Havells.",
  },
  {
    title: "Laptops",
    icon: Laptop,
    image: "/images/laptop-category.png",
    desc: "Premium computing notebooks for work, study, and gaming from HP, Dell, and Lenovo.",
  },
  {
    title: "Electronic Accessories",
    icon: Headphones,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=600&auto=format&fit=crop",
    desc: "Smartwatches, earbuds, soundbars, chargers, and utility electronic accessories.",
  },
];

const productsList = [
  // Smartphones (6)
  {
    name: "Apple iPhone 15 Pro Max",
    brand: "Apple",
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=500&auto=format&fit=crop",
    specs: "A17 Pro Chip | 120Hz ProMotion | Titanium Design",
  },
  {
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=500&auto=format&fit=crop",
    specs: "200MP Camera | S-Pen Included | Galaxy AI Built-in",
  },
  {
    name: "OnePlus 12 5G",
    brand: "OnePlus",
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=500&auto=format&fit=crop",
    specs: "100W SuperVOOC | Hasselblad Camera | Snapdragon 8 Gen 3",
  },
  {
    name: "Vivo V30 Pro 5G",
    brand: "Vivo",
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=500&auto=format&fit=crop",
    specs: "Zeiss Portrait Camera | Aura Light LED | Slim design",
  },
  {
    name: "Oppo Reno11 Pro 5G",
    brand: "Oppo",
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1565849906660-4469279f5793?q=80&w=500&auto=format&fit=crop",
    specs: "32MP Telephoto Portrait | 80W SuperVOOC | 120Hz Curved OLED",
  },
  {
    name: "Realme 12 Pro+ 5G",
    brand: "Realme",
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=500&auto=format&fit=crop",
    specs: "64MP Periscope Camera | 120Hz Curved Display | Luxury Watch Design",
  },

  // Smart TVs (4)
  {
    name: "Sony Bravia XR OLED TV",
    brand: "Sony",
    category: "Smart TVs",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=500&auto=format&fit=crop",
    specs: "55\" 4K HDR | Cognitive Processor | Acoustic Surface Sound",
  },
  {
    name: "Samsung Neo QLED 4K Smart TV",
    brand: "Samsung",
    category: "Smart TVs",
    image: "https://images.unsplash.com/photo-1552533171-ee34570fa228?q=80&w=500&auto=format&fit=crop",
    specs: "65\" 4K TV | Quantum Mini LEDs | Dolby Atmos Object Sound",
  },
  {
    name: "LG OLED C3 Series Smart TV",
    brand: "LG",
    category: "Smart TVs",
    image: "https://images.unsplash.com/photo-1461151304267-38535e780c79?q=80&w=500&auto=format&fit=crop",
    specs: "55\" 4K | α9 AI Processor Gen6 | Pixel Dimming Technology",
  },
  {
    name: "Xiaomi Smart LED TV X Series",
    brand: "Xiaomi",
    category: "Smart TVs",
    image: "https://images.unsplash.com/photo-1601944179066-297cbd3cdef3?q=80&w=500&auto=format&fit=crop",
    specs: "43\" 4K Ultra HD | Google TV OS | Dolby Audio 30W Soundbar",
  },

  // Air Conditioners (3)
  {
    name: "Daikin Inverter Split AC",
    brand: "Daikin",
    category: "Air Conditioners",
    image: "https://images.unsplash.com/photo-1621905252507-b354bc25edac?q=80&w=500&auto=format&fit=crop",
    specs: "1.5 Ton 5 Star | Inverter Compressor | PM 2.5 Filters",
  },
  {
    name: "Lloyd Power Cool Split AC",
    brand: "Lloyd",
    category: "Air Conditioners",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=500&auto=format&fit=crop",
    specs: "1.5 Ton 3 Star | 5-in-1 Expandable AC | Anti-Viral Filter",
  },
  {
    name: "Panasonic Smart Wi-Fi AC",
    brand: "Panasonic",
    category: "Air Conditioners",
    image: "https://images.unsplash.com/photo-1509782774605-f0b985a6dbb5?q=80&w=500&auto=format&fit=crop",
    specs: "1.5 Ton 5 Star | Wi-Fi Connected | MirAIe Alexa/Google Control",
  },

  // Refrigerators (3)
  {
    name: "Samsung Double Door Refrigerator",
    brand: "Samsung",
    category: "Refrigerators",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=500&auto=format&fit=crop",
    specs: "253L 3 Star | Convertible 5-in-1 | Digital Inverter Motor",
  },
  {
    name: "LG Single Door Smart Refrigerator",
    brand: "LG",
    category: "Refrigerators",
    image: "https://images.unsplash.com/photo-1571175432240-5b5f87b68a35?q=80&w=500&auto=format&fit=crop",
    specs: "185L 5 Star | Direct Cool | Smart Inverter Auto-connect",
  },
  {
    name: "Whirlpool Double Door Convertible",
    brand: "Whirlpool",
    category: "Refrigerators",
    image: "https://images.unsplash.com/photo-1536331988406-0b59b58ad982?q=80&w=500&auto=format&fit=crop",
    specs: "340L 3 Star | IntelliSense Inverter | convertible 10-in-1",
  },

  // Washing Machines (3)
  {
    name: "IFB Front Load Washing Machine",
    brand: "IFB",
    category: "Washing Machines",
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=500&auto=format&fit=crop",
    specs: "7kg 5 Star | 2D Wash system | Aqua Energie hard water filter",
  },
  {
    name: "Samsung Eco Bubble Top Load",
    brand: "Samsung",
    category: "Washing Machines",
    image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=500&auto=format&fit=crop",
    specs: "7kg Fully Automatic | Eco Bubble wash | Dual Storm pulsator",
  },
  {
    name: "LG Front Load Inverter Washer",
    brand: "LG",
    category: "Washing Machines",
    image: "https://images.unsplash.com/photo-1545173168-9f1947eebd01?q=80&w=500&auto=format&fit=crop",
    specs: "8kg AI DD Inverter | Direct Drive Motor | Steam Wash tech",
  },

  // Water Purifiers (2)
  {
    name: "Kent Grand+ RO Water Purifier",
    brand: "Kent",
    category: "Water Purifiers",
    image: "https://images.unsplash.com/photo-1585832770485-e386d415e8c1?q=80&w=500&auto=format&fit=crop",
    specs: "RO + UV + UF + TDS Controller | 9L Water Tank | Auto flushing",
  },
  {
    name: "Aquaguard Ritz Purifier",
    brand: "Aquaguard",
    category: "Water Purifiers",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=500&auto=format&fit=crop",
    specs: "RO + UV + Active Copper | Stainless Steel tank | Mineral Guard",
  },

  // Laptops (3)
  {
    name: "HP Pavilion 15 Notebook",
    brand: "HP",
    category: "Laptops",
    image: "https://images.unsplash.com/photo-1496181130204-755241524eab?q=80&w=500&auto=format&fit=crop",
    specs: "AMD Ryzen 5 | 16GB RAM | 512GB NVMe SSD | 15.6\" FHD Screen",
  },
  {
    name: "Dell Inspiron 14 Laptop",
    brand: "Dell",
    category: "Laptops",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=500&auto=format&fit=crop",
    specs: "Intel Core i5 13th Gen | 16GB RAM | 512GB SSD | Backlit Keyboard",
  },
  {
    name: "Lenovo IdeaPad Slim 3",
    brand: "Lenovo",
    category: "Laptops",
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=500&auto=format&fit=crop",
    specs: "Intel Core i3 | 8GB RAM | 512GB SSD | Dolby Audio Speaker",
  },

  // Accessories (3)
  {
    name: "Samsung Galaxy Buds2 Pro",
    brand: "Samsung",
    category: "Electronic Accessories",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=500&auto=format&fit=crop",
    specs: "24-bit Hi-Fi Audio | Intelligent Active Noise Cancellation | 360 sound",
  },
  {
    name: "OnePlus Nord Buds 2",
    brand: "OnePlus",
    category: "Electronic Accessories",
    image: "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?q=80&w=500&auto=format&fit=crop",
    specs: "25dB Active Noise Cancellation | 12.4mm Dynamic drivers | 36h Playback",
  },
  {
    name: "boAt Wave Call Smartwatch",
    brand: "boAt",
    category: "Electronic Accessories",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=500&auto=format&fit=crop",
    specs: "1.69\" HD Display | Bluetooth Calling | SpO2 Heart Rate monitor",
  }
];

const filterCategories = [
  "All",
  "Smartphones",
  "Smart TVs",
  "Air Conditioners",
  "Refrigerators",
  "Washing Machines",
  "Water Purifiers",
  "Laptops",
  "Electronic Accessories"
];

export default function Products({ hideShowcase = false }: { hideShowcase?: boolean }) {
  const { t, locale } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categoryTranslations: Record<string, string> = {
    "All": locale === "en" ? "All" : (locale === "te" ? "అన్నీ" : locale === "hi" ? "सभी" : locale === "ta" ? "அனைத்தும்" : locale === "kn" ? "ಎಲ್ಲಾ" : locale === "ml" ? "എല്ലാം" : locale === "mr" ? "सर्व" : locale === "gu" ? "બધા" : locale === "bn" ? "সব" : locale === "pa" ? "ਸਾਰੇ" : "تمام"),
    "Smartphones": locale === "en" ? "Smartphones" : (locale === "te" ? "స్మార్ట్‌ఫోన్లు" : locale === "hi" ? "स्मार्टफोन" : locale === "ta" ? "ஸ்மார்ட்போன்கள்" : locale === "kn" ? "ಸ್ಮಾರ್ಟ್‌ಫೋನ್‌ಗಳು" : locale === "ml" ? "സ്മാർട്ട്ഫോണുകൾ" : locale === "mr" ? "स्मार्टफोन" : locale === "gu" ? "સ્માર્ટફોન" : locale === "bn" ? "স্মার্টফোন" : locale === "pa" ? "ਸਮਾਰਟਫੋਨ" : "اسمارٹ فونز"),
    "Smart TVs": locale === "en" ? "Smart TVs" : (locale === "te" ? "స్మార్ట్ టీవీలు" : locale === "hi" ? "स्मार्ट टीवी" : locale === "ta" ? "ஸ்மார்ட் டிவிகள்" : locale === "kn" ? "ಸ್ಮಾರ್ಟ್ ಟಿವಿಗಳು" : locale === "ml" ? "സ്മാർട്ട് ടിവികൾ" : locale === "mr" ? "स्मार्ट टीव्ही" : locale === "gu" ? "સ્માર્ટ ટીવી" : locale === "bn" ? "স্মার্ট টিভি" : locale === "pa" ? "ਸਮਾਰਟ ਟੀਵੀ" : "اسمارٹ ٹی وی"),
    "Air Conditioners": locale === "en" ? "Air Conditioners" : (locale === "te" ? "ఎయిర్ కండీషನర్లు" : locale === "hi" ? "एयर कंडीशनर" : locale === "ta" ? "ஏர் கண்டிஷனர்கள்" : locale === "kn" ? "ಏರ್ ಕಂಡಿಷನರ್‌ಗಳು" : locale === "ml" ? "എയർ കണ്ടീഷണറുകൾ" : locale === "mr" ? "एअर कंडिशनर" : locale === "gu" ? "એર કંડિશનર" : locale === "bn" ? "এয়ার কন্ডিশনার" : locale === "pa" ? "ਏਅਰ ਕੰਡੀਸ਼ਨਰ" : "ایئر کنڈیشنر"),
    "Refrigerators": locale === "en" ? "Refrigerators" : (locale === "te" ? "రిఫ్రిజిరేటర్లు" : locale === "hi" ? "रेफ्रिजरेटर" : locale === "ta" ? "குளிர்சாதன பெட்டிகள்" : locale === "kn" ? "ರೆಫ್ರಿಜರೇಟರ್‌ಗಳು" : locale === "ml" ? "റഫ്രിജറേറ്ററുകൾ" : locale === "mr" ? "रेफ्रिजरेटर" : locale === "gu" ? "રેફ્રિજરેટર" : locale === "bn" ? "রেফ্রিজারেটর" : locale === "pa" ? "ਰੈਫ੍ਰਿਜਰੇਟਰ" : "ریفریجریٹرز"),
    "Washing Machines": locale === "en" ? "Washing Machines" : (locale === "te" ? "వాషింగ్ మెషీన్లు" : locale === "hi" ? "वाशिंग मशीन" : locale === "ta" ? "சலவை இயந்திரங்கள்" : locale === "kn" ? "ವಾಷಿಂಗ್ ಮೆಷಿನ್‌ಗಳು" : locale === "ml" ? "വാഷിംഗ് മെഷീനുകൾ" : locale === "mr" ? "वॉशिंग मशीन" : locale === "gu" ? "વોશિંગ મશીન" : locale === "bn" ? "ওয়াশিং মেশিন" : locale === "pa" ? "ਵਾਸ਼ਿੰਗ ਮਸ਼ੀਨ" : "واشنگ مشینیں"),
    "Water Purifiers": locale === "en" ? "Water Purifiers" : (locale === "te" ? "వాటర్ ప్యూరిఫైయర్లు" : locale === "hi" ? "वाटर प्यूरिफायर" : locale === "ta" ? "நீர் சுத்திகரிப்பாளர்கள்" : locale === "kn" ? "ವಾಟರ್ ಪ್ಯೂರಿಫೈಯರ್‌ಗಳು" : locale === "ml" ? "വാട്ടർ പ്യൂരിഫയറുകൾ" : locale === "mr" ? "वॉटर प्यूरिफायर" : locale === "gu" ? "વોટર પ્યુરિફાયર" : locale === "bn" ? "ওয়াটার পিউরিফায়ার" : locale === "pa" ? "ਵਾਟਰ ਪਿਊਰੀਫਾਇਰ" : "واٹر پیوریফائر"),
    "Laptops": locale === "en" ? "Laptops" : (locale === "te" ? "ल్యాప్‌టాప్‌లు" : locale === "hi" ? "लैपटॉप" : locale === "ta" ? "மடிக்கணினிகள்" : locale === "kn" ? "ಲ್ಯಾಪ್‌ಟಾಪ್‌ಗಳು" : locale === "ml" ? "ലാപ്‌ടോപ്പുകൾ" : locale === "mr" ? "लॅपटॉप" : locale === "gu" ? "લેપટોપ" : locale === "bn" ? "ল্যাপটপ" : locale === "pa" ? "ਲੈਪਟਾਪ" : "لیپ ٹاپس"),
    "Electronic Accessories": locale === "en" ? "Electronic Accessories" : (locale === "te" ? "యాక్సెసరీలు" : locale === "hi" ? "एक्सेसरीज" : locale === "ta" ? "துணைக்கருவிகள்" : locale === "kn" ? "ಪರಿಕರಗಳು" : locale === "ml" ? "ആക്സസറികൾ" : locale === "mr" ? "एक्सेसरीज" : locale === "gu" ? "એક્સેસરીઝ" : locale === "bn" ? "অ্যাক্সেসরিজ" : locale === "pa" ? "ਐਕਸੈਸਰੀਜ਼" : "ایکسیسریز")
  };

  const categoryDescTranslations: Record<string, Record<string, string>> = {
    "Smartphones": {
      en: "Latest models from Apple, Samsung, Vivo, Oppo, Realme, and Xiaomi.",
      te: "ఆపిల్, శామ్‌సంగ్, వివో, ఒప్పో, రియల్‌మి మరియు షియోమి నుండి లేటెస్ట్ మోడళ్లు.",
      hi: "एप्पल, सैमसंग, विवो, ओप्पो, रियलमी और श्याओमी के नवीनतम मॉडल।",
      ta: "ஆப்பிள், சாம்சங், விவோ, ஒப்போ, ரியல்மி மற்றும் சியோமி ஆகியவற்றின் சமீபத்திய மாடல்கள்.",
      kn: "ಆಪಲ್, ಸ್ಯಾಮ್‌ಸಂಗ್, ವಿವೋ, ಒಪ್ಪೋ, ರಿಯಲ್‌ಮಿ ಮತ್ತು ಶಿಯೋಮಿಯಿಂದ ಇತ್ತೀಚಿನ ಮಾದರಿಗಳು.",
      ml: "ആപ്പിൾ, സാംസങ്, വിവോ, ഓപ്പോ, റിയൽമി, ഷവോമി എന്നിവയിൽ നിന്നുള്ള പുതിയ മോഡലുകൾ.",
      mr: "Apple, Samsung, Vivo, Oppo, Realme आणि Xiaomi कडील नवीनतम मॉडेल्स.",
      gu: "Apple, Samsung, Vivo, Oppo, Realme અને Xiaomi ના નવીનતમ મોડલ્સ.",
      bn: "Apple, Samsung, Vivo, Oppo, Realme এবং Xiaomi থেকে সর্বশেষ মডেলগুলি।",
      pa: "Apple, Samsung, Vivo, Oppo, Realme ਅਤੇ Xiaomi ਦੇ ਨਵੀਨਤਮ ਮਾਡਲ।",
      ur: "ایپل، سیمسنگ، ویوو، اوپو، ریلمی، اور شیاؤمی کے تازہ ترین ماڈلز۔"
    },
    "Smart TVs": {
      en: "Ultra HD 4K, QLED, OLED screens from Sony, LG, Samsung, and OnePlus.",
      te: "సోనీ, ఎల్జీ, శామ్‌సంగ్ మరియు వన్‌ప్లస్ నుండి అల్ట్రా హెచ్‌డీ 4కె, క్యూలెడ్, ఓలెడ్ స్క్రీన్లు.",
      hi: "सोनी, एलजी, सैमसंग और वनप्लस से अल्ट्रा एचडी 4के, क्यूएलईडी, ओएलईडी स्क्रीन।",
      ta: "சோனி, எல்ஜி, சாம்சங் மற்றும் ஒன்பிளஸ் ஆகியவற்றின் அல்ட்ரா எச்டி 4கே, கியூலெட், ஓலெட் திரைகள்.",
      kn: "ಸೋನಿ, ಎಲ್‌ಜಿ, ಸ್ಯಾಮ್‌ಸಂಗ್ ಮತ್ತು ಒನ್‌ಪ್ಲಸ್‌ನಿಂದ ಅಲ್ಟ್ರಾ ಎಚ್‌ಡಿ 4ಕೆ, ಕ್ಯೂಲೆಡ್, ಒಲೆಡ್ ಸ್ಕ್ರೀನ್‌ಗಳು.",
      ml: "സോണി, എൽജി, സാംസങ്, വൺപ്ലസ് എന്നിവയിൽ നിന്നുള്ള അൾട്രാ എച്ച്ഡി 4കെ, ക്യുഎൽഇഡി, ഒഎൽഇഡി സ്ക്രീനുകൾ.",
      mr: "Sony, LG, Samsung आणि OnePlus कडून Ultra HD 4K, QLED, OLED स्क्रीन.",
      gu: "Sony, LG, Samsung અને OnePlus તરફથી અલ્ટ્રા HD 4K, QLED, OLED સ્ક્રીન્સ.",
      bn: "Sony, LG, Samsung এবং OnePlus থেকে আল্ট્રા এইচডি 4K, QLED, OLED স্ক্রিন।",
      pa: "Sony, LG, Samsung ਅਤੇ OnePlus ਤੋਂ ਅਲਟਰਾ HD 4K, QLED, OLED ਸਕ੍ਰੀਨਾਂ।",
      ur: "سونی، ایل جی، سیمسنگ، اور ون پلس کی الٹرا ایچ ڈی 4K، کیو ایل ای ڈی، او ایل ای ڈی اسکرینیں۔"
    },
    "Air Conditioners": {
      en: "Energy-efficient split and inverter ACs from Daikin, Lloyd, and Panasonic.",
      te: "డైకిన్, లాయిడ్ మరియు పానాసోనిక్ నుండి ఎనర్జీ-ఎఫిషియంట్ స్ప్లిట్ మరియు ఇన్వర్టర్ ఏసీలు.",
      hi: "डैकिन, लॉयड और पैनासोनिक से ऊर्जा-कुशल स्प्लिट और इन्वर्टर एसी।",
      ta: "டைகின், லாயிட் மற்றும் பானாசோனிக் ஆகியவற்றின் ஆற்றல் திறன் கொண்ட ஸ்பிளிட் மற்றும் இன்வெர்ட்டர் ஏசிகள்.",
      kn: "ಡೈಕಿನ್, ಲಾಯ್ಡ್ ಮತ್ತು ಪ್ಯಾನಾಸೋನಿಕ್‌ನಿಂದ ಇಂಧನ-ದಕ್ಷತೆಯ ಸ್ಪ್ಲಿಟ್ ಮತ್ತು ಇನ್ವರ್ಟರ್ ಎಸಿಗಳು.",
      ml: "ഡൈകിൻ, ലോയ്ഡ്, പാനാസോണിക് എന്നിവയിൽ നിന്നുള്ള ഊർജ്ജക്ഷമതയുള്ള സ്പ്ലിറ്റ്, ഇൻവെർട്ടർ എസികൾ.",
      mr: "Daikin, Lloyd आणि Panasonic कडून ऊर्जा-कार्यक्षम स्प्लिट आणि इन्व्हर्टर एसी.",
      gu: "Daikin, Lloyd અને Panasonic તરફથી ઉર્જા-કાર્યક્ષમ સ્પ્લિટ અને ઇન્વર્ટર AC.",
      bn: "Daikin, Lloyd এবং Panasonic থেকে শক্তি-সাশ্রয়ী স্প্লিট এবং ইনভার্টার এসি।",
      pa: "Daikin, Lloyd ਅਤੇ Panasonic ਤੋਂ ਊਰਜਾ-ਬੱਚਤ ਸਪਲਿਟ ਅਤੇ ਇਨਵਰਟਰ AC।",
      ur: "ڈائکن، لائیڈ، اور پیناسونک سے توانائی بچانے والے اسپلٹ اور انورٹر اے سی۔"
    },
    "Refrigerators": {
      en: "Single-door, double-door, and side-by-side models from Samsung, LG, and Whirlpool.",
      te: "శామ్‌సంగ్, ఎల్జీ మరియు వర్ల్‌పూల్ నుండి సింగిల్-డోర్, డబుల్-డోర్ మరియు సైడ్-బై-సైడ్ మోడళ్లు.",
      hi: "सैमसंग, एलजी और व्हर्लपूल से सिंगल-डोर, डबल-डोर और साइड-बाय-साइड मॉडल।",
      ta: "சாம்சங், எல்ஜி மற்றும் வேர்ல்பூல் ஆகியவற்றின் ஒற்றைக் கதவு, இரட்டைக் கதவு மற்றும் பக்கவாட்டு மாதிரிகள்.",
      kn: "ಸ್ಯಾಮ್‌ಸಂಗ್, ಎಲ್‌ಜಿ ಮತ್ತು ವರ್ಲ್‌ಪೂಲ್‌ನಿಂದ ಸಿಂಗಲ್-ಡೋರ್, ಡಬಲ್-ಡೋರ್ ಮತ್ತು ಸೈಡ್-ಬೈ-ಸೈಡ್ ಮಾದರಿಗಳು.",
      ml: "സാംസങ്, എൽജി, വേൾപൂൾ എന്നിവയിൽ നിന്നുള്ള സിംഗിൾ-ഡോർ, ഡബിൾ-ഡോർ, സൈഡ്-ബൈ-സൈഡ് മോഡലുകൾ.",
      mr: "Samsung, LG आणि Whirlpool कडून सिंगल-डोअर, double-डोअर आणि साइड-बाय-साइड मॉडेल.",
      gu: "Samsung, LG અને Whirlpool ના સિંગલ-ડોર, ડબલ-ડોર અને સાઇડ-બાય-સાઇડ મોડલ્સ.",
      bn: "Samsung, LG এবং Whirlpool থেকে সিঙ্গেল-ডোর, ডাবল-ডোর এবং সাইড-বাই-সাইড মডেল।",
      pa: "Samsung, LG ਅਤੇ Whirlpool ਤੋਂ ਸਿੰਗਲ-ਡੋਰ, ਡਬਲ-ਡੋਰ ਅਤੇ ਸਾਈਡ-ਬਾਈ-ਸਾਈਡ ਮਾਡਲ।",
      ur: "سیمسنگ، ایل جی، اور وہرپول سے سنگل ڈور، ڈبل ڈور، اور سائیڈ بائی سائیڈ ماڈلز۔"
    },
    "Washing Machines": {
      en: "Top-load, front-load, and semi-automatic machines from IFB, LG, and Samsung.",
      te: "ఐఎఫ్బీ, ఎల్జీ మరియు శామ్‌సంగ్ నుండి టాప్-లోడ్, ఫ్రంట్-లోడ్ మరియు సెమీ-ఆటోమేటిక్ మెషీన్లు.",
      hi: "आईएफबी, एलजी और सैमसंग से टॉप-लोड, फ्रंट-लोड और सेमी-ऑटोमैटिक मशीनें।",
      ta: "ஐஎஃப்பி, எல்ஜி மற்றும் சாம்சங் ஆகியவற்றின் டாப்-லோட், ஃபிரண்ட்-லோட் மற்றும் செமி-ஆட்டோமேட்டிக் இயந்திரங்கள்.",
      kn: "ಐಎಫ್‌ಬಿ, ಎಲ್‌ಜಿ ಮತ್ತು ಸ್ಯಾಮ್‌ಸಂಗ್‌ನಿಂದ ಟಾಪ್-ಲೋಡ್, ಫ್ರಂಟ್-ಲೋಡ್ ಮತ್ತು ಸೆಮಿ-ஆಟೋಮ್ಯಾಟಿಕ್ ಯಂತ್ರಗಳು.",
      ml: "ഐഎഫ്ബി, എൽജി, സാംസങ് എന്നിവയിൽ നിന്നുള്ള ടോപ്പ്-ലോഡ്, ഫ്രണ്ട്-ലോഡ്, സെമി-ഓട്ടോമാറ്റിക് മെഷീനുകൾ.",
      mr: "IFB, LG आणि Samsung कडून टॉप-लोड, फ्रंट-लोड आणि सेमी-ऑटोमॅटिक मशीन.",
      gu: "IFB, LG અને Samsung ના ટોપ-लोड, ફ્રન્ટ-लोड અને સેમી-ઓટોમેટિક મશીનો.",
      bn: "IFB, LG এবং Samsung থেকে টপ-লোড, ফ্রন্ট-লোড এবং সেমি-অটোমেটিক মেশিন।",
      pa: "IFB, LG ਅਤੇ Samsung ਤੋਂ ਟਾਪ-ਲੋਡ, ਫਰੰਟ-ਲੋਡ ਅਤੇ ਸੈਮੀ-ਆਟੋਮੈਟਿਕ ਮਸ਼ੀਨਾਂ।",
      ur: "آئی ایف بی، ایل جی، ਅਤੇ سیمسنگ کی ٹاپ لوڈ، فرنٹ لوڈ، اور سیمی آٹومیٹک مشینیں۔"
    },
    "Water Purifiers": {
      en: "RO + UV water purification systems from Kent, Aquaguard, and Havells.",
      te: "కెంట్, ఆక్వాగార్డ్ మరియు హావెల్స్ నుండి ఆర్‌ఓ + యూవీ నీటి శుద్దీకరణ వ్యవస్థలు.",
      hi: "केंट, एक्वागार्ड और हैवेल्स से आरओ + यूवी जल शोधन प्रणाली।",
      ta: "கென்ட், அக்குவாகார்டு மற்றும் ஹேவல்ஸ் ஆகியவற்றின் ஆர்ஓ + யூவி நீர் சுத்திகரிப்பு அமைப்புகள்.",
      kn: "ಕೆಂಟ್, ಅಕ್ವಾಗಾರ್ಡ್ ಮತ್ತು ಹ್ಯಾವೆಲ್ಸ್‌ನಿಂದ ಆರ್‌ಒ + ಯುವಿ ನೀರು ಶುದ್ಧೀಕರಣ ವ್ಯವಸ್ಥೆಗಳು.",
      ml: "കെന്റ്, അക്വാഗാർഡ്, ഹാവെൽസ് എന്നിവയിൽ നിന്നുള്ള ആർഒ + യുവി വാട്ടർ പ്യൂരിഫിക്കേഷൻ സിസ്റ്റങ്ങൾ.",
      mr: "Kent, Aquaguard आणि Havells कडून RO + UV पाणी शुद्धीकरण प्रणाली.",
      gu: "Kent, Aquaguard आणि Havells તરફથી RO + UV વોટર પ્યુરિફિકેશન સિસ્ટમ્સ.",
      bn: "Kent, Aquaguard এবং Havells থেকে RO + UV জল পরিশোধন ব্যবস্থা।",
      pa: "Kent, Aquaguard ਅਤੇ Havells ਤੋਂ RO + UV ਪਾਣੀ ਸਾਫ਼ ਕਰਨ ਵਾਲੇ ਸਿਸਟਮ।",
      ur: "کینٹ، ایکوا گارڈ، اور ہیولز کے RO + UV واٹر پیوریفائر سسٹمز۔"
    },
    "Laptops": {
      en: "Premium computing notebooks for work, study, and gaming from HP, Dell, and Lenovo.",
      te: "పని, చదువు మరియు గేమింగ్ కోసం హెచ్‌పీ, డెల్ మరియు లెనోవా నుండి ప్రీమియం ల్యాప్‌టాప్‌లు.",
      hi: "एचपी, डेल और लेनोवो से काम, पढ़ाई और गेमिंग के लिए प्रीमियम कंप्यूटिंग नोटबुक।",
      ta: "வேலை, படிப்பு மற்றும் கேமிங்கிற்கான ஹெச்பி, டெல் மற்றும் லெனோவா ஆகியவற்றின் பிரீமியம் கணினிகள்.",
      kn: "ಕೆಲಸ, ಅಧ್ಯಯನ ಮತ್ತು ಗೇಮಿಂಗ್‌ಗಾಗಿ ಎಚ್‌ಪಿ, ಡೆಲ್ ಮತ್ತು ಲೆನೊವೊದಿಂದ ಪ್ರೀಮಿಯಂ ಲ್ಯಾಪ್‌ಟಾಪ್‌ಗಳು.",
      ml: "ജോലി, പഠനം, ഗെയിമിംഗ് എന്നിവയ്ക്കായി എച്ച്പി, ഡെൽ, ലെനോവോ എന്നിവയിൽ നിന്നുള്ള പ്രീമിയം ലാപ്‌ടോപ്പുകൾ.",
      mr: "काम, अभ्यास आणि गेमिंगसाठी HP, Dell आणि Lenovo कडील प्रीमियम कॉम्प्युटिंग नोटबुक.",
      gu: "કામ, અભ્યાસ અને ગેમિંગ માટે HP, Dell અને Lenovo તરફથી પ્રીમિયમ કમ્પ્યુટિંગ નોટબુક.",
      bn: "কাজ, পড়াশোনা এবং গেমিংয়ের জন্য HP, Dell এবং Lenovo থেকে প্রিমিয়াম ল্যাপটপ।",
      pa: "ਕੰਮ, ਪੜ੍ਹਾਈ ਅਤੇ ਗੇਮਿੰਗ ਲਈ HP, Dell ਅਤੇ Lenovo ਤੋਂ ਪ੍ਰੀਮੀਅਮ ਲੈਪਟਾਪ।",
      ur: "کام، پڑھائی اور گیمنگ کے لیے HP، Dell، اور Lenovo کے پریمیم لیپ ٹاپس۔"
    },
    "Electronic Accessories": {
      en: "Smartwatches, earbuds, soundbars, chargers, and utility electronic accessories.",
      te: "స్మార్ట్‌వాచ్‌లు, ఇయర్‌బడ్‌లు, సౌండ్‌బార్లు, చార్జర్లు మరియు ఇతర ఎలక్ట్రానిక్ యాక్సెసరీలు.",
      hi: "स्मार्टवॉच, ईयरबड्स, साउंडबार, चार्जर और अन्य इलेक्ट्रॉनिक एक्सेसरीज।",
      ta: "ஸ்மார்ட்வாட்ச்கள், இயர்பட்ஸ், சவுண்ட்பார்கள், சார்ஜர்கள் மற்றும் இதர மின்னணு பாகங்கள்.",
      kn: "ಸ್ಮಾರ್ಟ್‌ವಾಚ್‌ಗಳು, ಇಯರ್‌ಬಡ್‌ಗಳು, ಸೌಂಡ್‌ಬಾರ್‌ಗಳು, چارجرز ಮತ್ತು ಇತರ ಎಲೆಕ್ಟ್ರಾನಿಕ್ ಪರಿಕರಗಳು.",
      ml: "സ്മാർട്ട് വാച്ചുകൾ, ഇയർബഡുകൾ, സൗണ്ട്ബാറുകൾ, ചാർജറുകൾ, മറ്റ് ഇലക്ട്രോ닉 ആക്സസറികൾ.",
      mr: "स्मार्टवॉच, इयरबड्स, साउंडबार, चार्जर आणि इतर इलेक्ट्रॉनिक ऍक्सेसरीज.",
      gu: "સ્માર્ટવોચ, ઇયરબડ્સ, સાઉન્ડબાર, ચાર્જર અને અન્ય ઇલેક્ટ્રોનિક એક્સેસરીઝ.",
      bn: "স্মার্টওয়াচ, ইয়ারবাড, সাউন্ডবার, চার্জার এবং অন্যান্য ইলেকট্রনিক অ্যাক্সেসরিজ।",
      pa: "ਸਮਾਰਟਵਾਚ, ਈਅਰਬਡਸ, ਸਾਊਂਡਬਾਰ, ਚਾਰਜਰ ਅਤੇ ਹੋਰ ਇਲੈਕਟ੍ਰਾਨਿਕ ਐਕਸੈਸਰੀਜ਼।",
      ur: "سمارٹ واچز، ایئربڈز، ساؤنڈ بارز، چارجرز اور دیگر الیکٹرانک لوازمات۔"
    }
  };

  const getWhatsappProductText = (prod: { name: string; specs: string; category: string }) => {
    const categoryName = categoryTranslations[prod.category] || prod.category;
    
    switch (locale) {
      case "te":
        return `నమస్కారం దేవత డిజిటల్స్, నేను ఈ క్రింది ఉత్పత్తిని కొనుగోలు చేయడానికి ఆసక్తి కలిగి ఉన్నాను:\n\n*ఉత్పత్తి:* ${prod.name}\n*స్పెసిఫికేషన్స్:* ${prod.specs}\n*వర్గం:* ${categoryName}\n\nదయచేసి దీని లభ్యత మరియు ఉత్తమ ధరను నాకు తెలియజేయండి.`;
      case "hi":
        return `नमस्ते देवता डिजिटल्स, मैं निम्नलिखित उत्पाद खरीदने में रुचि रखता हूँ:\n\n*उत्पाद:* ${prod.name}\n*स्पेसिफिकेशन:* ${prod.specs}\n*श्रेणी:* ${categoryName}\n\nकृपया मुझे इसकी उपलब्धता और सर्वोत्तम मूल्य बताएं।`;
      case "ta":
        return `வணக்கம் தேவதா டிஜிட்டல்ஸ், நான் இந்த பொருளை வாங்க ஆர்வமாக உள்ளேன்:\n\n*பொருள்:* ${prod.name}\n*விவரக்குறிப்பு:* ${prod.specs}\n*வகை:* ${categoryName}\n\nதயவுசெய்து இதன் இருப்பு மற்றும் சிறந்த விலையை எனக்கு தெரிவிக்கவும்.`;
      case "kn":
        return `ನಮಸ್ಕಾರ ದೇವತಾ ಡಿಜಿಟಲ್ಸ್, ನಾನು ಈ ಕೆಳಗಿನ ಉತ್ಪನ್ನವನ್ನು ಖರೀದಿಸಲು ಆಸಕ್ತಿ ಹೊಂದಿದ್ದೇನೆ:\n\n*ಉತ್ಪನ್ನ:* ${prod.name}\n*ವಿವರಗಳು:* ${prod.specs}\n*ವರ್ಗ:* ${categoryName}\n\nದಯವಿಟ್ಟು ಇದರ ಲಭ್ಯತೆ ಮತ್ತು ಉತ್ತಮ ಬೆಲೆಯನ್ನು ತಿಳಿಸಿ.`;
      case "ml":
        return `ഹലോ ദേവത ഡിജിറ്റൽസ്, ഈ ഉൽപ്പന്നം വാങ്ങാൻ എനിക്ക് താൽപ്പര്യമുണ്ട്:\n\n*ഉൽപ്പന്നം:* ${prod.name}\n*വിവരങ്ങൾ:* ${prod.specs}\n*വിഭാഗം:* ${categoryName}\n\nദയവായി ഇതിന്റെ ലഭ്യതയും മികച്ച വിലയും എന്നെ അറിയിക്കുക.`;
      case "mr":
        return `नमस्कार देवता डिजिटल्स, मी हे उत्पादन खरेदी करण्यास उत्सुक आहे:\n\n*उत्पादन:* ${prod.name}\n*तपशील:* ${prod.specs}\n*वर्ग:* ${categoryName}\n\nकृपया मला याची उपलब्धता आणि सर्वोत्तम किंमत सांगा.`;
      case "gu":
        return `નમસ્તે દેવતા ડિજિટલ્સ, હું આ ઉત્પાદન ખરીદવામાં રસ ધરાવું છું:\n\n*ઉત્પાદન:* ${prod.name}\n*વિગતો:* ${prod.specs}\n*કેટેગરી:* ${categoryName}\n\nકૃપા કરીને મને આની ઉપલબ્ધતા અને શ્રેષ્ઠ કિંમત જણાવો.`;
      case "bn":
        return `হ্যালো দেবতাদিজিটালস, আমি এই পণ্যটি কিনতে আগ্রহী:\n\n*পণ্য:* ${prod.name}\n*স্পেসিফিকেশন:* ${prod.specs}\n*বিভাগ:* ${categoryName}\n\nদয়া করে এর প্রাপ্যতা এবং সেরা দামটি আমাকে জানান।`;
      case "pa":
        return `ਨਮਸਤੇ ਦੇਵਤਾ ਡਿਜੀਟਲਸ, ਮੈਂ ਇਹ ਉਤਪਾਦ ਖਰੀਦਣ ਵਿੱਚ ਦਿਲਚਸਪੀ ਰੱਖਦਾ ਹਾਂ:\n\n*ਉਤਪਾਦ:* ${prod.name}\n*ਵੇਰਵੇ:* ${prod.specs}\n*ਸ਼੍ਰੇਣੀ:* ${categoryName}\n\nਕਿਰਪਾ ਕਰਕੇ ਮੈਨੂੰ ਇਸਦੀ ਉਪਲਬਧਤਾ ਅਤੇ ਸਭ ਤੋਂ ਵਧੀਆ ਕੀਮਤ ਦੱਸੋ।`;
      case "ur":
        return `ہیلو دیوتا ڈیجیٹلز، میں یہ پروڈکٹ خریدنے میں دلچسپی رکھتا ہوں:\n\n*پروڈکٹ:* ${prod.name}\n*تفصیلات:* ${prod.specs}\n*زمرہ:* ${categoryName}\n\nبراہ کرم مجھے اس کی دستیابی اور بہترین قیمت بتائیں۔`;
      default:
        return `Hi Devatha Digitals, I am interested in purchasing:\n\n*Product:* ${prod.name}\n*Specs:* ${prod.specs}\n*Category:* ${categoryName}\n\nPlease let me know the availability and best price.`;
    }
  };

  const filteredProducts = productsList.filter(
    (product) => selectedCategory === "All" || product.category === selectedCategory
  );

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="products" className="py-24 bg-brand-alt-bg/35 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Grid Section */}
        <div className="text-center flex flex-col items-center gap-3 mb-16">
          <span className="text-sm font-bold text-primary tracking-wider uppercase">
            {t("products.catBadge")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
            {t("products.catTitleStart")}<span className="text-primary">{t("products.catTitleAccent")}</span>{t("products.catTitleEnd")}
          </h2>
          <p className="text-sm text-text-secondary max-w-xl font-medium mt-1">
            {t("products.catDesc")}
          </p>
        </div>

        {/* Categories Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-28"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {categories.map((cat, idx) => {
            const IconComponent = cat.icon;
            const localizedTitle = categoryTranslations[cat.title] || cat.title;
            const localizedDesc = categoryDescTranslations[cat.title]?.[locale] || cat.desc;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                onClick={() => {
                  const targetCategory = filterCategories.find(c => c.toLowerCase() === cat.title.toLowerCase()) || 
                                        (cat.title === "Electronic Accessories" ? "Electronic Accessories" : "All");
                  setSelectedCategory(targetCategory);
                  document.getElementById("live-showcase")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group bg-white rounded-3xl overflow-hidden shadow-premium shadow-premium-hover border border-border-custom flex flex-col cursor-pointer"
              >
                {/* Image Wrap */}
                <div className="relative h-48 w-full overflow-hidden bg-brand-alt-bg shrink-0">
                  <Image
                    src={cat.image}
                    alt={localizedTitle}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-108"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Subtle Orange overlay */}
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/0 transition-colors duration-300" />
                  
                  {/* Category Floating Icon Badge */}
                  <div className="absolute bottom-4 right-4 bg-white p-3 rounded-2xl shadow-md text-primary border border-border-custom/50 transform group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="h-5 w-5" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow gap-2">
                  <h3 className="text-lg font-bold text-text-primary group-hover:text-primary transition-colors duration-200">
                    {localizedTitle}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed font-medium">
                    {localizedDesc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {hideShowcase ? (
          <div className="flex justify-center mt-16">
            <a
              href={`/${locale}/products`}
              className="flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-white font-bold hover:bg-accent transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <span>{t("products.exploreShowcase")}</span>
              <span className="text-base font-bold">→</span>
            </a>
          </div>
        ) : (
          <div id="live-showcase" className="scroll-mt-24 border-t border-border-custom/80 pt-20">
            
            {/* Header */}
            <div className="text-center flex flex-col items-center gap-3 mb-12">
              <span className="text-sm font-bold text-primary tracking-wider uppercase">
                {t("products.catalogBadge")}
              </span>
              <h2 className="text-3xl font-extrabold text-text-primary tracking-tight">
                {t("products.catalogTitleStart")}<span className="text-primary">{t("products.catalogTitleAccent")}</span>{t("products.catalogTitleEnd")} ({productsList.length} {locale === "en" ? "Items" : (locale === "te" ? "ఐటమ్స్" : locale === "hi" ? "आइटम" : locale === "ta" ? "பொருட்கள்" : locale === "kn" ? "ಐಟಂಗಳು" : locale === "ml" ? "ഇനങ്ങൾ" : locale === "mr" ? "आयटम" : locale === "gu" ? "વસ્તુઓ" : locale === "bn" ? "টি আইটেম" : locale === "pa" ? "ਆਈਟਮਾਂ" : "آئٹمز")})
              </h2>
              <p className="text-sm text-text-secondary max-w-xl font-medium mt-1">
                {t("products.catalogDesc")}
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-5xl mx-auto">
              {filterCategories.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedCategory(tab)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                    selectedCategory === tab
                      ? "bg-primary text-white shadow-md shadow-primary/20 scale-105"
                      : "bg-white border border-border-custom text-text-secondary hover:text-primary hover:border-primary/30"
                  }`}
                >
                  {categoryTranslations[tab] || tab}
                </button>
              ))}
            </div>

            {/* Products Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              layout
            >
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((prod) => (
                  <motion.div
                    key={prod.name}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="group bg-white rounded-2xl overflow-hidden shadow-premium border border-border-custom flex flex-col justify-between"
                  >
                    {/* Product Image */}
                    <div className="relative h-44 w-full overflow-hidden bg-brand-alt-bg shrink-0">
                      <Image
                        src={prod.image}
                        alt={prod.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      />
                      
                      {/* Brand Badge */}
                      <span className="absolute top-3 left-3 bg-primary text-white text-[10px] font-extrabold px-3 py-1 rounded-full shadow-sm">
                        {prod.brand}
                      </span>

                      {/* Stock Status */}
                      <span className="absolute top-3 right-3 bg-emerald-500 text-white text-[9px] font-extrabold px-2 py-0.5 rounded-md flex items-center gap-1 shadow-sm uppercase tracking-wide">
                        <Sparkles className="h-3 w-3 fill-current" />
                        {t("products.inStock")}
                      </span>
                    </div>

                    {/* Product Details */}
                    <div className="p-5 flex flex-col flex-grow gap-2">
                      <span className="text-[10px] font-bold text-primary tracking-wider uppercase">
                        {categoryTranslations[prod.category] || prod.category}
                      </span>
                      <h4 className="text-sm font-extrabold text-text-primary leading-tight group-hover:text-primary transition-colors duration-200">
                        {prod.name}
                      </h4>
                      <p className="text-xs text-text-secondary leading-relaxed font-semibold mt-1">
                        {prod.specs}
                      </p>
                    </div>

                    {/* Action Button */}
                    <div className="p-5 pt-0 mt-auto">
                      <a
                        href={`https://wa.me/919948020830?text=${encodeURIComponent(
                          getWhatsappProductText(prod)
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 w-full py-2.5 bg-brand-alt-bg group-hover:bg-primary text-text-primary group-hover:text-white text-xs font-bold rounded-xl transition-all duration-300 border border-border-custom group-hover:border-primary cursor-pointer"
                      >
                        <ShoppingBag className="h-3.5 w-3.5" />
                        <span>{t("products.inquirePrice")}</span>
                      </a>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        )}

      </div>
    </section>
  );
}
