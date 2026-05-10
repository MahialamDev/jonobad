'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Eye, EyeOff, Lock, Mail, User, ShieldCheck } from 'lucide-react';
import { DiChrome } from 'react-icons/di';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import { postUser } from '@/actions/server/auth';
import { useRouter } from 'next/navigation';

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false)
  
  const router = useRouter();
  const handleSignUp = async(e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
   
    try {
      setLoading(true);
      const result = await postUser({ name, email, password });
      if (result.success) {
        router.push('/login')
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false)
    }
   

  }

  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center p-6 relative overflow-hidden text-base-content">
      
      {/* Background Accent Orbs */}
      <div className="absolute top-[-10%] right-[-10%] w-[45%] h-[45%] bg-primary/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[45%] h-[45%] bg-secondary/5 blur-[120px] rounded-full" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[480px] z-10"
      >
        {/* Logo & Header */}
        <div className="text-center mb-8">
          <motion.div 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-focus mb-4 shadow-xl shadow-primary/20"
          >
            <ShieldCheck className="text-primary-content" size={28} />
          </motion.div>
          <h1 className="text-3xl font-black italic tracking-tighter uppercase">
            Create <span className="text-primary">Account</span>
          </h1>
          <p className="text-base-content/40 text-[9px] mt-2 font-black uppercase tracking-[0.3em]">Join the Jonobad Community</p>
        </div>

        {/* SignUp Card */}
        <div className="bg-base-200/50 backdrop-blur-2xl border border-base-300 p-8 rounded-[2.5rem] shadow-[0_25px_80px_-15px_rgba(0,0,0,0.4)]">
          <form className="space-y-4" onSubmit={handleSignUp}>
            
            {/* Full Name Input */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-base-content/50 uppercase tracking-widest ml-1">Full Name</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User size={18} className="text-base-content/30 group-focus-within:text-primary transition-colors" />
                </div>
                <input 
                  name='name'
                  type="text" 
                  placeholder="Rahat Islam"
                  className="w-full bg-base-300/50 border border-base-300 rounded-2xl py-3.5 pl-12 pr-4 text-sm focus:outline-none focus:border-primary/50 transition-all placeholder:text-base-content/20"
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-base-content/50 uppercase tracking-widest ml-1">Email Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail size={18} className="text-base-content/30 group-focus-within:text-primary transition-colors" />
                </div>
                <input 
                   name='email'
                  type="email" 
                  placeholder="rahat@example.com"
                  className="w-full bg-base-300/50 border border-base-300 rounded-2xl py-3.5 pl-12 pr-4 text-sm focus:outline-none focus:border-primary/50 transition-all placeholder:text-base-content/20"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-base-content/50 uppercase tracking-widest ml-1">Create Password</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock size={18} className="text-base-content/30 group-focus-within:text-primary transition-colors" />
                </div>
                <input 
                   name='password'
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••"
                  className="w-full bg-base-300/50 border border-base-300 rounded-2xl py-3.5 pl-12 pr-12 text-sm focus:outline-none focus:border-primary/50 transition-all placeholder:text-base-content/20"
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

            {/* Terms & Conditions */}
            <div className="flex items-center gap-3 py-2 ml-1">
              <input type="checkbox" className="checkbox checkbox-primary checkbox-xs rounded" id="terms" />
              <label htmlFor="terms" className="text-[10px] font-bold text-base-content/40 cursor-pointer hover:text-base-content transition-colors">
                I agree to the <span className="text-primary italic">Terms of Service</span> and Privacy Policy
              </label>
            </div>

            {/* Sign Up Button */}
            <motion.button 
              disabled={loading}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-primary hover:bg-primary-focus text-primary-content font-black py-4 rounded-2xl shadow-xl shadow-primary/20 flex items-center justify-center gap-2 transition-all mt-2 tracking-widest text-xs"
            >
              {loading? 'Loading...' : <>CREATE ACCOUNT <ArrowRight size={18} /></>}
            </motion.button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-base-300"></div>
            </div>
            <div className="relative flex justify-center text-[9px] uppercase font-black tracking-[0.2em]">
              <span className="bg-base-200 px-4 text-base-content/30 italic">Registration with</span>
            </div>
          </div>

          {/* Social Logins */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 bg-base-300/50 hover:bg-base-300 border border-base-300 py-3 rounded-2xl transition-all group">
              <DiChrome size={20} className="group-hover:text-primary transition-colors" /> 
              <span className="text-[11px] font-black uppercase tracking-tighter">Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 bg-base-300/50 hover:bg-base-300 border border-base-300 py-3 rounded-2xl transition-all group">
              <FaGithub size={18} className="group-hover:text-primary transition-colors" /> 
              <span className="text-[11px] font-black uppercase tracking-tighter">Github</span>
            </button>
          </div>
        </div>

        {/* Footer Link */}
        <p className="text-center mt-8 text-base-content/40 text-[11px] font-medium tracking-tight">
          Already a citizen? <Link href="/login" className="text-primary font-black hover:underline underline-offset-4 ml-1">Sign in here</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default SignUpPage;