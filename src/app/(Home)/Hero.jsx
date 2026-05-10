'use client'
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen wrapper grid grid-cols-1 lg:grid-cols-2 relative overflow-hidden text-white pt-20 lg:pt-0 px-4">
      
      {/* Background Accent Glows (Updated Colors) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(16,185,129,0.12),transparent_40%),radial-gradient(circle_at_20%_80%,rgba(14,165,233,0.08),transparent_40%)]"></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      {/* LEFT CONTENT */}
      <div className="relative z-10 flex flex-col justify-center lg:pl-12 py-10 lg:py-0">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-fit mb-8 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary text-[10px] sm:text-xs uppercase tracking-[0.2em] font-black"
        >
          🇧🇩 Bangladesh's Civic Super-App
        </motion.div>

        <h1 className="leading-none">
          <span className="block text-6xl sm:text-7xl lg:text-[8rem] font-black tracking-wider text-white">
            JONO
          </span>
          <span className="block text-6xl sm:text-7xl lg:text-[8rem] font-black text-primary tracking-wider">
            BAD
          </span>
          <span className="block text-3xl sm:text-4xl lg:text-5xl text-secondary mt-2 font-bold italic">
            জনবাদ
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-400 mt-6 font-medium">
          The Voice of 170 Million People.
        </p>

        <p className="max-w-xl mt-6 text-sm sm:text-base text-gray-500 leading-7 sm:leading-8">
          Empowering citizens through blood donation, injustice reporting, 
          secure P2P transfers, and emergency SOS. All your civic needs 
          in one premium platform.
        </p>

        {/* Updated Buttons with Theme Colors */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <button className="bg-primary hover:bg-primary/90 text-white transition-all px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-xs shadow-lg shadow-primary/20 w-full sm:w-auto active:scale-95">
            🩸 Donate Blood Now
          </button>
          <button className="border border-white/10 hover:border-white/20 bg-[#16161F] text-white transition-all px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-xs w-full sm:w-auto active:scale-95">
            Explore Platform →
          </button>
        </div>

        {/* Stats with Modern Look */}
        <div className="flex gap-8 sm:gap-16 mt-14 pt-8 border-t border-white/5">
          {[
            { value: '10K+', label: 'Donors', color: 'text-primary' },
            { value: '500+', label: 'Resolved', color: 'text-secondary' },
            { value: '64', label: 'Districts', color: 'text-white' }
          ].map((stat, i) => (
            <div key={i}>
              <h2 className={`text-3xl sm:text-5xl font-black ${stat.color}`}>{stat.value}</h2>
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-600 mt-2 font-bold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT CONTENT (Modern Mockup) */}
      <div className="relative z-10 flex items-center justify-center py-12 lg:py-0">
        <motion.div 
          initial={{ rotate: 0, y: 20 }}
          animate={{ rotate: -4, y: 0 }}
          className="w-[300px] h-[600px] rounded-[3rem] border-8 border-[#16161F] bg-[#0A0A0F] shadow-[0_0_50px_rgba(16,185,129,0.15)] overflow-hidden relative"
        >
          {/* Dynamic Island / Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-8 bg-[#16161F] rounded-b-3xl z-30"></div>

          <div className="p-5 h-full flex flex-col pt-12">
            {/* App Header */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-primary font-black tracking-tighter text-lg italic">JONOBAD</h3>
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">🔔</div>
            </div>

            {/* Emergency Alert (Secondary Color) */}
            <div className="bg-secondary/10 border border-secondary/30 text-secondary rounded-2xl p-4 text-[11px] font-black mb-4 animate-pulse uppercase tracking-wider">
              🆘 Sunamganj Relief Support Needed
            </div>

            {/* Quick Stats Card */}
            <div className="bg-[#16161F] border border-white/5 rounded-[2rem] p-4 mb-4">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] font-bold text-gray-500 uppercase">Wallet Balance</span>
                <span className="text-primary font-black italic">৳ 12,450</span>
              </div>
              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-primary"></div>
              </div>
            </div>

            {/* Feed Section */}
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-600 mb-4 ml-2">Civic Updates</p>
            <div className="space-y-4">
              {[
                { name: 'Blood Bank', msg: 'A+ Blood donor found in Jamalpur', color: 'bg-red-500' },
                { name: 'Jonobad Pay', msg: '৳500 received for Relief Fund', color: 'bg-primary' },
                { name: 'Safety Alert', msg: 'Weather warning: High rainfall', color: 'bg-secondary' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 bg-white/[0.02] p-3 rounded-2xl border border-white/[0.03]">
                  <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center text-[10px] font-black shrink-0 shadow-lg`}>
                    JB
                  </div>
                  <div>
                    <h4 className="text-[12px] font-bold">{item.name}</h4>
                    <p className="text-[10px] text-gray-500 leading-tight mt-1">{item.msg}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Nav Mockup */}
            <div className="absolute bottom-4 left-4 right-4 h-16 bg-[#16161F]/80 backdrop-blur-md rounded-3xl border border-white/5 flex justify-around items-center">
                <span className="text-primary text-xl">🏠</span>
                <span className="text-gray-600 text-xl">🩸</span>
                <span className="text-gray-600 text-xl">⚖️</span>
                <span className="text-gray-600 text-xl">👤</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;