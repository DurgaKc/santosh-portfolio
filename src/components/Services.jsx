import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GiLotus, GiCandleFlame, GiSun, GiRing, GiStoneBridge } from "react-icons/gi";
import { FaOm } from "react-icons/fa";

const rituals = [
  {
    title: "ब्रतबन्ध",
    titleEn: "Bratabandha",
    description: "बालकहरूको विद्यारम्भ र आध्यात्मिक शिक्षाको प्रवेशको पवित्र उपनयन संस्कार ।",
    descriptionEn: "The sacred Upanayana ceremony for young boys, marking their entry into student life and spiritual learning.",
    icon: <GiCandleFlame className="text-4xl text-saffron" />,
    image: "/bratabandha1.jpeg"
  },
  {
    title: "विवाह संस्कार",
    titleEn: "Marriage Ceremony",
    description: "कन्यादान, सप्तपदी र सिन्दूरदान सहितको परम्परागत वैदिक विवाह समारोह ।",
    descriptionEn: "Traditional Vedic weddings with complete rituals including Kanyadaan, Saptapadi, and Sindoor ceremony.",
    icon: <GiRing className="text-4xl text-saffron" />,
    image: "/wedding1.jpeg"
  },
  {
    title: "चौरासी पूजा",
    titleEn: "Chaurasi Puja",
    description: "चौरासी वर्ष पुगेपछि दीर्घायु र आशीर्वादको कामना गर्दै गरिने भव्य धार्मिक अनुष्ठान ।",
    descriptionEn: "A grand celebration and ritual performed when one reaches the age of 84, seeking divine blessings for longevity.",
    icon: <FaOm className="text-4xl text-saffron" />,
    image: "/bratabandha2.jpeg"
  },
  {
    title: "पास्नी",
    titleEn: "Pasni (Rice Feeding)",
    description: "शिशुलाई पहिलो पटक अन्न खुवाउने शुभ संस्कार, ठोस आहारको सुरुवातको प्रतीक ।",
    descriptionEn: "The auspicious first rice-feeding ceremony for infants, marks their transition to solid foods.",
    icon: <GiLotus className="text-4xl text-saffron" />,
    image: "/pasni1.jpeg"
  },
  {
    title: "गृह प्रवेश",
    titleEn: "Griha Pravesh",
    description: "नयाँ घरलाई शुद्ध गर्दै समृद्धि र सकारात्मक ऊर्जाको आह्वान गर्ने वैदिक गृहारम्भ संस्कार ।",
    descriptionEn: "Vedic housewarming ceremony to purify the new home and invite prosperity and positive energy.",
    icon: <GiStoneBridge className="text-4xl text-saffron" />,
    image: "/gharprabesh1.jpeg"
  },
  {
    title: "ज्योतिष र कुण्डली",
    titleEn: "Jyotish & Kundali",
    description: "विस्तृत ज्योतिषीय विश्लेषण, जन्मकुण्डली व्याख्या र व्यक्तिगत आध्यात्मिक मार्गदर्शन ।",
    descriptionEn: "In-depth astrological analysis, birth chart interpretation, and personalized spiritual guidance.",
    icon: <GiSun className="text-4xl text-saffron" />,
    image: "/kundali1.jpeg"
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 bg-yellow-light/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
           ref={ref}
           initial={{ opacity: 0, y: 20 }}
           animate={inView ? { opacity: 1, y: 0 } : {}}
           className="text-center mb-16"
        >
          <span className="text-saffron font-bold tracking-[0.3em] uppercase text-sm block mb-4">पवित्र सेवाहरू</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-maroon mb-6">संस्कार र अनुष्ठान</h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full mb-6" />
          <p className="max-w-2xl mx-auto text-text-muted text-lg">
            सनातन वैदिक परम्पराको गरिमालाई जोगाउँदै हिन्दू सांस्कृतिक अनुष्ठानहरूको विधिवत् र भक्तिपूर्ण सम्पादन ।
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {rituals.map((ritual, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group border border-gold/10"
            >
              <div className="h-58 overflow-hidden relative">
                <img 
                  src={ritual.image} 
                  alt={ritual.titleEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-maroon/20 group-hover:bg-maroon/10 transition-colors" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg">
                  {ritual.icon}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-heading font-bold text-maroon mb-1 font-hindi">
                  {ritual.title}
                </h3>
                <p className="text-xs text-gold/70 mb-3 tracking-wide uppercase">{ritual.titleEn}</p>
                <p className="text-text-muted leading-relaxed mb-6">
                  {ritual.description}
                </p>
                <div className="w-10 h-0.5 bg-saffron group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative Om */}
        <div className="mt-20 flex justify-center opacity-20">
           <FaOm className="text-6xl text-gold animate-pulse" />
        </div>
      </div>
    </section>
  );
}