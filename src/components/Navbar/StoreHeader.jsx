'use client';
import React from 'react';
import { FaUserCircle, FaShoppingCart, FaSearch, FaPlus, FaStoreAlt } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';
import { IoHomeSharp } from "react-icons/io5";
import Link from 'next/link';

const StoreHeader = ({ hasStore }) => {
  return (
    <>
      {/* ==========================================
          DESKTOP VIEW (md এবং তার উপরে দেখা যাবে)
      ========================================== */}
      <div className="hidden md:block sticky top-0 z-50 bg-base-100/80 backdrop-blur-2xl border-b border-base-300 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
          
          {/* User Info */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-11 h-11 rounded-box bg-primary/10 flex items-center justify-center border border-primary/20 shadow-lg shadow-primary/5">
              <FaUserCircle className="text-primary text-2xl" />
            </div>
            <div>
              <p className="text-[10px] font-black opacity-50 uppercase tracking-widest leading-none">Welcome Back</p>
              <h4 className="text-sm font-bold flex items-center gap-1 italic text-base-content">
                Mr. Rahat <MdVerified className="text-info" />
              </h4>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative flex-grow max-w-xl group">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 opacity-40 group-focus-within:text-primary group-focus-within:opacity-100 transition-all" />
            <input 
              type="text" 
              placeholder="Search premium products..." 
              className="w-full bg-base-200 border border-base-300 py-3.5 pl-12 pr-4 rounded-btn focus:outline-none focus:border-primary/50 transition-all font-medium text-sm text-base-content"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-5 shrink-0">
            <Link href="/" className="opacity-50 hover:opacity-100 hover:text-primary transition-all p-2">
              <IoHomeSharp size={22} />
            </Link>
            
            <Link href="/store/my-cart" className="relative opacity-50 hover:opacity-100 hover:text-primary transition-all p-2 mr-2">
              <FaShoppingCart size={22} />
              <span className="absolute -top-1 -right-1 bg-primary text-[8px] font-black w-4 h-4 rounded-full flex items-center justify-center text-primary-content shadow-lg shadow-primary/20">3</span>
            </Link>

            <Link href={hasStore ? '/store/manage-store' : '/store/create-store'}>
              <button className="btn btn-primary btn-md rounded-btn text-[10px] font-black uppercase tracking-widest px-6 shadow-xl shadow-primary/10">
                {hasStore ? <><FaStoreAlt /> Manage Store</> : <><FaPlus /> Create Store</>}
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* ==========================================
          MOBILE VIEW (md এর নিচে দেখা যাবে)
      ========================================== */}
      <div className="md:hidden flex flex-col w-full">
        
        {/* 1. Top Section (Non-Sticky): Profile & Actions */}
        <div className="flex items-center justify-between px-6 py-4 bg-base-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-box bg-primary/10 flex items-center justify-center border border-primary/20">
              <FaUserCircle className="text-primary text-xl" />
            </div>
            <h4 className="text-sm font-bold italic text-base-content flex items-center gap-1">
              Rahat <MdVerified className="text-info size-3" />
            </h4>
          </div>

          <div className="flex items-center gap-2">
            <Link href={hasStore ? '/store/manage-store' : '/store/create-store'} className="btn btn-primary btn-xs rounded-lg text-[9px] font-black px-3 py-2 h-auto">
              {hasStore ? "Manage" : "Create"}
            </Link>
            <Link href="/" className="p-2.5 rounded-xl bg-base-200 border border-base-300 text-base-content/60">
              <IoHomeSharp className="text-lg" />
            </Link>
            <Link href="/store/my-cart" className="relative p-2.5 rounded-xl bg-base-200 border border-base-300 text-base-content/60">
              <FaShoppingCart className="text-lg" />
              <span className="absolute -top-1 -right-1 bg-primary text-[8px] font-black w-4 h-4 rounded-full flex items-center justify-center text-primary-content">3</span>
            </Link>
          </div>
        </div>

        {/* 2. Search Section (Sticky): Only this will stick to top */}
        <div className="sticky top-0 z-40 bg-base-100/90 backdrop-blur-xl border-b border-base-300 px-6 py-3">
          <div className="relative group">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 opacity-40 text-primary" />
            <input 
              type="text" 
              placeholder="Search products..." 
              className="w-full bg-base-200 border border-base-300 py-3 pl-11 pr-4 rounded-xl focus:outline-none focus:border-primary/50 transition-all font-medium text-xs text-base-content"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default StoreHeader;