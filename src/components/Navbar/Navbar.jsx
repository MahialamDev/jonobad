'use client';

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  ShoppingBag,
  FileText,
  Droplets,
  User,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/store", icon: ShoppingBag, label: "Store" },
    { href: "/feeds", icon: FileText, label: "Feeds" },
    { href: "/blood", icon: Droplets, label: "Blood" },
    { href: "/account", icon: User, label: "Account" },
  ];

  const hideNavbarPaths = ['/feeds', '/messages', '/reports', '/reels', '/store', '/menu'];
  if (hideNavbarPaths.some(path => pathname.startsWith(path))) return null;

  return (
    <>
      {/* NAVBAR: 
        ১. 'sticky' ব্যবহার করা হয়েছে যাতে হেডলাইনের নিচে থাকে।
        ২. 'top-[42px]' (হেডলাইনের উচ্চতা) সেট করা হয়েছে যেন স্ক্রল করলে এটি আটকে থাকে। 
      */}
      <nav className="sticky top-[42px] left-0 right-0 z-50 border-b border-white/[0.05] bg-[#0A0A0F]/80 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="h-20 lg:h-24 flex items-center justify-between">
            
            {/* LOGO SECTION */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 rounded-[1.25rem] bg-primary flex items-center justify-center shadow-lg shadow-primary/20 overflow-hidden shrink-0 transition-transform group-hover:scale-105">
                <span className="text-white text-2xl font-black italic">J</span>
                <div className="absolute top-0 right-0 w-3.5 h-3.5 bg-secondary rounded-bl-xl" />
              </div>

              <div className="leading-none">
                <h1 className="text-xl lg:text-2xl tracking-[0.3em] font-black text-white italic">
                  JONO<span className="text-primary">BAD</span>
                </h1>
                <p className="text-[10px] text-gray-500 mt-1 font-bold tracking-[0.2em] uppercase">
                  জনবাদ
                </p>
              </div>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center gap-12">
              <div className="flex items-center gap-10">
                {navLinks.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`relative text-[11px] font-black uppercase tracking-[0.2em] transition-all
                        ${active ? "text-primary" : "text-gray-400 hover:text-white"}`}
                    >
                      {item.label}
                      {active && (
                        <motion.span 
                          layoutId="navUnderline"
                          className="absolute left-0 -bottom-2 h-[3px] w-full bg-primary rounded-full" 
                        />
                      )}
                    </Link>
                  );
                })}
              </div>

              <button className="bg-primary hover:bg-primary/90 text-white transition-all px-8 py-3.5 rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-xl shadow-primary/10 active:scale-95">
                Get Started
              </button>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white active:scale-90 transition-transform"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z- lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 h-full w-[85%] max-w-sm bg-[#0A0A0F] border-l border-white/[0.05] shadow-2xl"
            >
              <div className="flex items-center justify-between p-6 border-b border-white/[0.05]">
                <div>
                  <h2 className="text-sm font-black tracking-[0.3em] text-white">NAVIGATION</h2>
                  <p className="text-[10px] text-gray-600 mt-1 font-bold uppercase tracking-widest italic">Jonobad App</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-6 space-y-3">
                {navLinks.map((item) => {
                  const Icon = item.icon;
                  const active = pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between p-4 rounded-[1.5rem] transition-all border
                        ${active 
                          ? "bg-primary/10 border-primary/20 text-primary" 
                          : "bg-white/[0.02] border-white/[0.03] text-gray-400 hover:bg-white/5"}`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg
                          ${active ? "bg-primary text-white" : "bg-base-300 text-gray-500"}`}>
                          <Icon size={22} />
                        </div>
                        <div>
                          <h4 className="font-black text-sm tracking-tight">{item.label}</h4>
                          <p className="text-[10px] opacity-60 font-medium">Explore platform</p>
                        </div>
                      </div>
                      <ChevronRight size={16} className={active ? "text-primary" : "text-gray-700"} />
                    </Link>
                  );
                })}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/[0.05] bg-[#0A0A0F]">
                <button className="w-full bg-primary hover:bg-primary/90 text-white transition-all py-5 rounded-[1.5rem] font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-primary/10">
                  Join Community
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;