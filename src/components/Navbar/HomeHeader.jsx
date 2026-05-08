'use client'
import React from 'react';
import { Search, Bell, Menu, ScanLine, ChevronDown, Award, Wallet } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const HomeHeader = () => {
    const path = usePathname();
    
    // Store path এ হেডার হাইড থাকবে
    if ( path.startsWith('/feeds') || path.startsWith('/messages') || path.startsWith('/reports') || path.startsWith('/reels')) return null;

    return (
        <header className="bg-[#0A0A0F] text-white pt-3 pb-5 px-5 rounded-b-[2rem] shadow-2xl relative overflow-hidden border-b border-white/[0.03] z-50">
            {/* Soft Background Glow */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-red-600/10 blur-[60px] pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto relative z-10">
                
                {/* --- TOP SECTION --- */}
                <div className="flex justify-between items-center mb-5">
                    <div className="flex items-center gap-2.5">
                        {/* Profile with Sleek Ring */}
                        <div className="relative">
                            <div className="w-11 h-11 rounded-full p-[1.5px] bg-gradient-to-tr from-red-500/80 to-transparent">
                                <img 
                                    src="https://api.dicebear.com/8.x/notionists/svg?seed=Mahi" 
                                    alt="User" 
                                    className="w-full h-full rounded-full bg-[#16161F] object-cover"
                                />
                            </div>
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#0A0A0F] rounded-full shadow-sm"></div>
                        </div>

                        {/* User Text */}
                        <div className="flex flex-col">
                            <div className="flex items-center gap-1 cursor-pointer group">
                                <h2 className="text-[15px] font-bold tracking-tight group-hover:text-red-500 transition-colors">Mr Rahat</h2>
                                <ChevronDown size={14} className="text-gray-500 group-hover:translate-y-0.5 transition-transform" />
                            </div>
                            <p className="text-[10px] text-gray-500 font-medium tracking-wider -mt-0.5">01979922268</p>
                        </div>
                    </div>

                    {/* Compact Action Icons */}
                    <div className="flex items-center gap-1.5">
                        <button className="p-2 hover:bg-white/5 rounded-full transition-all active:scale-90">
                            <Search size={18} className="text-gray-400" />
                        </button>
                        <div className="relative">
                            <button className="p-2 hover:bg-white/5 rounded-full transition-all active:scale-90">
                                <Bell size={18} className="text-gray-400" />
                            </button>
                            <span className="absolute top-1.5 right-1.5 w-3.5 h-3.5 bg-red-600 text-[8px] flex items-center justify-center rounded-full border border-[#0A0A0F] font-black">1</span>
                        </div>
                        <button className="p-2 hover:bg-white/5 rounded-full transition-all active:scale-90">
                            <Menu size={20} className="text-gray-400" />
                        </button>
                    </div>
                </div>

                {/* --- BOTTOM SECTION (Quick Actions) --- */}
                <div className="flex items-center gap-2.5">
                    {/* Club Card / Wallet */}
                    <Link href="/wallet" className="flex-">
                        <div className="bg-white/[0.98] hover:bg-white rounded-xl p-3 flex justify-between items-center shadow-sm active:scale-[0.98] transition-all">
                            <div className="flex items-center gap-2.5">
                                <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center">
                                    <Award className="text-red-500" size={18} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[8px] font-black text-red-500/60 uppercase tracking-tighter leading-none mb-0.5">Jonobad Club</span>
                                    <h3 className="text-black font-black italic text-xs leading-none">MEMBERSHIP</h3>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-1.5 bg-black/[0.03] px-2 py-1 rounded-lg">
                                <span className="text-xs">🪙</span>
                                <span className="text-black text-[15px] font-black font-mono leading-none">1,000</span>
                            </div>
                        </div>
                    </Link>

                    {/* Small Action Buttons */}
                    <div className="flex items-center gap-2 flex-1">
                        <button className="flex-1 h-[52px] bg-white/[0.98] rounded-xl flex items-center justify-center shadow-sm active:scale-95 transition-all group">
                            <ScanLine size={20} className="text-red-500 group-hover:scale-110 transition-transform" />
                        </button>
                        
                        <Link href="/wallet" className="flex-1 h-[52px]">
                            <button className="w-full h-full bg-white/[0.98] rounded-xl flex items-center justify-center shadow-sm active:scale-95 transition-all group">
                                <Wallet size={20} className="text-red-500 group-hover:scale-110 transition-transform" />
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        </header>
    );
};

export default HomeHeader;