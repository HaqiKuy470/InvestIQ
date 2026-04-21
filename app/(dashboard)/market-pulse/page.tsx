"use client";
import { ArrowUpRight, ArrowDownRight, Sparkles, Filter,TrendingUp } from "lucide-react";
import MarketPulseChart from "@/components/dashboard/MarketPulseChart";

const news = [
  {
    category: "Saham",
    time: "2 Jam Lalu",
    title: "IHSG Berpotensi Menguat Terbatas di Tengah Rilis Data Inflasi AS",
    summary: "Pasar domestik diperkirakan akan merespons positif stabilnya inflasi inti AS, meskipun investor tetap waspada terhadap volatilitas nilai tukar Rupiah.",
    sentiment: "Positif",
    color: "emerald"
  },
  {
    category: "Obligasi",
    time: "5 Jam Lalu",
    title: "Yield SBN Tenor 10 Tahun Menurun, Minat Investor Asing Kembali Pulih",
    summary: "Penurunan yield menunjukkan peningkatan harga obligasi pemerintah. Inflow modal asing mulai terlihat pada seri benchmark FR0101.",
    sentiment: "Netral",
    color: "blue"
  },
  {
    category: "Teknologi",
    time: "8 Jam Lalu",
    title: "Ekosistem Startup Digital Hadapi 'Winter' Berkepanjangan di 2024",
    summary: "Pendanaan modal ventura terus menyusut. Efisiensi operasional dan profitabilitas kini menjadi fokus utama dibandingkan pertumbuhan agresif.",
    sentiment: "Berisiko",
    color: "rose"
  }
];

export default function MarketPulsePage() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">

      <div>
        <h1 className="text-4xl font-black text-slate-900">Denyut Pasar</h1>
        <p className="text-slate-500 mt-2">Wawasan pasar harian didukung oleh AI</p>
      </div>

      <div className="bg-emerald-50/50 border border-emerald-100 rounded-[32px] p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-[0.2em]">Laporan Sentimen</p>
            <h3 className="text-xl font-bold text-emerald-900">Sentimen Pasar Hari Ini: <span className="text-emerald-500">Bullish</span></h3>
          </div>
        </div>
        <button className="bg-white border border-emerald-100 text-emerald-600 px-6 py-2.5 rounded-2xl text-sm font-bold hover:bg-emerald-50 transition-colors">Lihat Detail</button>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-2 bg-slate-100 p-1.5 rounded-2xl">
          {["Semua", "Saham", "Reksa Dana", "Obligasi", "ETF"].map((tab, i) => (
            <button key={tab} className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${i === 0 ? "bg-blue-600 text-white shadow-md" : "text-slate-500 hover:bg-white"}`}>
              {tab}
            </button>
          ))}
        </div>
        <button className="flex items-center gap-2 text-slate-500 font-bold text-sm bg-white border border-slate-100 px-4 py-2 rounded-xl">
          <Filter className="w-4 h-4" /> Filter
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {news.map((item, i) => (
          <div key={i} className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm flex flex-col justify-between group hover:border-blue-100 transition-all">
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className={`bg-${item.color}-50 text-${item.color}-600 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest`}>{item.category}</span>
                <span className="text-[10px] font-bold text-slate-400">{item.time}</span>
              </div>
              <h3 className="font-bold text-slate-900 text-lg leading-tight mb-6 group-hover:text-blue-600 transition-colors">{item.title}</h3>

              <div className="bg-slate-50 rounded-2xl p-5 relative overflow-hidden">
                <div className="flex items-center gap-2 text-[10px] font-black text-blue-600 uppercase tracking-widest mb-2">
                  <Sparkles className="w-3 h-3" /> Ringkasan AI
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">{item.summary}</p>
              </div>
            </div>

            <div className="mt-8 flex justify-between items-center">
               <div className={`flex items-center gap-1.5 text-[10px] font-black uppercase text-${item.color}-600`}>
                  <div className={`w-2 h-2 rounded-full bg-${item.color}-500 shadow-[0_0_8px] shadow-${item.color}-500`}></div>
                  {item.sentiment}
               </div>
               <button className="text-blue-600 font-bold text-xs flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                 Baca Selengkapnya <ArrowUpRight className="w-3 h-3" />
               </button>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-4">
        <MarketPulseChart />
      </div>
    </div>
  );
}