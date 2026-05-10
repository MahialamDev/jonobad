'use client';
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaShoppingCart, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ProductsPage = () => {
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

  const productImages = [
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
  "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
  "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400",
  "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=400",
  "https://images.unsplash.com/photo-1503602642458-232111445657?w=400",
  "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400",
  "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=400",
  "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400",
  "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400",
  "https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?w=400",
  "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400",
  "https://images.unsplash.com/photo-1475180098004-ca77a66827be?w=400",
  "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=400",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400",
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400",
];

const allProducts = useMemo(
  () =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      name: `Premium Item ${i + 1}`,
      price: (i + 1) * 250 + 1000,
      img: productImages[i],
      category: i % 2 === 0 ? "Electronics" : "Lifestyle",
    })),
  []
);

  const filteredProducts = activeCat === "All" ? allProducts : allProducts.filter(p => p.category === activeCat);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const currentProducts = filteredProducts.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);

  return (
    <>
      {/* CATEGORIES */}
      <section className="px-6 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 overflow-x-auto pb-4 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => { setActiveCat(cat.name); setCurrentPage(1); }}
                className={`flex items-center gap-3 px-7 py-4 rounded-[--rounded-btn] whitespace-nowrap text-[11px] font-black uppercase tracking-widest transition-all border
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
      <main className=" pb-24 ">
        <div className="wrapper">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-8 w-1.5 bg-primary rounded-full" />
            <h2 className="text-2xl font-black uppercase tracking-tight text-base-content">{activeCat} Collection</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8">
            <AnimatePresence mode="popLayout">
              {currentProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-base-200 border border-base-300 rounded-[--rounded-box] overflow-hidden group hover:border-primary/40 transition-all shadow-sm"
                >
                  <div className="h-48 md:h-60 bg-base-300/30 relative overflow-hidden">
                    <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-4 right-4 bg-base-100/80 backdrop-blur-xl p-2.5 rounded-[--rounded-btn] border border-base-300">
                      <FaShoppingCart size={16} className="text-primary" />
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="text-[10px] font-black text-primary/70 uppercase tracking-[0.2em] mb-2">{product.category}</p>
                    <h3 className="font-bold text-base truncate mb-4 group-hover:text-primary transition-colors text-base-content">{product.name}</h3>
                    <div className="flex justify-between items-center">
                      <p className="text-xl font-black text-base-content">৳{product.price}</p>
                      <button className="btn hidden btn-primary btn-sm rounded-[--rounded-btn] text-[10px] font-black uppercase tracking-widest px-5 h-auto py-2">
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
              <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} className="w-14 h-14 rounded-[--rounded-btn] bg-base-200 border border-base-300 flex items-center justify-center hover:border-primary/50 text-base-content/50 hover:text-primary transition-all disabled:opacity-10 shadow-sm">
                <FaChevronLeft />
              </button>
              <div className="flex gap-3">
                {[...Array(totalPages)].map((_, i) => (
                  <button key={i} onClick={() => setCurrentPage(i + 1)} className={`w-14 h-14 rounded-[--rounded-btn] font-black text-xs transition-all ${currentPage === i + 1 ? 'bg-primary text-primary-content shadow-lg shadow-primary/20' : 'bg-base-200 border border-base-300 text-base-content/50 hover:border-primary/30 shadow-sm'}`}>
                    {i + 1}
                  </button>
                ))}
              </div>
              <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} className="w-14 h-14 rounded-[--rounded-btn] bg-base-200 border border-base-300 flex items-center justify-center hover:border-primary/50 text-base-content/50 hover:text-primary transition-all disabled:opacity-10 shadow-sm">
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
    </>
  );
};

export default ProductsPage;