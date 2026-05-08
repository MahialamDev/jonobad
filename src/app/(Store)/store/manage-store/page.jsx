'use client';

import React from 'react';
import {
  Store,
  Plus,
  Package,
  ShoppingBag,
  Users,
  TrendingUp,
  Eye,
  ArrowRight,
  Wallet,
  Star,
  Bell,
  Settings,
} from 'lucide-react';

const StoreDashboard = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white pb-24">
      
      {/* HERO */}
      <div className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-red-600/20 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 pt-10 pb-8">
          
          {/* Top */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-red-500 font-black">
                Merchant Dashboard
              </p>

              <h1 className="text-4xl font-black italic mt-2 tracking-tight">
                JONOBAD STORE
              </h1>
            </div>

            <button className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
              <Settings size={20} />
            </button>
          </div>

          {/* Store Card */}
          <div className="bg-[#16161F] border border-white/5 rounded-3xl p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-red-500 flex items-center justify-center">
                  <Store size={28} />
                </div>

                <div>
                  <h2 className="text-2xl font-black">
                    Rahat Fashion
                  </h2>

                  <p className="text-sm text-gray-400 mt-1">
                    Fashion • Bangladesh
                  </p>

                  <div className="flex items-center gap-2 mt-3">
                    <div className="flex items-center gap-1 text-yellow-400">
                      <Star size={14} fill="currentColor" />
                      <span className="text-sm font-bold">4.9</span>
                    </div>

                    <span className="text-gray-600">•</span>

                    <p className="text-sm text-gray-400">
                      Verified Merchant
                    </p>
                  </div>
                </div>
              </div>

              <button className="bg-red-500 hover:bg-red-600 transition px-4 py-2 rounded-xl text-sm font-bold">
                Visit Shop
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 py-6">

        {/* QUICK ACTIONS */}
        <div className="grid grid-cols-2 gap-4 mb-8">

          <button className="bg-white text-black rounded-2xl p-5 flex flex-col items-start gap-3 active:scale-95 transition">
            <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center">
              <Plus />
            </div>

            <div className="text-left">
              <h4 className="font-black text-lg">
                Add Product
              </h4>

              <p className="text-sm text-gray-700">
                Upload new item
              </p>
            </div>
          </button>

          <button className="bg-red-500 text-white rounded-2xl p-5 flex flex-col items-start gap-3 active:scale-95 transition">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
              <ShoppingBag />
            </div>

            <div className="text-left">
              <h4 className="font-black text-lg">
                Orders
              </h4>

              <p className="text-sm text-red-100">
                Manage customer orders
              </p>
            </div>
          </button>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 gap-4 mb-8">

          <StatsCard
            icon={<Wallet size={20} />}
            title="Revenue"
            value="৳25,400"
          />

          <StatsCard
            icon={<Package size={20} />}
            title="Products"
            value="124"
          />

          <StatsCard
            icon={<Users size={20} />}
            title="Customers"
            value="1.2K"
          />

          <StatsCard
            icon={<TrendingUp size={20} />}
            title="Sales"
            value="+18%"
          />
        </div>

        {/* MANAGEMENT */}
        <div className="space-y-3 mb-8">

          <ManagementItem
            icon={<Package />}
            title="Manage Products"
            desc="Edit, delete, update stock"
          />

          <ManagementItem
            icon={<ShoppingBag />}
            title="Manage Orders"
            desc="Pending, completed, cancelled"
          />

          <ManagementItem
            icon={<Eye />}
            title="Store Analytics"
            desc="Views, clicks & sales report"
          />

          <ManagementItem
            icon={<Bell />}
            title="Customer Messages"
            desc="Reply to customer instantly"
          />
        </div>

        {/* RECENT ORDERS */}
        <div className="bg-[#16161F] border border-white/5 rounded-3xl p-5">
          
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-xl font-black italic">
              Recent Orders
            </h3>

            <button className="text-red-500 text-sm font-bold">
              View All
            </button>
          </div>

          <div className="space-y-3">

            <OrderItem
              name="Premium Hoodie"
              customer="Mahin"
              price="৳1200"
              status="Pending"
            />

            <OrderItem
              name="Wireless Headphone"
              customer="Rakib"
              price="৳3500"
              status="Completed"
            />

            <OrderItem
              name="Gaming Mouse"
              customer="Siam"
              price="৳1800"
              status="Processing"
            />

          </div>
        </div>

      </div>
    </div>
  );
};

const StatsCard = ({ icon, title, value }) => {
  return (
    <div className="bg-[#16161F] border border-white/5 rounded-2xl p-5">
      
      <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center mb-4">
        {icon}
      </div>

      <p className="text-sm text-gray-400 mb-1">
        {title}
      </p>

      <h3 className="text-2xl font-black">
        {value}
      </h3>
    </div>
  );
};

const ManagementItem = ({ icon, title, desc }) => {
  return (
    <button className="w-full bg-[#16161F] border border-white/5 rounded-2xl p-5 flex items-center justify-between hover:bg-[#1B1B26] transition">
      
      <div className="flex items-center gap-4">

        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
          {icon}
        </div>

        <div className="text-left">
          <h4 className="font-bold">
            {title}
          </h4>

          <p className="text-sm text-gray-500">
            {desc}
          </p>
        </div>
      </div>

      <ArrowRight className="text-gray-500" size={18} />
    </button>
  );
};

const OrderItem = ({ name, customer, price, status }) => {
  return (
    <div className="flex items-center justify-between p-4 rounded-2xl bg-black/20 border border-white/5">
      
      <div>
        <h4 className="font-bold">
          {name}
        </h4>

        <p className="text-sm text-gray-500">
          Customer: {customer}
        </p>
      </div>

      <div className="text-right">
        <h4 className="font-black">
          {price}
        </h4>

        <p className="text-xs text-red-500 font-bold uppercase">
          {status}
        </p>
      </div>
    </div>
  );
};

export default StoreDashboard;