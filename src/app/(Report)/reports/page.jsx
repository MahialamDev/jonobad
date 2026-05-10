'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaFacebook, 
  FaExclamationTriangle, 
  FaShieldAlt, 
  FaMapMarkerAlt, 
  FaEyeSlash, 
  FaEye, 
  FaPaperPlane,
  FaLink
} from 'react-icons/fa';
import { MdOutlineDescription, MdGppBad } from 'react-icons/md';
import { IoInformationCircle } from 'react-icons/io5';

const ReportPage = () => {
  const [hideReporter, setHideReporter] = useState(false);

  return (
    <div className="min-h-screen mt-4 bg-base-100 text-base-content pt-32 pb-24 px-4 relative overflow-hidden">
      
      {/* Background Subtle Glow - Primary Color */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-xl mx-auto relative z-10">
        
        {/* --- HEADER --- */}
        <div className="mb-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 mb-2"
          >
            <FaExclamationTriangle className="text-primary text-xs" />
            <span className="text-primary text-[9px] font-black uppercase tracking-[0.3em]">Justice Portal</span>
          </motion.div>
          <h1 className="text-3xl font-black italic tracking-tighter uppercase leading-none">
            REPORT <span className="text-primary">INJUSTICE</span>
          </h1>
          <p className="text-[10px] opacity-40 font-black uppercase tracking-widest mt-2">Verified by Avengers Batch 12</p>
        </div>

        {/* --- MAIN FORM CARD --- */}
        <div className="space-y-4">
          <div className="bg-base-200 border border-base-300 p-6 rounded-2xl shadow-xl">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              
              {/* 1. Location */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[9px] font-black opacity-40 uppercase tracking-widest ml-1">Division</label>
                  <div className="relative">
                    <FaMapMarkerAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-primary/50 text-xs" />
                    <select className="w-full bg-base-100 border border-base-300 rounded-xl py-3.5 pl-9 pr-2 text-[11px] font-bold focus:outline-none focus:border-primary transition-all appearance-none cursor-pointer">
                      <option>Dhaka</option>
                      <option>Mymensingh</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-black opacity-40 uppercase tracking-widest ml-1">District</label>
                  <select className="w-full bg-base-100 border border-base-300 rounded-xl py-3.5 px-4 text-[11px] font-bold focus:outline-none focus:border-primary transition-all appearance-none cursor-pointer">
                    <option>Jamalpur</option>
                    <option>Sherpur</option>
                  </select>
                </div>
              </div>

              {/* 2. Evidence Links */}
              <div className="space-y-3">
                <label className="text-[9px] font-black opacity-40 uppercase tracking-widest ml-1 flex items-center gap-2">
                  <FaFacebook className="text-blue-500" /> Evidence Links
                </label>
                <div className="space-y-2">
                  {Array().map((i) => (
                    <div key={i} className="relative group">
                      <FaLink className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/20 text-xs" />
                      <input 
                        type="url" 
                        placeholder="Paste link here..." 
                        className="w-full bg-base-100 border border-base-300 rounded-xl py-3 pl-9 pr-4 text-[10px] focus:outline-none focus:border-primary/40 transition-all font-mono" 
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Description */}
              <div className="space-y-2">
                <label className="text-[9px] font-black opacity-40 uppercase tracking-widest ml-1 flex items-center gap-2">
                  <MdOutlineDescription className="text-primary" /> Details
                </label>
                <textarea 
                  rows="4" 
                  placeholder="Describe the incident clearly..." 
                  className="w-full bg-base-100 border border-base-300 rounded-xl py-3 px-4 text-[11px] focus:outline-none focus:border-primary transition-all resize-none font-medium"
                ></textarea>
              </div>

              {/* 4. Anonymous Toggle */}
              <div 
                onClick={() => setHideReporter(!hideReporter)}
                className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${hideReporter ? 'bg-primary/10 border-primary/30' : 'bg-base-100 border-base-300'}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all ${hideReporter ? 'bg-primary text-primary-content shadow-lg shadow-primary/20' : 'bg-base-200 text-base-content/40'}`}>
                    {hideReporter ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                  </div>
                  <div>
                    <p className={`text-[10px] font-black uppercase tracking-wider ${hideReporter ? 'text-primary' : 'opacity-60'}`}>
                      {hideReporter ? 'Anonymous Report' : 'Public Identity'}
                    </p>
                    <p className="text-[8px] opacity-40 uppercase font-bold">Privacy Control</p>
                  </div>
                </div>
                <div className={`w-10 h-5 rounded-full relative transition-all ${hideReporter ? 'bg-primary' : 'bg-base-300'}`}>
                  <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${hideReporter ? 'left-6' : 'left-1'}`} />
                </div>
              </div>

              {/* Submit Button */}
              <button className="w-full bg-primary hover:bg-primary/90 text-primary-content text-[11px] font-black uppercase tracking-[0.2em] py-4 rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-3 transition-all active:scale-95 group mt-4">
                Submit Report <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Rules Section */}
          <div className="bg-base-200 border border-base-300 p-5 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
               <FaShieldAlt className="text-primary shrink-0" size={16} />
               <h3 className="text-[10px] font-black italic uppercase tracking-widest">Protocol Rules</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <RuleItem icon={<MdGppBad className="text-primary" />} text="No Fake Evidence" />
              <RuleItem icon={<IoInformationCircle className="text-primary/60" />} text="Verified Portal" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

const RuleItem = ({ icon, text }) => (
  <div className="flex gap-3 items-center bg-base-100 p-3 rounded-xl border border-base-300">
    <div className="text-sm">{icon}</div>
    <p className="text-[9px] opacity-60 font-black uppercase tracking-wider">{text}</p>
  </div>
);

export default ReportPage;