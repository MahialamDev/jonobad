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
            image: null,
            likes: '2.8k',
            comments: '156',
            isLiked: false
        }
    ]);

    return (
        <div className="max-w-xl mx-auto mt-12 py-24 pb-32 px-4 space-y-5">
            {posts.map((post) => (
                <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    key={post.id} 
                    className="bg-base-100 border border-base-300 rounded-2xl overflow-hidden shadow-sm"
                >
                    {/* --- Post Header --- */}
                    <div className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                {/* Avatar Ring with Primary Color */}
                                <div className="w-10 h-10 rounded-full p-[1.5px] bg-gradient-to-tr from-primary to-transparent">
                                    <img src={post.avatar} alt="User" className="w-full h-full rounded-full bg-base-200" />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-1.5">
                                    <h3 className="text-[13px] font-black italic text-base-content tracking-tight uppercase leading-none">{post.user}</h3>
                                    {post.verified && <CheckCircle2 size={12} className="text-primary fill-primary/10" />}
                                </div>
                                <p className="text-[9px] text-base-content/40 font-black uppercase tracking-[0.15em] mt-1">{post.time}</p>
                            </div>
                        </div>
                        <button className="p-2 hover:bg-base-200 rounded-lg transition-colors group">
                            <MoreHorizontal size={18} className="text-base-content/40 group-hover:text-base-content" />
                        </button>
                    </div>

                    {/* --- Post Content --- */}
                    <div className="px-5 pb-4">
                        <p className="text-sm leading-relaxed text-base-content/90 font-medium">
                            {post.content}
                        </p>
                    </div>

                    {/* --- Post Image --- */}
                    {post.image && (
                        <div className="mx-2 mb-2 rounded-xl overflow-hidden bg-base-200 border border-base-300">
                            <img src={post.image} alt="Post content" className="w-full h-auto max-h-[450px] object-cover hover:scale-[1.02] transition-transform duration-500" />
                        </div>
                    )}

                    {/* --- Action Bar --- */}
                    <div className="px-4 py-3 flex items-center justify-between border-t border-base-300/50 bg-base-200/20">
                        <div className="flex items-center gap-5">
                            {/* Like Button */}
                            <button className="flex items-center gap-2 group">
                                <Heart 
                                    size={19} 
                                    className={`transition-all ${post.isLiked ? 'fill-primary text-primary' : 'text-base-content/40 group-hover:text-primary'}`} 
                                />
                                <span className={`text-[11px] font-black italic tracking-tighter ${post.isLiked ? 'text-base-content' : 'text-base-content/40'}`}>{post.likes}</span>
                            </button>
                            
                            {/* Comment Button */}
                            <button className="flex items-center gap-2 group">
                                <MessageCircle size={19} className="text-base-content/40 group-hover:text-base-content transition-all" />
                                <span className="text-[11px] font-black italic tracking-tighter text-base-content/40 group-hover:text-base-content">{post.comments}</span>
                            </button>
                            
                            {/* Share Button */}
                            <button className="group">
                                <Share2 size={19} className="text-base-content/40 group-hover:text-base-content transition-all" />
                            </button>
                        </div>

                        {/* Bookmark Button */}
                        <button className="group">
                            <Bookmark size={19} className="text-base-content/40 group-hover:text-base-content transition-all" />
                        </button>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default FeedsHome;