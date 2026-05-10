'use client';
import React, { useState } from 'react';
import { FaArrowRight, FaStoreAlt } from 'react-icons/fa';
import StoreHeader from '@/components/Navbar/StoreHeader';
import ProductsPage from '@/components/Products/ProductsPage';


const StorePage = () => {
  const [hasStore, setHasStore] = useState(true);

  return (
    <div className="min-h-screen bg-base-100 text-base-content transition-colors duration-300">
      <StoreHeader hasStore={hasStore} />

      {/* HERO SECTION */}
      <header className="px-6 py-8">
        <div className="max-w-7xl mx-auto rounded-[--rounded-box] bg-primary/5 border border-base-300 p-10 md:p-16 relative overflow-hidden">
          <div className="relative z-10">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest mb-6">
              Verified Batch 12 Merchants
            </div>
            <h1 className="text-4xl md:text-6xl font-black italic mb-4 tracking-tighter text-base-content uppercase">
              JONO<span className="text-primary">BAD</span> MARKET
            </h1>
            <p className="opacity-70 max-w-sm text-sm md:text-base mb-8 leading-relaxed font-medium">
              Discover exclusive, high-quality products from our trusted community.
            </p>
            <button className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.2em] text-primary hover:gap-5 transition-all group">
              Browse Featured <FaArrowRight />
            </button>
          </div>
          <FaStoreAlt className="absolute -bottom-10 -right-10 w-80 h-80 opacity-5 text-base-content rotate-12 pointer-events-none" />
        </div>
      </header>

      {/* প্রোডাক্টস এবং ক্যাটাগরি কম্পোনেন্ট */}
      <ProductsPage />
    </div>
  );
};

export default StorePage;