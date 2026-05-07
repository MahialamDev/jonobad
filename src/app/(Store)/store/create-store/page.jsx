'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Store, 
  Upload, 
  MapPin, 
  Briefcase, 
  CheckCircle2, 
  ArrowRight, 
  Info,
  ShieldCheck
} from 'lucide-react';

const CreateStore = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white py-12 px-6 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-600/5 blur-[120px] rounded-full" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/20 bg-red-500/5 mb-6"
          >
            <ShieldCheck size={16} className="text-red-500" />
            <span className="text-red-500 text-[10px] font-black uppercase tracking-widest">Verification Required</span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-black italic tracking-tight">
            START YOUR <span className="text-red-500">LEGACY</span>
          </h1>
          <p className="text-gray-400 mt-4 text-lg">Apply to become a verified Jonobad Merchant.</p>
        </div>

        {/* Multi-step Indicator */}
        <div className="flex justify-center items-center gap-4 mb-12">
          {Array(5).map((i) => (
            <div key={i} className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-2xl flex items-center justify-center font-black transition-all ${step >= i ? 'bg-red-500 text-white shadow-lg shadow-red-500/20' : 'bg-[#16161F] text-gray-600 border border-white/5'}`}>
                {i}
              </div>
              {i !== 3 && <div className={`w-12 h-[2px] rounded-full ${step > i ? 'bg-red-500' : 'bg-white/5'}`} />}
            </div>
          ))}
        </div>

        {/* Application Form Card */}
        <motion.div 
          layout
          className="bg-[#16161F]/50 backdrop-blur-xl border border-white/5 p-8 md:p-12 rounded-[2.5rem] shadow-2xl"
        >
          {step === 1 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500">
                  <Store size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Store Basics</h3>
                  <p className="text-sm text-gray-500">Tell us about your brand name and category.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Store Name</label>
                  <input type="text" placeholder="e.g. Rahat's Tech Haven" className="w-full bg-[#0A0A0F] border border-white/5 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-red-500/50 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Category</label>
                  <select className="w-full bg-[#0A0A0F] border border-white/5 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-red-500/50 transition-all appearance-none">
                    <option>Electronics</option>
                    <option>Fashion & Apparel</option>
                    <option>Home Decor</option>
                    <option>Local Services</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Business Description</label>
                <textarea rows="4" placeholder="Briefly describe what you'll be selling..." className="w-full bg-[#0A0A0F] border border-white/5 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-red-500/50 transition-all resize-none"></textarea>
              </div>

              <button onClick={() => setStep(2)} className="w-full md:w-max ml-auto bg-red-500 hover:bg-red-600 text-white font-black py-4 px-10 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-red-500/20">
                NEXT STEP <ArrowRight size={18} />
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Location & Trust</h3>
                  <p className="text-sm text-gray-500">Physical address for pickup and verification.</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Full Address</label>
                  <input type="text" placeholder="Street, Area, Jamalpur" className="w-full bg-[#0A0A0F] border border-white/5 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-red-500/50 transition-all" />
                </div>

                <div className="border-2 border-dashed border-white/5 rounded-3xl p-12 text-center group hover:border-red-500/20 transition-all cursor-pointer">
                  <Upload className="mx-auto text-gray-600 group-hover:text-red-500 mb-4 transition-colors" size={40} />
                  <p className="text-sm font-bold text-gray-500">Upload Trade License or NID Document</p>
                  <p className="text-[10px] text-gray-700 mt-2">JPG, PNG or PDF (Max 5MB)</p>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <button onClick={() => setStep(1)} className="text-gray-500 font-bold hover:text-white transition-colors">Go Back</button>
                <button onClick={() => setStep(3)} className="bg-red-500 hover:bg-red-600 text-white font-black py-4 px-10 rounded-2xl flex items-center gap-3 transition-all">
                  FINAL REVIEW <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
              <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mx-auto mb-8 border border-green-500/20">
                <CheckCircle2 size={40} />
              </div>
              <h3 className="text-3xl font-black mb-4">Ready to Submit?</h3>
              <p className="text-gray-400 max-w-md mx-auto mb-10 italic">
                "By submitting, you agree to Jonobad's Merchant Terms of Service and ethical selling guidelines."
              </p>
              
              <div className="bg-[#0A0A0F] p-6 rounded-3xl border border-white/5 mb-10 text-left">
                <div className="flex items-start gap-3">
                  <Info size={18} className="text-blue-500 mt-1" />
                  <p className="text-xs text-gray-500 leading-relaxed uppercase font-bold tracking-tighter">
                    Our team will review your application within 24-48 hours. You will receive a notification in the app once your store is live.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-center gap-4">
                <button onClick={() => setStep(2)} className="px-10 py-4 font-bold text-gray-500 hover:text-white transition-all">Review Info</button>
                <button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-black py-4 px-12 rounded-2xl transition-all shadow-xl shadow-red-500/20">
                  SUBMIT APPLICATION
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* FAQ/Help Footer */}
        <div className="mt-12 text-center text-gray-600">
          <p className="text-xs uppercase font-black tracking-[0.3em]">Need help? Contact support@jonobad.com</p>
        </div>
      </div>
    </div>
  );
};

export default CreateStore;