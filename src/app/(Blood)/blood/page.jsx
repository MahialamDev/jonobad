'use client';
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
    // bg-base-100 আপনার থিম থেকে ডার্ক বা লাইট ব্যাকগ্রাউন্ড নিবে
    <div className="min-h-screen bg-base-100 text-base-content transition-colors duration-300">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-20 pb-32 px-6 overflow-hidden">
        {/* ব্লাড ডোনেশন যেহেতু ইমার্জেন্সি, তাই এখানে রেড পালস রাখা হয়েছে */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 blur-[120px] rounded-full animate-pulse pointer-events-none" />
        
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
            className="text-5xl md:text-7xl font-black italic tracking-tight leading-[1.1] mb-6 text-base-content"
          >
            BE A HERO, <br />
            <span className="text-red-600">SAVE A LIFE.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="opacity-70 text-lg max-w-2xl mx-auto mb-12"
          >
            Jonobad Blood is Bangladesh's fastest real-time blood donor connection platform. 
            Verified donors, instant response, and zero middlemen.
          </motion.p>

          {/* SEARCH BOX */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-4xl mx-auto bg-base-200/80 backdrop-blur-2xl p-4 rounded-box border border-base-300 shadow-2xl flex flex-col md:flex-row gap-4"
          >
            <div className="flex-1 flex items-center gap-3 px-6 py-4 bg-base-100 rounded-btn border border-base-300">
              <Search className="opacity-40" size={20} />
              <input 
                type="text" 
                placeholder="Search location (e.g. Jamalpur)" 
                className="bg-transparent border-none focus:outline-none w-full text-sm font-bold text-base-content"
              />
            </div>
            
            <div className="flex-1 grid grid-cols-4 gap-2">
              {bloodGroups.slice(0, 4).map(group => (
                <button key={group} className="py-4 bg-base-100 rounded-btn border border-base-300 hover:border-red-500 hover:text-red-500 font-black transition-all">
                  {group}
                </button>
              ))}
            </div>

            <button className="btn bg-red-600 hover:bg-red-700 border-none text-white px-10 py-4 h-auto rounded-btn font-black text-sm transition-all shadow-lg shadow-red-500/20">
              FIND DONORS
            </button>
          </motion.div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="py-20 bg-base-200/50 border-y border-base-300">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCard icon={<Heart className="text-red-500" />} number="12K+" label="Total Donors" />
          <StatCard icon={<Activity className="text-success" />} number="4.2K" label="Lives Saved" />
          <StatCard icon={<MapPin className="text-info" />} number="64" label="Districts Covered" />
          <StatCard icon={<Users className="text-secondary" />} number="150+" label="Verified Orgs" />
        </div>
      </section>

      {/* --- URGENT REQUESTS --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-black italic text-base-content">URGENT <span className="text-red-600">REQUESTS</span></h2>
            <p className="opacity-50 text-sm mt-1 font-medium">Donors are needed immediately for these cases.</p>
          </div>
          <button className="text-xs font-black uppercase tracking-widest text-red-600 hover:underline">View All</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <EmergencyCard group="O+" location="Jamalpur Sadar" time="2h ago" />
          <EmergencyCard group="AB-" location="Mymensingh Medical" time="45m ago" />
          <EmergencyCard group="B+" location="Dhaka, LabAid" time="Just Now" />
        </div>
      </section>

      {/* --- BECOME A DONOR CTA --- */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-red-600 to-red-900 rounded-box p-12 relative overflow-hidden text-center shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full pointer-events-none" />
          
          <h2 className="text-4xl font-black italic mb-6 text-white">READY TO GIVE THE GIFT OF LIFE?</h2>
          <p className="text-red-50 font-medium mb-10 max-w-xl mx-auto opacity-90">
            Register as a donor on Jonobad and get notified whenever someone in your area needs your blood group.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="btn bg-white hover:bg-gray-100 text-red-600 border-none px-10 py-4 h-auto rounded-btn font-black text-sm transition-all shadow-xl">
              REGISTER AS DONOR
            </button>
            <button className="btn bg-red-500/20 hover:bg-red-500 border border-white/20 backdrop-blur-md text-white px-10 py-4 h-auto rounded-btn font-black text-sm transition-all flex items-center justify-center gap-2">
              <Plus size={18} /> POST REQUEST
            </button>
          </div>
        </div>
      </section>

      {/* --- TRUST BADGES --- */}
      <section className="pb-24 text-center opacity-50">
        <div className="flex flex-wrap items-center justify-center gap-8 font-bold text-base-content uppercase text-[10px] tracking-[0.2em]">
          <div className="flex items-center gap-2"><ShieldCheck size={18} className="text-success" /> 100% Verified</div>
          <div className="flex items-center gap-2"><Calendar size={18} className="text-info" /> Smart Reminders</div>
          <div className="flex items-center gap-2"><Users size={18} className="text-secondary" /> Community Driven</div>
        </div>
      </section>
    </div>
  );
};

// --- SUB-COMPONENTS ---

const StatCard = ({ icon, number, label }) => (
  <div className="text-center p-6 bg-base-200 rounded-box border border-base-300 hover:border-red-500/20 transition-all group">
    <div className="w-12 h-12 bg-base-100 rounded-btn flex items-center justify-center mx-auto mb-4 border border-base-300 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-3xl font-black text-base-content">{number}</h3>
    <p className="text-[10px] opacity-50 font-black uppercase mt-1 tracking-widest">{label}</p>
  </div>
);

const EmergencyCard = ({ group, location, time }) => (
  <motion.div 
    whileHover={{ y: -8 }}
    className="bg-base-200 border border-base-300 p-6 rounded-box relative overflow-hidden group shadow-sm hover:shadow-xl transition-all"
  >
    <div className="absolute top-0 right-0 p-4">
      <div className="w-16 h-16 bg-red-600/10 rounded-btn flex items-center justify-center text-red-600 font-black text-2xl group-hover:bg-red-600 group-hover:text-white transition-all shadow-inner">
        {group}
      </div>
    </div>
    <div className="space-y-4">
      <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-red-600 text-white text-[8px] font-black uppercase tracking-tighter shadow-sm">
        Urgent Need
      </div>
      <div>
        <h4 className="text-lg font-black flex items-center gap-2 italic text-base-content">
          <MapPin size={16} className="opacity-40" /> {location}
        </h4>
        <p className="text-[10px] opacity-50 mt-1 font-bold uppercase tracking-wide">Requested: {time}</p>
      </div>
      <button className="w-full btn bg-base-100 border border-base-300 hover:border-red-600/50 hover:bg-red-600/5 py-3 h-auto rounded-btn flex items-center justify-center gap-2 font-black text-xs transition-all text-base-content">
        <PhoneCall size={14} className="text-red-600" /> CALL ATTENDANT
      </button>
    </div>
  </motion.div>
);

export default BloodHome;