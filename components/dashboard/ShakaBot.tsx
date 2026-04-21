"use client";
import { Send, Bot, User, CircleDollarSign, BarChart3, Info } from "lucide-react";

export default function ShakaBot() {
  return (
    <div className="flex flex-col h-[600px] bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">

      <div className="p-4 border-b border-gray-50 flex items-center gap-3">
        <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
          <Bot className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-bold text-gray-900 text-sm">ShakaBot Advisor</h3>
          <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Intelligent Financial Intelligence</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/30">
        <div className="text-center">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-white px-3 py-1 rounded-full border border-gray-100">Today, 14 October</span>
        </div>

        <div className="flex gap-3 max-w-[80%]">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex-shrink-0 flex items-center justify-center text-white">
            <Bot className="w-5 h-5" />
          </div>
          <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-gray-100">
            <p className="text-sm text-gray-700 leading-relaxed">
              Halo! Saya ShakaBot, asisten finansial cerdas Anda. Ada yang bisa saya bantu terkait investasi atau perencanaan keuangan Anda hari ini?
            </p>
            <span className="text-[10px] text-gray-400 mt-2 block">09:00 AM • System Verified</span>
          </div>
        </div>

        <div className="flex gap-3 justify-end">
          <div className="bg-blue-600 p-4 rounded-2xl rounded-tr-none shadow-md max-w-[80%]">
            <p className="text-sm text-white">Apa itu reksa dana?</p>
            <span className="text-[10px] text-blue-200 mt-2 block text-right">09:05 AM</span>
          </div>
          <div className="w-8 h-8 bg-slate-200 rounded-lg flex-shrink-0 flex items-center justify-center text-slate-500">
            <User className="w-5 h-5" />
          </div>
        </div>

        <div className="flex gap-3 max-w-[90%]">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex-shrink-0 flex items-center justify-center text-white">
            <Bot className="w-5 h-5" />
          </div>
          <div className="bg-white rounded-2xl rounded-tl-none shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4 border-b border-gray-50 bg-white">
              <h4 className="font-bold text-blue-600 mb-2">Reksa Dana</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Reksa Dana adalah wadah investasi yang digunakan untuk menghimpun dana dari masyarakat pemodal (investor).
              </p>
            </div>
            <div className="p-4 grid grid-cols-2 gap-3 bg-gray-50/50">
              <div className="bg-white p-3 rounded-xl border border-gray-100">
                <div className="flex items-center gap-2 text-blue-600 mb-1">
                  <CircleDollarSign className="w-4 h-4" />
                  <span className="text-[10px] font-bold uppercase">Pasar Uang</span>
                </div>
                <p className="text-[10px] text-gray-500">Deposito & obligasi jatuh tempo &lt; 1 tahun.</p>
              </div>
              <div className="bg-white p-3 rounded-xl border border-gray-100">
                <div className="flex items-center gap-2 text-blue-600 mb-1">
                  <BarChart3 className="w-4 h-4" />
                  <span className="text-[10px] font-bold uppercase">Saham</span>
                </div>
                <p className="text-[10px] text-gray-500">Penyertaan modal pada perusahaan terbuka.</p>
              </div>
            </div>
            <div className="p-4 italic text-sm text-gray-500 flex gap-2 items-start bg-white">
              <Info className="w-4 h-4 text-blue-400 mt-0.5" />
              Ini adalah pilihan tepat bagi investor pemula karena dikelola oleh profesional.
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 bg-white border-t border-gray-100">
        <div className="relative">
          <input
            type="text"
            placeholder="Tanya tentang investasi, portofolio..."
            className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-3 px-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
            <Send className="w-4 h-4" />
          </button>
        </div>
        <p className="text-[10px] text-center text-gray-400 mt-3">ShakaBot can make mistakes. Verify important financial decisions.</p>
      </div>
    </div>
  );
}