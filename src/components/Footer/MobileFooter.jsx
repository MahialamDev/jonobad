"use client";
import { Home, ShoppingBag, FileText, Droplets, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavItem = ({ icon: Icon, href, label, active }) => (
    <Link 
        href={href} 
        className={`flex flex-col items-center justify-center gap-1 transition-all duration-300 relative group flex-1
            ${active ? 'text-primary' : 'text-base-content/40 hover:text-base-content'}`}
    >
        {/* Active Indicator Dot - হেডলাইনের এনিমেশনের মতো পালস ইফেক্ট */}
        {active && (
            <span className="absolute -top-3 w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_10px_rgba(var(--p),0.8)] animate-pulse" />
        )}
        
        <div className={`p-2 rounded-xl transition-all duration-300 ${active ? 'bg-primary/10 scale-110' : 'group-hover:bg-base-200'}`}>
            <Icon size={20} strokeWidth={active ? 3 : 2} />
        </div>
        
        <span className={`text-[9px] font-black uppercase tracking-[0.1em] transition-opacity duration-300 ${active ? 'opacity-100' : 'opacity-40'}`}>
            {label}
        </span>
    </Link>
);

const MobileFooter = () => {
    const pathname = usePathname();

    const navLinks = [
        { href: '/', icon: Home, label: "Home" },
        { href: '/store', icon: ShoppingBag, label: "Store" },
        { href: '/report', icon: FileText, label: "Report" },
        { href: '/blood', icon: Droplets, label: "Blood" },
        { href: '/account', icon: User, label: "Account" },
    ];

    return (
        <footer className="fixed bottom-0 left-0 right-0 z-100 lg:hidden transition-all duration-300">
            {/* Glassmorphic Background - থিমের সাথে ম্যাচিং */}
            <div className="bg-base-100/80 backdrop-blur-2xl border-t border-base-300 px-4 py-2 rounded-t-[2rem] shadow-[0_-15px_40px_rgba(0,0,0,0.2)]">
                <div className="flex items-center justify-around max-w-md mx-auto h-14">
                    {navLinks.map((link) => (
                        <NavItem 
                            key={link.href}
                            href={link.href}
                            icon={link.icon}
                            label={link.label}
                            active={pathname === link.href}
                        />
                    ))}
                </div>
            </div>
            
            {/* Safe Area for iOS/Modern Devices */}
            <div className="bg-base-100/80 h-[env(safe-area-inset-bottom)]" />
            
            {/* Bottom Glow Line - Headline এর স্টাইল অনুযায়ী */}
            <div className='w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent' />
        </footer>
    );
};

export default MobileFooter;