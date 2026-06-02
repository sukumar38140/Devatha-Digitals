"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowLeft, ArrowRight, Star, Quote } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export default function Reviews() {
  const { t, locale } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const getTestimonialComment = (idx: number) => {
    const comments: Record<string, string[]> = {
      en: [
        "Bought a Samsung Neo QLED Smart TV here. The showroom experience is outstanding. The staff is highly knowledgeable and explained all features in detail. Delivery and wall mounting installation were completed on the same day!",
        "I have been purchasing home appliances from Devatha Digitals for the last 10 years. They always offer the best competitive pricing, way better than online, and provide genuine brand warranty cards. Owner Babu Garu is extremely helpful.",
        "Excellent service! Bought a Daikin Inverter AC for my office. The technician crew arrived within 4 hours of my payment, conducted clean drilling, and finished setup without any hassle. True professionals.",
        "Got my new Vivo phone from Devatha. They matched the online discounts, helped me set up my email, transferred my entire data from the old handset, and gave a free protective tempered glass. Best offline purchase experience.",
        "Prompt after-sales assistance. When our washing machine had a minor error, we called Devatha Digitals. They immediately registered the service request with the company, and the engineer arrived the next morning."
      ],
      te: [
        "ఇక్కడ శామ్‌సంగ్ నియో క్యూలెడ్ స్మార్ట్ టీవీని కొనుగోలు చేసాను. షోరూమ్ అనుభవం చాలా బాగుంది. సిబ్బందికి పూర్తి అవగాహన ఉంది మరియు అన్ని ఫీచర్లను వివరంగా వివరించారు. డెలివరీ మరియు వాల్ మౌంటింగ్ ఇన్‌స్టాలేషన్ అదే రోజున పూర్తయ్యాయి!",
        "నేను గత 10 సంవత్సరాలుగా దేవత డిజిటల్స్ నుండి గృహోపకరణాలను కొనుగోలు చేస్తున్నాను. వారు ఎల్లప్పుడూ ఆన్‌లైన్ కంటే మెరుగైన పోటీ ధరలను అందిస్తారు మరియు నిజమైన బ్రాండ్ వారంటీ కార్డులను ఇస్తారు. యజమాని బాబు గారు చాలా సహాయకారిగా ఉంటారు.",
        "అద్భుతమైన సేవ! నా కార్యాలయం కోసం డైకిన్ ఇన్వర్టర్ ఏసీని కొనుగోలు చేసాను. నా చెల్లింపు జరిగిన 4 గంటల్లోనే టెక్నీషియన్ల బృందం వచ్చి, చక్కగా డ్రిల్లింగ్ చేసి, ఎటువంటి ఇబ్బంది లేకుండా ఇన్‌స్టాలేషన్ పూర్తి చేసారు. నిజమైన నిపుణులు.",
        "దేవతలో నా కొత్త వివో ఫోన్ కొనుగోలు చేసాను. వారు ఆన్‌లైన్ డిస్కౌంట్లకు సరిసమానంగా ధర ఇచ్చారు, నా ఈమెయిల్ సెటప్ చేయడంలో సహాయపడ్డారు, నా పాత ఫోన్ నుండి మొత్తం డేటాను బదిలీ చేసారు మరియు ఉచిత టెంపర్డ్ గ్లాస్ ఇచ్చారు. ఉత్తమ కొనుగోలు అనుభవం.",
        "శీఘ్ర విక్రయాల తర్వాతి సహాయం. మా వాషింగ్ మెషీన్‌లో చిన్న లోపం వచ్చినప్పుడు, మాము దేవత డిజిటల్స్‌కు కాల్ చేసాము. వారు వెంటనే కంపెనీతో సేవా అభ్యర్థనను నమోదు చేసారు మరియు మరుసటి రోజు ఉదయమే ఇంజనీర్ వచ్చారు."
      ],
      hi: [
        "यहाँ एक सैमसंग नियो क्यूएलईडी स्मार्ट टीवी खरीदा। शोरूम का अनुभव उत्कृष्ट है। कर्मचारी अत्यधिक जानकार हैं और उन्होंने सभी सुविधाओं को विस्तार से समझाया। डिलीवरी और दीवार पर लगाने का काम उसी दिन पूरा हो गया!",
        "मैं पिछले 10 वर्षों से देवता डिजिटल्स से घरेलू उपकरण खरीद रही हूँ। वे हमेशा सर्वोत्तम प्रतिस्पर्धी मूल्य प्रदान करते हैं, जो ऑनलाइन से कहीं बेहतर है, और वास्तविक ब्रांड वारंटी कार्ड देते हैं। मालिक बाबू गारू बेहद मददगार हैं।",
        "उत्कृष्ट सेवा! मेरे कार्यालय के लिए एक डैकिन इन्वर्टर एसी खरीदा। तकनीशियन दल मेरे भुगतान के 4 घंटे के भीतर आ गया, साफ ड्रिलिंग की, और बिना किसी परेशानी के सेटअप पूरा किया। सच्चे पेशेवर।",
        "देवता से अपना नया विवो फोन प्राप्त किया। उन्होंने ऑनलाइन छूट से मेल खाया, मुझे अपना ईमेल सेट करने में मदद की, मेरे पुराने हैंडसेट से मेरा पूरा डेटा स्थानांतरित किया, और एक मुफ्त सुरक्षात्मक टेम्पर्ड ग्लास दिया। सर्वश्रेष्ठ ऑफलाइन खरीद अनुभव।",
        "त्वरित बिक्री के बाद सहायता। जब हमारी वॉशिंग मशीन में एक मामूली खराबी आई, तो हमने देवता डिजिटल्स को फोन किया। उन्होंने तुरंत कंपनी के साथ सेवा अनुरोध दर्ज किया, और इंजीनियर अगली सुबह आ गए।"
      ],
      ta: [
        "இங்கே ஒரு சாம்சங் நியோ கியூலெட் ஸ்மார்ட் டிவி வாங்கினேன். ஷோரூம் அனுபவம் அற்புதம். ஊழியர்கள் சிறந்த அறிவுடையவர்கள் மற்றும் அனைத்து அம்சங்களையும் விரிவாக விளக்கினர். டெலிவரி மற்றும் நிறுவல் அதே நாளில் முடிந்தது!",
        "நான் கடந்த 10 ஆண்டுகளாக தேவதா டிஜிட்டல்ஸிலிருந்து வீட்டு உபயோகப் பொருட்களை வாங்கி வருகிறேன். ஆன்லைனை விட சிறந்த போட்டி விலையை அவர்கள் எப்போதும் வழங்குகிறார்கள். உரிமையாளர் பாபு காரு மிகவும் உதவியாக இருக்கிறார்.",
        "சிறந்த சேவை! எனது அலுவலகத்திற்கு டைகின் இன்வெர்ட்டர் ஏசி வாங்கினேன். பணம் செலுத்திய 4 மணி நேரத்திற்குள் தொழில்நுட்பக் குழுவினர் வந்து, சுத்தமாக துளையிட்டு, எந்த தொந்தரவும் இல்லாமல் அமைப்பை முடித்தனர். உண்மையான தொழில்முறை வல்லுநர்கள்.",
        "தேவதாவில் எனது புதிய விவோ போனை வாங்கினேன். அவர்கள் ஆன்லைன் தள்ளுபடிக்கு இணையாக விலை கொடுத்தனர், எனது மின்னஞ்சலை அமைக்க உதவினர், பழைய கைபேசியில் இருந்து அனைத்து தரவையும் மாற்றினர், மேலும் இலவச டெம்பர்டு கிளாஸ் கொடுத்தனர். சிறந்த அனுபவம்.",
        "விரைவான விற்பனைக்குப் பிந்தைய உதவி. எங்கள் சலவை இயந்திரத்தில் சிறிய பிழை ஏற்பட்டபோது, நாங்கள் தேவதா டிஜிட்டல்ஸை அழைத்தோம். அவர்கள் உடனடியாக நிறுவனத்தில் சேவை கோரிக்கையை பதிவு செய்தனர், அடுத்த நாள் காலையில் பொறியாளர் வந்தார்."
      ]
    };
    return comments[locale]?.[idx] || comments["en"][idx];
  };

  const getTestimonialRole = (role: string) => {
    switch (role) {
      case "Local Guide":
        return locale === "en" ? "Local Guide" : (locale === "te" ? "స్థానిక గైడ్" : locale === "hi" ? "स्थानीय गाइड" : locale === "ta" ? "உள்ளூர் வழிகாட்டி" : locale === "kn" ? "ಸ್ಥಳೀಯ ಗೈಡ್" : locale === "ml" ? "ലോക്കൽ ഗൈഡ്" : locale === "mr" ? "स्थानिक मार्गदर्शक" : locale === "gu" ? "સ્થાનિક માર્ગદર્શક" : locale === "bn" ? "স্থানীয় গাইড" : locale === "pa" ? "ਸਭਾਕ ਗਾਈਡ" : "مقامی گائیڈ");
      case "Verified Buyer":
        return t("reviews.verified");
      case "AC Client":
        return locale === "en" ? "AC Client" : (locale === "te" ? "ఏసీ కస్టమర్" : locale === "hi" ? "एसी ग्राहक" : locale === "ta" ? "ஏசி வாடிக்கையாளர்" : locale === "kn" ? "ಎಸಿ ಗ್ರಾಹಕ" : locale === "ml" ? "എസി കസ്റ്റമർ" : locale === "mr" ? "एसी ग्राहक" : locale === "gu" ? "એસી ગ્રાહક" : locale === "bn" ? "এসি গ্রাহক" : locale === "pa" ? "ਏਸੀ ਗਾਹਕ" : "اے سی کلائنٹ");
      case "Mobile Enthusiast":
        return locale === "en" ? "Mobile Enthusiast" : (locale === "te" ? "మొబైల్ ప్రియుడు" : locale === "hi" ? "मोबाइल उत्साही" : locale === "ta" ? "மொபைல் ஆர்வலர்" : locale === "kn" ? "ಮೊಬೈಲ್ ಪ್ರೇಮಿ" : locale === "ml" ? "മൊബൈൽ പ്രേമി" : locale === "mr" ? "मोबाईल प्रेमी" : locale === "gu" ? "મોબાઈલ પ્રેમી" : locale === "bn" ? "মোবাইল প্রেমী" : locale === "pa" ? "ਮੋਬਾਈਲ ਪ੍ਰੇਮੀ" : "موبائل کا شوقین");
      case "Homeowner":
        return locale === "en" ? "Homeowner" : (locale === "te" ? "గృహ యజమాని" : locale === "hi" ? "गृहस्वामी" : locale === "ta" ? "வீட்டு உரிமையாளர்" : locale === "kn" ? "ಮನೆ ಮಾಲೀಕರು" : locale === "ml" ? "വീട്ടു ഉടമസ്ഥൻ" : locale === "mr" ? "घरमालक" : locale === "gu" ? "ઘરમાલિક" : locale === "bn" ? "গৃহকর্তা" : locale === "pa" ? "ਘਰ ਦਾ ਮਾਲਕ" : "مکان کا مالک");
      default:
        return role;
    }
  };

  const getTestimonialLocation = (loc: string) => {
    if (loc === "Madanapalle") {
      return locale === "en" ? "Madanapalle" : (locale === "te" ? "మదనపల్లె" : locale === "hi" ? "मदनपल्ले" : locale === "ta" ? "மதனபள்ளி" : locale === "kn" ? "ಮದನಪಲ್ಲಿ" : locale === "ml" ? "മദനപ്പള്ളി" : locale === "mr" ? "मदनपल्ले" : locale === "gu" ? "મદનપલ્લે" : locale === "bn" ? "মদনপল্লী" : locale === "pa" ? "ਮਦਨਪੱਲੇ" : "مدنپلی");
    }
    if (loc === "CTM Road") {
      return locale === "en" ? "CTM Road" : (locale === "te" ? "సీటీఎం రోడ్" : locale === "hi" ? "सीटीएम रोड" : locale === "ta" ? "சிடிஎம் சாலை" : locale === "kn" ? "ಸಿಟಿಎಂ ರಸ್ತೆ" : locale === "ml" ? "സിടിഎം റോഡ്" : locale === "mr" ? "सीटीएम रोड" : locale === "gu" ? "સીટીએમ રોડ" : locale === "bn" ? "সিটিএম রোড" : locale === "pa" ? "ਸੀਟੀਐਮ ਰੋਡ" : "سی ٹی ایم روڈ");
    }
    return loc;
  };

  const getTestimonialDate = (dateStr: string) => {
    if (dateStr === "2 weeks ago") {
      return locale === "en" ? "2 weeks ago" : (locale === "te" ? "2 వారాల క్రితం" : locale === "hi" ? "2 सप्ताह पहले" : locale === "ta" ? "2 வாரங்களுக்கு முன்பு" : locale === "kn" ? "2 ವಾರಗಳ ಹಿಂದೆ" : locale === "ml" ? "2 ആഴ്ച മുമ്പ്" : locale === "mr" ? "2 आठवड्यांपूर्वी" : locale === "gu" ? "2 અઠવાડિયા પહેલા" : locale === "bn" ? "২ সপ্তাহ আগে" : locale === "pa" ? "2 ਹਫ਼ਤੇ ਪਹਿਲਾਂ" : "2 ہفتے پہلے");
    }
    if (dateStr === "1 month ago") {
      return locale === "en" ? "1 month ago" : (locale === "te" ? "1 నెల క్రితం" : locale === "hi" ? "1 महीने पहले" : locale === "ta" ? "1 மாதத்திற்கு முன்பு" : locale === "kn" ? "1 ತಿಂಗಳ ಹಿಂದೆ" : locale === "ml" ? "1 മാസം മുമ്പ്" : locale === "mr" ? "1 महिन्यापूर्वी" : locale === "gu" ? "1 મહિના પહેલા" : locale === "bn" ? "১ মাস আগে" : locale === "pa" ? "1 ਮਹੀਨਾ ਪਹਿਲਾਂ" : "1 مہینہ پہلے");
    }
    if (dateStr === "3 months ago") {
      return locale === "en" ? "3 months ago" : (locale === "te" ? "3 నెలల క్రితం" : locale === "hi" ? "3 महीने पहले" : locale === "ta" ? "3 மாதங்களுக்கு முன்பு" : locale === "kn" ? "3 ತಿಂಗಳ ಹಿಂದೆ" : locale === "ml" ? "3 മാസം മുമ്പ്" : locale === "mr" ? "3 महिन्यांपूर्वी" : locale === "gu" ? "3 મહિના પહેલા" : locale === "bn" ? "৩ মাস আগে" : locale === "pa" ? "3 ਮਹੀਨੇ ਪਹਿਲਾਂ" : "3 مہینے پہلے");
    }
    if (dateStr === "4 months ago") {
      return locale === "en" ? "4 months ago" : (locale === "te" ? "4 నెలల క్రితం" : locale === "hi" ? "4 महीने पहले" : locale === "ta" ? "4 மாதங்களுக்கு முன்பு" : locale === "kn" ? "4 ತಿಂಗಳ ಹಿಂದೆ" : locale === "ml" ? "4 മാസം മുമ്പ്" : locale === "mr" ? "4 महिन्यांपूर्वी" : locale === "gu" ? "4 મહિના પહેલા" : locale === "bn" ? "৪ মাস আগে" : locale === "pa" ? "4 ਮਹੀਨੇ ਪਹਿਲਾਂ" : "4 مہینے پہلے");
    }
    if (dateStr === "6 months ago") {
      return locale === "en" ? "6 months ago" : (locale === "te" ? "6 నెలల క్రితం" : locale === "hi" ? "6 महीने पहले" : locale === "ta" ? "6 மாதங்களுக்கு முன்பு" : locale === "kn" ? "6 ತಿಂಗಳ ಹಿಂದೆ" : locale === "ml" ? "6 മാസം മുമ്പ്" : locale === "mr" ? "6 महिन्यांपूर्वी" : locale === "gu" ? "6 મહિના પહેલા" : locale === "bn" ? "৬ মাস আগে" : locale === "pa" ? "6 ਮਹੀਨੇ ਪਹਿਲਾਂ" : "6 مہینے پہلے");
    }
    return dateStr;
  };

  const testimonials = [
    {
      name: "D. Rajesh",
      role: "Local Guide",
      location: "Madanapalle",
      rating: 5,
      date: "2 weeks ago"
    },
    {
      name: "S. Anitha",
      role: "Verified Buyer",
      location: "CTM Road",
      rating: 5,
      date: "1 month ago"
    },
    {
      name: "K. Imtiaz",
      role: "AC Client",
      location: "Madanapalle",
      rating: 5,
      date: "3 months ago"
    },
    {
      name: "Manoj Kumar",
      role: "Mobile Enthusiast",
      location: "Madanapalle",
      rating: 5,
      date: "4 months ago"
    },
    {
      name: "Lakshmi Prasanna",
      role: "Homeowner",
      location: "Madanapalle",
      rating: 5,
      date: "6 months ago"
    }
  ];

  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    }),
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const activeReview = testimonials[currentIndex];

  return (
    <section id="reviews" className="py-24 bg-brand-alt-bg/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 flex flex-col gap-3">
            <span className="text-sm font-bold text-primary tracking-wider uppercase">
              {t("reviews.badge")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
              {t("reviews.titleStart")}<span className="text-primary">{t("reviews.titleAccent")}</span>{t("reviews.titleEnd")}
            </h2>
            <p className="text-sm text-text-secondary max-w-xl font-medium mt-1">
              {t("reviews.desc")}
            </p>
          </div>

          {/* Google Ratings Card */}
          <div className="lg:col-span-5 bg-white p-6 rounded-3xl shadow-premium border border-border-custom flex items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-1">
                <span className="text-3xl font-extrabold text-text-primary">{t("reviews.ratingText")}</span>
                <div className="flex text-yellow-400">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current opacity-50" />
                </div>
              </div>
              <p className="text-xs font-bold text-text-secondary uppercase tracking-wider mt-1">
                {t("reviews.ratingSub")}
              </p>
            </div>
            <div className="border-l border-border-custom pl-6">
              <span className="text-2xl font-extrabold text-text-primary">{t("reviews.reviewsCountText")}</span>
              <p className="text-xs font-bold text-text-secondary uppercase tracking-wider mt-1">
                {t("reviews.reviewsCountSub")}
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial Slider Container */}
        <div className="relative max-w-3xl mx-auto min-h-[300px]">
          {/* Decorative Quote Icon */}
          <div className="absolute -top-6 -left-6 text-primary/10 select-none pointer-events-none">
            <Quote className="h-20 w-20 transform rotate-180" />
          </div>

          <div className="overflow-hidden bg-white p-8 sm:p-12 rounded-3xl shadow-premium border border-border-custom">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="flex flex-col gap-6"
              >
                {/* Stars and Date */}
                <div className="flex items-center justify-between">
                  <div className="flex text-yellow-400">
                    {Array.from({ length: activeReview.rating }).map((_, i) => (
                      <Star key={i} className="h-4.5 w-4.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-text-secondary uppercase tracking-widest">
                    {getTestimonialDate(activeReview.date)}
                  </span>
                </div>

                {/* Comment */}
                <blockquote className="text-base sm:text-lg text-text-primary font-medium italic leading-relaxed">
                  &ldquo;{getTestimonialComment(currentIndex)}&rdquo;
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-4 border-t border-border-custom pt-6 mt-2">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center font-bold text-primary text-lg">
                    {activeReview.name[0]}
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-text-primary">
                      {activeReview.name}
                    </h4>
                    <p className="text-xs font-bold text-text-secondary uppercase tracking-wider mt-0.5">
                      {getTestimonialRole(activeReview.role)} • {getTestimonialLocation(activeReview.location)}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="p-3 bg-white border border-border-custom hover:border-primary/20 rounded-full text-text-secondary hover:text-primary shadow-sm hover:shadow-md transition-all duration-300"
              aria-label="Previous Review"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <span className="text-xs font-extrabold text-text-secondary select-none tracking-widest uppercase">
              {currentIndex + 1} / {testimonials.length}
            </span>
            <button
              onClick={handleNext}
              className="p-3 bg-white border border-border-custom hover:border-primary/20 rounded-full text-text-secondary hover:text-primary shadow-sm hover:shadow-md transition-all duration-300"
              aria-label="Next Review"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
