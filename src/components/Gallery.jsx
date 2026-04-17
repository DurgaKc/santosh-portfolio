import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FaOm, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Gallery data with multiple images per category from public folder
const galleryCategories = [
  {
    id: 1,
    title: "हवन अनुष्ठान",
    titleEn: "Sacred Havan Ritual",
    category: "पूजा",
    categoryEn: "Puja",
    description: "पवित्र अग्निकुण्डमा आहुति दिँदै वैदिक मन्त्रोच्चारण",
    images: [
      "/hawanpuja1.jpeg",
      "/hawanpuja2.jpeg",
      "/hawanpuja3.jpeg",
    ]
  },
  {
    id: 2,
    title: "मन्दिर दर्शन",
    titleEn: "Temple Ceremony",
    category: "मन्दिर",
    categoryEn: "Temple",
    description: "भगवानको दर्शन र विशेष पूजा आराधनाको पवित्र क्षणहरू",
    images: [
      "/temple1.jpeg"
    ]
  },
  {
    id: 3,
    title: "लाख बत्ती",
    titleEn: "Lakh Batti",
    category: "पूजा",
    categoryEn: "Puja",
    description: "ग्रह शान्ति र कुण्डली दोष निवारणको लागि एक लाख दीप प्रज्वलन",
    images: [
      "/lakhbatti1.jpeg",
      "/lakhbatti2.jpeg",
    ]
  },
  {
    id: 4,
    title: "विवाह संस्कार",
    titleEn: "Marriage Ceremony",
    category: "विवाह",
    categoryEn: "Marriage",
    description: "सप्तपदी, सिन्दूरदान र अन्य वैदिक विवाह विधिहरूको मनमोहक क्षणहरू",
    images: [
      "/wedding1.jpeg",
      "/wedding2.jpeg",
    ]
  },
  {
    id: 5,
    title: "ब्रतबन्ध",
    titleEn: "Bratabandha Ceremony",
    category: "ब्रतबन्ध",
    categoryEn: "Samskara",
    description: "उपनयन संस्कारको पवित्र क्षणहरू - गायत्री मन्त्र दीक्षा र यज्ञोपवीत धारण",
    images: [
      "/bratabandha2.jpeg",
      "/bratabandha1.jpeg",
    ]
  },
  {
    id: 6,
    title: "भूमि पूजा",
    titleEn: "Bhumi Puja",
    category: "पूजा",
    categoryEn: "Puja",
    description: "नयाँ भवन निर्माण पूर्व भूमिको पूजा र वास्तु शान्तिको लागि वैदिक अनुष्ठान",
    images: [
      "/bhumipuja1.jpeg",
    ]
  },
  {
    id: 7,
    title: "गृह प्रवेश",
    titleEn: "Griha Pravesh",
    category: "गृह प्रवेश",
    categoryEn: "Samskara",
    description: "नयाँ घरमा प्रवेश गर्दा गरिने वैदिक विधि - गणेश पूजा, वास्तु शान्ति र हवन",
    images: [
      "/gharprabesh1.jpeg",
    ]
  },
  {
    id: 8,
    title: "कुण्डली विश्लेषण",
    titleEn: "Kundali Analysis",
    category: "ज्योतिष",
    categoryEn: "Astrology",
    description: "विस्तृत वैदिक ज्योतिषीय अध्ययन - जन्मकुण्डली, ग्रहदशा र भविष्यवाणी",
    images: [
      "/kundali1.jpeg",
    ]
  }
];

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  const nextImage = (e, categoryId, maxLength) => {
    e.stopPropagation();
    setCurrentImageIndex(prev => ({
      ...prev,
      [categoryId]: ((prev[categoryId] || 0) + 1) % maxLength
    }));
  };

  const prevImage = (e, categoryId, maxLength) => {
    e.stopPropagation();
    setCurrentImageIndex(prev => ({
      ...prev,
      [categoryId]: ((prev[categoryId] || 0) - 1 + maxLength) % maxLength
    }));
  };

  return (
    <section id="gallery" className="py-24 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
           ref={ref}
           initial={{ opacity: 0, y: 20 }}
           animate={inView ? { opacity: 1, y: 0 } : {}}
           className="text-center mb-16"
        >
          <span className="text-saffron font-bold tracking-[0.3em] uppercase text-sm block mb-4">दृश्य यात्रा</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-maroon mb-6">पवित्र क्षणहरू</h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full mb-6" />
          <p className="max-w-2xl mx-auto text-text-muted text-lg">
            भक्तिपूर्वक सम्पन्न गरिएका आध्यात्मिक समारोह र परम्परागत संस्कारहरूको झलकहरू ।
          </p>
        </motion.div>

        {/* Changed grid to 4 columns on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {galleryCategories.map((category, index) => {
            const currentImgIndex = currentImageIndex[category.id] || 0;
            
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative aspect-square overflow-hidden rounded-2xl group cursor-pointer shadow-lg"
              >
                {/* Image with crossfade animation */}
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImgIndex}
                    src={category.images[currentImgIndex]}
                    alt={category.titleEn}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </AnimatePresence>

                {/* Navigation Arrows */}
                {category.images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => prevImage(e, category.id, category.images.length)}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/40 z-10"
                      aria-label="Previous image"
                    >
                      <FaChevronLeft className="text-white text-xs" />
                    </button>
                    <button
                      onClick={(e) => nextImage(e, category.id, category.images.length)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/40 z-10"
                      aria-label="Next image"
                    >
                      <FaChevronRight className="text-white text-xs" />
                    </button>
                  </>
                )}

                {/* Image counter dots */}
                {category.images.length > 1 && (
                  <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {category.images.map((_, idx) => (
                      <div
                        key={idx}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                          idx === currentImgIndex 
                            ? 'bg-white w-4' 
                            : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                )}

                {/* Overlay with text */}
                <div className="absolute inset-0 bg-gradient-to-t from-maroon/90 via-maroon/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className="text-saffron text-xs font-bold uppercase tracking-widest mb-1">
                    {category.category}
                  </span>
                  <h4 className="text-white text-lg font-heading font-bold mb-0.5">
                    {category.title}
                  </h4>
                  <p className="text-white/80 text-xs mb-1">{category.titleEn}</p>
                  <p className="text-white/90 text-xs leading-relaxed line-clamp-3">
                    {category.description}
                  </p>
                </div>

                {/* Category badge */}
                <div className="absolute top-3 left-3 bg-saffron/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg z-10">
                  <span className="text-white text-xs font-bold tracking-wider">
                    {category.category}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Decorative Om */}
        <div className="mt-20 flex justify-center opacity-20">
          <FaOm className="text-6xl text-gold animate-pulse" />
        </div>
      </div>
    </section>
  );
}