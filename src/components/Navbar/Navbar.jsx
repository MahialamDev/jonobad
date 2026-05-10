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
} from "lucide-react";

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

  if (pathname.startsWith('/feeds') || pathname.startsWith('/messages') || pathname.startsWith('/reports') || pathname.startsWith('/reels') ) return null;

  return (
    <>
      {/* TOP NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0A0A0F]/80 backdrop-blur-2xl py-4">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          
          <div className="h-18 lg:h-20 flex items-center justify-between">
            
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-3">
              
              <div className="relative w-11 h-11 rounded-2xl bg-red-500 flex items-center justify-center shadow-lg shadow-red-500/20 overflow-hidden shrink-0">
                <span className="text-white text-2xl font-black italic">
                  J
                </span>

                <div className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-bl-xl" />
              </div>

              <div className="leading-none">
                <h1 className="text-xl lg:text-2xl tracking-[0.25em] font-black text-white">
                  JONOBAD
                </h1>

                <p className="text-[10px] text-gray-500 mt-1 tracking-widest">
                  জনবাদ
                </p>
              </div>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center gap-10">
              
              <div className="flex items-center gap-8">
                {navLinks.map((item) => {
                  const active = pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`relative text-sm font-bold uppercase tracking-wider transition
                        ${
                          active
                            ? "text-red-500"
                            : "text-gray-400 hover:text-white"
                        }`}
                    >
                      {item.label}

                      {active && (
                        <span className="absolute left-0 -bottom-2 h-[2px] w-full bg-red-500 rounded-full" />
                      )}
                    </Link>
                  );
                })}
              </div>

              <button className="bg-red-500 hover:bg-red-600 transition px-5 py-3 rounded-xl text-sm font-bold shadow-lg shadow-red-500/20">
                Get Started
              </button>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >
        
        {/* BACKDROP */}
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        {/* DRAWER */}
        <div
          className={`absolute top-0 right-0 h-full w-[82%] max-w-sm bg-[#111118] border-l border-white/10 transition-transform duration-300
            ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          
          {/* HEADER */}
          <div className="flex items-center justify-between p-5 border-b border-white/10">
            
            <div>
              <h2 className="text-lg font-black tracking-widest">
                MENU
              </h2>

              <p className="text-xs text-gray-500 mt-1">
                Navigate Jonobad
              </p>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center"
            >
              <X size={18} />
            </button>
          </div>

          {/* LINKS */}
          <div className="p-5 space-y-2">
            {navLinks.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-4 p-4 rounded-2xl transition-all
                    ${
                      active
                        ? "bg-red-500/10 border border-red-500/20 text-red-500"
                        : "text-gray-300 hover:bg-white/5"
                    }`}
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center
                      ${
                        active
                          ? "bg-red-500/20"
                          : "bg-white/5"
                      }`}
                  >
                    <Icon size={20} />
                  </div>

                  <div>
                    <h4 className="font-bold">
                      {item.label}
                    </h4>

                    <p className="text-xs text-gray-500 mt-0.5">
                      Open {item.label} page
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-white/10 bg-[#111118]">
            <button className="w-full bg-red-500 hover:bg-red-600 transition py-4 rounded-2xl font-black text-sm shadow-lg shadow-red-500/20">
              CREATE ACCOUNT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;