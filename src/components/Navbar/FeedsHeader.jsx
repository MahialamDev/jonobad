'use client'
import React from 'react';
import { Home, MessageCircle, PlayCircle, FileWarning, Newspaper, Search } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SocialHeader = () => {
    const pathname = usePathname();

    const navItems = [
        { id: 'home', icon: Home, label: 'Home', path: '/feeds' },
        { id: 'messages', icon: MessageCircle, label: 'Messages', path: '/messages' },
        { id: 'reels', icon: PlayCircle, label: 'Reels', path: '/reels' },
        { id: 'report', icon: FileWarning, label: 'Report', path: '/reports' },
        { id: 'news', icon: Newspaper, label: 'News', path: '/news' },
    ];

    // Navigation check
    if (!navItems.some((n) => pathname.startsWith(n.path))) {
        return null;
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-100 bg-base-100/80 backdrop-blur-xl border-b border-base-300 px-4 transition-all duration-300">
            <div className="max-w-7xl mx-auto">
                
                {/* --- TOP ROW: Logo & Search --- */}
                <div className="flex items-center justify-between h-16">
                    <h1 className="text-2xl font-black tracking-tighter leading-none">
                        JONO<span className="text-primary">BAD</span>
                    </h1>

                    <div className="flex items-center gap-3">
                        {/* Search Bar - Modern & Sleek */}
                        <div className="relative hidden md:block">
                            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40" />
                            <input 
                                type="text" 
                                placeholder="Search JONOBAD..." 
                                className="bg-base-200 border border-base-300 py-2 pl-11 pr-4 rounded-xl text-[13px] font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all w-64"
                            />
                        </div>

                        {/* Mobile Search Icon */}
                        <button className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-base-200 border border-base-300 active:scale-90 transition-all">
                            <Search size={18} className="text-base-content/60" />
                        </button>

                        {/* Profile with Primary Border */}
                        <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-primary/20 p-[1px] bg-base-300 hover:border-primary transition-colors cursor-pointer">
                            <img 
                                src="https://api.dicebear.com/8.x/notionists/svg?seed=Mahi" 
                                alt="User" 
                                className="w-full h-full rounded-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* --- BOTTOM ROW: Navigation Icons --- */}
                <nav className="flex items-center justify-between h-14">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.path;
                        
                        return (
                            <Link 
                                key={item.id} 
                                href={item.path} 
                                className="flex-1 flex flex-col items-center justify-center relative h-full group"
                            >
                                <div className={`relative transition-all duration-300 ${
                                    isActive ? 'text-primary' : 'text-base-content/40 group-hover:text-base-content'
                                }`}>
                                    <Icon 
                                        size={isActive ? 24 : 22} 
                                        strokeWidth={isActive ? 2.5 : 2}
                                        className="transition-transform duration-300 group-active:scale-90"
                                    />
                                    
                                    {/* Indicator Dot for Active */}
                                    {isActive && (
                                        <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_8px_rgba(var(--p),0.6)] animate-pulse" />
                                    )}
                                </div>
                                
                                {/* Bottom Indicator Line */}
                                <div className={`absolute bottom-0 h-[3px] rounded-t-full transition-all duration-500 shadow-sm ${
                                    isActive ? 'w-10 bg-primary opacity-100' : 'w-0 bg-base-content opacity-0 group-hover:w-4 group-hover:opacity-20'
                                }`} />
                            </Link>
                        );
                    })}
                </nav>
            </div>

            {/* Sub-accent glow line like Headline style */}
            <div className='absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent' />
        </header>
    );
};

export default SocialHeader;