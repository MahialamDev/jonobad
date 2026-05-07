import React from 'react';
import { Settings, Grid, Droplets, FileText, MapPin, Globe, Award, List } from 'lucide-react';
import Image from 'next/image';

const SocialProfilePage = () => {
    // ডামি ডেটা - প্রজেক্ট অনুযায়ী এটি ডাইনামিক হবে
    const user = {
        name: "Mahialam Rahat",
        username: "mahi_rahat",
        division: "Mymensingh",
        district: "Jamalpur",
        coins: "1.2K",
        reports: "42",
        donations: "08",
        joinDate: "Jan 2024",
        profilePic: "https://api.dicebear.com/8.x/notionists/svg?seed=Mahi", // একটি ডামি ছবি
        coverPic: "https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWxvbmV8ZW58MHx8MHx8fDA%3D" // বাংলাদেশ থিম
    };

    return (
        <div className="min-h-screen bg-[#0A0A0F] text-white pb-24">
            
            {/* 1. Header (Facebook Style Cover & Profile) */}
            <div className="relative mb-4">
                {/* Cover Photo */}
                <div className="relative h-48 sm:h-60 w-full overflow-hidden bg-[#16161F]">
                    <img 
                        src={user.coverPic} 
                        alt="Cover" 
                        className="w-full h-full object-cover opacity-60"
                    />
                    {/* Shadow Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-[#0A0A0F]"></div>
                </div>

                {/* Profile Section Area */}
                <div className="wrapper px-4 relative -mt-16 sm:-mt-20 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                    <div className="flex flex-col sm:flex-row sm:items-end gap-4">
                        {/* Profile Picture (Instagram Style Circular & Border) */}
                        <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-[#0A0A0F] bg-red-500 overflow-hidden shadow-2xl relative shrink-0">
                            <img 
                                src={user.profilePic} 
                                alt="Profile" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        
                        {/* Name & Username */}
                        <div className="sm:pb-2">
                            <h2 className="text-3xl font-black italic tracking-tight">{user.name}</h2>
                            <p className="text-gray-500 text-sm font-medium">@{user.username}</p>
                            <p className="text-gray-600 text-xs mt-1">Joined {user.joinDate}</p>
                        </div>
                    </div>

                    {/* Action Buttons (FB Style) */}
                    <div className="flex gap-2 sm:pb-2">
                        <button className="flex-1 sm:flex-initial bg-red-500 hover:bg-red-600 text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2">
                            Edit Profile
                        </button>
                        <button className="bg-white/5 hover:bg-white/10 text-white p-3 rounded-xl transition">
                            <Settings size={20} />
                        </button>
                    </div>
                </div>
            </div>

            {/* 2. Main Content (FB/Inst Mix Layout) */}
            <div className="wrapper px-4 grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
                
                {/* Left Column: Intro (Facebook Style) */}
                <div className="lg:col-span-1 space-y-5">
                    <div className="bg-[#16161F] p-6 rounded-3xl border border-white/5 shadow-xl">
                        <h4 className="text-lg font-bold mb-5 flex items-center gap-2">
                            <Award className="text-red-500" size={20}/>
                            Jonobad Citizen Stats
                        </h4>
                        
                        <div className="space-y-4">
                            <InfoCard icon={<MapPin size={18} className="text-gray-500" />} label="Lives in" value={`${user.district}, ${user.division}`} />
                            <InfoCard icon={<FileText size={18} className="text-gray-500" />} label="Cases Reported" value={user.reports} />
                            <InfoCard icon={<Droplets size={18} className="text-gray-500" />} label="Blood Donated" value={`${user.donations} Times`} />
                            <InfoCard icon={<Globe size={18} className="text-gray-500" />} label="Language" value="English (US)" />
                        </div>
                    </div>
                </div>

                {/* Right Column: Activity Grid (Instagram Style) */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Inst Style Tabs */}
                    <div className="bg-[#16161F] border border-white/5 rounded-full p-1.5 flex justify-around">
                        <TabItem icon={<Grid size={18}/>} label="Coins" active={true}/>
                        <TabItem icon={<FileText size={18}/>} label="Reports"/>
                        <TabItem icon={<Droplets size={18}/>} label="Donations"/>
                    </div>

                    {/* Coins Section (A Modern Card Grid) */}
                    <div className="bg-[#16161F] p-6 rounded-3xl border border-white/5 shadow-xl">
                        <div className="flex justify-between items-center mb-6">
                            <h4 className="text-lg font-bold">Recent Coins Activities</h4>
                            <div className="flex items-center gap-3 bg-red-950/40 border border-red-900/50 px-4 py-2 rounded-xl">
                                <Award className="text-yellow-400" size={20}/>
                                <span className="text-2xl font-black">{user.coins}</span>
                            </div>
                        </div>

                        {/* Dummy Coin Grid (Modern Box Style) */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <CoinCard title="Daily Login" time="2h ago" coins="+50"/>
                            <CoinCard title="Report Validated" time="1d ago" coins="+200" isRed={true}/>
                            <CoinCard title="Profile Update" time="3d ago" coins="+100"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Sub-components
const InfoCard = ({ icon, label, value }) => (
    <div className="flex items-center gap-3 bg-[#0A0A0F]/50 p-3.5 rounded-xl border border-white/5 hover:border-white/10 transition">
        {icon}
        <div>
            <p className="text-[10px] text-gray-600 uppercase font-black leading-none">{label}</p>
            <p className="text-sm font-semibold mt-0.5">{value}</p>
        </div>
    </div>
);

const TabItem = ({ icon, label, active }) => (
    <button className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition ${active ? 'bg-red-500 text-white shadow-lg' : 'text-gray-500 hover:text-white'}`}>
        {icon}
        {label}
    </button>
);

const CoinCard = ({ title, time, coins, isRed }) => (
    <div className="bg-[#0A0A0F] border border-white/5 p-4 rounded-2xl flex flex-col items-center justify-center text-center group hover:border-red-500/20 transition">
        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <Award size={22} className={isRed ? "text-red-500" : "text-yellow-400"} />
        </div>
        <p className="text-xs font-bold leading-tight">{title}</p>
        <p className="text-[10px] text-gray-600 mt-1">{time}</p>
        <h5 className="text-lg font-black mt-2 text-green-500">{coins}</h5>
    </div>
);

export default SocialProfilePage;