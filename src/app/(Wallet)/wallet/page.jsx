'use client';

import React, { useState } from 'react';
import {
  Plus,
  ArrowUpRight,
  History,
  CreditCard,
  Coins,
  CheckCircle2,
  Smartphone,
  Banknote,
  SendHorizonal,
  User,
} from 'lucide-react';

const WalletPage = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    // base-100 এবং base-content ব্যবহার করা হয়েছে থিম অনুযায়ী অটো কালার চেঞ্জ হওয়ার জন্য
    <div className="min-h-screen bg-base-100 mt-10 text-base-content pb-24">

      {/* TOP BALANCE SECTION */}
      {/* primary কালারের হালকা অপাসিটি দিয়ে গ্রেডিয়েন্ট */}
      <div className="bg-gradient-to-b from-primary/10 to-transparent pt-12 pb-8 text-center border-b border-base-300">
        
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full mb-4">
          <Coins className="text-primary" size={16} />
          <span className="text-primary text-xs font-black uppercase tracking-widest">
            Available Balance
          </span>
        </div>

        <h1 className="text-5xl font-black tracking-tighter my-2">
          1,250
        </h1>

        <p className="opacity-60 my-2 text-sm font-medium uppercase tracking-widest">
          Jonobad Coins
        </p>
      </div>

      <div className="max-w-md mx-auto px-4 -mt-8">

        {/* QUICK ACTIONS */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {/* Primary Button */}
          <button className="bg-primary text-primary-content py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-primary/20">
            <Plus size={20} />
            Add Money
          </button>

          {/* Secondary Button */}
          <button className="bg-secondary text-secondary-content py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-secondary/20">
            <ArrowUpRight size={20} />
            Withdraw
          </button>
        </div>

        {/* TRANSFER CARD */}
        <div className="bg-base-200 border border-base-300 p-6 rounded-[--rounded-box] mb-8 shadow-xl">
          
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-black flex items-center gap-2">
                <SendHorizonal size={20} className="text-secondary" />
                Transfer Coins
              </h3>
              <p className="text-sm opacity-60 mt-1">
                Send Jonobad coins to another account instantly
              </p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center">
              <Coins className="text-secondary" size={22} />
            </div>
          </div>

          {/* INPUTS */}
          <div className="space-y-4">
            <div>
              <label className="text-xs opacity-50 uppercase font-bold tracking-widest mb-2 block">
                Receiver Username
              </label>
              <div className="flex items-center gap-3 bg-base-100 border border-base-300 rounded-xl px-4 h-14">
                <User size={18} className="opacity-40" />
                <input
                  type="text"
                  placeholder="@username"
                  className="bg-transparent outline-none w-full text-sm"
                />
              </div>
            </div>

            <button className="w-full bg-secondary text-secondary-content hover:opacity-90 transition py-4 rounded-xl font-black flex items-center justify-center gap-2">
              <SendHorizonal size={18} />
              Transfer Now
            </button>
          </div>
        </div>

        {/* LINKED ACCOUNT */}
        <div className="bg-base-200 border border-base-300 p-5 rounded-[--rounded-box] mb-8">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-xs font-bold uppercase tracking-widest opacity-50 flex items-center gap-2">
              <CreditCard size={16} />
              Linked Account
            </h4>
            <button className="text-primary text-xs font-bold">Change</button>
          </div>

          <div className="flex items-center justify-between p-4 bg-base-100 rounded-xl border border-base-300">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#E2136E] text-white rounded-lg flex items-center justify-center font-bold text-xs">
                bk
              </div>
              <div>
                <p className="text-[10px] opacity-50 font-bold uppercase">bKash Personal</p>
                <p className="font-mono font-bold">017XX-XXXXXX</p>
              </div>
            </div>
            <CheckCircle2 className="text-primary" size={20} />
          </div>
        </div>

        {/* TRANSACTION HISTORY */}
        <div className="space-y-4">
          <div className="flex justify-between items-center px-2">
            <h4 className="text-lg font-black italic">History</h4>
            <div className="flex gap-4 text-xs font-bold">
              {['all', 'in', 'out'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`capitalize ${activeTab === tab ? 'text-primary' : 'opacity-40'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <TransactionItem
              icon={<Smartphone className="text-secondary" />}
              title="Mobile Recharge"
              date="Today, 10:45 AM"
              amount="-500"
              isNegative={true}
            />
            <TransactionItem
              icon={<Banknote className="text-primary" />}
              title="Add Money (bKash)"
              date="Yesterday"
              amount="+1,000"
              isNegative={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const TransactionItem = ({ icon, title, date, amount, isNegative }) => (
  <div className="bg-base-200/50 p-4 rounded-2xl border border-base-300 flex items-center justify-between hover:bg-base-200 transition group">
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-xl bg-base-100 flex items-center justify-center group-hover:scale-105 transition-transform">
        {icon}
      </div>
      <div>
        <h5 className="text-sm font-bold">{title}</h5>
        <p className="text-[10px] opacity-50 font-bold uppercase">{date}</p>
      </div>
    </div>
    <div className="text-right">
      <h5 className={`font-black ${isNegative ? 'text-base-content' : 'text-primary'}`}>
        {amount}
      </h5>
      <p className="text-[10px] opacity-40 font-bold italic">Coins</p>
    </div>
  </div>
);

export default WalletPage;