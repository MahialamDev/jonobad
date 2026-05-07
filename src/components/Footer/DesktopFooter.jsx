import React from 'react';
import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
// import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { 
  FaFacebookF as Fb, 
  FaXTwitter as Tw, 
  FaInstagram as Inst, 
  FaYoutube as Yt 
} from "react-icons/fa6";

const DesktopFooter = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        Platform: [
            { name: "Blood Donation", href: "/blood" },
            { name: "Justice Board", href: "/report" },
            { name: "Jonobad Pay", href: "/pay" },
            { name: "Emergency SOS", href: "/sos" },
        ],
        Company: [
            { name: "About Us", href: "/about" },
            { name: "Privacy Policy", href: "/privacy" },
            { name: "Terms of Service", href: "/terms" },
            { name: "Cookie Policy", href: "/cookies" },
        ],
        Support: [
            { name: "Help Center", href: "/help" },
            { name: "Contact Us", href: "/contact" },
            { name: "FAQs", href: "/faq" },
            { name: "Developer API", href: "/api" },
        ]
    };

    return (
        <footer className="hidden lg:block bg-[#0A0A0F] text-white border-t border-white/5 pt-20 pb-10">
            <div className="wrapper">
                <div className="grid grid-cols-4 gap-12 mb-16">
                    
                    {/* Brand Section */}
                    <div className="col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center relative overflow-hidden shrink-0">
                                <span className="text-white text-2xl font-bold">J</span>
                                <div className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-bl-lg"></div>
                            </div>
                            <h2 className="text-2xl font-black tracking-widest uppercase">JONOBAD</h2>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            Bangladesh's first civic super-app empowering citizens through technology. 
                            Connecting people for blood, justice, and community support.
                        </p>
                        <div className="flex gap-4">
                            <SocialIcon icon={<Fb size={18} />} />
                            <SocialIcon icon={<Tw size={18} />} />
                            <SocialIcon icon={<Inst size={18} />} />
                            <SocialIcon icon={<Yt size={18} />} />
                        </div>
                    </div>

                    {/* Links Sections */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title} className="col-span-1">
                            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6 border-l-2 border-red-500 pl-3">
                                {title}
                            </h4>
                            <ul className="space-y-4">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-gray-500 hover:text-red-500 transition-colors text-sm">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Contact Info Bar */}
                <div className="grid grid-cols-3 gap-6 py-8 border-y border-white/5 mb-10">
                    <ContactInfo icon={<Mail className="text-red-500" size={20} />} text="support@jonobad.com" />
                    <ContactInfo icon={<Phone className="text-red-500" size={20} />} text="+880 1XXX-XXXXXX" />
                    <ContactInfo icon={<MapPin className="text-red-500" size={20} />} text="Dhaka, Bangladesh" />
                </div>

                {/* Bottom Bar */}
                <div className="flex justify-between items-center text-xs text-gray-600 uppercase tracking-widest font-mono">
                    <p>© {currentYear} JONOBAD. ALL RIGHTS RESERVED.</p>
                    <p>MADE WITH ❤️ FOR BANGLADESH</p>
                </div>
            </div>
        </footer>
    );
};

// Sub-components for cleaner code
const SocialIcon = ({ icon }) => (
    <a href="#" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-red-500 hover:text-white transition-all duration-300">
        {icon}
    </a>
);

const ContactInfo = ({ icon, text }) => (
    <div className="flex items-center gap-3 justify-center">
        {icon}
        <span className="text-sm text-gray-400 font-medium">{text}</span>
    </div>
);

export default DesktopFooter;