'use client'
import React from 'react';
import { 
  AlertTriangle, HeartHandshake, Wallet, FileText, PhoneCall, 
  Users, Mountain, Briefcase, Home, HardHat, Settings, 
  UserCircle, Crown, ChevronRight, Info, LogOut 
} from 'lucide-react';
import { motion } from 'framer-motion';

const MenuPage = () => {
  // মেনু আইটেমগুলোকে ক্যাটাগরি অনুযায়ী সাজানো হয়েছে
  const menuGroups = [
    {
      title: "Emergency & Safety",
      items: [
        { id: 1, label: 'Emergency Alert', icon: AlertTriangle, color: 'text-red-500', bg: 'bg-red-500/10' },
        { id: 2, label: 'Govt. Emergency Numbers', icon: PhoneCall, color: 'text-orange-500', bg: 'bg-orange-500/10' },
      ]
    },
    {
      title: "Community & Support",
      items: [
        { id: 3, label: 'Donation', icon: HeartHandshake, color: 'text-pink-500', bg: 'bg-pink-500/10' },
        { id: 4, label: 'Volunteer Network', icon: Users, color: 'text-blue-500', bg: 'bg-blue-500/10' },
        { id: 5, label: 'Reports & Grievance', icon: FileText, color: 'text-purple-500', bg: 'bg-purple-500/10' },
      ]
    },
    {
      title: "Services & Utility",
      items: [
        { id: 6, label: 'Jonobad Wallet', icon: Wallet, color: 'text-green-500', bg: 'bg-green-500/10' },
        { id: 7, label: 'Job Info & Find', icon: Briefcase, color: 'text-cyan-500', bg: 'bg-cyan-500/10' },
        { id: 8, label: 'Find Worker/Technician', icon: HardHat, color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
      ]
    },
    {
      title: "Lifestyle & Local",
      items: [
        { id: 9, label: 'Travel Places', icon: Mountain, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
        { id: 10, label: 'To-Let / Housing', icon: Home, color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white pt-28 pb-12 px-4">
      <div className="max-w-xl mx-auto space-y-6">
        
        {/* --- USER PROFILE CARD --- */}
        <div className="bg-[#16161F] border border-white/[0.05] p-5 rounded-[2.5rem] flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-red-500 to-orange-500 p-0.5">
              <img 
                src="https://api.dicebear.com/8.x/notionists/svg?seed=Mahi" 
                className="w-full h-full rounded-full bg-[#0A0A0F] object-cover" 
                alt="Profile"
              />
            </div>
            <div>
              <h2 className="text-lg font-black italic tracking-tight">Mahialam Rahat</h2>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Premium Member</p>
            </div>
          </div>
          <button className="p-3 bg-white/5 rounded-2xl hover:bg-white/10 transition">
            <Settings size={20} className="text-gray-400" />
          </button>
        </div>

        {/* --- QUICK ACTION BUTTONS --- */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'My Account', icon: UserCircle },
            { id: 'sub', label: 'Subscription', icon: Crown },
            { label: 'About App', icon: Info },
          ].map((item, idx) => (
            <button key={idx} className="bg-[#16161F] border border-white/[0.05] p-4 rounded-3xl flex flex-col items-center gap-2 hover:bg-white/[0.08] transition">
              <item.icon size={22} className={item.id === 'sub' ? 'text-yellow-500' : 'text-red-500'} />
              <span className="text-[9px] font-black uppercase text-gray-400 text-center">{item.label}</span>
            </button>
          ))}
        </div>

        {/* --- DYNAMIC MENU GROUPS --- */}
        {menuGroups.map((group, gIdx) => (
          <div key={gIdx} className="space-y-3">
            <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] ml-4">
              {group.title}
            </p>
            <div className="bg-[#16161F] border border-white/[0.05] rounded-[2.5rem] overflow-hidden">
              {group.items.map((item, iIdx) => (
                <motion.div 
                  whileTap={{ scale: 0.98 }}
                  key={item.id}
                  className={`flex items-center justify-between p-4 cursor-pointer hover:bg-white/[0.03] transition-all ${
                    iIdx !== group.items.length - 1 ? 'border-b border-white/[0.03]' : ''
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-2xl ${item.bg} flex items-center justify-center`}>
                      <item.icon size={20} className={item.color} />
                    </div>
                    <span className="text-xs font-bold text-gray-200">{item.label}</span>
                  </div>
                  <ChevronRight size={16} className="text-gray-700" />
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* --- LOGOUT BUTTON --- */}
        <button className="w-full bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/20 py-4 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95 mb-8">
          <LogOut size={18} />
          <span className="text-xs font-black uppercase tracking-widest">Logout from Jonobad</span>
        </button>

      </div>
    </div>
  );
};

export default MenuPage;