import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaQuran, FaPrayingHands, FaStar, FaEye } from "react-icons/fa";
import { Link } from "react-scroll";

const facts = [
  { icon: <FaPrayingHands className="text-saffron" />, label: "वैदिक संस्कार विशेषज्ञ" },
  { icon: <FaStar className="text-saffron" />, label: "अनुभवी ज्योतिष" },
  { icon: <FaEye className="text-saffron" />, label: "आध्यात्मिक परामर्शदाता" },
  { icon: <FaQuran className="text-saffron" />, label: "संस्कृत विद्वान" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-cream relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
        <svg width="400" height="400" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="var(--color-gold)" strokeWidth="0.5" strokeDasharray="2 2" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="var(--color-gold)" strokeWidth="0.2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Image Column */}
          <motion.div className="relative" variants={itemVariants}>
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-gold">
              <img
                src='./me.jpeg'
                alt="सन्तोष गौतम"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative Gold Frame */}
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-saffron/30 rounded-2xl -z-10" />
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-gold/10 rounded-2xl -z-10" />
            
            {/* Experience Badge */}
            <div className="absolute bottom-10 -right-4 bg-maroon text-white p-4 rounded-xl shadow-xl">
              <span className="block text-3xl font-bold">२०+</span>
              <span className="text-[10px] uppercase tracking-widest font-bold">वर्षको अनुभव</span>
            </div>
          </motion.div>

          {/* Text Column */}
          <div className="flex flex-col gap-6">
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-saffron/10 border border-saffron/20 text-saffron text-sm font-bold uppercase tracking-widest">
                हाम्रो मार्गदर्शक
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl lg:text-5xl font-heading font-bold text-maroon leading-tight"
              variants={itemVariants}
            >
              संस्कार ज्योतिष घर…. (सन्तोष गौतम)
              <span className="block text-xl text-saffron mt-2 font-medium">ज्योतिष तथा आध्यात्मिक पुरोहित</span>
            </motion.h2>

            <motion.p
              className="text-text-muted leading-relaxed text-lg"
              variants={itemVariants}
            >
              हामी कहाँ ज्योतिष (चिना-कुण्डली), वास्तु, ग्रहशान्ति, लाखबत्ती, गृह प्रारम्भ-गृह प्रवेश, भागवत कथा-पाठ पारायण, रुद्राभिषेक, विवाह, ब्रतबन्ध, न्वारान, पास्नि, चौरासी पूजा लगायत जन्मदेखि मृत्यु पर्यन्तसम्मका वैदिक कर्मका लागी सम्पर्क गर्नुहोस् ॥
            </motion.p>

            <motion.p
              className="text-text-muted leading-relaxed text-lg italic border-l-4 border-gold pl-6"
              variants={itemVariants}
            >
              "मेरो उद्देश्य हाम्रा पुर्खाहरूको ज्ञान र परम्पराबाट परिवारहरूलाई उनीहरूको जीवनका महत्त्वपूर्ण संस्कारहरूमा मार्गदर्शन गर्नु हो। प्रत्येक अनुष्ठान शुद्ध भक्ति र शास्त्रीय शुद्धताका साथ सम्पन्न होस् भन्ने मेरो प्रतिबद्धता रहेको छ।"
            </motion.p>

            {/* Fact Grid */}
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4" variants={itemVariants}>
              {facts.map((f, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gold/20 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-xl">{f.icon}</div>
                  <span className="text-sm font-semibold text-text-main">{f.label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants} className="pt-4">
              <Link
                to="contact"
                smooth
                duration={600}
                className="inline-flex items-center gap-3 px-8 py-3 bg-maroon text-white rounded-full font-bold hover:bg-saffron transition-all shadow-lg cursor-pointer"
              >
                परामर्शको लागि सम्पर्क गर्नुहोस्
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}