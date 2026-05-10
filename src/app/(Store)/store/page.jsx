'use client';
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaShoppingCart, FaChevronLeft, FaChevronRight, FaArrowRight, FaStoreAlt } from 'react-icons/fa';
import StoreHeader from '@/components/Navbar/StoreHeader';

const StorePage = () => {
  const [hasStore, setHasStore] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCat, setActiveCat] = useState("All");
  const productsPerPage = 8;

  const categories = [
    { name: "All", icon: "🚀" },
    { name: "Electronics", icon: "💻" },
    { name: "Fashion", icon: "👕" },
    { name: "Gadgets", icon: "🎧" },
    { name: "Lifestyle", icon: "✨" },
    { name: "Accessories", icon: "⌚" },
    { name: "Home Decor", icon: "🏠" },
  ];

  const allProducts = useMemo(() => Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `Premium Item ${i + 1}`,
    price: (i + 1) * 250 + 1000,
    img: `https://images.unsplash.com/photo-${1505740420928 + i}-5e560c06d30e?w=400`,
    category: i % 2 === 0 ? "Electronics" : "Lifestyle",
  })), []);

  const filteredProducts = activeCat === "All" ? allProducts : allProducts.filter(p => p.category === activeCat);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const currentProducts = filteredProducts.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);

  return (
    // base-100 আপনার থিম থেকে ব্যাকগ্রাউন্ড কালার নিবে
    <div className="min-h-screen bg-base-100 text-base-content transition-colors duration-300">
      <StoreHeader hasStore={hasStore} />

      {/* HERO SECTION */}
      <header className="px-6 py-8">
        <div className="max-w-7xl mx-auto rounded-box bg-primary/5 border border-base-300 p-10 md:p-16 relative overflow-hidden">
          <div className="relative z-10">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest mb-6">
              Verified Batch 12 Merchants
            </div>
            <h1 className="text-4xl md:text-6xl font-black italic mb-4 tracking-tighter text-base-content">
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

      {/* CATEGORIES */}
      <section className="px-6 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 overflow-x-auto pb-4 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => { setActiveCat(cat.name); setCurrentPage(1); }}
                className={`flex items-center gap-3 px-7 py-4 rounded-btn whitespace-nowrap text-[11px] font-black uppercase tracking-widest transition-all border
                  ${activeCat === cat.name 
                    ? 'bg-primary border-primary text-primary-content shadow-xl shadow-primary/20 scale-105' 
                    : 'bg-base-200 border-base-300 text-base-content/60 hover:border-primary/30'
                  }`}
              >
                <span className="text-base">{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <main className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-8 w-1.5 bg-primary rounded-full" />
            <h2 className="text-2xl font-black italic uppercase tracking-tight text-base-content">{activeCat} Collection</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
            <AnimatePresence mode="popLayout">
              {currentProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-base-200 border border-base-300 rounded-box overflow-hidden group hover:border-primary/40 transition-all shadow-sm"
                >
                  <div className="h-48 md:h-60 bg-base-300/30 relative overflow-hidden">
                    <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-4 right-4 bg-base-100/80 backdrop-blur-xl p-2.5 rounded-btn border border-base-300">
                      <FaShoppingCart size={16} className="text-primary" />
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-[10px] font-black text-primary/70 uppercase tracking-[0.2em] mb-2">{product.category}</p>
                    <h3 className="font-bold text-base truncate mb-4 group-hover:text-primary transition-colors text-base-content">{product.name}</h3>
                    <div className="flex justify-between items-center">
                      <p className="text-xl font-black text-base-content">৳{product.price}</p>
                      <button className="btn btn-primary btn-sm rounded-btn text-[10px] font-black uppercase tracking-widest px-5 h-auto py-2">
                        View
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* PAGINATION */}
          {totalPages > 1 && (
            <div className="mt-20 flex justify-center items-center gap-4">
              <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} className="w-14 h-14 rounded-btn bg-base-200 border border-base-300 flex items-center justify-center hover:border-primary/50 text-base-content/50 hover:text-primary transition-all disabled:opacity-10 shadow-sm">
                <FaChevronLeft />
              </button>
              <div className="flex gap-3">
                {[...Array(totalPages)].map((_, i) => (
                  <button key={i} onClick={() => setCurrentPage(i + 1)} className={`w-14 h-14 rounded-btn font-black text-xs transition-all ${currentPage === i + 1 ? 'bg-primary text-primary-content shadow-lg shadow-primary/20' : 'bg-base-200 border border-base-300 text-base-content/50 hover:border-primary/30 shadow-sm'}`}>
                    {i + 1}
                  </button>
                ))}
              </div>
              <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} className="w-14 h-14 rounded-btn bg-base-200 border border-base-300 flex items-center justify-center hover:border-primary/50 text-base-content/50 hover:text-primary transition-all disabled:opacity-10 shadow-sm">
                <FaChevronRight />
              </button>
            </div>
          )}
        </div>
      </main>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default StorePage;