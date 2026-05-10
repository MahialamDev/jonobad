'use client';
import React, { Suspense, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Eye, EyeOff, Lock, Mail } from 'lucide-react';
import { DiChrome } from 'react-icons/di';
import { FaGithub } from 'react-icons/fa'; // GiThunderBlade এর বদলে standard Github icon
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const params = useSearchParams();
  const callbackUrl = params.get('callbackUrl') || '/';
  const [loading, setLoading] = useState(false);

  const handleLogin = async( e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      setLoading(true);
      const result = await signIn('credentials', { email, password, callbackUrl });
      console.log(result)
    }  catch (err) {
      console.log(err)
   }finally {
      setLoading(false)
    }
   
  }

  return (
   
    <div className="min-h-screen bg-base-100 flex items-center justify-center p-6 relative overflow-hidden text-base-content">
      
      {/* Background Accent Orbs - Using Theme Colors */}
      <div className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] bg-primary/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] bg-secondary/5 blur-[120px] rounded-full" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[450px] z-10"
      >
        {/* Logo Section */}
        <div className="text-center mb-10">
          <motion.div 
            initial={{ scale: 0.8, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-[2rem] bg-gradient-to-br from-primary to-primary-focus mb-6 shadow-2xl shadow-primary/30"
          >
            <Lock className="text-primary-content" size={30} />
          </motion.div>
          <h1 className="text-4xl font-black italic tracking-tighter">
            JONO<span className="text-primary">BAD</span>
          </h1>
          <p className="text-base-content/40 text-[10px] mt-2 font-black uppercase tracking-[0.3em]">Secure Citizen Portal</p>
        </div>

        {/* Login Card */}
        <div className="bg-base-200/50 backdrop-blur-2xl border border-base-300 p-8 rounded-[3rem] shadow-[0_25px_80px_-15px_rgba(0,0,0,0.5)]">
          <form className="space-y-5" onSubmit={handleLogin}>
            
            {/* Email Input */}
            <div className="space-y-2">
              <label className="text-[10px] font-black text-base-content/50 uppercase tracking-widest ml-1">Email Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail size={18} className="text-base-content/30 group-focus-within:text-primary transition-colors" />
                </div>
                <input 
                  type="email" 
                  name='email'
                  placeholder="rahat@example.com"
                  className="w-full bg-base-300/50 border border-base-300 rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all placeholder:text-base-content/20"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-[10px] font-black text-base-content/50 uppercase tracking-widest">Password</label>
                <a href="#" className="text-[10px] font-black text-primary hover:opacity-80 transition-opacity">Forgot?</a>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock size={18} className="text-base-content/30 group-focus-within:text-primary transition-colors" />
                </div>
                <input 
                  type={showPassword ? "text" : "password"} 
                  name='password'
                  placeholder="••••••••"
                  className="w-full bg-base-300/50 border border-base-300 rounded-2xl py-4 pl-12 pr-12 text-sm focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all placeholder:text-base-content/20"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-base-content/30 hover:text-base-content transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <motion.button 
              disabled={loading}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-primary hover:bg-primary-focus text-primary-content font-black py-4 rounded-2xl shadow-xl shadow-primary/20 flex items-center justify-center gap-2 transition-all mt-4 tracking-widest text-xs"
            >
             {loading ? 'Loading...' :  <>SIGN IN <ArrowRight size={18} /></>}
            </motion.button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-base-300"></div>
            </div>
            <div className="relative flex justify-center text-[9px] uppercase font-black tracking-[0.2em]">
              <span className="bg-base-200 px-4 text-base-content/30 italic">Or continue with</span>
            </div>
          </div>

          {/* Social Logins */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 bg-base-300/50 hover:bg-base-300 border border-base-300 py-3.5 rounded-2xl transition-all group">
              <DiChrome size={20} className="group-hover:text-primary transition-colors" /> 
              <span className="text-[11px] font-black uppercase tracking-tighter">Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 bg-base-300/50 hover:bg-base-300 border border-base-300 py-3.5 rounded-2xl transition-all group">
              <FaGithub size={18} className="group-hover:text-primary transition-colors" /> 
              <span className="text-[11px] font-black uppercase tracking-tighter">Github</span>
            </button>
          </div>
        </div>

        {/* Footer Link */}
        <p className="text-center mt-10 text-base-content/40 text-[11px] font-medium tracking-tight">
          Don't have an account? <Link href="/signup" className="text-primary font-black hover:underline underline-offset-4 ml-1">Join the movement</Link>
        </p>
      </motion.div>
      </div>
      
  );
};

export default LoginPage;