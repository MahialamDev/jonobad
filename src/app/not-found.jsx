'use client';

import Link from 'next/link';
import { Construction, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen bg-base-100 text-base-content flex items-center justify-center px-4 overflow-hidden relative">
            
            {/* Background Glow - Primary Green */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 w-full max-w-xl text-center">
                
                {/* Icon with Primary Style */}
                <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-24 h-24 mx-auto rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8 shadow-2xl shadow-primary/10"
                >
                    <Construction size={42} className="text-primary" />
                </motion.div>

                {/* Error Code */}
                <h1 className="text-8xl md:text-9xl font-black italic tracking-tighter leading-none">
                    40<span className="text-primary">4</span>
                </h1>

                {/* Title */}
                <h2 className="mt-4 text-2xl md:text-3xl font-black uppercase tracking-tight italic">
                    Lost in Space?
                </h2>

                {/* Description */}
                <p className="mt-4 text-base-content/50 text-sm md:text-base leading-relaxed max-w-sm mx-auto font-medium">
                    This page is currently under development or moved within the <span className="text-primary font-bold">Jonobad</span> platform.
                </p>

                {/* Status Badge */}
                <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/5 border border-primary/10">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#10b981]" />
                    <span className="text-primary text-[10px] font-black uppercase tracking-[0.2em]">
                        Under Construction
                    </span>
                </div>

                {/* Buttons */}
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-content transition-all px-10 py-4 rounded-xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl shadow-primary/20 active:scale-95"
                    >
                        <ArrowLeft size={18} />
                        Back To Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="w-full sm:w-auto bg-base-200 hover:bg-base-300 border border-base-300 transition-all px-10 py-4 rounded-xl font-black text-xs uppercase tracking-widest opacity-60 hover:opacity-100 active:scale-95"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;