'use client'
import { Home, ShoppingBag, FileText, Droplets, User, ChevronUp, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NavItem = ({ icon: Icon, href, label, active }) => (
    <Link 
        href={href} 
        className={`flex flex-col items-center justify-center gap-1 transition-all duration-300 relative group flex-1
            ${active ? 'text-primary' : 'text-base-content/40 hover:text-base-content'}`}
    >
        {active && (
            <motion.span 
                layoutId="navPulse"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute -top-3 w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_12px_#10b981] animate-pulse" 
            />
        )}
        
        <div className={`p-2 rounded-xl transition-all duration-300 ${active ? 'bg-primary/10 scale-110' : 'group-hover:bg-base-200'}`}>
            <Icon size={18} strokeWidth={active ? 3 : 2} />
        </div>
        
        <span className={`text-[8px] font-black uppercase tracking-[0.2em] transition-opacity duration-300 ${active ? 'opacity-100' : 'opacity-40'}`}>
            {label}
        </span>
    </Link>
);

const MobileFooter = () => {
    const pathname = usePathname();
    const [isCollapsed, setIsCollapsed] = useState(false);

    const navLinks = [
        { href: '/', icon: Home, label: "Home" },
        { href: '/store', icon: ShoppingBag, label: "Store" },
        { href: '/feeds', icon: FileText, label: "Feeds" },
        { href: '/blood', icon: Droplets, label: "Blood" },
        { href: '/account', icon: User, label: "Account" },
    ];

    return (
        <footer className="fixed bottom-0 left-0 right-0 z-[100] lg:hidden px-4 pb-4">
            <div className="max-w-md mx-auto relative">
                
                {/* Toggle Button */}
                <button 
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-primary-content w-10 h-10 rounded-full flex items-center justify-center shadow-lg shadow-primary/20 border-4 border-base-100 z-50 active:scale-90 transition-transform duration-300"
                >
                    <motion.div
                        initial={false}
                        animate={{ rotate: isCollapsed ? 0 : 180 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    >
                        <ChevronUp size={20} strokeWidth={3} />
                    </motion.div>
                </button>

                {/* Main Navigation Container */}
                <motion.div 
                    initial={false}
                    animate={{ 
                        height: isCollapsed ? '12px' : '80px',
                        width: isCollapsed ? '40%' : '100%',
                        opacity: isCollapsed ? 0.6 : 1,
                    }}
                    transition={{ 
                        type: "spring", 
                        stiffness: 200, 
                        damping: 25,
                        mass: 0.8
                    }}
                    className="bg-base-200/90 backdrop-blur-2xl border border-base-300 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden mx-auto"
                >
                    <AnimatePresence mode="wait">
                        {!isCollapsed ? (
                            <motion.div 
                                key="nav-content"
                                initial={{ opacity: 0, filter: 'blur(10px)' }}
                                animate={{ opacity: 1, filter: 'blur(0px)' }}
                                exit={{ opacity: 0, filter: 'blur(10px)' }}
                                transition={{ duration: 0.2 }}
                                className="flex items-center justify-around h-full px-4"
                            >
                                {navLinks.map((link) => (
                                    <NavItem 
                                        key={link.href}
                                        href={link.href}
                                        icon={link.icon}
                                        label={link.label}
                                        active={pathname === link.href}
                                    />
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div 
                                key="collapsed-glow"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className='w-full h-full bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-pulse' 
                            />
                        )}
                    </AnimatePresence>
                </motion.div>
                
                {/* Safe Area for iOS */}
                <div className="h-[env(safe-area-inset-bottom)]" />
            </div>
        </footer>
    );
};

export default MobileFooter;