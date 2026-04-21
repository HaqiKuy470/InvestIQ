"use client";
import Link from "next/link";
import { TrendingUp, ArrowRight, ShieldCheck, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white flex overflow-hidden font-sans">

      <div className="flex-1 flex flex-col justify-center px-12 lg:px-24 relative z-10 bg-white">

        <div className="absolute top-12 left-12 lg:left-24 flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
            <TrendingUp className="w-6 h-6" />
          </div>
          <span className="text-2xl font-black text-slate-900 tracking-tight">InvestIQ</span>
        </div>

        <div className="max-w-xl">
          <h1 className="text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter">
            Belajar, Analisis, dan Investasi — <br />
            Semua dalam Satu <span className="text-blue-600 italic">Platform AI.</span>
          </h1>
          <p className="mt-8 text-xl text-slate-500 font-medium leading-relaxed">
            Pendamping Investasi Berbasis AI Anda. Bangun kekayaan dengan portofolio presisi dan kecerdasan pasar real-time.
          </p>

          <div className="mt-12 flex items-center gap-4">
            <Link
              href="/dashboard"
              className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 flex items-center gap-2 group"
            >
              Daftar <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/dashboard"
              className="bg-slate-50 text-slate-900 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-100 transition-all border border-slate-100"
            >
              Masuk
            </Link>
          </div>

          <div className="mt-20 grid grid-cols-3 gap-8 border-t border-slate-100 pt-10">
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Arsitektur</p>
              <p className="font-bold text-slate-900">Neural-ledger v4.2</p>
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Jangkauan Pasar</p>
              <p className="font-bold text-slate-900">Ekuitas Global</p>
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Mode Analisis</p>
              <p className="font-bold text-slate-900 italic">Aliran Real-time</p>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex flex-1 bg-slate-50 relative items-center justify-center p-12">

        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
        </div>

        <div className="absolute top-12 right-12 flex items-center gap-2 bg-white/80 backdrop-blur-md border border-slate-200 px-4 py-2 rounded-full shadow-sm">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
          <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Buku Besar Global Aktif</span>
        </div>

        <div className="relative w-full max-w-lg">

          <div className="bg-white rounded-[40px] p-10 shadow-2xl shadow-slate-200 border border-white relative z-20 animate-in slide-in-from-bottom-12 duration-1000">
            <div className="flex justify-between items-start mb-8">
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-1">Alfa Portofolio</p>
                <h2 className="text-5xl font-black text-slate-900">+24.8%</h2>
              </div>
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6" />
              </div>
            </div>

            <svg viewBox="0 0 400 100" className="w-full h-32 text-blue-600 stroke-current fill-none">
              <path d="M0,80 Q50,20 100,60 T200,40 T300,70 T400,20" strokeWidth="4" strokeLinecap="round" />
            </svg>

            <div className="w-full bg-slate-100 h-2 rounded-full mt-8 overflow-hidden">
              <div className="bg-blue-600 h-full w-[70%] rounded-full"></div>
            </div>
          </div>

          <div className="absolute -bottom-16 -left-16 bg-blue-500 text-white p-8 rounded-[32px] rounded-bl-none shadow-2xl shadow-blue-500/30 max-w-xs z-30 animate-in zoom-in duration-700 delay-300">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-4">
              <Zap className="w-5 h-5 fill-current" />
            </div>
            <p className="text-sm font-medium leading-relaxed">
              "AI menghitung pola risiko berdasarkan 15 tahun volatilitas pasar, memberi Anda keunggulan dalam setiap perdagangan."
            </p>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-blue-100/50 rounded-full blur-[120px] -z-10"></div>
        </div>
      </div>
    </div>
  );
}