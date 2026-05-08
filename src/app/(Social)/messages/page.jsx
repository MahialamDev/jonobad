'use client'
import React from 'react';
import { Search, Edit, Camera, MoreVertical, CheckCheck, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const MessagePage = () => {
    // ডামি মেসেজ ডাটা
    const chats = [
        { id: 1, name: 'Avengers 12 Batch', lastMsg: 'Rahat: Today meeting at 9 PM', time: '12:45 PM', unread: 5, online: true, avatar: 'https://api.dicebear.com/8.x/avataaars/svg?seed=Avengers' },
        { id: 2, name: 'Sabbir Ahmed', lastMsg: 'Project file pathaichi check koris', time: '10:20 AM', unread: 0, online: true, avatar: 'https://api.dicebear.com/8.x/notionists/svg?seed=Sabbir' },
        { id: 3, name: 'Design Team', lastMsg: 'New UI mockup is ready!', time: 'Yesterday', unread: 0, online: false, avatar: 'https://api.dicebear.com/8.x/shapes/svg?seed=Design' },
        { id: 4, name: 'Tanvir Hasan', lastMsg: 'Vaiya, MERN stack er oii error ta solve hoise', time: 'Yesterday', unread: 2, online: true, avatar: 'https://api.dicebear.com/8.x/notionists/svg?seed=Tanvir' },
        { id: 5, name: 'Official Group', lastMsg: 'New update deployed on Vercel', time: 'Monday', unread: 0, online: false, avatar: 'https://api.dicebear.com/8.x/bottts/svg?seed=Official' },
        { id: 6, name: 'Mahi Fashion Store', lastMsg: 'Someone ordered a product', time: '2 days ago', unread: 1, online: false, avatar: 'https://api.dicebear.com/8.x/notionists/svg?seed=Store' },
    ];

    const activeUsers = chats.filter(user => user.online);

    return (
        <div className="min-h-screen bg-[#0A0A0F] text-white py-28 px-4">
            <div className="max-w-xl mx-auto">
                
                {/* --- HEADER --- */}
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-black italic tracking-tighter">CHATS</h1>
                    <div className="flex gap-2">
                        <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition">
                            <Camera size={20} className="text-gray-400" />
                        </button>
                        <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition text-red-500">
                            <Edit size={20} />
                        </button>
                    </div>
                </div>

                {/* --- SEARCH BAR --- */}
                <div className="relative mb-8">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                    <input 
                        type="text" 
                        placeholder="Search conversations..." 
                        className="w-full bg-[#16161F] border border-white/[0.05] rounded-2xl py-3.5 pl-12 pr-4 text-sm focus:outline-none focus:border-red-500/50 transition-all"
                    />
                </div>

                {/* --- ACTIVE USERS (STORIES STYLE) --- */}
                <div className="mb-8">
                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-4">Active Now</p>
                    <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                        {/* Your Story */}
                        <div className="flex flex-col items-center gap-2 shrink-0">
                            <div className="relative">
                                <div className="w-16 h-16 rounded-full border-2 border-dashed border-gray-700 p-1 flex items-center justify-center">
                                    <div className="w-full h-full rounded-full bg-white/5 flex items-center justify-center">
                                        <PlusIcon />
                                    </div>
                                </div>
                            </div>
                            <span className="text-[10px] text-gray-500 font-bold">You</span>
                        </div>

                        {/* Online Users */}
                        {activeUsers.map(user => (
                            <div key={user.id} className="flex flex-col items-center gap-2 shrink-0">
                                <div className="relative">
                                    <div className="w-16 h-16 rounded-full p-1 bg-gradient-to-tr from-red-500 to-transparent">
                                        <img src={user.avatar} className="w-full h-full rounded-full bg-[#0A0A0F]" alt="" />
                                    </div>
                                    <div className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-green-500 border-[3px] border-[#0A0A0F] rounded-full"></div>
                                </div>
                                <span className="text-[10px] text-gray-400 font-bold max-w-[64px] truncate">{user.name.split(' ')}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- CHAT LIST --- */}
                <div className="space-y-1">
                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-4">Recent Messages</p>
                    {chats.map((chat) => (
                        <motion.div 
                            key={chat.id}
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center gap-4 p-4 rounded-3xl hover:bg-white/[0.03] transition-all cursor-pointer group"
                        >
                            {/* Avatar */}
                            <div className="relative shrink-0">
                                <div className="w-14 h-14 rounded-full overflow-hidden bg-white/5">
                                    <img src={chat.avatar} alt={chat.name} className="w-full h-full object-cover" />
                                </div>
                                {chat.online && (
                                    <div className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 bg-green-500 border-[3px] border-[#0A0A0F] rounded-full"></div>
                                )}
                            </div>

                            {/* Chat Details */}
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-center mb-1">
                                    <h3 className="text-[15px] font-bold text-white tracking-tight">{chat.name}</h3>
                                    <span className={`text-[10px] ${chat.unread > 0 ? 'text-red-500 font-black' : 'text-gray-500 font-medium'}`}>
                                        {chat.time}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className={`text-sm truncate pr-4 ${chat.unread > 0 ? 'text-gray-100 font-bold' : 'text-gray-500 font-medium'}`}>
                                        {chat.lastMsg}
                                    </p>
                                    {chat.unread > 0 ? (
                                        <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center">
                                            <span className="text-[10px] font-black text-white">{chat.unread}</span>
                                        </div>
                                    ) : (
                                        <CheckCheck size={16} className="text-gray-700" />
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const PlusIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
);

export default MessagePage;