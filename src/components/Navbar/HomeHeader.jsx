'use client';
import React from 'react';
import { Search, Bell, Menu, ScanLine, ChevronDown, Award, Wallet } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Headline from './Headline'; // Headline কম্পোনেন্টটি ইম্পোর্ট করা হয়েছে

const HomeHeader = () => {
    const path = usePathname();
    
    if (path !== '/') return null;

    return (
        <div className="fixed top-0 left-0 right-0 z-50">
            {/* --- TOP MARQUEE HEADLINE (Mobile-এও দেখানোর জন্য hidden md:flex সরানো হয়েছে Headline থেকে) --- */}
            <Headline />

            <header className="bg-base-100/95 backdrop-blur-md text-base-content pt-4 pb-6 px-5 rounded-b-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.2)] relative overflow-hidden border-b border-base-300 transition-all duration-300">
                
                {/* Background Accent Glow - Headline এর Primary কালারের সাথে ম্যাচিং */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 blur-[80px] pointer-events-none"></div>
                
                <div className="max-w-7xl mx-auto relative z-10">
                    
                    {/* --- TOP SECTION --- */}
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center gap-3">
                            {/* Profile with Primary Ring */}
                            <div className="relative group cursor-pointer">
                                <div className="w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-primary via-secondary to-transparent group-hover:rotate-180 transition-transform duration-700">
                                    <img 
                                        src="https://api.dicebear.com/8.x/notionists/svg?seed=Mahi" 
                                        alt="User" 
                                        className="w-full h-full rounded-full bg-base-200 object-cover"
                                    />
                                </div>
                                <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-primary border-2 border-base-100 rounded-full shadow-lg"></div>
                            </div>

                            {/* User Text */}
                            <div className="flex flex-col text-left">
                                <div className="flex items-center gap-1 group">
                                    <h2 className="text-base font-black italic tracking-tight group-hover:text-primary transition-colors">Mr Rahat</h2>
                                    <ChevronDown size={14} className="opacity-40 group-hover:translate-y-0.5 transition-transform" />
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                                    <p className="text-[9px] opacity-60 font-black tracking-[0.15em] uppercase">MEMBER #922268</p>
                                </div>
                            </div>
                        </div>

                        {/* Action Icons - Sleek & Compact */}
                        <div className="flex items-center gap-2">
                            <button className="w-10 h-10 flex items-center justify-center hover:bg-primary/10 rounded-btn transition-all active:scale-90 border border-transparent hover:border-primary/20">
                                <Search size={18} className="opacity-70" />
                            </button>
                            <div className="relative">
                                <button className="w-10 h-10 flex items-center justify-center hover:bg-primary/10 rounded-btn transition-all active:scale-90 border border-transparent hover:border-primary/20">
                                    <Bell size={18} className="opacity-70" />
                                </button>
                                <span className="absolute top-2 right-2 w-2 h-2 bg-secondary rounded-full border border-base-100"></span>
                            </div>
                            <Link href={'/menu'} className="w-10 h-10 flex items-center justify-center bg-base-200 rounded-btn border border-base-300 hover:bg-base-300 transition-all active:scale-90">
                                <Menu size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* --- BOTTOM SECTION (Wallet & Quick Actions) --- */}
                    <div className="flex items-center gap-3">
                        {/* Credits Card - Headline এর মতো Italic & Black টাইপোগ্রাফি */}
                        <Link href="/wallet" className="flex-none">
                            <div className="bg-base-200 border border-base-300 rounded-2xl p-3 flex items-center gap-4 hover:border-primary/30 transition-all active:scale-[0.98] shadow-sm">
                                <div className="w-9 h-9 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
                                    <Award className="text-primary" size={20} />
                                </div>
                                <div className="flex flex-col text-left pr-2">
                                    <span className="text-[8px] font-black text-primary uppercase tracking-[0.2em] leading-none mb-1">Available</span>
                                    <div className="flex items-center gap-1.5">
                                        <span className="text-base-content text-lg font-black italic leading-none tracking-tighter">1,000</span>
                                        <span className="text-[10px] font-bold opacity-40 uppercase">PTS</span>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* QR & Wallet Quick Buttons */}
                        <div className="flex items-center gap-2 flex-1 h-[58px]">
                            <button className="flex-1 h-full bg-primary text-primary-content rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 active:scale-95 transition-all group overflow-hidden relative">
                                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                <ScanLine size={22} className="relative z-10" />
                            </button>
                            
                            <Link href="/wallet" className="flex-1 h-full">
                                <button className="w-full h-full bg-base-content text-base-100 rounded-2xl flex items-center justify-center active:scale-95 transition-all shadow-lg group">
                                    <Wallet size={20} className="group-hover:rotate-12 transition-transform" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Border Accent Line - Headline এর সাথে ম্যাচিং */}
                <div className='absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-30' />
            </header>
        </div>
    );
};

export default HomeHeader;