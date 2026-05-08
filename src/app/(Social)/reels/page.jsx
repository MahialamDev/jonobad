'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Heart, 
    MessageCircle, 
    Send, 
    MoreVertical, 
    Music2, 
    UserPlus, 
    Volume2, 
    VolumeX 
} from 'lucide-react';

const ReelsPage = () => {
    const [isMuted, setIsMuted] = useState(false);

    // Dummy Reels Data
    const reels = [
        {
            id: 1,
            username: 'coder_rahat',
            description: 'Building a dark mode UI with React & Tailwind 🚀 #coding #webdev',
            music: 'Original Audio - coder_rahat',
            likes: '12.5K',
            comments: '420',
            avatar: 'https://api.dicebear.com/8.x/avataaars/svg?seed=Rahat',
            videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-screen-close-up-34440-large.mp4'
        },
        {
            id: 2,
            username: 'design_pro',
            description: 'New glassmorphism effects are insane! ✨ #uidesign #figma',
            music: 'Lofi Beats - Chill Study',
            likes: '8.2K',
            comments: '156',
            avatar: 'https://api.dicebear.com/8.x/shapes/svg?seed=Design',
            videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-against-the-blue-sky-42517-large.mp4'
        }
    ];

    return (
        <div className="h-screen w-full bg-black overflow-y-scroll snap-y snap-mandatory scrollbar-hide ">
            {reels.map((reel) => (
                <div key={reel.id} className="relative h-screen w-full snap-center bg-zinc-900 flex items-center justify-center">
                    
                    {/* --- VIDEO PLACEHOLDER --- */}
                    <video 
                        className="h-full w-full object-cover"
                        src={reel.videoUrl}
                        loop
                        autoPlay
                        muted={isMuted}
                        playsInline
                    />

                    {/* --- TOP OVERLAY (Mute Toggle) --- */}
                    <div className="absolute top-6 right-6 z-20">
                        <button 
                            onClick={() => setIsMuted(!isMuted)}
                            className="p-2 rounded-full bg-black/20 backdrop-blur-md border border-white/10"
                        >
                            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                        </button>
                    </div>

                    {/* --- RIGHT SIDE ACTIONS --- */}
                    <div className="absolute right-4 bottom-24 flex flex-col items-center gap-6 z-20">
                        <ActionButton icon={<Heart size={28} className="hover:fill-red-500" />} label={reel.likes} />
                        <ActionButton icon={<MessageCircle size={28} />} label={reel.comments} />
                        <ActionButton icon={<Send size={28} />} />
                        <ActionButton icon={<MoreVertical size={28} />} />
                        
                        {/* Spinning Music Disc */}
                        <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            className="w-10 h-10 rounded-full border-4 border-zinc-700 bg-zinc-900 flex items-center justify-center overflow-hidden"
                        >
                            <Music2 size={18} className="text-white" />
                        </motion.div>
                    </div>

                    {/* --- BOTTOM DETAILS --- */}
                    <div className="absolute bottom-0 left-0 w-full p-6 pb-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10">
                        <div className="flex flex-col gap-3 max-w-[80%]">
                            {/* User Info */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full border-2 border-red-500 p-0.5">
                                    <img src={reel.avatar} alt="" className="w-full h-full rounded-full bg-zinc-800" />
                                </div>
                                <span className="font-bold text-[15px]">{reel.username}</span>
                                <button className="px-3 py-1 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-xs font-bold transition">
                                    Follow
                                </button>
                            </div>

                            {/* Description */}
                            <p className="text-sm text-gray-200 line-clamp-2 leading-relaxed">
                                {reel.description}
                            </p>

                            {/* Music */}
                            <div className="flex items-center gap-2 text-xs text-gray-300">
                                <Music2 size={14} />
                                <div className="overflow-hidden w-40">
                                    <motion.p 
                                        animate={{ x: [160, -160] }}
                                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                        className="whitespace-nowrap"
                                    >
                                        {reel.music}
                                    </motion.p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

// Helper component for interaction buttons
const ActionButton = ({ icon, label }) => (
    <div className="flex flex-col items-center gap-1 group">
        <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 flex items-center justify-center text-white drop-shadow-lg"
        >
            {icon}
        </motion.button>
        {label && <span className="text-xs font-bold shadow-black drop-shadow-md">{label}</span>}
    </div>
);

export default ReelsPage;