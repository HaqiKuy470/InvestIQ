"use client";
import { 
  CheckCircle2, 
  Play, 
  Lock, 
  Clock, 
  BookOpen, 
  Trophy, 
  ArrowRight,
  Sparkles
} from "lucide-react";

// Dummy Data
const modules = [
  {
    id: 1,
    level: "Level 1: Fundamentals",
    title: "Dasar Saham",
    desc: "Memahami kepemilikan perusahaan melalui ekuitas. Pengenalan bursa efek, harga pasar, dan psikologi trading dasar.",
    duration: "45 mins",
    lessons: 8,
    status: "completed",
    image: "bg-slate-800" // Placeholder warna untuk image
  },
  {
    id: 2,
    level: "Level 1: Diversification",
    title: "Reksa Dana",
    desc: "Kekuatan investasi kolektif. Memahami peran Manajer Investasi, pembagian aset, dan strategi dollar-cost averaging.",
    duration: "1h 20m",
    lessons: 12,
    status: "in-progress",
    image: "bg-blue-900"
  },
  {
    id: 3,
    level: "Level 2: Fixed Income",
    title: "Obligasi",
    desc: "Mempelajari instrumen surat utang negara dan korporasi. Memahami kupon, tenor, dan manajemen risiko suku bunga.",
    duration: "1h 05m",
    lessons: 6,
    status: "locked",
    image: "bg-slate-900"
  },
  {
    id: 4,
    level: "Level 2: Advanced Indexing",
    title: "ETF",
    desc: "Hibrida saham dan reksa dana. Cara efisien berinvestasi di seluruh sektor industri dengan biaya rendah.",
    duration: "55 mins",
    lessons: 5,
    status: "locked",
    image: "bg-zinc-800"
  },
  {
    id: 5,
    level: "Level 3: Expert Strategy",
    title: "Strategi Lanjutan",
    desc: "Analisis fundamental mendalam, valuasi DCF, dan hedging portofolio menggunakan instrumen derivatif.",
    duration: "2h 45m",
    lessons: 15,
    status: "locked",
    image: "bg-black"
  }
];

export default function LearnPathPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-10 pb-20">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-6">
        <div className="max-w-2xl">
          <span className="bg-blue-50 text-blue-600 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-blue-100">
            Curated Curriculum
          </span>
          <h1 className="text-4xl font-black text-slate-900 mt-4 leading-tight">
            Master the Art of <span className="text-blue-600">Wealth Building</span>
          </h1>
          <p className="text-slate-500 mt-3 text-sm leading-relaxed">
            Your architectural blueprint to financial literacy. Progress through structured 
            technical modules designed for precision and clarity.
          </p>
        </div>

        {/* Overall Progress Widget */}
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm w-full md:w-64">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Overall Progress</span>
            <span className="text-blue-600 font-black">42%</span>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full mb-4">
            <div className="bg-blue-600 h-full rounded-full w-[42%]"></div>
          </div>
          <div className="flex items-start gap-2">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <p className="text-[10px] text-slate-500 leading-tight">AI estimates 4 more modules to Level 2</p>
          </div>
        </div>
      </div>

      {/* Modules List */}
      <div className="space-y-4">
        {modules.map((mod) => (
          <div 
            key={mod.id} 
            className={`group relative bg-white border rounded-[32px] overflow-hidden transition-all duration-300 flex flex-col md:flex-row ${
              mod.status === 'locked' ? 'opacity-70 grayscale-[0.5]' : 'hover:border-blue-200 hover:shadow-xl hover:shadow-blue-600/5'
            } ${mod.status === 'in-progress' ? 'border-blue-200 ring-1 ring-blue-100' : 'border-slate-100'}`}
          >
            {/* Image Placeholder */}
            <div className={`w-full md:w-56 h-48 md:h-auto ${mod.image} flex items-center justify-center relative overflow-hidden`}>
               {mod.status === 'locked' && <Lock className="w-8 h-8 text-white/20 absolute z-10" />}
               <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
               <span className="text-white/10 font-black text-6xl select-none">{mod.id}</span>
            </div>

            {/* Content */}
            <div className="flex-1 p-8 flex flex-col justify-center">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">{mod.level}</span>
                {mod.status === 'completed' && <CheckCircle2 className="w-5 h-5 text-emerald-500" />}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{mod.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed max-w-xl mb-6">{mod.desc}</p>
              
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-slate-400">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs font-bold">{mod.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <BookOpen className="w-4 h-4" />
                  <span className="text-xs font-bold">{mod.lessons} Lessons</span>
                </div>
              </div>
            </div>

            {/* Action Button Area */}
            <div className="w-full md:w-24 border-t md:border-t-0 md:border-l border-slate-50 flex items-center justify-center p-6 md:p-0">
              {mod.status === 'in-progress' ? (
                <button className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-600/30 group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 fill-current" />
                </button>
              ) : mod.status === 'locked' ? (
                <Lock className="w-5 h-5 text-slate-300" />
              ) : (
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-300">
                   <ArrowRight className="w-5 h-5" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Widgets Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Weekly Goal */}
        <div className="bg-slate-50 p-6 rounded-[32px] border border-slate-100 flex flex-col justify-between h-40">
           <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Weekly Goal</span>
           <div>
              <div className="text-2xl font-black text-slate-900 mb-1">3/5 Modules</div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className={`h-1.5 flex-1 rounded-full ${i <= 3 ? 'bg-blue-600' : 'bg-slate-200'}`}></div>
                ))}
              </div>
           </div>
        </div>

        {/* Skill Points */}
        <div className="bg-slate-50 p-6 rounded-[32px] border border-slate-100 flex flex-col justify-between h-40">
           <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Skill Points</span>
           <div>
              <div className="text-2xl font-black text-slate-900 mb-1">1,240 XP</div>
              <p className="text-[10px] font-bold text-blue-600 uppercase">Top 15% this month</p>
           </div>
        </div>

        {/* Take Quiz CTA */}
        <div className="bg-blue-600 p-6 rounded-[32px] text-white flex flex-col justify-between h-40 shadow-lg shadow-blue-600/20 group cursor-pointer hover:bg-blue-700 transition-colors">
           <p className="text-sm font-medium text-blue-100">Feeling confident?</p>
           <div className="flex justify-between items-end">
              <h3 className="text-xl font-bold">Take the Quiz</h3>
              <div className="bg-white text-blue-600 p-2 rounded-xl group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-5 h-5" />
              </div>
           </div>
        </div>
      </div>

    </div>
  );
}