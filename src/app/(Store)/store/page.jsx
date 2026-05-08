'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaUserCircle, 
  FaShoppingCart, 
  FaSearch, 
  FaPlus, 
  FaStoreAlt, 
  FaChevronLeft, 
  FaChevronRight,
  FaArrowRight
} from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';
import Link from 'next/link';

const StoreHome = () => {
  // ১. ডাইনামিক স্টেট (আপনার প্রজেক্টের লজিক অনুযায়ী এগুলো পরিবর্তন হবে)
  const [hasStore, setHasStore] = useState(true); // স্টোর আছে কি নেই তা চেক করবে
  const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;

    const categories = [
  { name: "All", icon: <FaStoreAlt /> },
  { name: "Electronics", icon: <FaSearch /> }, // আপনি চাইলে উপযুক্ত আইকন দিতে পারেন
  { name: "Fashion", icon: <FaShoppingCart /> },
  { name: "Gadgets", icon: <FaPlus /> },
  { name: "Lifestyle", icon: <MdVerified /> },
  { name: "Accessories", icon: <FaUserCircle /> },
  { name: "Home Decor", icon: <FaStoreAlt /> },
  { name: "Offers", icon: <FaPlus /> },
    ];
    
    const [activeCat, setActiveCat] = useState("All");
    


  // ২. ২০টি ডামি প্রোডাক্ট জেনারেটর
  const dummyProducts = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `Premium Product ${i + 1}`,
    price: Math.floor(Math.random() * 5000) + 500,
    img: `https://images.unsplash.com/photo-${1505740420928 + i}-5e560c06d30e?w=400`,
      category: i % 2 === 0 ? "Electronics" : "Lifestyle",
    store: 'mahialam_fashion'
  }));

  // ৩. প্যাজিনেশন লজিক
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = dummyProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(dummyProducts.length / productsPerPage);

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white font-sans">
      
      {/* --- TOP NAVBAR --- */}
      <nav className="sticky top-0 z-50 bg-[#16161F]/80 backdrop-blur-xl border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Brand & Account Info */}
          <div className="flex items-center gap-4 w-full md:w-auto justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-600/20 flex items-center justify-center border border-red-500/30">
                <FaUserCircle className="text-red-500 text-2xl" />
              </div>
              <div className="hidden sm:block">
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest leading-none">Welcome Back</p>
                <h4 className="text-sm font-bold flex items-center gap-1 italic">
                  Mr. Rahat <MdVerified className="text-blue-500" />
                </h4>
              </div>
            </div>
            
            {/* Cart Icon (Mobile) */}
            <div className="md:hidden relative">
              <FaShoppingCart className="text-xl text-gray-400" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-[8px] font-black w-4 h-4 rounded-full flex items-center justify-center">৩</span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative w-full max-w-xl group">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-red-500 transition-colors" />
            <input 
              type="text" 
              placeholder="Search premium products..." 
              className="w-full bg-[#0A0A0F] border border-white/5 py-3 pl-12 pr-4 rounded-2xl focus:outline-none focus:border-red-500/50 transition-all font-medium text-sm"
            />
          </div>

          {/* Action Buttons & Cart (Desktop) */}
          <div className="flex items-center gap-6">
            <div className="hidden md:block relative cursor-pointer group">
              <FaShoppingCart className="text-xl text-gray-400 group-hover:text-white transition-colors" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-[8px] font-black w-4 h-4 rounded-full flex items-center justify-center">৩</span>
            </div>

            {/* DYNAMIC STORE BUTTON */}
            {hasStore ? (
                          <Link href={'/store/manage-store'}>
                          <button className="bg-green-600 hover:bg-green-500 px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 transition-all shadow-lg shadow-green-500/10">
                <FaStoreAlt /> Manage Store
              </button>
                          </Link>
            ) : (
              <button className="bg-red-600 hover:bg-red-500 px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 transition-all shadow-lg shadow-red-500/10">
                <FaPlus /> Create Store
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* --- HERO / PROMO SECTION --- */}
      <header className="px-6 py-10">
        <div className="max-w-7xl mx-auto rounded-[2.5rem] bg-gradient-to-r from-red-600/10 to-transparent border border-white/5 p-8 md:p-12 relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-3xl md:text-5xl font-black italic mb-4">JONOBAD <span className="text-red-500">MARKET</span></h1>
            <p className="text-gray-400 max-w-md text-sm md:text-base mb-8">Exclusive products from verified Batch 12 merchants. Quality guaranteed by accountability.</p>
            <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-red-500 hover:gap-4 transition-all">
              Explore Featured <FaArrowRight />
            </button>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <FaStoreAlt className="w-full h-full p-10" />
          </div>
        </div>
          </header>

          <section className="px-6 mt-6 overflow-hidden">
  <div className="max-w-7xl mx-auto">
    <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-4 -mx-2 px-2">
      {categories.map((cat) => (
        <motion.button
          key={cat.name}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveCat(cat.name)}
          className={`flex items-center gap-2 px-6 py-3 rounded-2xl whitespace-nowrap text-[10px] font-black uppercase tracking-[0.1em] transition-all border ${
            activeCat === cat.name 
            ? 'bg-red-600 border-red-500 text-white shadow-lg shadow-red-600/20' 
            : 'bg-[#16161F] border-white/5 text-gray-500 hover:border-red-500/30'
          }`}
        >
          <span className={activeCat === cat.name ? 'text-white' : 'text-red-500'}>
            {cat.icon}
          </span>
          {cat.name}
        </motion.button>
      ))}
    </div>
  </div>
</section>
          


      {/* --- PRODUCT GRID --- */}
      <main className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-black italic flex items-center gap-2 uppercase tracking-tight">
              <span className="w-8 h-[2px] bg-red-500 rounded-full" /> All Products
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <AnimatePresence mode="wait">
              {currentProducts.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -8 }}
                  className="bg-[#16161F] border border-white/5 rounded-3xl overflow-hidden group hover:border-red-500/30 transition-all cursor-pointer"
                >
                  <div className="h-40 md:h-52 bg-white/5 relative">
                    <img 
                      src={product.img} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md p-2 rounded-xl">
                      <FaShoppingCart size={14} className="text-white" />
                    </div>
                  </div>
                  <div className="p-4 md:p-5">
                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">{product.category}</p>
                    <h3 className="font-bold text-sm truncate group-hover:text-red-500 transition-colors">{product.name}</h3>
                    <div className="flex justify-between items-center mt-4">
                      <p className="text-lg font-black text-green-500">৳ {product.price}</p>
                      <button className="bg-white/5 hover:bg-white text-[10px] font-black text-white hover:text-black py-1 px-3 rounded-lg transition-all uppercase">
                        Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* --- PAGINATION --- */}
          <div className="mt-16 flex justify-center items-center gap-4">
            <button 
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="w-12 h-12 rounded-2xl bg-[#16161F] border border-white/5 flex items-center justify-center hover:bg-red-500 transition-all disabled:opacity-20 disabled:hover:bg-[#16161F]"
            >
              <FaChevronLeft />
            </button>
            
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-12 h-12 rounded-2xl font-black text-xs transition-all ${currentPage === i + 1 ? 'bg-red-500 text-white shadow-lg shadow-red-500/20' : 'bg-[#16161F] border border-white/5 text-gray-500 hover:text-white'}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button 
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="w-12 h-12 rounded-2xl bg-[#16161F] border border-white/5 flex items-center justify-center hover:bg-red-500 transition-all disabled:opacity-20 disabled:hover:bg-[#16161F]"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StoreHome;