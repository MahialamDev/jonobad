'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Search, 
  Droplets, 
  Users, 
  Activity, 
  MapPin, 
  PhoneCall,
  Calendar,
  ShieldCheck,
  Plus
} from 'lucide-react';

const BloodHome = () => {
  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-20 pb-32 px-6 overflow-hidden">
        {/* Animated Background Pulse */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 blur-[120px] rounded-full animate-pulse" />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/20 bg-red-500/5 mb-8"
          >
            <Droplets size={16} className="text-red-500" />
            <span className="text-red-500 text-[10px] font-black uppercase tracking-widest">Emergency Blood Network</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black italic tracking-tight leading-[1.1] mb-6"
          >
            BE A HERO, <br />
            <span className="text-red-500">SAVE A LIFE.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto mb-12"
          >
            Jonobad Blood is Bangladesh's fastest real-time blood donor connection platform. 
            Verified donors, instant response, and zero middlemen.
          </motion.p>

          {/* SEARCH BOX */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-4xl mx-auto bg-[#16161F]/80 backdrop-blur-2xl p-4 rounded-[2.5rem] border border-white/5 shadow-2xl flex flex-col md:flex-row gap-4"
          >
            <div className="flex-1 flex items-center gap-3 px-6 py-4 bg-[#0A0A0F] rounded-2xl border border-white/5">
              <Search className="text-gray-500" size={20} />
              <input 
                type="text" 
                placeholder="Search location (e.g. Jamalpur)" 
                className="bg-transparent border-none focus:outline-none w-full text-sm font-bold"
              />
            </div>
            
            <div className="flex-1 grid grid-cols-4 gap-2">
              {bloodGroups.slice(0, 4).map(group => (
                <button key={group} className="py-4 bg-[#0A0A0F] rounded-2xl border border-white/5 hover:border-red-500 hover:text-red-500 font-black transition-all">
                  {group}
                </button>
              ))}
            </div>

            <button className="bg-red-500 hover:bg-red-600 px-10 py-4 rounded-2xl font-black text-sm transition-all shadow-lg shadow-red-500/20">
              FIND DONORS
            </button>
          </motion.div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="py-20 bg-[#16161F]/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCard icon={<Heart className="text-red-500" />} number="12K+" label="Total Donors" />
          <StatCard icon={<Activity className="text-green-500" />} number="4.2K" label="Lives Saved" />
          <StatCard icon={<MapPin className="text-blue-500" />} number="64" label="Districts Covered" />
          <StatCard icon={<Users className="text-purple-500" />} number="150+" label="Verified Orgs" />
        </div>
      </section>

      {/* --- URGENT REQUESTS --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-black italic">URGENT <span className="text-red-500">REQUESTS</span></h2>
            <p className="text-gray-500 text-sm mt-1">Donors are needed immediately for these cases.</p>
          </div>
          <button className="text-xs font-black uppercase tracking-widest text-red-500 hover:underline">View All</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <EmergencyCard group="O+" location="Jamalpur Sadar" time="2h ago" />
          <EmergencyCard group="AB-" location="Mymensingh Medical" time="45m ago" />
          <EmergencyCard group="B+" location="Dhaka, LabAid" time="Just Now" />
        </div>
      </section>

      {/* --- BECOME A DONOR CTA --- */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-red-600 to-red-900 rounded-[3rem] p-12 relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full" />
          
          <h2 className="text-4xl font-black italic mb-6">READY TO GIVE THE GIFT OF LIFE?</h2>
          <p className="text-red-100 mb-10 max-w-xl mx-auto font-medium">
            Register as a donor on Jonobad and get notified whenever someone in your area needs your blood group.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-white text-red-600 px-10 py-4 rounded-2xl font-black text-sm hover:scale-105 transition-all">
              REGISTER AS DONOR
            </button>
            <button className="bg-red-500/30 border border-white/20 backdrop-blur-md text-white px-10 py-4 rounded-2xl font-black text-sm hover:bg-red-500 transition-all flex items-center justify-center gap-2">
              <Plus size={18} /> POST REQUEST
            </button>
          </div>
        </div>
      </section>

      {/* --- TRUST BADGES --- */}
      <section className="pb-24 text-center text-gray-600">
        <div className="flex items-center justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
          <div className="flex items-center gap-2 font-bold"><ShieldCheck /> 100% Verified</div>
          <div className="flex items-center gap-2 font-bold"><Calendar /> Smart Reminders</div>
          <div className="flex items-center gap-2 font-bold"><Users /> Community Driven</div>
        </div>
      </section>
    </div>
  );
};

// --- SUB-COMPONENTS ---

const StatCard = ({ icon, number, label }) => (
  <div className="text-center p-6 bg-[#16161F] rounded-3xl border border-white/5 hover:border-red-500/20 transition-all">
    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-4">
      {icon}
    </div>
    <h3 className="text-3xl font-black">{number}</h3>
    <p className="text-xs text-gray-500 font-bold uppercase mt-1 tracking-widest">{label}</p>
  </div>
);

const EmergencyCard = ({ group, location, time }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-[#16161F] border border-white/5 p-6 rounded-[2rem] relative overflow-hidden group"
  >
    <div className="absolute top-0 right-0 p-4">
      <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center text-red-500 font-black text-2xl group-hover:bg-red-500 group-hover:text-white transition-all">
        {group}
      </div>
    </div>
    <div className="space-y-4">
      <div className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-red-500/10 text-red-500 text-[8px] font-black uppercase">
        Urgent Need
      </div>
      <div>
        <h4 className="text-lg font-black flex items-center gap-2 italic">
          <MapPin size={16} className="text-gray-500" /> {location}
        </h4>
        <p className="text-xs text-gray-500 mt-1 font-bold">Requested: {time}</p>
      </div>
      <button className="w-full bg-[#0A0A0F] border border-white/10 hover:border-red-500/50 py-3 rounded-xl flex items-center justify-center gap-2 font-bold text-xs transition-all">
        <PhoneCall size={14} /> CALL ATTENDANT
      </button>
    </div>
  </motion.div>
);

export default BloodHome;