'use client'
import React from 'react';
import { 
  AlertTriangle, HeartHandshake, Wallet, FileText, PhoneCall, 
  Users, Mountain, Briefcase, Home, HardHat, Settings, 
  UserCircle, Crown, ChevronRight, Info, LogOut 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { signOut } from 'next-auth/react';

const MenuPage = () => {
  // মেনু আইটেমগুলোকে ক্যাটাগরি অনুযায়ী আপনার থিম কালারে সাজানো হয়েছে
  const menuGroups = [
    {
      title: "Emergency & Safety",
      items: [
        { id: 1, label: 'Emergency Alert', icon: AlertTriangle, color: 'text-primary', bg: 'bg-primary/10' },
        { id: 2, label: 'Govt. Emergency Numbers', icon: PhoneCall, color: 'text-secondary', bg: 'bg-secondary/10' },
      ]
    },
    {
      title: "Community & Support",
      items: [
        { id: 3, label: 'Donation', icon: HeartHandshake, color: 'text-primary', bg: 'bg-primary/10' },
        { id: 4, label: 'Volunteer Network', icon: Users, color: 'text-secondary', bg: 'bg-secondary/10' },
        { id: 5, label: 'Reports & Grievance', icon: FileText, color: 'text-accent', bg: 'bg-accent/10' },
      ]
    },
    {
      title: "Services & Utility",
      items: [
        { id: 6, label: 'Jonobad Wallet', icon: Wallet, color: 'text-primary', bg: 'bg-primary/10' },
        { id: 7, label: 'Job Info & Find', icon: Briefcase, color: 'text-secondary', bg: 'bg-secondary/10' },
        { id: 8, label: 'Find Worker/Technician', icon: HardHat, color: 'text-primary', bg: 'bg-primary/10' },
      ]
    },
    {
      title: "Lifestyle & Local",
      items: [
        { id: 9, label: 'Travel Places', icon: Mountain, color: 'text-secondary', bg: 'bg-secondary/10' },
        { id: 10, label: 'To-Let / Housing', icon: Home, color: 'text-primary', bg: 'bg-primary/10' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-base-100 text-base-content pt-28 pb-12 px-4 transition-colors duration-300 mb-10">
      <div className="max-w-xl mx-auto space-y-6">
        
        {/* --- USER PROFILE CARD --- */}
        <div className="bg-base-200/60 border border-base-300 p-5 rounded-2xl flex items-center justify-between shadow-xl">
          <div className="flex items-center gap-4">
            {/* থিমের প্রাইমারি সবুজাভ গ্রেডিয়েন্ট */}
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-primary to-secondary p-0.5 shadow-lg shadow-primary/20">
              <img 
                src="https://api.dicebear.com/8.x/notionists/svg?seed=Mahi" 
                className="w-full h-full rounded-full bg-base-100 object-cover" 
                alt="Profile"
              />
            </div>
            <div className="text-left">
              <h2 className="text-lg font-black italic tracking-tight">Mahialam Rahat</h2>
              <p className="text-[10px] text-primary font-black uppercase tracking-widest">Premium Member</p>
            </div>
          </div>
          <button className="btn btn-ghost bg-base-100 border border-base-300 p-3 w-12 h-12 rounded-2xl hover:bg-base-300 transition-all">
            <Settings size={20} className="opacity-60" />
          </button>
        </div>

        {/* --- QUICK ACTION BUTTONS --- */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'My Account', icon: UserCircle, color: 'text-primary' },
            { id: 'sub', label: 'Subscription', icon: Crown, color: 'text-warning' },
            { label: 'About App', icon: Info, color: 'text-secondary' },
          ].map((item, idx) => (
            <button key={idx} className="bg-base-200/60 border border-base-300 p-4 rounded-2xl flex flex-col items-center gap-2 hover:bg-base-300 transition-all active:scale-95 group">
              <item.icon size={22} className={`${item.color} group-hover:scale-110 transition-transform`} />
              <span className="text-[9px] font-black uppercase opacity-60 text-center">{item.label}</span>
            </button>
          ))}
        </div>

        {/* --- DYNAMIC MENU GROUPS --- */}
        {menuGroups.map((group, gIdx) => (
          <div key={gIdx} className="space-y-3">
            <p className="text-[10px] font-black opacity-40 uppercase tracking-[0.2em] ml-4 text-left">
              {group.title}
            </p>
            <div className="bg-base-200/60 border border-base-300 rounded-2xl overflow-hidden shadow-sm">
              {group.items.map((item, iIdx) => (
                <motion.div 
                  whileTap={{ scale: 0.98 }}
                  key={item.id}
                  className={`flex items-center justify-between p-4 cursor-pointer hover:bg-base-300 transition-all ${
                    iIdx !== group.items.length - 1 ? 'border-b border-base-300' : ''
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-2xl ${item.bg} flex items-center justify-center`}>
                      <item.icon size={20} className={item.color} />
                    </div>
                    <span className="text-xs font-bold opacity-90">{item.label}</span>
                  </div>
                  <ChevronRight size={16} className="opacity-20" />
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* --- LOGOUT BUTTON --- */}
        <button onClick={()=> signOut()} className="w-full bg-error/10 hover:bg-error/20 text-error border border-error/20 py-5 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95 mb-8 shadow-sm">
          <LogOut size={18} />
          <span className="text-xs font-black uppercase tracking-widest">Logout from Jonobad</span>
        </button>

      </div>
    </div>
  );
};

export default MenuPage;