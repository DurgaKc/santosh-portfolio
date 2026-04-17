import { FaFacebookF, FaWhatsapp, FaInstagram, FaTiktok, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { Link } from 'react-scroll'

const navLinks = [
    { name: 'हाम्रो बारे', to: 'about' },
    { name: 'सेवाहरू', to: 'services' },
    { name: 'ग्यालरी', to: 'gallery' },
    { name: 'प्रतिक्रिया', to: 'testimonials' },
    { name: 'सम्पर्क', to: 'contact' },
]

export default function Footer() {
    return (
        <footer className="bg-maroon text-white relative overflow-hidden pt-16 pb-8">
            {/* Decorative Background Icon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] text-white/5 pointer-events-none select-none">
                ॐ
            </div>
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="md:col-span-1 flex flex-col gap-6">
                        <div className="flex flex-col">
                            <span className="text-2xl font-heading font-bold tracking-wide">सन्तोष गौतम</span>
                            <span className="text-[10px] uppercase tracking-[0.2em] text-saffron font-bold">ज्योतिष तथा पुरोहित</span>
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed">
                            नेपाल तथा विदेशमा रहेका परिवारहरूलाई प्रामाणिक वैदिक सेवा र आध्यात्मिक मार्गदर्शन प्रदान गर्दै।
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/share/14egQtL7VAM/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-saffron transition-colors">
                                <FaFacebookF />
                            </a>
                            <a href="https://www.instagram.com/santuxarma?igsh=MTNtNzZ2aWlmMjAzNA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-saffron transition-colors">
                                <FaInstagram />
                            </a>
                            <a href="https://www.tiktok.com/@sanskarjyotishhouse?_r=1&_t=ZS-95bWFIzT6lb" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-saffron transition-colors">
                                <FaTiktok />
                            </a>
                            <a href="https://wa.me/9779843789367" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-saffron transition-colors">
                                <FaWhatsapp />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-1">
                        <h4 className="text-saffron font-bold uppercase tracking-widest text-sm mb-6">द्रुत लिङ्कहरू</h4>
                        <ul className="flex flex-col gap-4 list-none">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.to}
                                        smooth
                                        duration={600}
                                        className="text-white/70 hover:text-saffron transition-colors cursor-pointer text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="md:col-span-1">
                        <h4 className="text-saffron font-bold uppercase tracking-widest text-sm mb-6">हाम्रा सेवाहरू</h4>
                        <ul className="flex flex-col gap-4 text-white/70 text-sm list-none">
                            <li>ब्रतबन्ध संस्कार</li>
                            <li>विवाह कर्मकाण्ड</li>
                            <li>चौरासी पूजा</li>
                            <li>पास्नी उत्सव</li>
                            <li>ज्योतिष परामर्श</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="md:col-span-1">
                        <h4 className="text-saffron font-bold uppercase tracking-widest text-sm mb-6">सम्पर्क गर्नुहोस्</h4>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-start gap-4 text-sm text-white/70">
                                <FaMapMarkerAlt className="text-saffron mt-1" />
                                <span>Dang, Nepal</span>
                            </div>
                            <div className="flex items-start gap-4 text-sm text-white/70">
                                <FaPhoneAlt className="text-saffron mt-1" />
                                <span>+977 9843789367</span>
                            </div>
                            <div className="flex items-start gap-4 text-sm text-white/70">
                                <FaEnvelope className="text-saffron mt-1" />
                                <span>gsantosh450@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:row items-center justify-between gap-4">
                    <p className="text-xs text-white/50">
                        © {new Date().getFullYear()} सन्तोष गौतम। सर्वाधिकार सुरक्षित।
                    </p>
                    <p className="text-[10px] text-white/30 uppercase tracking-[0.2em]">
                        प्रामाणिकता • भक्ति • परम्परा
                    </p>
                </div>
            </div>
        </footer>
    )
}