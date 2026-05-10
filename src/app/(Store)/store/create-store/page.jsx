'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Store, 
  Upload, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Info,
  ShieldCheck
} from 'lucide-react';

const CreateStore = () => {
  const [step, setStep] = useState(1);

  return (
    // bg-base-100 আপনার থিম থেকে ডার্ক বা লাইট ব্যাকগ্রাউন্ড নিবে
    <div className="min-h-screen bg-base-100 text-base-content mt-2 py-12 px-6 relative overflow-hidden transition-colors duration-300">
      
      {/* Decorative Background Elements - আপনার থিমের প্রাইমারি সবুজাভ গ্লো */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6"
          >
            <ShieldCheck size={16} className="text-primary" />
            <span className="text-primary text-[10px] font-black uppercase tracking-widest">Identity Verification</span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-black italic tracking-tight text-base-content">
            START YOUR <span className="text-primary">LEGACY</span>
          </h1>
          <p className="opacity-60 mt-4 text-lg font-medium">Apply to become a verified Jonobad Merchant.</p>
        </div>

        {/* Multi-step Indicator */}
        <div className="flex justify-center items-center gap-4 mb-12">
          {Array().map((i) => (
            <div key={i} className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-2xl flex items-center justify-center font-black transition-all border
                ${step >= i 
                  ? 'bg-primary border-primary text-primary-content shadow-lg shadow-primary/20' 
                  : 'bg-base-200 text-base-content/30 border-base-300'}`}>
                {i}
              </div>
              {i !== 3 && (
                <div className={`w-12 h-[2px] rounded-full ${step > i ? 'bg-primary' : 'bg-base-300'}`} />
              )}
            </div>
          ))}
        </div>

        {/* Application Form Card */}
        <motion.div 
          layout
          className="bg-base-200 border border-base-300 p-8 md:p-12 rounded-box shadow-2xl"
        >
          {step === 1 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-btn bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                  <Store size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-base-content text-left">Store Basics</h3>
                  <p className="text-sm opacity-50 font-medium text-left">Tell us about your brand name and category.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 text-left">
                  <label className="text-[10px] font-black opacity-50 uppercase tracking-widest ml-1">Store Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Rahat's Tech Haven" 
                    className="w-full bg-base-100 border border-base-300 rounded-btn py-4 px-6 text-base-content focus:outline-none focus:border-primary/50 transition-all font-medium" 
                  />
                </div>
                <div className="space-y-2 text-left">
                  <label className="text-[10px] font-black opacity-50 uppercase tracking-widest ml-1">Category</label>
                  <select className="w-full bg-base-100 border border-base-300 rounded-btn py-4 px-6 text-base-content focus:outline-none focus:border-primary/50 transition-all appearance-none font-medium">
                    <option>Electronics</option>
                    <option>Fashion & Apparel</option>
                    <option>Home Decor</option>
                    <option>Local Services</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2 text-left">
                <label className="text-[10px] font-black opacity-50 uppercase tracking-widest ml-1">Business Description</label>
                <textarea 
                  rows="4" 
                  placeholder="Briefly describe what you'll be selling..." 
                  className="w-full bg-base-100 border border-base-300 rounded-btn py-4 px-6 text-base-content focus:outline-none focus:border-primary/50 transition-all resize-none font-medium"
                ></textarea>
              </div>

              <button 
                onClick={() => setStep(2)} 
                className="w-full md:w-max ml-auto btn btn-primary rounded-btn font-black h-auto py-4 px-10 flex items-center justify-center gap-3 shadow-xl shadow-primary/10 border-none"
              >
                NEXT STEP <ArrowRight size={18} />
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-btn bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-base-content text-left">Location & Trust</h3>
                  <p className="text-sm opacity-50 font-medium text-left">Physical address for pickup and verification.</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-2 text-left">
                  <label className="text-[10px] font-black opacity-50 uppercase tracking-widest ml-1">Full Address</label>
                  <input 
                    type="text" 
                    placeholder="Street, Area, Jamalpur" 
                    className="w-full bg-base-100 border border-base-300 rounded-btn py-4 px-6 text-base-content focus:outline-none focus:border-primary/50 transition-all font-medium" 
                  />
                </div>

                <div className="border-2 border-dashed border-base-300 rounded-box p-12 text-center group hover:border-primary/40 transition-all cursor-pointer bg-base-100/50">
                  <Upload className="mx-auto opacity-30 group-hover:text-primary group-hover:opacity-100 mb-4 transition-all" size={40} />
                  <p className="text-sm font-bold opacity-60">Upload Trade License or NID Document</p>
                  <p className="text-[10px] opacity-40 mt-2 font-black uppercase tracking-tighter text-base-content">JPG, PNG or PDF (Max 5MB)</p>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <button onClick={() => setStep(1)} className="opacity-50 font-black text-xs uppercase tracking-widest hover:opacity-100 transition-colors">Go Back</button>
                <button 
                  onClick={() => setStep(3)} 
                  className="btn btn-primary rounded-btn font-black h-auto py-4 px-10 flex items-center gap-3 shadow-xl shadow-primary/10 border-none"
                >
                  FINAL REVIEW <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-8 border border-primary/20">
                <CheckCircle2 size={40} />
              </div>
              <h3 className="text-3xl font-black mb-4 text-base-content">Ready to Submit?</h3>
              <p className="opacity-60 max-w-md mx-auto mb-10 italic font-medium">
                "By submitting, you agree to Jonobad's Merchant Terms of Service and ethical selling guidelines."
              </p>
              
              <div className="bg-base-100 p-6 rounded-btn border border-base-300 mb-10 text-left">
                <div className="flex items-start gap-3">
                  <Info size={18} className="text-secondary mt-1" />
                  <p className="text-[10px] opacity-60 leading-relaxed uppercase font-black tracking-tight">
                    Our team will review your application within 24-48 hours. You will receive a notification in the app once your store is live.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-center gap-4">
                <button onClick={() => setStep(2)} className="px-10 py-4 font-black text-[10px] uppercase tracking-widest opacity-50 hover:opacity-100 transition-all">Review Info</button>
                <button className="btn btn-primary px-12 rounded-btn font-black h-auto py-4 shadow-xl shadow-primary/10 border-none">
                  SUBMIT APPLICATION
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* FAQ/Help Footer */}
        <div className="mt-12 text-center opacity-40">
          <p className="text-[10px] uppercase font-black tracking-[0.3em]">Need help? Contact support@jonobad.com</p>
        </div>
      </div>
    </div>
  );
};

export default CreateStore;