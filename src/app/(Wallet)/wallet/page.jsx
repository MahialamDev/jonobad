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
    <div className="min-h-screen bg-[#0A0A0F] text-white pb-24">

      {/* TOP BALANCE */}
      <div className="bg-gradient-to-b from-red-600/20 to-transparent pt-12 pb-8 px-6 text-center border-b border-white/5">
        
        <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 px-4 py-1.5 rounded-full mb-4">
          <Coins className="text-yellow-400" size={16} />
          <span className="text-yellow-500 text-xs font-black uppercase tracking-widest">
            Available Balance
          </span>
        </div>

        <h1 className="text-5xl font-black italic tracking-tighter mb-2">
          1,250
        </h1>

        <p className="text-gray-500 text-sm font-medium uppercase tracking-widest">
          Jonobad Coins
        </p>
      </div>

      <div className="wrapper px-4 -mt-8">

        {/* QUICK ACTIONS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">

          <button className="bg-white text-black py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gray-200 transition-all active:scale-95 shadow-xl">
            <Plus size={20} />
            Add Money
          </button>

          <button className="bg-red-500 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-red-600 transition-all active:scale-95 shadow-xl shadow-red-500/20">
            <ArrowUpRight size={20} />
            Withdraw
          </button>

          {/* NEW TRANSFER BUTTON */}
          <button className="bg-[#16161F] border border-white/10 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-[#1C1C28] transition-all active:scale-95">
            <SendHorizonal size={20} className="text-blue-400" />
            Transfer
          </button>

          <button className="bg-[#16161F] border border-white/10 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-[#1C1C28] transition-all active:scale-95">
            <History size={20} className="text-purple-400" />
            Activity
          </button>
        </div>

        {/* TRANSFER CARD */}
        <div className="bg-[#16161F] border border-white/5 p-6 rounded-3xl mb-8 shadow-xl">
          
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-black flex items-center gap-2">
                <SendHorizonal size={20} className="text-blue-400" />
                Transfer Coins
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Send Jonobad coins to another account instantly
              </p>
            </div>

            <div className="hidden sm:flex w-12 h-12 rounded-2xl bg-blue-500/10 items-center justify-center">
              <Coins className="text-blue-400" size={22} />
            </div>
          </div>

          {/* INPUTS */}
          <div className="space-y-4">

            {/* USERNAME */}
            <div>
              <label className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-2 block">
                Receiver Username
              </label>

              <div className="flex items-center gap-3 bg-[#0A0A0F] border border-white/5 rounded-2xl px-4 h-14">
                <User size={18} className="text-gray-500" />

                <input
                  type="text"
                  placeholder="@username"
                  className="bg-transparent outline-none w-full text-sm placeholder:text-gray-600"
                />
              </div>
            </div>

            {/* AMOUNT */}
            <div>
              <label className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-2 block">
                Coin Amount
              </label>

              <div className="flex items-center gap-3 bg-[#0A0A0F] border border-white/5 rounded-2xl px-4 h-14">
                <Coins size={18} className="text-yellow-400" />

                <input
                  type="number"
                  placeholder="Enter amount"
                  className="bg-transparent outline-none w-full text-sm placeholder:text-gray-600"
                />
              </div>
            </div>

            {/* NOTE */}
            <div>
              <label className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-2 block">
                Note (Optional)
              </label>

              <textarea
                placeholder="Write a message..."
                className="w-full bg-[#0A0A0F] border border-white/5 rounded-2xl p-4 outline-none resize-none h-28 text-sm placeholder:text-gray-600"
              />
            </div>

            {/* SEND BUTTON */}
            <button className="w-full bg-blue-500 hover:bg-blue-600 transition py-4 rounded-2xl font-black flex items-center justify-center gap-2 shadow-xl shadow-blue-500/20">
              <SendHorizonal size={18} />
              Transfer Coins
            </button>
          </div>
        </div>

        {/* LINKED ACCOUNT */}
        <div className="bg-[#16161F] border border-white/5 p-6 rounded-3xl mb-8 shadow-xl">
          
          <div className="flex justify-between items-center mb-5">
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 flex items-center gap-2">
              <CreditCard size={18} />
              Linked Account
            </h4>

            <button className="text-red-500 text-xs font-bold hover:underline">
              Change
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-[#0A0A0F] rounded-2xl border border-white/5">
            
            <div className="flex items-center gap-4">
              
              <div className="w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center font-black italic text-xl">
                bk
              </div>

              <div>
                <p className="text-xs text-gray-500 font-bold uppercase">
                  bKash Personal
                </p>

                <p className="text-lg font-mono font-bold tracking-wider">
                  017XX-XXXXXX
                </p>
              </div>
            </div>

            <CheckCircle2 className="text-green-500" size={20} />
          </div>
        </div>

        {/* TRANSACTION HISTORY */}
        <div className="space-y-4">

          <div className="flex justify-between items-end px-2">
            
            <h4 className="text-lg font-bold italic">
              History
            </h4>

            <div className="flex gap-4 text-xs font-bold text-gray-500">
              
              <button
                onClick={() => setActiveTab('all')}
                className={activeTab === 'all' ? 'text-red-500' : ''}
              >
                All
              </button>

              <button
                onClick={() => setActiveTab('in')}
                className={activeTab === 'in' ? 'text-red-500' : ''}
              >
                In
              </button>

              <button
                onClick={() => setActiveTab('out')}
                className={activeTab === 'out' ? 'text-red-500' : ''}
              >
                Out
              </button>
            </div>
          </div>

          <div className="space-y-2">

            <TransactionItem
              icon={<Smartphone className="text-blue-400" />}
              title="Mobile Recharge"
              date="Today, 10:45 AM"
              amount="-500"
              isNegative={true}
            />

            <TransactionItem
              icon={<Banknote className="text-green-400" />}
              title="Add Money (bKash)"
              date="Yesterday"
              amount="+1,000"
            />

            <TransactionItem
              icon={<SendHorizonal className="text-cyan-400" />}
              title="Transfer To @mahin"
              date="2 hours ago"
              amount="-300"
              isNegative={true}
            />

            <TransactionItem
              icon={<History className="text-purple-400" />}
              title="Report Reward"
              date="2 days ago"
              amount="+250"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const TransactionItem = ({
  icon,
  title,
  date,
  amount,
  isNegative,
}) => (
  <div className="bg-[#16161F]/50 p-4 rounded-2xl border border-white/5 flex items-center justify-between hover:bg-[#16161F] transition group">
    
    <div className="flex items-center gap-4">
      
      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
        {icon}
      </div>

      <div>
        <h5 className="text-sm font-bold">
          {title}
        </h5>

        <p className="text-[10px] text-gray-600 font-bold uppercase">
          {date}
        </p>
      </div>
    </div>

    <div className="text-right">
      
      <h5
        className={`font-black ${
          isNegative ? 'text-white' : 'text-green-500'
        }`}
      >
        {amount}
      </h5>

      <p className="text-[10px] text-gray-700 font-bold italic">
        Coins
      </p>
    </div>
  </div>
);

export default WalletPage;