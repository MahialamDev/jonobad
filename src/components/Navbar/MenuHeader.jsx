'use client';
import { ArrowLeft, MoreHorizontal, Settings } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { motion } from 'framer-motion';

const MenuHeader = () => {
    const pathname = usePathname();
    const router = useRouter();

   

   const showPath = [
  '/menu',
  '/blood',
       '/account',
  '/wallet',
  '/store/create-store',
  '/store/manage-store'
];

if (!showPath.includes(pathname)) return null;
  

    const cleanTitle = pathname.split('/').pop()?.replace(/-/g, ' ') || 'MENU';

    return (
        <motion.header 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className='fixed top-0 left-0 right-0 z-100 transition-colors md:hidden duration-300'
        >
            {/* Glassmorphism Container 
               Mobile: h-16, PX-5
               Desktop (md): h-20, PX-10, centered max-width 
            */}
            <div className='bg-base-100 border-b border-base-300 shadow-xl'>
                <div className='max-w-7xl mx-auto h-16 md:h-20 flex items-center justify-between px-5 md:px-10'>
                    
                    {/* --- Left Side: Back Button --- */}
                    <div className='flex items-center gap-4'>
                        <button 
                            onClick={() => router.back()}
                            className='w-10 h-10 rounded-btn bg-base-200 border border-base-300 flex items-center justify-center active:scale-90 hover:bg-base-300 transition-all group'
                        >
                            <ArrowLeft size={20} className="text-base-content group-hover:-translate-x-0.5 transition-transform" />
                        </button>
                        
                        {/* Desktop Only Title beside Back Button */}
                        <div className="hidden md:block">
                             <p className="text-[10px] font-black text-primary uppercase tracking-widest leading-none">Navigation</p>
                             <h2 className="text-sm font-bold text-base-content capitalize">{cleanTitle}</h2>
                        </div>
                    </div>

                    {/* --- Center: Dynamic Title (Mobile Only) --- */}
                    <h1 className='md:hidden text-[11px] font-black tracking-[0.3em] text-base-content uppercase'>
                        {cleanTitle === 'menu' ? 'JONOBAD MENU' : cleanTitle}
                    </h1>

                    {/* --- Right Side: Actions --- */}
                    <div className='flex items-center gap-2'>
                        {/* Desktop Only Search/Settings label */}
                        <div className="hidden md:flex flex-col items-end mr-4">
                            <span className="text-[10px] font-black opacity-30 uppercase tracking-tighter">Authorized Access</span>
                            <span className="text-[9px] font-bold text-secondary uppercase tracking-widest">Verified Session</span>
                        </div>

                        <button className='w-10 h-10 rounded-btn bg-base-200 border border-base-300 flex items-center justify-center hover:bg-base-300 transition-all'>
                            <Settings size={18} className="opacity-60" />
                        </button>
                        
                        <button className='w-10 h-10 rounded-btn bg-base-200 border border-base-300 flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity'>
                            <MoreHorizontal size={20} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Glowing Accent Line - Red সরিয়ে আপনার Primary (সবুজ) কালার দেয়া হয়েছে */}
            <div className='w-full h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-50' />
        </motion.header>
    );
};

export default MenuHeader;