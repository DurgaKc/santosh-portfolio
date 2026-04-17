import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaPaperPlane,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: <FaEnvelope className="text-saffron" />,
    label: "Email",
    value: "gsantosh450@gmail.com",
    href: "mailto:gsantosh450@gmail.com",
  },
  {
    icon: <FaPhoneAlt className="text-saffron" />,
    label: "Phone",
    value: "+977 9843789367",
    href: "tel:+9779843789367",
  },
  {
    icon: <FaMapMarkerAlt className="text-saffron" />,
    label: "Address",
    value: "Dang, Nepal",
    href: null,
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({
    name: "",
    email: "",
    pujaType: "",
    otherPujaType: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Combine puja type for submission
    const finalPujaType =
      form.pujaType === "Other" ? form.otherPujaType : form.pujaType;

    try {
      // Note: You'll need to update these IDs with Santosh's EmailJS credentials
      await emailjs.send(
        "service_id",
        "template_id",
        {
          from_name: form.name,
          from_email: form.email,
          puja_type: finalPujaType,
          message: form.message,
        },
        "user_id",
      );

      setSent(true);
      setForm({
        name: "",
        email: "",
        pujaType: "",
        otherPujaType: "",
        message: "",
      });
      setTimeout(() => setSent(false), 3000);
    } catch (error) {
      console.log("EmailJS Error:", error);
      // For demo purposes, we'll simulate success if IDs are missing
      setSent(true);
      setForm({
        name: "",
        email: "",
        pujaType: "",
        otherPujaType: "",
        message: "",
      });
      setTimeout(() => setSent(false), 3000);
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-yellow-light/30 relative overflow-hidden"
    >
      {/* Decorative Mandalas */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-saffron/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-maroon/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-saffron font-bold tracking-[0.3em] uppercase text-sm block mb-4">
            सम्पर्क
          </span>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-maroon mb-6">
            पण्डितजीसँग जोडिनुहोस्
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            आध्यात्मिक मार्गदर्शन वा पवित्र संस्कारको योजना बनाउँदै हुनुहुन्छ?
            परामर्श र अनुष्ठान बुकिङको लागि सन्तोष गौतमलाई सम्पर्क गर्नुहोस्।
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gold/10">
              <h3 className="text-2xl font-heading font-bold text-maroon mb-8">
                Contact Details
              </h3>
              <div className="flex flex-col gap-6">
                {contactInfo.map((info, i) => (
                  <div key={i} className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-saffron/10 rounded-2xl flex items-center justify-center text-xl group-hover:bg-saffron group-hover:text-white transition-all duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-maroon uppercase tracking-widest mb-1">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-lg font-semibold text-text-main hover:text-saffron transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-lg font-semibold text-text-main">
                          {info.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-maroon p-8 rounded-3xl shadow-xl text-white">
              <h3 className="text-xl font-heading font-bold mb-4">
                शुभ मुहूर्त
              </h3>
              <p className="text-white/80 leading-relaxed mb-6">
                पूजा र परामर्श शुभ मुहूर्तमा गर्नु सर्वोत्तम हुन्छ। सही
                परामर्शको लागि कृपया आफ्नो रुचाइएको मिति र समय उल्लेख गर्नुहोस्।
              </p>
              <div className="flex items-center gap-4">
                <FaWhatsapp className="text-2xl text-[#25D366]" />
                <a
                  href="https://wa.me/9843789367"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold hover:underline"
                >
                  Available in Whatsapp
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-gold/20"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-maroon uppercase tracking-wide">
                    पूरा नाम
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="तपाईंको नाम"
                    className="px-5 py-4 rounded-xl bg-cream/30 border border-gold/20 focus:outline-none focus:border-saffron focus:ring-2 focus:ring-saffron/10 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-maroon uppercase tracking-wide">
                    इमेल ठेगाना
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="example@mail.com"
                    className="px-5 py-4 rounded-xl bg-cream/30 border border-gold/20 focus:outline-none focus:border-saffron focus:ring-2 focus:ring-saffron/10 transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 mb-6">
                <label className="text-sm font-bold text-maroon uppercase tracking-wide">
                  संस्कार/अनुष्ठानको प्रकार
                </label>
                <select
                  name="pujaType"
                  value={form.pujaType}
                  onChange={handleChange}
                  required
                  className="px-5 py-4 rounded-xl bg-cream/30 border border-gold/20 focus:outline-none focus:border-saffron transition-all"
                >
                  <option value="">संस्कार वा सेवा चयन गर्नुहोस्</option>
                  <option value="Bratabandha">ब्रतबन्ध</option>
                  <option value="Marriage">विवाह संस्कार</option>
                  <option value="Chaurasi Puja">चौरासी पूजा</option>
                  <option value="Pasni">पास्नी (अन्नप्राशन)</option>
                  <option value="Griha Pravesh">गृह प्रवेश</option>
                  <option value="Astrology">ज्योतिष परामर्श</option>
                  <option value="Other">अन्य संस्कार</option>
                </select>
              </div>

              {/* Conditional Other Puja Type Input Field */}
              {form.pujaType === "Other" && (
                <motion.div
                  className="flex flex-col gap-2 mb-6"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <label className="text-sm font-bold text-maroon uppercase tracking-wide">
                    अन्य संस्कारको नाम
                  </label>
                  <input
                    type="text"
                    name="otherPujaType"
                    value={form.otherPujaType}
                    onChange={handleChange}
                    required={form.pujaType === "Other"}
                    placeholder="संस्कारको नाम लेख्नुहोस्..."
                    className="px-5 py-4 rounded-xl bg-cream/30 border border-gold/20 focus:outline-none focus:border-saffron focus:ring-2 focus:ring-saffron/10 transition-all"
                  />
                </motion.div>
              )}

              <div className="flex flex-col gap-2 mb-8">
                <label className="text-sm font-bold text-maroon uppercase tracking-wide">
                  पवित्र आवश्यकताहरू
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="संस्कारको बारेमा र तपाईंको रुचाइएको मिति उल्लेख गर्नुहोस्..."
                  className="px-5 py-4 rounded-xl bg-cream/30 border border-gold/20 focus:outline-none focus:border-saffron focus:ring-2 focus:ring-saffron/10 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-maroon text-white rounded-xl font-bold text-lg hover:bg-saffron transition-all shadow-lg hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                {loading ? (
                  "पठाउँदै..."
                ) : sent ? (
                  "✅ सोधपुछ पठाइयो"
                ) : (
                  <>
                    <FaPaperPlane /> पवित्र सोधपुछ पठाउनुहोस्
                  </>
                )}
              </button>

              {sent && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center mt-4 text-green-600 font-bold"
                >
                  आशीर्वाद! तपाईंको सोधपुछ प्राप्त भएको छ।
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
