'use client'
import { ArrowLeft, MoreHorizontal } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { motion } from 'framer-motion';

const MenuHeader = () => {
    const pathname = usePathname();
    const router = useRouter();

    // শুধুমাত্র /menu দিয়ে শুরু হওয়া পাথে এটি শো করবে
    if (!pathname.startsWith('/menu')) return null;

    // পাথনেম থেকে ক্লিন টাইটেল বের করা (উদা: /menu/emergency -> EMERGENCY)
    const cleanTitle = pathname.split('/').pop()?.replace(/-/g, ' ') || 'MENU';

    return (
        <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className='fixed top-0 left-0 right-0 z- md:hidden'
        >
            {/* Glassmorphism Container */}
            <div className='h-16 bg-[#0A0A0F]/80 backdrop-blur-xl border-b border-white/[0.05] flex items-center justify-between px-5 shadow-2xl'>
                
                {/* Back Button */}
                <button 
                    onClick={() => router.back()}
                    className='w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center active:scale-90 transition-transform'
                >
                    <ArrowLeft size={20} className="text-white" />
                </button>

                {/* Dynamic Title */}
                <h1 className='text-[11px] font-black italic tracking-[0.3em] text-white uppercase'>
                    {cleanTitle === 'menu' ? 'JONOBAD MENU' : cleanTitle}
                </h1>

                {/* Right Side Empty Space or Settings Icon for Balance */}
                <button className='w-10 h-10 rounded-2xl flex items-center justify-center opacity-30'>
                    <MoreHorizontal size={20} />
                </button>

            </div>

            {/* Glowing Accent Line */}
            <div className='w-full h-[1px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-30' />
        </motion.div>
    );
};

export default MenuHeader;