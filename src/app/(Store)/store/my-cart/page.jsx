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
        <div className="min-h-screen bg-[#0A0A0F] text-white pb-32">
            {/* Header */}
            <div className="sticky top-0 z-50 bg-[#0A0A0F]/80 backdrop-blur-lg border-b border-white/5 px-6 py-5 flex items-center gap-4">
                <Link href="/store">
                    <button className="p-2 hover:bg-white/5 rounded-full transition">
                        <ArrowLeft size={20} />
                    </button>
                </Link>
                <h1 className="text-xl font-bold italic tracking-tight">MY <span className="text-red-500">CART</span></h1>
                <span className="ml-auto bg-red-500/10 text-red-500 text-[10px] font-black px-3 py-1 rounded-full border border-red-500/20">
                    {cartItems.length} ITEMS
                </span>
            </div>

            <div className="max-w-3xl mx-auto p-6">
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
                                    className="bg-[#16161F] border border-white/[0.03] rounded-3xl p-4 flex gap-4 items-center group"
                                >
                                    {/* Product Image */}
                                    <div className="w-20 h-20 rounded-2xl overflow-hidden bg-white/5 shrink-0">
                                        <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                                    </div>

                                    {/* Info */}
                                    <div className="flex-1 min-w-0">
                                        <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest mb-1">{item.category}</p>
                                        <h3 className="font-bold text-sm truncate mb-3">{item.name}</h3>
                                        
                                        <div className="flex items-center justify-between">
                                            <p className="text-lg font-black text-white">৳{item.price}</p>
                                            
                                            {/* Qty Controls */}
                                            <div className="flex items-center gap-3 bg-[#0A0A0F] border border-white/5 rounded-xl px-2 py-1">
                                                <button 
                                                    onClick={() => updateQty(item.id, -1)}
                                                    className="p-1 hover:text-red-500 transition"><Minus size={14} />
                                                </button>
                                                <span className="text-xs font-black font-mono w-4 text-center">{item.qty}</span>
                                                <button 
                                                    onClick={() => updateQty(item.id, 1)}
                                                    className="p-1 hover:text-green-500 transition"><Plus size={14} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Delete Button */}
                                    <button 
                                        onClick={() => removeItem(item.id)}
                                        className="p-3 text-gray-600 hover:text-red-500 transition-colors self-start"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                ) : (
                    <div className="py-20 text-center">
                        <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                            <ShoppingBag className="text-gray-600" size={32} />
                        </div>
                        <h2 className="text-xl font-bold mb-2">Your cart is empty</h2>
                        <p className="text-gray-500 text-sm mb-8">Looks like you haven't added <br /> anything to your cart yet.</p>
                        <Link href="/store">
                            <button className="bg-red-600 hover:bg-red-500 px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all shadow-lg shadow-red-600/20">
                                Start Shopping
                            </button>
                        </Link>
                    </div>
                )}
            </div>

            {/* Bottom Checkout Section */}
            {cartItems.length > 0 && (
                <div className="fixed bottom-0 left-0 right-0 p-6 z-50">
                    <motion.div 
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        className="max-w-3xl mx-auto bg-white rounded-[2.5rem] p-6 shadow-[0_-20px_40px_rgba(0,0,0,0.4)]"
                    >
                        <div className="flex justify-between items-center mb-4 px-2">
                            <div>
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Total Payable</p>
                                <h2 className="text-3xl font-black text-black italic">৳{subtotal}</h2>
                            </div>
                            <div className="text-right">
                                <p className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-lg inline-block">Free Delivery</p>
                            </div>
                        </div>

                        <button className="w-full bg-[#0A0A0F] hover:bg-red-600 py-4 rounded-2xl flex items-center justify-center gap-3 transition-all group">
                            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white">Proceed to Checkout</span>
                            <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all">
                                <ChevronRight size={16} className="text-white" />
                            </div>
                        </button>
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default MyCart;