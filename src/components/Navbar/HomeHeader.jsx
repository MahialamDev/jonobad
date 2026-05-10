'use client';
import React, { useState, useEffect } from 'react';
import { Search, Bell, Menu, ScanLine, ChevronDown, ChevronUp, Award, Wallet } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Headline from './Headline';
import { useSession } from 'next-auth/react';

const HomeHeader = () => {
    const path = usePathname();
    const [isExpanded, setIsExpanded] = useState(true);
    const session = useSession();
    
    // স্ক্রল করলে হেডার একদম উপরে উঠে যাবে
    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.scrollY > 10) setIsExpanded(true);
    //         else setIsExpanded(true);
            
    //     };
    //     window.addEventListener('scroll', handleScroll, { passive: true });
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);

    useEffect(() => {
    const handleScroll = () => {
        // শুধু top এ থাকলে auto expand করবে
        if (window.scrollY <= 10) {
            setIsExpanded(true);
        }
        // নিচে গেলে কিছুই করবে না
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
}, []);

    if (path !== '/') return null;


    console.log('form header', )

    return (
        <div className="fixed top-0 left-0 right-0 z-50">
            <Headline />

            {/* হেডার কন্টেইনার - প্যাডিং এবং রাউন্ডেড কর্নার ডাইনামিক করা হয়েছে */}
            <header className={`bg-base-100/95 backdrop-blur-md text-base-content px-5 shadow-[0_10px_30px_rgba(0,0,0,0.1)] relative overflow-hidden border-b border-base-300 transition-all duration-500 ease-in-out ${isExpanded ? 'pt-4 pb-4 rounded-b-[2.5rem]' : 'pt-4 pb-2 rounded-b-xl'}`}>
                
                <div className="max-w-7xl mx-auto relative z-10">
                    
                    {/* --- TOP SECTION --- */}
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            {/* Profile - ছোট বড় হবে অবস্থার ওপর ভিত্তি করে */}
                            <div className="relative group cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
                                <div className={`rounded-full p-[2px] bg-gradient-to-tr from-primary to-secondary transition-all duration-500 ${isExpanded ? 'w-10 h-10' : 'w-8 h-8'}`}>
                                    <img 
                                        src="https://api.dicebear.com/8.x/notionists/svg?seed=Mahi" 
                                        alt="User" 
                                        className="w-full h-full rounded-full bg-base-200 object-cover"
                                    />
                                </div>
                                {isExpanded && <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-primary border-2 border-base-100 rounded-full animate-pulse"></div>}
                            </div>

                            <div className="flex flex-col text-left" onClick={() => setIsExpanded(!isExpanded)}>
                                <div className="flex items-center gap-1">
                                    <h2 className={`font-black  tracking-tight transition-all ${isExpanded ? 'text-sm' : 'text-sm'}`}>{session?.data?.user?.name || 'Anonumas'}</h2>
                                    {isExpanded ? <ChevronUp size={14} className="opacity-40" /> : <ChevronDown size={14} className="opacity-40 text-primary" />}
                                </div>
                                {!isExpanded && (
                                    <p className="text-[9px] font-black text-primary italic leading-none">1,000 PTS</p>
                                )}
                            </div>
                        </div>

                        {/* Action Icons */}
                        <div className="flex items-center gap-1.5">
                            <button className="w-8 h-8 flex items-center justify-center hover:bg-primary/10 rounded-full transition-all">
                                <Search size={16} className="opacity-60" />
                            </button>
                            <div className="relative">
                                <button className="w-8 h-8 flex items-center justify-center hover:bg-primary/10 rounded-full transition-all">
                                    <Bell size={16} className="opacity-60" />
                                </button>
                                <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-secondary rounded-full border border-base-100"></span>
                            </div>
                            <Link href={'/menu'} className="ml-1 w-8 h-8 flex items-center justify-center bg-base-200 rounded-lg border border-base-300">
                                <Menu size={16} />
                            </Link>
                        </div>
                    </div>

                    {/* --- COLLAPSIBLE SECTION (Wallet & QR) --- */}
                    <div className={`grid transition-all duration-500 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100 translate-y-0 mt-4' : 'grid-rows-[0fr] opacity-0 -translate-y-4 pointer-events-none'}`}>
                        <div className="overflow-hidden">
                            <div className="flex items-center gap-2 pt-1">
                                {/* Credits Card */}
                                <Link href="/wallet" className="flex-[1.5]">
                                    <div className="bg-base-200 border border-base-300 rounded-xl p-2.5 flex items-center gap-3 hover:border-primary/30 transition-all active:scale-[0.98]">
                                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                                            <Award className="text-primary" size={18} />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[7px] font-black text-primary uppercase tracking-tighter leading-none mb-1">Balance</span>
                                            <div className="flex items-center gap-1">
                                                <span className="text-base-content text-base font-black italic leading-none tracking-tighter">1,000</span>
                                                <span className="text-[8px] font-bold opacity-40">PTS</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                                {/* Quick Buttons */}
                                <div className="flex items-center gap-2 flex-1 h-[48px]">
                                    <button className="flex-1 h-full bg-primary text-primary-content rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 active:scale-95">
                                        <ScanLine size={18} />
                                    </button>
                                    <Link href="/wallet" className="flex-1 h-full">
                                        <button className="w-full h-full bg-base-content text-base-100 rounded-xl flex items-center justify-center active:scale-95">
                                            <Wallet size={16} />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Arrow Indicator Button */}
                    <div className="flex justify-center -mb-1 mt-1">
                        <button 
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="text-base-content/20 hover:text-primary transition-colors duration-300"
                        >
                            {isExpanded ? <ChevronUp size={18} strokeWidth={3} /> : <ChevronDown size={18} strokeWidth={3} />}
                        </button>
                    </div>

                </div>

                {/* Bottom Border Glow */}
                <div className={`absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent transition-opacity duration-500 ${isExpanded ? 'opacity-100' : 'opacity-0'}`} />
            </header>
        </div>
    );
};

export default HomeHeader;