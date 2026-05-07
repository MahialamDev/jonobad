'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Eye, EyeOff, Lock, Mail } from 'lucide-react';
import { DiChrome } from 'react-icons/di';
import { GiThunderBlade } from 'react-icons/gi';


const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-[#0A0A0F] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/5 blur-[120px] rounded-full" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[450px] z-10"
      >
        {/* Logo Section */}
        <div className="text-center mb-10">
          <motion.div 
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-red-800 mb-4 shadow-lg shadow-red-500/20"
          >
            <Lock className="text-white" size={32} />
          </motion.div>
          <h1 className="text-4xl font-black text-white tracking-tight italic">
            JONO<span className="text-red-500">BAD</span>
          </h1>
          <p className="text-gray-500 text-sm mt-2 font-bold uppercase tracking-[0.2em]">Secure Citizen Portal</p>
        </div>

        {/* Login Card */}
        <div className="bg-[#16161F]/50 backdrop-blur-xl border border-white/5 p-8 rounded-[2.5rem] shadow-2xl">
          <form className="space-y-6">
            {/* Email Input */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail size={18} className="text-gray-500 group-focus-within:text-red-500 transition-colors" />
                </div>
                <input 
                  type="email" 
                  placeholder="name@example.com"
                  className="w-full bg-[#0A0A0F] border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-red-500/50 transition-all placeholder:text-gray-700"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Password</label>
                <a href="#" className="text-[10px] font-bold text-red-500 hover:underline">Forgot?</a>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock size={18} className="text-gray-500 group-focus-within:text-red-500 transition-colors" />
                </div>
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••"
                  className="w-full bg-[#0A0A0F] border border-white/5 rounded-2xl py-4 pl-12 pr-12 text-white focus:outline-none focus:border-red-500/50 transition-all placeholder:text-gray-700"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-black py-4 rounded-2xl shadow-lg shadow-red-500/20 flex items-center justify-center gap-2 transition-all"
            >
              SIGN IN <ArrowRight size={18} />
            </motion.button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/5"></div>
            </div>
            <div className="relative flex justify-center text-[10px] uppercase font-black tracking-widest">
              <span className="bg-[#16161F] px-4 text-gray-500">Or continue with</span>
            </div>
          </div>

          {/* Social Logins */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/5 py-3 rounded-xl transition-all">
              <DiChrome size={18} /> <span className="text-xs font-bold">Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/5 py-3 rounded-xl transition-all">
              <GiThunderBlade size={18} /> <span className="text-xs font-bold">Github</span>
            </button>
          </div>
        </div>

        {/* Footer Link */}
        <p className="text-center mt-8 text-gray-500 text-sm">
          Don't have an account? <a href="#" className="text-white font-bold hover:text-red-500 transition-colors">Join the movement</a>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;