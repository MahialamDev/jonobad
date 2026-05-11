'use client';
import React, { useState } from 'react';
import { Settings, Grid, Droplets, FileText, MapPin, Globe, Award, UserPlus, LogOut } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';
// import { useSession } from 'next-auth/react';

const SocialProfilePage = () => {
    const [showSetting, setShowSetting] = useState(false);
    const user = {
        name: "Mahialam Rahat",
        username: "mahi_rahat",
        division: "Mymensingh",
        district: "Jamalpur",
        coins: "1.2K",
        reports: "42",
        donations: "08",
        joinDate: "Jan 2024",
        profilePic: "https://api.dicebear.com/8.x/notionists/svg?seed=Mahi",
        coverPic: "https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?auto=format&fit=crop&q=80&w=1200"
    };

    const { data: session, status } = useSession();
    const userName = session?.user?.name;
    return (
        <div className="min-h-screen bg-base-100 text-base-content pb-24 overflow-x-hidden">
            
            {/* 1. Header (Cover & Profile) */}
            <div className="relative mb-6">
                {/* Cover Photo */}
                <div className="relative h-48 sm:h-72 w-full overflow-hidden bg-base-300">
                    <img 
                        src={user.coverPic} 
                        alt="Cover" 
                        className="w-full h-full object-cover opacity-70"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-base-100"></div>
                </div>

                {/* Profile Section Area */}
                <div className="max-w-7xl mx-auto px-4 relative -mt-16 sm:-mt-24 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                    <div className="flex flex-col sm:flex-row sm:items-end gap-5">
                        {/* Profile Picture with Primary Gradient Ring */}
                        <div className="w-32 h-32 sm:w-44 sm:h-44 rounded-full border-4 border-base-100 bg-gradient-to-tr from-primary to-secondary p-1 overflow-hidden shadow-2xl relative shrink-0">
                            <img 
                                src={user.profilePic} 
                                alt="Profile" 
                                className="w-full h-full rounded-full bg-base-200 object-cover"
                            />
                        </div>
                        
                        {/* Name & Username */}
                        <div className="sm:pb-4 text-left">
                            <h2 className="text-3xl sm:text-4xl font-black italic tracking-tighter">{userName || 'Anonumas'}</h2>
                            <p className="text-primary font-bold text-sm tracking-wide">@{user.username}</p>
                            <p className="text-base-content/40 text-[10px] uppercase font-black tracking-widest mt-1">Joined {user.joinDate}</p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 sm:pb-4 w-full sm:w-auto relative ">
                        <button className="flex-1 sm:flex-initial bg-primary text-primary-content px-8 py-3 rounded-xl font-black italic text-sm transition-all hover:opacity-90 active:scale-95 flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
                            EDIT PROFILE
                        </button>
                        <button onClick={()=> setShowSetting(!showSetting)} className="bg-base-200 border border-base-300 text-base-content p-3.5 rounded-xl transition hover:bg-base-300">
                            <Settings size={22} className="opacity-70" />
                        </button>

                        {showSetting && (
  <div className="absolute right-0 top-full z-20 mt-3 w-72 rounded-2xl border border-base-300 bg-base-100 shadow-xl overflow-hidden">

    {/* Header */}
    <div className="p-4 border-b border-base-300 bg-base-200">
      <p className="text-xs opacity-60 uppercase tracking-widest">
        Account Settings
      </p>
    </div>

    {/* User Info */}
    <div className="p-4 flex items-center gap-3">
      <img
        src="/avatar.png"
        alt="user"
        className="w-10 h-10 rounded-full object-cover border"
      />
      <div>
        <p className="font-bold text-sm">{userName || 'Anonumas'}</p>
        <p className="text-xs opacity-60">{ session?.user?.email || 'email@gmail.com'}</p>
      </div>
    </div>

    {/* Actions */}
    <div className="p-2 flex flex-col gap-2">

      <button className="w-full text-left px-3 py-2 rounded-xl hover:bg-base-200 transition text-sm">
        Profile Settings
      </button>

      <button className="w-full text-left px-3 py-2 rounded-xl hover:bg-base-200 transition text-sm">
        Privacy & Security
      </button>

      <button className="w-full text-left px-3 py-2 rounded-xl hover:bg-base-200 transition text-sm">
        Help & Support
      </button>

    </div>

    {/* Footer */}
    <div className="p-3 border-t border-base-300">
      <button
        onClick={() => signOut()}
        className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl text-sm font-semibold transition"
      >
        <LogOut size={16} />
        Sign out
      </button>
    </div>

  </div>
)}
                    </div>
                </div>
            </div>

            {/* 2. Main Content Grid */}
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8">
                
                {/* Left Column: Stats Cards */}
                <div className="lg:col-span-4 space-y-4">
                    <div className="bg-base-200 p-6 rounded-[2rem] border border-base-300 shadow-xl overflow-hidden relative group">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-3xl pointer-events-none"></div>
                        <h4 className="text-xs font-black mb-6 flex items-center gap-2 opacity-50 uppercase tracking-[0.2em]">
                            <Award className="text-primary" size={16}/>
                            Citizen Statistics
                        </h4>
                        
                        <div className="space-y-3">
                            <InfoCard icon={<MapPin size={18} className="text-primary" />} label="Base Station" value={`${user.district}, ${user.division}`} />
                            <InfoCard icon={<FileText size={18} className="text-secondary" />} label="Reports Filed" value={user.reports} />
                            <InfoCard icon={<Droplets size={18} className="text-error" />} label="Life Saved (Blood)" value={`${user.donations} Times`} />
                            <InfoCard icon={<Globe size={18} className="text-primary" />} label="Global Rank" value="#12,402" />
                        </div>
                    </div>
                </div>

                {/* Right Column: Dynamic Content Area */}
                <div className="lg:col-span-8 space-y-6">
                    {/* Tabs Navigation */}
                    <div className="bg-base-200 border border-base-300 rounded-2xl p-1.5 flex overflow-x-auto no-scrollbar gap-1">
                        <TabItem icon={<Grid size={18}/>} label="COINS" active={true}/>
                        <TabItem icon={<FileText size={18}/>} label="REPORTS"/>
                        <TabItem icon={<Droplets size={18}/>} label="BLOOD"/>
                    </div>

                    {/* Coins Activity Card */}
                    <div className="bg-base-200 p-6 rounded-[2rem] border border-base-300 shadow-xl">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                            <div>
                                <h4 className="text-xl font-black italic">Recent Transactions</h4>
                                <p className="text-xs opacity-50 font-bold uppercase tracking-widest mt-1">Activity Log</p>
                            </div>
                            <div className="flex items-center gap-3 bg-base-100 border border-primary/20 px-5 py-3 rounded-2xl shadow-inner">
                                <Award className="text-primary animate-bounce" size={24}/>
                                <span className="text-3xl font-black italic tracking-tighter text-primary">{user.coins}</span>
                            </div>
                        </div>

                        {/* Responsive Activity Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                            <CoinCard title="Daily Login" time="2h ago" coins="+50" />
                            <CoinCard title="Report Verified" time="1d ago" coins="+200" isSecondary={true}/>
                            <CoinCard title="Social Share" time="3d ago" coins="+100" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Sub-components
const InfoCard = ({ icon, label, value }) => (
    <div className="flex items-center gap-4 bg-base-100 p-4 rounded-2xl border border-base-300 hover:border-primary/30 transition-all group">
        <div className="w-10 h-10 rounded-xl bg-base-200 flex items-center justify-center group-hover:scale-110 transition-transform">
            {icon}
        </div>
        <div className="text-left">
            <p className="text-[9px] opacity-40 uppercase font-black tracking-widest leading-none mb-1">{label}</p>
            <p className="text-sm font-bold tracking-tight">{value}</p>
        </div>
    </div>
);

const TabItem = ({ icon, label, active }) => (
    <button className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shrink-0 flex-1
        ${active ? 'bg-primary text-primary-content shadow-lg shadow-primary/20' : 'opacity-40 hover:opacity-100 hover:bg-base-300'}`}>
        {icon}
        {label}
    </button>
);

const CoinCard = ({ title, time, coins, isSecondary }) => (
    <div className="bg-base-100 border border-base-300 p-5 rounded-2xl flex flex-col items-center justify-center text-center group hover:border-primary/50 transition-all">
        <div className={`w-12 h-12 rounded-2xl bg-base-200 flex items-center justify-center mb-4 group-hover:rotate-12 transition-all border border-base-300`}>
            <Award size={24} className={isSecondary ? "text-secondary" : "text-primary"} />
        </div>
        <p className="text-[11px] font-black uppercase tracking-tight leading-tight">{title}</p>
        <p className="text-[9px] opacity-40 mt-1 font-bold">{time}</p>
        <h5 className="text-xl font-black mt-3 text-primary italic">{coins}</h5>
    </div>
);

export default SocialProfilePage;