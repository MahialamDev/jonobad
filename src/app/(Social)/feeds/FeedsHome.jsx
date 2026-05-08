'use client'
import React, { useState } from 'react';
import { MoreHorizontal, Heart, MessageCircle, Share2, Bookmark, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const FeedsHome = () => {
    const [posts, setPosts] = useState([
        {
            id: 1,
            user: 'Mahialam Rahat',
            avatar: 'https://api.dicebear.com/8.x/notionists/svg?seed=Mahi',
            time: '2h ago',
            verified: true,
            content: 'Building the future of digital connectivity in Bangladesh. 🚀 #MERN #NextJS #Jonobad',
            image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
            likes: '1.2k',
            comments: '84',
            isLiked: false
        },
        {
            id: 2,
            user: 'Avengers 12 Batch',
            avatar: 'https://api.dicebear.com/8.x/avataaars/svg?seed=Team',
            time: '5h ago',
            verified: false,
            content: 'Great meeting today with the batch! Discussed some critical bug fixes and shared MERN stack tips. Learning never stops. 💻✨',
            image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
            likes: '450',
            comments: '12',
            isLiked: true
        },
        {
            id: 3,
            user: 'Tech Insider',
            avatar: 'https://api.dicebear.com/8.x/identicon/svg?seed=Tech',
            time: '12h ago',
            verified: true,
            content: 'Next.js 19 and React 19 are changing the game. The speed and hydration improvements are insane! Who else is excited?',
            image: null, // Text only post example
            likes: '2.8k',
            comments: '156',
            isLiked: false
        },
        {
            id: 4,
            user: 'Nature Photography',
            avatar: 'https://api.dicebear.com/8.x/notionists/svg?seed=Nature',
            time: '1d ago',
            verified: false,
            content: 'Beautiful sunset from Jamalpur, Bangladesh. 🌅 Natural beauty at its best.',
            image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800',
            likes: '3.1k',
            comments: '240',
            isLiked: false
        },
        {
            id: 5,
            user: 'Productivity Hub',
            avatar: 'https://api.dicebear.com/8.x/bottts/svg?seed=Hub',
            time: '2d ago',
            verified: true,
            content: 'Automation is key. My new OCR tool built with Python is saving me hours of manual data entry every week! 🤖📊',
            image: 'https://images.unsplash.com/photo-1518433278981-1127cc340b09?w=800',
            likes: '920',
            comments: '45',
            isLiked: true
        }
    ]);

    return (
        <div className="max-w-xl mx-auto py-28 px-4 space-y-6">
            {posts.map((post) => (
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    key={post.id} 
                    className="bg-[#16161F] border border-white/[0.05] rounded-[2rem] overflow-hidden shadow-xl"
                >
                    {/* --- Post Header --- */}
                    <div className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="w-10 h-10 rounded-full p-[1.5px] bg-gradient-to-tr from-red-500 to-transparent">
                                    <img src={post.avatar} alt="User" className="w-full h-full rounded-full bg-[#0A0A0F]" />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-1">
                                    <h3 className="text-sm font-bold text-white tracking-tight">{post.user}</h3>
                                    {post.verified && <CheckCircle2 size={12} className="text-blue-500 fill-blue-500/10" />}
                                </div>
                                <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">{post.time}</p>
                            </div>
                        </div>
                        <button className="p-2 hover:bg-white/5 rounded-full transition-colors">
                            <MoreHorizontal size={18} className="text-gray-500" />
                        </button>
                    </div>

                    {/* --- Post Content --- */}
                    <div className="px-5 pb-3">
                        <p className="text-[13px] leading-relaxed text-gray-200 font-medium">
                            {post.content}
                        </p>
                    </div>

                    {/* --- Post Image --- */}
                    {post.image && (
                        <div className="mx-4 mb-2 rounded-2xl overflow-hidden bg-white/5 border border-white/[0.03]">
                            <img src={post.image} alt="Post content" className="w-full h-auto max-h-[400px] object-cover" />
                        </div>
                    )}

                    {/* --- Action Bar --- */}
                    <div className="p-4 flex items-center justify-between border-t border-white/[0.03] mt-2">
                        <div className="flex items-center gap-4">
                            <button className="flex items-center gap-1.5 group">
                                <Heart 
                                    size={20} 
                                    className={`transition-all ${post.isLiked ? 'fill-red-500 text-red-500' : 'text-gray-500 group-hover:text-red-500'}`} 
                                />
                                <span className={`text-xs font-bold ${post.isLiked ? 'text-white' : 'text-gray-500'}`}>{post.likes}</span>
                            </button>
                            <button className="flex items-center gap-1.5 group">
                                <MessageCircle size={20} className="text-gray-500 group-hover:text-white transition-all" />
                                <span className="text-xs font-bold text-gray-500 group-hover:text-white">{post.comments}</span>
                            </button>
                            <button className="group">
                                <Share2 size={20} className="text-gray-500 group-hover:text-white transition-all" />
                            </button>
                        </div>
                        <button className="group">
                            <Bookmark size={20} className="text-gray-500 group-hover:text-white transition-all" />
                        </button>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default FeedsHome;