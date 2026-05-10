'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Minus, Plus, ShoppingBag, ArrowLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const MyCart = () => {
    // ডামি কার্ট ডাটা
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Premium Wireless Headphones', price: 2500, qty: 1, img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200', category: 'Electronics' },
        { id: 2, name: 'Minimalist Cotton Tee', price: 850, qty: 2, img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200', category: 'Fashion' },
    ]);

    const updateQty = (id, delta) => {
        setCartItems(prev => prev.map(item => 
            item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
        ));
    };

    const removeItem = (id) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);

    return (
        <div className="min-h-screen bg-base-100 text-base-content pb-40">
            {/* Header */}
            <div className="sticky top-0 z-50 bg-base-100/80 backdrop-blur-xl border-b border-base-300 px-6 py-5 flex items-center gap-4">
                <Link href="/store">
                    <button className="p-2.5 hover:bg-primary/10 rounded-xl transition-colors group">
                        <ArrowLeft size={20} className="group-hover:text-primary transition-colors" />
                    </button>
                </Link>
                <h1 className="text-xl font-black italic tracking-tighter uppercase">
                    MY <span className="text-primary">CART</span>
                </h1>
                <span className="ml-auto bg-primary/10 text-primary text-[10px] font-black px-4 py-1.5 rounded-full border border-primary/20 tracking-widest">
                    {cartItems.length} ITEMS
                </span>
            </div>

            <div className="max-w-2xl mx-auto p-6">
                {cartItems.length > 0 ? (
                    <div className="space-y-4">
                        <AnimatePresence mode='popLayout'>
                            {cartItems.map((item) => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    className="bg-base-200 border border-base-300 rounded-2xl p-4 flex gap-5 items-center group hover:border-primary/30 transition-all shadow-sm"
                                >
                                    {/* Product Image */}
                                    <div className="w-20 h-20 rounded-xl overflow-hidden bg-base-300 shrink-0 border border-base-300">
                                        <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    </div>

                                    {/* Info */}
                                    <div className="flex-1 min-w-0">
                                        <p className="text-[9px] font-black text-primary uppercase tracking-[0.2em] mb-1 opacity-70">{item.category}</p>
                                        <h3 className="font-bold text-sm truncate mb-3 tracking-tight">{item.name}</h3>
                                        
                                        <div className="flex items-center justify-between">
                                            <p className="text-lg font-black text-base-content tracking-tighter">৳{item.price}</p>
                                            
                                            {/* Qty Controls */}
                                            <div className="flex items-center gap-3 bg-base-100 border border-base-300 rounded-xl px-2.5 py-1.5 shadow-inner">
                                                <button 
                                                    onClick={() => updateQty(item.id, -1)}
                                                    className="p-1 hover:text-primary transition-colors"><Minus size={14} />
                                                </button>
                                                <span className="text-xs font-black font-mono w-4 text-center">{item.qty}</span>
                                                <button 
                                                    onClick={() => updateQty(item.id, 1)}
                                                    className="p-1 hover:text-primary transition-colors"><Plus size={14} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Delete Button */}
                                    <button 
                                        onClick={() => removeItem(item.id)}
                                        className="p-3 text-base-content/20 hover:text-primary transition-all self-start hover:bg-primary/5 rounded-xl"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                ) : (
                    <div className="py-24 text-center">
                        <div className="w-24 h-24 bg-primary/5 rounded-[2rem] flex items-center justify-center mx-auto mb-6 border border-primary/10">
                            <ShoppingBag className="text-primary/40" size={40} />
                        </div>
                        <h2 className="text-2xl font-black italic uppercase tracking-tighter mb-2">Cart is empty</h2>
                        <p className="text-base-content/40 text-sm mb-10 font-medium">Looks like you haven't added <br /> anything to your collection yet.</p>
                        <Link href="/store">
                            <button className="bg-primary hover:bg-primary/90 text-primary-content px-10 py-4 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all shadow-xl shadow-primary/20 active:scale-95">
                                Start Shopping
                            </button>
                        </Link>
                    </div>
                )}
            </div>

            {/* Bottom Checkout Section */}
            {cartItems.length > 0 && (
                <div className="fixed bottom-0 left-0 right-0 p-6 z-50 pointer-events-none">
                    <motion.div 
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        className="max-w-2xl mx-auto bg-base-200 border border-base-300 rounded-[2rem] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] pointer-events-auto"
                    >
                        <div className="flex justify-between items-center mb-6 px-2">
                            <div>
                                <p className="text-[10px] font-black opacity-40 uppercase tracking-[0.2em] mb-1">Total Payable</p>
                                <h2 className="text-3xl font-black text-base-content italic tracking-tighter">৳{subtotal}</h2>
                            </div>
                            <div className="text-right">
                                <p className="text-[9px] font-black text-primary bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-lg inline-block uppercase tracking-widest">
                                    Free Delivery
                                </p>
                            </div>
                        </div>

                        <button className="w-full mb-10 bg-primary hover:bg-primary/90 text-primary-content py-5 rounded-xl flex items-center justify-center gap-3 transition-all active:scale-[0.98] group shadow-xl shadow-primary/20">
                            <span className="text-[11px] font-black uppercase tracking-[0.3em]">Proceed to Checkout</span>
                            <div className="w-8 h-8 bg-primary-content/10 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-all">
                                <ChevronRight size={16} />
                            </div>
                        </button>
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default MyCart;