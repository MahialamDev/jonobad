'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
// React Icons Imports
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
    <div className="min-h-screen bg-[#0A0A0F] text-white py-12 px-6 relative">
      {/* Background Warning Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-red-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/20 bg-orange-500/5 mb-6"
          >
            <FaExclamationTriangle className="text-orange-500 text-sm" />
            <span className="text-orange-500 text-[10px] font-black uppercase tracking-widest">Public Grievance Portal</span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-black italic tracking-tight">
            REPORT <span className="text-red-500">INJUSTICE</span>
          </h1>
          <p className="text-gray-500 mt-4 text-xs uppercase tracking-[0.3em] font-bold">Powered by Batch 12 Accountability</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT: FORM */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-[#16161F]/50 backdrop-blur-xl border border-white/5 p-8 rounded-[2.5rem] shadow-2xl">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                
                {/* 1. Location Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Division</label>
                    <div className="relative">
                      <FaMapMarkerAlt className="absolute left-4 top-4 text-gray-700" />
                      <select className="w-full bg-[#0A0A0F] border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-red-500/50 transition-all appearance-none cursor-pointer">
                        <option>Dhaka</option>
                        <option>Mymensingh</option>
                        <option>Chittagong</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">District</label>
                    <select className="w-full bg-[#0A0A0F] border border-white/5 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-red-500/50 transition-all appearance-none cursor-pointer">
                      <option>Jamalpur</option>
                      <option>Netrokona</option>
                      <option>Sherpur</option>
                    </select>
                  </div>
                </div>

                {/* 2. FB Links */}
                <div className="space-y-4">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1 flex items-center gap-2">
                    <FaFacebook className="text-blue-500" /> Facebook Evidence Links (Min 2)
                  </label>
                  <div className="space-y-3">
                    {Array(5).map((i) => (
                      <div key={i} className="relative group">
                        <FaLink className="absolute left-4 top-4 text-gray-700" />
                        <input type="url" placeholder="https://facebook.com/..." className="w-full bg-[#0A0A0F] border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-xs focus:outline-none focus:border-blue-500/50 transition-all font-mono" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Description */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1 flex items-center gap-2">
                    <MdOutlineDescription className="text-green-500 text-base" /> Evidence Description
                  </label>
                  <textarea 
                    rows="4" 
                    placeholder="Describe the incident in the screenshot..." 
                    className="w-full bg-[#0A0A0F] border border-white/5 rounded-2xl py-4 px-6 text-sm text-white focus:outline-none focus:border-red-500/50 transition-all resize-none"
                  ></textarea>
                </div>

                {/* 4. Anonymous Toggle */}
                <div 
                  onClick={() => setHideReporter(!hideReporter)}
                  className={`p-5 rounded-3xl border cursor-pointer transition-all flex items-center justify-between group ${hideReporter ? 'bg-red-500/10 border-red-500/30 shadow-[0_0_20px_rgba(239,68,68,0.1)]' : 'bg-white/5 border-white/5'}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-2xl transition-all ${hideReporter ? 'bg-red-500 text-white shadow-lg' : 'bg-white/5 text-gray-500'}`}>
                      {hideReporter ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                    </div>
                    <div>
                      <p className={`text-xs font-black uppercase tracking-wider ${hideReporter ? 'text-red-500' : 'text-gray-400'}`}>
                        {hideReporter ? 'Identity Hidden' : 'Show Identity'}
                      </p>
                      <p className="text-[9px] text-gray-600 font-bold uppercase mt-1">Status: {hideReporter ? 'Anonymous Report' : 'Public Report'}</p>
                    </div>
                  </div>
                  <div className={`w-12 h-6 rounded-full relative transition-all ${hideReporter ? 'bg-red-500' : 'bg-gray-800'}`}>
                    <div className={`absolute top-1.5 w-3 h-3 bg-white rounded-full transition-all ${hideReporter ? 'left-7' : 'left-2'}`} />
                  </div>
                </div>

                <button className="w-full bg-red-600 hover:bg-red-500 text-white font-black py-5 rounded-[1.5rem] shadow-xl shadow-red-500/20 flex items-center justify-center gap-3 transition-all active:scale-95 group">
                  SUBMIT REPORT <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

          {/* RIGHT: RULES */}
          <div className="space-y-6">
            <div className="bg-[#16161F] border border-white/5 p-8 rounded-[2.5rem]">
              <FaShieldAlt className="text-red-500 text-4xl mb-6" />
              <h3 className="text-lg font-black italic mb-6">REPORTING RULES</h3>
              <div className="space-y-6">
                <RuleItem 
                  icon={<MdGppBad className="text-red-500" />} 
                  text="False evidence will lead to permanent IP ban." 
                />
                <RuleItem 
                  icon={<FaLink className="text-blue-500" />} 
                  text="Links must be from public posts/groups." 
                />
                <RuleItem 
                  icon={<IoInformationCircle className="text-green-500" />} 
                  text="Admins of Batch 12 will verify every link." 
                />
              </div>
            </div>

            <div className="p-6 rounded-[2rem] bg-gradient-to-br from-red-600/10 to-orange-600/10 border border-white/5">
              <p className="text-[10px] text-gray-500 font-black uppercase leading-relaxed text-center">
                Your report will be encrypted and processed via Jonobad Secure Cloud.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const RuleItem = ({ icon, text }) => (
  <div className="flex gap-4 items-start">
    <div className="mt-1 text-lg">{icon}</div>
    <p className="text-[10px] text-gray-400 font-black uppercase leading-relaxed tracking-wider">{text}</p>
  </div>
);

export default ReportPage;