"use client"; // Next.js App Router ব্যবহার করলে এটি প্রয়োজন
import { Home, ShoppingBag, FileText, Droplets, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavItem = ({ icon: Icon, href, label, active }) => (
    <Link 
        href={href} 
        className={`flex flex-col items-center justify-center gap-1 transition-all duration-300 relative group
            ${active ? 'text-red-500' : 'text-gray-400 hover:text-gray-200'}`}
    >
        {/* Active Indicator Dot */}
        {active && (
            <span className="absolute -top-2 w-1 h-1 bg-red-500 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
        )}
        
        <div className={`p-1 rounded-xl transition-colors ${active ? 'bg-red-500/10' : 'group-hover:bg-white/5'}`}>
            <Icon size={22} strokeWidth={active ? 2.5 : 2} />
        </div>
        
        <span className="text-[10px] font-bold uppercase tracking-tighter">
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
        <footer className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
            {/* Glassmorphic Background */}
            <div className="bg-[#16161F]/80 backdrop-blur-xl border-t border-white/10 px-6 py-3 rounded-t-[24px] shadow-[0_-10px_40px_rgba(0,0,0,0.4)]">
                <div className="flex items-center justify-between max-w-md mx-auto">
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
            <div className="bg-[#16161F]/80 h-[env(safe-area-inset-bottom)]" />
        </footer>
    );
};

export default MobileFooter;