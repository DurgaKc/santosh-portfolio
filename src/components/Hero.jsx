import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaArrowRight } from "react-icons/fa";
import heroBg from "../assets/hero-bg.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-maroon/60 via-maroon/40 to-cream/100" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-6 inline-block"
        >
          <span className="px-4 py-1.5 rounded-full bg-saffron/20 border border-saffron/30 text-saffron text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
            वैदिक ज्योतिष एवं संस्कार
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-6xl md:text-8xl font-heading font-bold text-white mb-6 drop-shadow-2xl"
        >
          ॥ हरिः ॐ खं ब्रह्म ॥
          <br />
          संस्कार ज्योतिष सदन
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl md:text-2xl text-yellow-light/90 font-medium mb-10 max-w-2xl mx-auto leading-relaxed shadow-text"
        >
          प्राचीन वैदिक परम्परा र प्रामाणिक हिन्दू संस्कारहरूद्वारा तपाईंको आध्यात्मिक यात्रामा मार्गदर्शन
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="services"
            smooth
            duration={600}
            className="group flex items-center gap-2 px-10 py-4 bg-saffron text-white rounded-full font-bold text-lg hover:bg-maroon transition-all shadow-xl hover:scale-105 cursor-pointer"
          >
            हाम्रा सेवाहरू <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="contact"
            smooth
            duration={600}
            className="px-10 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all cursor-pointer"
          >
            सम्पर्क गर्नुहोस्
          </Link>
        </motion.div>
      </div>

      {/* Traditional Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-maroon/60 text-[10px] uppercase tracking-widest font-bold">तल स्क्रोल गर्नुहोस्</span>
        <div className="w-px h-12 bg-gradient-to-b from-maroon/60 to-transparent" />
      </motion.div>
    </section>
  );
}