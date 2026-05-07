'use client';

import Link from 'next/link';
import { Construction, ArrowLeft } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white flex items-center justify-center px-4 overflow-hidden relative">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-red-500/10 blur-[120px] rounded-full" />

      <div className="relative z-10 w-full max-w-xl text-center">
        
        {/* Icon */}
        <div className="w-24 h-24 mx-auto rounded-3xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-8 shadow-2xl shadow-red-500/10">
          <Construction size={42} className="text-red-500" />
        </div>

        {/* Error Code */}
        <h1 className="text-7xl md:text-8xl font-black italic tracking-tighter text-white">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-2xl md:text-4xl font-black tracking-tight">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed max-w-md mx-auto">
          This page does not exist yet or is currently under development inside the Jonobad platform.
        </p>

        {/* Status Badge */}
        <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20">
          <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
          <span className="text-yellow-400 text-xs font-black uppercase tracking-widest">
            Under Working
          </span>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          
          <Link
            href="/"
            className="w-full sm:w-auto bg-red-500 hover:bg-red-600 transition px-8 py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-red-500/20"
          >
            <ArrowLeft size={18} />
            Back To Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 transition px-8 py-4 rounded-2xl font-bold text-sm"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;