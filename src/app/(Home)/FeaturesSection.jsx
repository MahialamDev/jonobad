'use client'
import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  FileWarning,
  HeartPulse,
  Store,
  ArrowRight,
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      title: 'Report Corruption',
      desc: 'Empower yourself by instantly reporting injustice, corruption, and social grievances.',
      icon: FileWarning,
      // রেড কালার রাখা হয়েছে ইমারজেন্সি/ক্রিটিক্যাল ফিচারের জন্য
      color: 'from-red-500/20 to-transparent',
      hoverIcon: 'group-hover:text-red-500',
      hoverBorder: 'hover:border-red-500/30',
      hoverBg: 'group-hover:bg-red-500/10'
    },
    {
      title: 'Blood Donation',
      desc: 'A life-saving network to find verified blood donors instantly across Bangladesh.',
      icon: HeartPulse,
      color: 'from-primary/20 to-transparent',
      hoverIcon: 'group-hover:text-primary',
      hoverBorder: 'hover:border-primary/30',
      hoverBg: 'group-hover:bg-primary/10'
    },
    {
      title: 'Citizen Protection',
      desc: 'Advanced safety protocols and a transparent platform built for public accountability.',
      icon: Shield,
      color: 'from-secondary/20 to-transparent',
      hoverIcon: 'group-hover:text-secondary',
      hoverBorder: 'hover:border-secondary/30',
      hoverBg: 'group-hover:bg-secondary/10'
    },
    {
      title: 'Local Marketplace',
      desc: 'Support local growth by creating your own store and managing orders seamlessly.',
      icon: Store,
      color: 'from-primary/20 to-transparent',
      hoverIcon: 'group-hover:text-primary',
      hoverBorder: 'hover:border-primary/30',
      hoverBg: 'group-hover:bg-primary/10'
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-transparent">
      {/* Dynamic Background Elements - Updated to match theme glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="wrapper relative z-10">
        
        {/* SECTION HEADER */}
        <div className="max-w-3xl mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
            <span className="text-primary text-[10px] font-black uppercase tracking-[0.2em]">
              Platform Capabilities
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-base-content tracking-tight leading-[1.1]"
          >
            One Platform For <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Bangladesh Citizens
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 mt-6 text-lg max-w-xl leading-relaxed font-medium"
          >
            Jonobad integrates critical social services and commerce into a unified, 
            secure ecosystem designed for the modern Bangladeshi citizen.
          </motion.p>
        </div>

        {/* FEATURE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`group relative p-8 rounded-2xl bg-base-200 border border-base-300 ${feature.hoverBorder} transition-all duration-500 shadow-xl`}
              >
                {/* Accent Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem]`} />
                
                <div className="relative z-10">
                  {/* ICON */}
                  <div className={`w-16 h-16 rounded-2xl bg-base-300 flex items-center justify-center mb-8 border border-base-300 group-hover:border-transparent ${feature.hoverBg} transition-all duration-500 shadow-inner`}>
                    <Icon size={28} className={`text-base-content ${feature.hoverIcon} transition-colors duration-500`} />
                  </div>

                  {/* CONTENT */}
                  <h3 className={`text-xl font-black text-base-content mb-4 ${feature.hoverIcon} transition-colors tracking-tight`}>
                    {feature.title}
                  </h3>

                  <p className="text-gray-500 text-sm font-medium leading-relaxed mb-8">
                    {feature.desc}
                  </p>

                  {/* BUTTON */}
                  <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-gray-500 group-hover:text-base-content transition-all">
                    Explore Feature
                    <div className={`w-10 h-10 rounded-xl bg-base-300 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shadow-lg`}>
                      <ArrowRight size={16} />
                    </div>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;