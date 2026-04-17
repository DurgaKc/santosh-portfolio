import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "राजेश शर्मा",
    role: "ब्रतबन्ध संस्कार",
    text: "पण्डित सन्तोष जीले हाम्रो छोराको ब्रतबन्ध अत्यन्तै भक्तिपूर्वक र स्पष्टताका साथ सम्पन्न गर्नुभयो। उहाँले प्रत्येक संस्कारको अर्थ र महत्त्व बुझाउनुभयो, जसले गर्दा यो क्षण हाम्रो परिवारको लागि अविस्मरणीय बन्यो।",
    stars: 5,
  },
  {
    name: "सुनिता अधिकारी",
    role: "विवाह संस्कार",
    text: "उहाँ निकै समयनिष्ठ र व्यावसायिक हुनुहुन्छ। हाम्रो छोरीको विवाह सम्पूर्ण वैदिक परम्परा अनुसार विधिवत् रूपमा सम्पन्न भयो। सबैलाई सिफारिस गर्न चाहन्छु!",
    stars: 5,
  },
  {
    name: "किरण थापा",
    role: "ज्योतिष परामर्श",
    text: "सन्तोष जीले गर्नुभएको कुण्डली विश्लेषण अत्यन्तै विस्तृत र मार्गदर्शक थियो। उहाँले बताउनुभएका उपायहरू सरल र प्रभावकारी छन्, जसले हाम्रो घरमा धेरै शान्ति ल्याएको छ।",
    stars: 5,
  },
  {
    name: "गीता पौडेल",
    role: "गृह प्रवेश",
    text: "हाम्रो नयाँ घरको गृह प्रवेश पण्डित सन्तोष जीले गराउनुभयो। वास्तु शान्ति र हवन विधिले घरमा सकारात्मक ऊर्जा र समृद्धिको अनुभूति भइरहेको छ। धन्यवाद!",
    stars: 5,
  },
  {
    name: "हरि न्यौपाने",
    role: "रुद्राभिषेक",
    text: "हाम्रो परिवारमा शान्तिको लागि रुद्राभिषेक गराउनुभएको थियो। मन्त्रोच्चारण र विधि एकदमै शुद्ध थियो। उहाँको ज्ञान र भक्तिले हामी सबै प्रभावित भयौं।",
    stars: 5,
  },
  {
    name: "राधा काफ्ले",
    role: "पास्नी संस्कार",
    text: "नातिको पास्नीको लागि पण्डित जीलाई बोलाएका थियौं। उहाँले धेरै मायालु र शास्त्रीय तरिकाले अन्नप्राशन गराउनुभयो। सम्पूर्ण परिवार निकै खुसी भयो।",
    stars: 5,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-24 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
           ref={ref}
           initial={{ opacity: 0, y: 20 }}
           animate={inView ? { opacity: 1, y: 0 } : {}}
           className="text-center mb-16"
        >
          <span className="text-saffron font-bold tracking-[0.3em] uppercase text-sm block mb-4">भक्तजनका अनुभव</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-maroon mb-6">परिवारहरूको प्रतिक्रिया</h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-xl border border-gold/10 relative"
            >
              <FaQuoteLeft className="text-4xl text-saffron/10 absolute top-6 left-6" />
              <div className="relative z-10">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.stars)].map((_, i) => (
                    <FaStar key={i} className="text-gold text-sm" />
                  ))}
                </div>
                <p className="text-text-muted italic leading-relaxed mb-6">
                  "{t.text}"
                </p>
                <div>
                  <h4 className="font-bold text-maroon">{t.name}</h4>
                  <p className="text-xs text-saffron font-bold uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}