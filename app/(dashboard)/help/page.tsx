"use client";
import { Search, MessageCircle, FileText, Shield, Mail, ExternalLink, Zap } from "lucide-react";

export default function HelpPage() {
  const categories = [
    { title: "Mulai Investasi", icon: Zap, desc: "Panduan dasar bagi pemula untuk mulai membangun portofolio." },
    { title: "Keamanan Akun", icon: Shield, desc: "Pelajari cara kami melindungi aset dan data pribadi Anda." },
    { title: "Panduan Teknis", icon: FileText, desc: "Dokumentasi API Neural-ledger dan integrasi ekosistem." },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-12 pb-20">
      {/* Search Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-black text-slate-900">Apa yang bisa kami bantu?</h1>
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Cari topik bantuan (misal: 'cara tarik dana')" 
            className="w-full bg-white border border-slate-100 rounded-2xl py-4 pl-12 pr-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
          />
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <div key={i} className="bg-white p-8 rounded-[32px] border border-slate-100 hover:border-blue-200 transition-all group cursor-pointer">
            <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all mb-6">
              <cat.icon className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">{cat.title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed">{cat.desc}</p>
          </div>
        ))}
      </div>

      {/* Support Section */}
      <div className="bg-blue-600 rounded-[40px] p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl shadow-blue-600/20">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Masih butuh bantuan?</h2>
          <p className="text-blue-100 opacity-80">Tim kami siap membantu Anda 24/7 melalui chat atau email.</p>
        </div>
        <div className="flex gap-4">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-blue-50 transition-colors">
            <MessageCircle className="w-5 h-5" /> Live Chat
          </button>
          <button className="bg-blue-700 text-white border border-blue-500 px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-blue-800 transition-colors">
            <Mail className="w-5 h-5" /> Email Support
          </button>
        </div>
      </div>
    </div>
  );
}