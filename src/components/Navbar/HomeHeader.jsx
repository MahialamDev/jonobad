import React from 'react';
import { Search, Bell, Menu, ScanLine, ChevronDown, Award, Wallet } from 'lucide-react';
import Link from 'next/link';

const HomeHeader = () => {
    return (
        <header className="bg-[#0A0A0F] text-white pt-4 pb-6 px-4 rounded-b-[2.5rem] shadow-2xl relative overflow-hidden border-b border-white/5">
            {/* Background Glow Effect */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-500/10 blur-[80px] pointer-events-none"></div>
            
            <div className="wrap-container relative z-10">
                {/* Top Row: User Info & Icons */}
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-3">
                        {/* Profile Image with Status Border */}
                        <div className="relative">
                            <div className="w-14 h-14 rounded-full border-2 border-red-500/50 p-0.5 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                                <img 
                                    src="https://api.dicebear.com/8.x/notionists/svg?seed=Mahi" 
                                    alt="User" 
                                    className="w-full h-full rounded-full bg-[#16161F]"
                                />
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-[#0A0A0F] rounded-full"></div>
                        </div>

                        {/* Name and Mobile */}
                        <div>
                            <div className="flex items-center gap-1 cursor-pointer group">
                                <h2 className="text-lg font-bold group-hover:text-red-500 transition-colors">Mr Rahat</h2>
                                <ChevronDown size={16} className="text-gray-500 group-hover:translate-y-0.5 transition-transform" />
                            </div>
                            <p className="text-xs text-gray-500 font-mono tracking-wider">01979922268</p>
                        </div>
                    </div>

                    {/* Action Icons */}
                    <div className="flex items-center gap-4">
                        <button className="p-2 hover:bg-white/5 rounded-full transition"><Search size={22} /></button>
                        <div className="relative">
                            <button className="p-2 hover:bg-white/5 rounded-full transition"><Bell size={22} /></button>
                            <span className="absolute top-2 right-2 w-4 h-4 bg-red-600 text-[10px] flex items-center justify-center rounded-full border-2 border-[#0A0A0F] font-bold">1</span>
                        </div>
                        <button className="p-2 hover:bg-white/5 rounded-full transition"><Menu size={24} /></button>
                    </div>
                </div>

                {/* Bottom Row: Jonobad Club & QR */}
                <div className="flex items-center gap-3">
                    {/* Club Card / Wallet Button */}
                    <Link href="/wallet" className="flex-1">
                        <div className="bg-white rounded-2xl p-4 flex justify-between items-center shadow-lg active:scale-[0.98] transition-transform">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                                    <Award className="text-red-600" size={24} />
                                </div>
                                <h3 className="text-black font-black italic tracking-tighter text-lg"></h3>
                            </div>
                            
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center shadow-sm">
                                    <span className="text-[10px] font-black text-white">🪙</span>
                                </div>
                                <span className="text-black text-xl font-black font-mono">1,000</span>
                            </div>
                        </div>
                    </Link>

                    {/* QR/Scanner Button */}
                    <button className="w-16 h-[68px] bg-white rounded-2xl flex items-center justify-center shadow-lg active:scale-95 transition-transform group">
                        <ScanLine size={28} className="text-red-500 group-hover:scale-110 transition-transform" />
                    </button>
                    <Link href={'/wallet'}>
                        <button className="w-16 h-[68px] bg-white rounded-2xl flex items-center justify-center shadow-lg active:scale-95 transition-transform group">
                        <Wallet size={28} className="text-red-500 group-hover:scale-110 transition-transform" />
                    </button>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default HomeHeader;