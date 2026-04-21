"use client";
import { TrendingUp, ArrowUpRight, ArrowDownRight, Zap } from "lucide-react";
import MarketPulseChart from "@/components/dashboard/MarketPulseChart";
import FinBot from "@/components/dashboard/FinBot";

export default function DashboardPage() {
  const topMovers = [
    { name: "NVDA", price: "+4.2%", up: true },
    { name: "TSLA", price: "-1.8%", up: false },
    { name: "AAPL", price: "+0.5%", up: true },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-700">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <p className="text-xs font-bold text-blue-600 tracking-[0.2em] uppercase mb-1">
            Blueprint Ledger // 2024
          </p>
          <h1 className="text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Welcome back,<br />Commander.
          </h1>
        </div>
        <div className="flex items-center gap-2 bg-white border border-slate-100 p-1.5 pr-4 rounded-full shadow-sm w-fit">
          <span className="bg-blue-600 text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider">
            Risk Profile
          </span>
          <span className="text-sm font-bold text-slate-700">Aggressive Growth</span>
        </div>
      </div>

      {/* Main Grid: Progress & Portfolio */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Progress Card */}
        <div className="lg:col-span-2 bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm relative overflow-hidden group">
          <div className="flex justify-between items-start relative z-10">
            <div className="max-w-xs">
              <h2 className="text-2xl font-bold text-slate-900">LearnPath Progress</h2>
              <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                Mastering High-Yield Dividends: Module 4 of 12 currently in progress.
              </p>
            </div>
            <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 group-hover:scale-110 transition-transform">
              <div className="w-10 h-10 bg-slate-200 rounded-lg shadow-inner"></div>
            </div>
          </div>
          
          <div className="mt-12 relative z-10">
            <div className="flex justify-between items-end mb-3">
              <span className="text-5xl font-black text-blue-600 tracking-tighter">68%</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Level 3 Architect</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-4 p-1">
              <div className="bg-blue-600 h-2 rounded-full w-[68%] transition-all duration-1000"></div>
            </div>
          </div>
        </div>

        {/* Portfolio Card */}
        <div className="bg-blue-600 rounded-[32px] p-8 text-white shadow-xl shadow-blue-600/20 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-20">
            <TrendingUp className="w-24 h-24" />
          </div>
          <div>
            <p className="text-blue-100 font-medium text-sm">Portfolio Value</p>
            <h2 className="text-4xl font-black mt-1 tracking-tight">$142,850.42</h2>
            <div className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full text-xs font-bold mt-4 backdrop-blur-md">
              <ArrowUpRight className="w-3 h-3" /> +12.4% this month
            </div>
          </div>
          
          <div className="flex items-end gap-1.5 h-16 mt-8">
            {[30, 45, 35, 55, 40, 70, 95].map((val, i) => (
              <div 
                key={i} 
                className="flex-1 bg-white/30 rounded-t-sm hover:bg-white transition-all cursor-pointer" 
                style={{ height: `${val}%` }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Market Pulse & FinBot Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <MarketPulseChart />
          
          {/* Top Movers Bar */}
          <div className="bg-white rounded-3xl p-6 border border-slate-100 flex flex-wrap items-center gap-8 shadow-sm">
            <span className="text-xs font-black text-slate-400 uppercase tracking-widest border-r pr-8">Top Movers</span>
            {topMovers.map((stock) => (
              <div key={stock.name} className="flex items-center gap-4">
                <span className="font-bold text-slate-900">{stock.name}</span>
                <span className={`text-sm font-bold flex items-center gap-1 ${stock.up ? 'text-emerald-500' : 'text-rose-500'}`}>
                  {stock.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                  {stock.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1">
          <FinBot />
        </div>
      </div>
    </div>
  );
}