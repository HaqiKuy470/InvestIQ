"use client";
import { TrendingUp, Plus, Minus, Trophy, Target, ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function ChallengePage() {
  const leaderboard = [
    { name: "Rizky Pratama", balance: "Rp 12.890.000", profit: "+12.4%", rank: 1 },
    { name: "Sarah Wijaya", balance: "Rp 11.450.000", profit: "+8.2%", rank: 2 },
    { name: "Budi Santoso", balance: "Rp 10.920.000", profit: "+5.7%", rank: 3 },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8">

      <div>
        <h1 className="text-4xl font-black text-slate-900 tracking-tight">Tantangan Investasi</h1>
        <p className="text-slate-500 mt-2">Latih kemampuan investasimu tanpa risiko nyata.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-[40px] p-10 border border-slate-100 shadow-sm overflow-hidden relative">
            <div className="flex justify-between items-start mb-10 relative z-10">
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Saldo Virtual</p>
                <h2 className="text-5xl font-black text-slate-900 tracking-tighter">Rp 10.250.000</h2>
                <div className="mt-2 text-emerald-500 font-bold flex items-center gap-1">
                  <span className="bg-emerald-50 px-2 py-0.5 rounded text-xs">+Rp 250.000 (2,5%)</span>
                  <span className="text-xs text-slate-400 font-medium">sejak minggu lalu</span>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 shadow-lg shadow-blue-600/20">
                  <Plus className="w-4 h-4" /> Beli Aset
                </button>
                <button className="bg-slate-50 text-slate-600 px-6 py-3 rounded-2xl border border-slate-100 font-bold flex items-center gap-2">
                  <Minus className="w-4 h-4" /> Jual Aset
                </button>
              </div>
            </div>

            <div className="h-[250px] flex items-end gap-2 relative">
               <svg viewBox="0 0 800 200" className="absolute inset-0 w-full h-full text-blue-600 fill-none opacity-20">
                  <path d="M0,150 Q200,180 400,100 T800,50" stroke="currentColor" strokeWidth="4" />
               </svg>

               {["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"].map((day) => (
                 <div key={day} className="flex-1 flex flex-col items-center gap-4 group">
                    <div className="w-full bg-slate-50 rounded-t-lg transition-all group-hover:bg-blue-50" style={{height: `${Math.random() * 60 + 20}%`}}></div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{day}</span>
                 </div>
               ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="bg-white p-6 rounded-[32px] border border-slate-100 flex items-center justify-between">
                <div>
                   <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Denyut Pasar</p>
                   <div className="flex items-center gap-2">
                      <span className="text-2xl font-black text-slate-900">78%</span>
                      <span className="text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded">Sentimen Bullish</span>
                   </div>
                </div>
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-500">
                   <TrendingUp className="w-6 h-6" />
                </div>
             </div>
             <div className="bg-white p-6 rounded-[32px] border border-slate-100 flex flex-col justify-between">
                <div className="flex justify-between items-center mb-4">
                   <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Tantangan Mingguan</p>
                   <span className="text-xs font-bold text-blue-600">50%</span>
                </div>
                <div className="space-y-2">
                   <p className="text-sm font-bold text-slate-900">Target Keuntungan: Rp 500rb</p>
                   <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-blue-600 h-full w-1/2"></div>
                   </div>
                </div>
             </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-[40px] p-8 border border-slate-100 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-500" /> Papan Peringkat
              </h3>
              <button className="text-[10px] font-bold text-blue-600 uppercase">Lihat Semua</button>
            </div>

            <div className="space-y-6">
              {leaderboard.map((user) => (
                <div key={user.rank} className="flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-12 h-12 bg-slate-100 rounded-2xl overflow-hidden grayscale group-hover:grayscale-0 transition-all">
                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`} alt="avatar" />
                      </div>
                      <div className="absolute -top-2 -left-2 w-6 h-6 bg-slate-900 text-white rounded-full flex items-center justify-center text-[10px] font-black border-4 border-white">
                        {user.rank}
                      </div>
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{user.name}</p>
                      <p className="text-xs text-slate-400 font-medium">{user.balance}</p>
                    </div>
                  </div>
                  <span className="text-xs font-black text-emerald-500">{user.profit}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-slate-50">
               <p className="text-[10px] text-center text-slate-400 font-medium">Peringkat Anda saat ini adalah <span className="font-bold text-slate-900">#142</span> dari 2.450 peserta</p>
            </div>
          </div>

          <div className="bg-blue-600 rounded-[40px] p-8 text-white shadow-xl shadow-blue-600/20">
             <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60 mb-2">Langkah Selanjutnya</p>
             <h3 className="text-xl font-bold leading-tight mb-6">Lengkapi profil risiko Anda untuk membuka aset lanjutan.</h3>
             <button className="w-full bg-white text-blue-600 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-colors">Ikuti Kuis</button>
          </div>
        </div>
      </div>
    </div>
  );
}