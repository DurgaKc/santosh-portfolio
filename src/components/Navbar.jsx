import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { name: "गृहपृष्ठ", to: "hero" },
  { name: "हाम्रो बारे", to: "about" },
  { name: "सेवाहरू", to: "services" },
  { name: "ग्यालरी", to: "gallery" },
  { name: "प्रतिक्रिया", to: "testimonials" },
  { name: "सम्पर्क", to: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-cream/90 backdrop-blur-md py-3 shadow-md" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="hero"
          smooth
          duration={600}
          className="cursor-pointer group flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-full bg-saffron flex items-center justify-center text-white font-heading text-xl shadow-lg group-hover:scale-110 transition-transform">
            ॐ
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-heading font-bold tracking-wide text-maroon">
              सन्तोष गौतम
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-saffron font-bold">
              ज्योतिष तथा पुरोहित
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.to}
                smooth
                duration={600}
                spy
                offset={-80}
                onSetActive={() => setActiveSection(link.to)}
                className={`relative text-sm font-medium cursor-pointer transition-colors duration-300 hover:text-saffron ${
                  activeSection === link.to ? "text-saffron" : "text-maroon"
                }`}
              >
                {link.name}
                {activeSection === link.to && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-saffron"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact Button (Desktop) */}
        <Link
          to="contact"
          smooth
          duration={600}
          className="hidden md:block px-6 py-2 bg-maroon text-white rounded-full text-sm font-semibold hover:bg-saffron transition-colors shadow-lg cursor-pointer"
        >
          पूजा बुक गर्नुहोस्
        </Link>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-maroon p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cream border-t border-gold overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth
                  duration={600}
                  offset={-80}
                  onClick={() => setMenuOpen(false)}
                  className={`text-lg font-heading font-medium ${
                    activeSection === link.to ? "text-saffron" : "text-maroon"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="contact"
                smooth
                duration={600}
                onClick={() => setMenuOpen(false)}
                className="w-full py-3 bg-saffron text-white text-center rounded-lg font-bold"
              >
                सम्पर्क गर्नुहोस्
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}