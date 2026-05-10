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
    <div className="min-h-screen bg-base-100 mt-10 text-base-content pb-24 transition-colors duration-300">
      
      {/* HERO */}
      <div className="relative overflow-hidden border-b border-base-300">
        {/* থিমের প্রাইমারি কালারের একটি হালকা গ্রেডিয়েন্ট গ্লো */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 pt-10 pb-8">
          
          {/* Top Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-black">
                Merchant Dashboard
              </p>

              <h1 className="text-4xl font-black italic mt-2 tracking-tight text-base-content">
                JONOBAD <span className="text-primary">STORE</span>
              </h1>
            </div>

            <button className="btn btn-ghost bg-base-200 border border-base-300 w-12 h-12 rounded-btn p-0 flex items-center justify-center">
              <Settings size={20} className="opacity-70" />
            </button>
          </div>

          {/* Store Card */}
          <div className="bg-base-200 border border-base-300 rounded-box p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-btn bg-primary flex items-center justify-center text-primary-content shadow-lg shadow-primary/20">
                  <Store size={28} />
                </div>

                <div>
                  <h2 className="text-2xl font-black text-base-content">
                    Rahat Fashion
                  </h2>

                  <p className="text-sm opacity-50 mt-1 font-medium">
                    Fashion • Bangladesh
                  </p>

                  <div className="flex items-center gap-2 mt-3">
                    <div className="flex items-center gap-1 text-warning">
                      <Star size={14} fill="currentColor" />
                      <span className="text-sm font-bold">4.9</span>
                    </div>

                    <span className="opacity-20">•</span>

                    <p className="text-sm opacity-60 font-bold uppercase text-[10px] tracking-widest">
                      Verified Merchant
                    </p>
                  </div>
                </div>
              </div>

              <button className="btn btn-primary btn-sm rounded-btn font-black px-6 border-none">
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

          {/* Add Product Button */}
          <button className="bg-base-content text-base-100 rounded-box p-5 flex flex-col items-start gap-3 active:scale-95 transition-all shadow-xl">
            <div className="w-12 h-12 rounded-btn bg-base-100 text-base-content flex items-center justify-center">
              <Plus />
            </div>

            <div className="text-left">
              <h4 className="font-black text-lg leading-none">Add Product</h4>
              <p className="text-xs opacity-70 mt-1 font-medium">Upload new item</p>
            </div>
          </button>

          {/* Orders Button */}
          <button className="bg-primary text-primary-content rounded-box p-5 flex flex-col items-start gap-3 active:scale-95 transition-all shadow-xl shadow-primary/10">
            <div className="w-12 h-12 rounded-btn bg-primary-content/20 flex items-center justify-center">
              <ShoppingBag />
            </div>

            <div className="text-left">
              <h4 className="font-black text-lg leading-none">Orders</h4>
              <p className="text-xs opacity-80 mt-1 font-medium">Manage customers</p>
            </div>
          </button>
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatsCard
            icon={<Wallet size={20} className="text-primary" />}
            title="Revenue"
            value="৳25,400"
          />
          <StatsCard
            icon={<Package size={20} className="text-secondary" />}
            title="Products"
            value="124"
          />
          <StatsCard
            icon={<Users size={20} className="text-primary" />}
            title="Customers"
            value="1.2K"
          />
          <StatsCard
            icon={<TrendingUp size={20} className="text-success" />}
            title="Sales"
            value="+18%"
          />
        </div>

        {/* MANAGEMENT LIST */}
        <div className="space-y-3 mb-8">
          <ManagementItem
            icon={<Package className="text-primary" />}
            title="Manage Products"
            desc="Edit, delete, update stock"
          />
          <ManagementItem
            icon={<ShoppingBag className="text-secondary" />}
            title="Manage Orders"
            desc="Pending, completed, cancelled"
          />
          <ManagementItem
            icon={<Eye className="text-primary" />}
            title="Store Analytics"
            desc="Views, clicks & sales report"
          />
          <ManagementItem
            icon={<Bell className="text-secondary" />}
            title="Customer Messages"
            desc="Reply to customer instantly"
          />
        </div>

        {/* RECENT ORDERS SECTION */}
        <div className="bg-base-200 border border-base-300 rounded-box p-5 shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-xl font-black italic text-base-content">
              Recent Orders
            </h3>
            <button className="text-primary text-xs font-black uppercase tracking-widest hover:underline">
              View All
            </button>
          </div>

          <div className="space-y-3">
            <OrderItem
              name="Premium Hoodie"
              customer="Mahin"
              price="৳1200"
              status="Pending"
              statusColor="text-warning"
            />
            <OrderItem
              name="Wireless Headphone"
              customer="Rakib"
              price="৳3500"
              status="Completed"
              statusColor="text-success"
            />
            <OrderItem
              name="Gaming Mouse"
              customer="Siam"
              price="৳1800"
              status="Processing"
              statusColor="text-secondary"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

// --- SUB-COMPONENTS ---

const StatsCard = ({ icon, title, value }) => {
  return (
    <div className="bg-base-200 border border-base-300 rounded-box p-5 hover:border-primary/30 transition-all group">
      <div className="w-11 h-11 rounded-btn bg-base-100 border border-base-300 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <p className="text-[10px] font-black uppercase opacity-40 mb-1 tracking-widest">
        {title}
      </p>
      <h3 className="text-2xl font-black text-base-content">
        {value}
      </h3>
    </div>
  );
};

const ManagementItem = ({ icon, title, desc }) => {
  return (
    <button className="w-full bg-base-200 border border-base-300 rounded-box p-5 flex items-center justify-between hover:bg-base-300/50 transition-all group">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-btn bg-base-100 border border-base-300 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
          {icon}
        </div>
        <div className="text-left">
          <h4 className="font-bold text-base-content">
            {title}
          </h4>
          <p className="text-xs opacity-50 font-medium">
            {desc}
          </p>
        </div>
      </div>
      <ArrowRight className="opacity-20 group-hover:opacity-100 group-hover:translate-x-1 transition-all" size={18} />
    </button>
  );
};

const OrderItem = ({ name, customer, price, status, statusColor }) => {
  return (
    <div className="flex items-center justify-between p-4 rounded-btn bg-base-100 border border-base-300 shadow-sm">
      <div className="text-left">
        <h4 className="font-bold text-base-content leading-tight">
          {name}
        </h4>
        <p className="text-xs opacity-50 font-medium mt-1">
          Customer: {customer}
        </p>
      </div>

      <div className="text-right">
        <h4 className="font-black text-base-content">
          {price}
        </h4>
        <p className={`text-[10px] ${statusColor} font-black uppercase tracking-tighter`}>
          {status}
        </p>
      </div>
    </div>
  );
};

export default StoreDashboard;