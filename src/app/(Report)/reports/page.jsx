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
    /* pt-32 (Padding Top) অ্যাড করা হয়েছে যাতে ফিক্সড হেডারের নিচে কন্টেন্ট না যায় */
    <div className="min-h-screen  text-white pt-32 pb-12 px-4 relative overflow-hidden -z-10">
      
      {/* Background Warning Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-red-600/5 blur-[120px] rounded-full pointer-events-none" />

      {/* z-0 রাখা হয়েছে যাতে হেডারের (z-100) নিচে এটি থাকে। 
         relative পজিশন দেয়া হয়েছে যাতে গ্লো ইফেক্ট এর উপরে কন্টেন্ট থাকে।
      */}
      <div className="max-w-xl mx-auto relative z-0">
        
        {/* --- HEADER --- */}
        <div className="mb-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 mb-2"
          >
            <FaExclamationTriangle className="text-red-500 text-xs" />
            <span className="text-red-500 text-[9px] font-black uppercase tracking-[0.3em]">Justice Portal</span>
          </motion.div>
          <h1 className="text-3xl font-black italic tracking-tighter">REPORT <span className="text-red-500">INJUSTICE</span></h1>
          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Verified by Avengers Batch 12</p>
        </div>

        {/* --- MAIN FORM CARD --- */}
        <div className="space-y-4">
          <div className="bg-[#16161F] border border-white/[0.05] p-6 rounded-[2.5rem] shadow-2xl">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              
              {/* 1. Location */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-[9px] font-black text-gray-500 uppercase tracking-widest ml-1">Division</label>
                  <div className="relative">
                    <FaMapMarkerAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-700 text-xs" />
                    <select className="w-full bg-[#0A0A0F] border border-white/5 rounded-xl py-3 pl-9 pr-2 text-[11px] text-white focus:outline-none focus:border-red-500/50 transition-all appearance-none cursor-pointer">
                      <option>Dhaka</option>
                      <option>Mymensingh</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[9px] font-black text-gray-500 uppercase tracking-widest ml-1">District</label>
                  <select className="w-full bg-[#0A0A0F] border border-white/5 rounded-xl py-3 px-4 text-[11px] text-white focus:outline-none focus:border-red-500/50 transition-all appearance-none cursor-pointer">
                    <option>Jamalpur</option>
                    <option>Sherpur</option>
                  </select>
                </div>
              </div>

              {/* 2. Facebook Links (Mapping fixed) */}
              <div className="space-y-3">
                <label className="text-[9px] font-black text-gray-500 uppercase tracking-widest ml-1 flex items-center gap-2">
                  <FaFacebook className="text-blue-500" /> Evidence Links
                </label>
                <div className="space-y-2">
                  {Array(5).map((i) => (
                    <div key={i} className="relative group">
                      <FaLink className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-700 text-xs" />
                      <input 
                        type="url" 
                        placeholder="Paste link here..." 
                        className="w-full bg-[#0A0A0F] border border-white/5 rounded-xl py-3 pl-9 pr-4 text-[10px] focus:outline-none focus:border-blue-500/30 transition-all font-mono" 
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Description */}
              <div className="space-y-1.5">
                <label className="text-[9px] font-black text-gray-500 uppercase tracking-widest ml-1 flex items-center gap-2">
                  <MdOutlineDescription className="text-green-500" /> Details
                </label>
                <textarea 
                  rows="3" 
                  placeholder="Tell us what happened..." 
                  className="w-full bg-[#0A0A0F] border border-white/5 rounded-xl py-3 px-4 text-[11px] text-white focus:outline-none focus:border-red-500/50 transition-all resize-none"
                ></textarea>
              </div>

              {/* 4. Anonymous Toggle */}
              <div 
                onClick={() => setHideReporter(!hideReporter)}
                className={`p-3 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${hideReporter ? 'bg-red-500/5 border-red-500/20' : 'bg-white/[0.02] border-white/5'}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${hideReporter ? 'bg-red-500 text-white shadow-lg shadow-red-500/20' : 'bg-white/5 text-gray-500'}`}>
                    {hideReporter ? <FaEyeSlash size={14} /> : <FaEye size={14} />}
                  </div>
                  <div>
                    <p className={`text-[9px] font-black uppercase tracking-wider ${hideReporter ? 'text-red-500' : 'text-gray-400'}`}>
                      {hideReporter ? 'Anonymous' : 'Public ID'}
                    </p>
                  </div>
                </div>
                <div className={`w-9 h-5 rounded-full relative transition-all ${hideReporter ? 'bg-red-500' : 'bg-gray-800'}`}>
                  <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${hideReporter ? 'left-5' : 'left-1'}`} />
                </div>
              </div>

              {/* Submit Button */}
              <button className="w-full bg-red-600 hover:bg-red-500 text-white text-[11px] font-black uppercase tracking-[0.2em] py-4 rounded-xl shadow-lg shadow-red-600/20 flex items-center justify-center gap-3 transition-all active:scale-95 group">
                Submit Report <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Rules Section */}
          <div className="bg-[#16161F] border border-white/[0.05] p-5 rounded-[2rem] grid grid-cols-1 gap-4">
            <div className="flex items-center gap-3">
               <FaShieldAlt className="text-red-500 shrink-0" size={16} />
               <h3 className="text-[10px] font-black italic uppercase tracking-widest">Protocol Rules</h3>
            </div>
            <div className="space-y-3">
              <RuleItem icon={<MdGppBad className="text-red-500" />} text="Fake data = IP Ban" />
              <RuleItem icon={<IoInformationCircle className="text-green-500" />} text="Verified by Batch 12" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

const RuleItem = ({ icon, text }) => (
  <div className="flex gap-3 items-center bg-white/[0.02] p-2 rounded-lg border border-white/[0.03]">
    <div className="text-xs">{icon}</div>
    <p className="text-[8px] text-gray-500 font-black uppercase tracking-wider">{text}</p>
  </div>
);

export default ReportPage;