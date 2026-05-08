'use client'
import React from 'react';
import { Home, MessageCircle, PlayCircle, FileWarning, Newspaper, Search } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const FeedsHeader = () => {
    const pathname = usePathname();

    const navItems = [
        { id: 'home', icon: Home, label: 'Home', path: '/feeds' },
        { id: 'messages', icon: MessageCircle, label: 'Messages', path: '/messages' },
        { id: 'reels', icon: PlayCircle, label: 'Reels', path: '/reels' },
        { id: 'report', icon: FileWarning, label: 'Report', path: '/reports' },
        { id: 'news', icon: Newspaper, label: 'News', path: '/news' },
    ];

    if (!navItems.some((n) => pathname.startsWith(n.path))) {
        return <></>
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-100 bg-[#0A0A0F]/80 backdrop-blur-xl border-b border-white/[0.05] px-4">
            <div className="max-w-7xl mx-auto ">
                
                {/* --- TOP ROW: Logo & Search --- */}
                <div className="flex items-center justify-between h-14">
                    <h1 className="text-xl font-black italic tracking-tighter">
                        JONO<span className="text-red-500">BAD</span>
                    </h1>

                    <div className="flex items-center gap-3">
                        {/* Compact Search Bar */}
                        <div className="relative hidden sm:block">
                            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                            <input 
                                type="text" 
                                placeholder="Search JONOBAD" 
                                className="bg-white/5 border border-white/10 py-1.5 pl-9 pr-4 rounded-full text-xs focus:outline-none focus:border-red-500/50 transition-all w-48"
                            />
                        </div>
                        <button className="sm:hidden w-9 h-9 flex items-center justify-center rounded-full bg-white/5">
                            <Search size={18} className="text-gray-400" />
                        </button>

                        {/* Profile Small */}
                        <div className="w-8 h-8 rounded-full overflow-hidden border border-red-500/20">
                            <img 
                                src="https://api.dicebear.com/8.x/notionists/svg?seed=Mahi" 
                                alt="User" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* --- BOTTOM ROW: Navigation Icons --- */}
                <nav className="flex items-center justify-between h-12">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.path;
                        
                        return (
                            <Link 
                                key={item.id} 
                                href={item.path} 
                                className="flex-1 flex justify-center relative py-2"
                            >
                                <Icon 
                                    size={22} 
                                    className={`transition-all duration-300 ${
                                        isActive ? 'text-red-500' : 'text-gray-500'
                                    }`} 
                                />
                                
                                {/* Active Indicator Bar */}
                                {isActive && (
                                    <span className="absolute bottom-0 w-1/2 h-[2px] bg-red-500 rounded-t-full shadow-[0_0_10px_#ef4444]" />
                                )}
                            </Link>
                        );
                    })}
                </nav>

            </div>
        </header>
    );
};

export default FeedsHeader;