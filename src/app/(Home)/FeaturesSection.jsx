'use client'
import React from 'react';
import { motion } from 'framer-motion'; // Highly recommended for that "premium" feel
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
      color: 'from-red-500/20 to-orange-500/0',
    },
    {
      title: 'Blood Donation',
      desc: 'A life-saving network to find verified blood donors instantly across Bangladesh.',
      icon: HeartPulse,
      color: 'from-rose-500/20 to-pink-500/0',
    },
    {
      title: 'Citizen Protection',
      desc: 'Advanced safety protocols and a transparent platform built for public accountability.',
      icon: Shield,
      color: 'from-blue-500/20 to-cyan-500/0',
    },
    {
      title: 'Local Marketplace',
      desc: 'Support local growth by creating your own store and managing orders seamlessly.',
      icon: Store,
      color: 'from-emerald-500/20 to-teal-500/0',
    },
  ];

  return (
    <section className="py-24 relative bg-[#0A0A0F] overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="max-w-3xl mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/20 bg-red-500/5 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-red-500 text-[10px] font-bold uppercase tracking-widest">
              Platform Features
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1]"
          >
            One Platform For <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              Bangladesh Citizens
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 mt-6 text-lg max-w-xl leading-relaxed"
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
                whileHover={{ y: -8 }}
                className="group relative p-4 rounded-[2rem] bg-gradient-to-b from-[#1C1C26] to-[#16161F] border border-white/5 hover:border-red-500/30 transition-all duration-500 shadow-2xl "
              >
                {/* Accent Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]`} />
                
                <div className="relative z-10">
                  {/* ICON */}
                  <div className="w-16 h-16 rounded-2xl bg-[#23232F] flex items-center justify-center mb-8 border border-white/5 group-hover:border-red-500/50 group-hover:bg-red-500/10 transition-all duration-500">
                    <Icon size={28} className="text-white group-hover:text-red-500 transition-colors duration-500" />
                  </div>

                  {/* CONTENT */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-8">
                    {feature.desc}
                  </p>

                  {/* BUTTON */}
                  <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400 group-hover:text-white transition-all">
                    Explore Feature
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-red-500 transition-all">
                      <ArrowRight size={14} className="text-white" />
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