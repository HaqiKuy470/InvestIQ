"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Clock, BarChart, Zap, ShieldCheck } from "lucide-react";

const options = [
  {
    id: "short",
    title: "Jangka Pendek",
    desc: "Kurang dari 1 tahun. Cocok untuk dana darurat atau kebutuhan mendesak.",
    icon: ShieldCheck,
  },
  {
    id: "medium",
    title: "Jangka Menengah",
    desc: "1 hingga 5 tahun. Menyeimbangkan antara keamanan dan potensi imbal hasil.",
    icon: BarChart,
  },
  {
    id: "long",
    title: "Jangka Panjang",
    desc: "Lebih dari 5 tahun. Memaksimalkan pertumbuhan aset melalui bunga majemuk.",
    icon: Zap,
  },
];

export default function RiskProfileQuiz() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      {/* Header Stepper */}
      <div className="flex items-center justify-between mb-12">
        <div>
          <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">Questionnaire</p>
          <h1 className="text-3xl font-black text-slate-900">Risk Profile Discovery</h1>
        </div>
        <div className="text-right">
          <span className="text-4xl font-black text-slate-200">01 <span className="text-lg text-slate-400">/ 05</span></span>
          <div className="w-48 bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden">
            <div className="bg-blue-600 h-full w-1/5"></div>
          </div>
        </div>
      </div>

      <div className="space-y-12">
        {/* Question Title */}
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Berapa lama kamu berencana berinvestasi?</h2>
          <p className="text-slate-500">Tujuan investasi kamu menentukan jangka waktu yang paling optimal untuk pertumbuhan aset.</p>
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {options.map((opt) => {
            const isSelected = selected === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => setSelected(opt.id)}
                className={`text-left p-8 rounded-[24px] border-2 transition-all duration-300 group ${
                  isSelected 
                  ? "border-blue-600 bg-blue-50/50 shadow-lg shadow-blue-600/5 ring-4 ring-blue-600/5" 
                  : "border-slate-100 bg-white hover:border-slate-200"
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors ${
                  isSelected ? "bg-blue-600 text-white" : "bg-slate-50 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-500"
                }`}>
                  <opt.icon className="w-6 h-6" />
                </div>
                <h3 className={`font-bold text-lg mb-2 ${isSelected ? "text-blue-700" : "text-slate-900"}`}>{opt.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{opt.desc}</p>
              </button>
            );
          })}
        </div>

        {/* Context Box */}
        <div className="bg-slate-50 rounded-[32px] p-10 flex flex-col md:flex-row items-center gap-10 border border-slate-100">
          <div className="w-48 h-48 bg-slate-200 rounded-3xl flex-shrink-0 relative overflow-hidden shadow-inner">
             {/* Simulating the Illustration in riskprofilekuisoiner.jpg */}
             <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <Clock className="w-24 h-24 text-slate-900" />
             </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-slate-900">Why does this matter?</h4>
            <p className="text-slate-600 leading-relaxed max-w-lg">
              Time horizon is the most critical variable in determining your asset allocation. 
              Longer timelines allow you to weather market volatility for higher historical returns.
            </p>
            <div className="flex gap-4 pt-2">
              <span className="text-xs font-bold text-blue-600 flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div> Smart Allocation
              </span>
              <span className="text-xs font-bold text-blue-600 flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div> Data Driven
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between pt-6">
          <button className="flex items-center gap-2 text-slate-500 font-bold hover:text-slate-900 transition-colors">
            <ChevronLeft className="w-5 h-5" /> Sebelumnya
          </button>
          <button 
            disabled={!selected}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-200 disabled:cursor-not-allowed text-white px-10 py-4 rounded-2xl font-bold flex items-center gap-2 shadow-lg shadow-blue-600/20 transition-all active:scale-95"
          >
            Lanjut <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}