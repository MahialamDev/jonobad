'use client'
import React from 'react';
import { Search, Edit, Camera, MoreVertical, CheckCheck, Clock, Plus } from 'lucide-react';
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
        <div className="min-h-screen bg-base-100 mt-12 text-base-content py-24 pb-32 px-4 overflow-x-hidden">
            <div className="max-w-xl mx-auto">
                
                {/* --- HEADER --- */}
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-black italic tracking-tighter leading-none uppercase">CHATS</h1>
                    <div className="flex gap-2">
                        <button className="w-10 h-10 rounded-xl bg-base-200 flex items-center justify-center hover:bg-base-300 transition-all border border-base-300">
                            <Camera size={20} className="opacity-60" />
                        </button>
                        <button className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-all border border-primary/20 text-primary">
                            <Edit size={20} />
                        </button>
                    </div>
                </div>

                {/* --- SEARCH BAR --- */}
                <div className="relative mb-8">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40" size={18} />
                    <input 
                        type="text" 
                        placeholder="Search conversations..." 
                        className="w-full bg-base-200 border border-base-300 rounded-2xl py-4 pl-12 pr-4 text-[13px] font-medium focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all"
                    />
                </div>

                {/* --- ACTIVE USERS (STORIES STYLE) --- */}
                <div className="mb-10">
                    <p className="text-[10px] font-black opacity-40 uppercase tracking-[0.2em] mb-4">Active Now</p>
                    <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
                        {/* Your Story/Plus */}
                        <div className="flex flex-col items-center gap-2 shrink-0">
                            <div className="relative">
                                <button className="w-16 h-16 rounded-full border-2 border-dashed border-base-300 p-1 flex items-center justify-center hover:border-primary/50 transition-colors group">
                                    <div className="w-full h-full rounded-full bg-base-200 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                        <Plus size={24} className="text-base-content/30 group-hover:text-primary transition-colors" />
                                    </div>
                                </button>
                            </div>
                            <span className="text-[10px] opacity-40 font-black uppercase">You</span>
                        </div>

                        {/* Online Users */}
                        {activeUsers.map(user => (
                            <div key={user.id} className="flex flex-col items-center gap-2 shrink-0">
                                <div className="relative">
                                    <div className="w-16 h-16 rounded-full p-1 bg-gradient-to-tr from-primary to-transparent">
                                        <img src={user.avatar} className="w-full h-full rounded-full bg-base-200" alt="" />
                                    </div>
                                    <div className="absolute bottom-1 right-1 w-4 h-4 bg-primary border-[3.5px] border-base-100 rounded-full shadow-sm"></div>
                                </div>
                                <span className="text-[10px] font-bold max-w-[64px] truncate opacity-80">{user.name.split(' ')}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- CHAT LIST --- */}
                <div className="space-y-1">
                    <p className="text-[10px] font-black opacity-40 uppercase tracking-[0.2em] mb-4">Recent Messages</p>
                    {chats.map((chat) => (
                        <motion.div 
                            key={chat.id}
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center gap-4 p-4 rounded-2xl hover:bg-base-200 transition-all cursor-pointer group border border-transparent hover:border-base-300"
                        >
                            {/* Avatar */}
                            <div className="relative shrink-0">
                                <div className="w-14 h-14 rounded-full overflow-hidden bg-base-200 border border-base-300">
                                    <img src={chat.avatar} alt={chat.name} className="w-full h-full object-cover" />
                                </div>
                                {chat.online && (
                                    <div className="absolute bottom-0.5 right-0.5 w-4 h-4 bg-primary border-[3.5px] border-base-100 rounded-full shadow-sm"></div>
                                )}
                            </div>

                            {/* Chat Details */}
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-center mb-1">
                                    <h3 className="text-[15px] font-black italic uppercase tracking-tight text-base-content">{chat.name}</h3>
                                    <span className={`text-[10px] font-black uppercase tracking-wider ${chat.unread > 0 ? 'text-primary' : 'opacity-40'}`}>
                                        {chat.time}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className={`text-sm truncate pr-4 ${chat.unread > 0 ? 'text-base-content font-bold' : 'text-base-content/50 font-medium'}`}>
                                        {chat.lastMsg}
                                    </p>
                                    {chat.unread > 0 ? (
                                        <div className="min-w-5 h-5 px-1.5 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/20">
                                            <span className="text-[10px] font-black text-primary-content">{chat.unread}</span>
                                        </div>
                                    ) : (
                                        <CheckCheck size={16} className="opacity-20" />
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

export default MessagePage;