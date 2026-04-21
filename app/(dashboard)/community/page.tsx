"use client";
import { MessageSquare, ThumbsUp, Share2, Plus, TrendingUp, Users } from "lucide-react";

const posts = [
  {
    id: 1,
    author: "Elena Rodriguez",
    role: "Strategis Senior",
    time: "2j yang lalu",
    tag: "Strategi Pasar",
    title: "Argumen untuk posisi defensif di Q3: Mengapa saya keluar dari sektor Teknologi.",
    content: "Dengan volatilitas terbaru di sektor semikonduktor, saya mulai memindahkan 15% portofolio saya ke barang konsumsi dan layanan kesehatan. Rasio risiko-terhadap-imbal hasil untuk teknologi pertumbuhan tinggi tampaknya condong ke arah negatif dalam jangka pendek...",
    likes: "1.2k",
    komentar: 84
  },
  {
    id: 2,
    author: "Marcus Chen",
    role: "Investor Pertumbuhan",
    time: "5j yang lalu",
    tag: "Wawasan Kripto",
    title: "Solusi penskalaan L2 akhirnya mencapai kematangan. Bagaimana menurut Anda?",
    content: "Melihat volume transaksi Arbitrum dan Optimism dibandingkan dengan Mainnet. Kita melihat pergeseran nyata di mana 'aktivitas' sebenarnya terjadi.",
    likes: "432",
    komentar: 12
  }
];

export default function CommunityPage() {
  return (
    <div className="max-w-7xl mx-auto flex gap-8">

      <div className="flex-1 space-y-6">

        <div className="flex gap-8 border-b border-slate-100 pb-2">
          {["Tren", "Terbaru", "Diikuti"].map((tab, i) => (
            <button key={tab} className={`pb-4 text-sm font-bold transition-all ${i === 0 ? "text-blue-600 border-b-2 border-blue-600" : "text-slate-400 hover:text-slate-600"}`}>
              {tab}
            </button>
          ))}
        </div>

        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-slate-200 rounded-2xl overflow-hidden">
                   <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${post.author}`} alt="avatar" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{post.author}</h4>
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">{post.role} • {post.time}</p>
                </div>
              </div>
              <span className="bg-blue-50 text-blue-600 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">{post.tag}</span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">{post.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">{post.content}</p>

            <div className="flex items-center justify-between pt-6 border-t border-slate-50">
              <div className="flex gap-6">
                <button className="flex items-center gap-2 text-slate-400 hover:text-blue-600 transition-colors">
                  <ThumbsUp className="w-4 h-4" /> <span className="text-xs font-bold">{post.likes}</span>
                </button>
                <button className="flex items-center gap-2 text-slate-400 hover:text-blue-600 transition-colors">
                  <MessageSquare className="w-4 h-4" /> <span className="text-xs font-bold">{post.komentar} komentar</span>
                </button>
              </div>
              <button className="text-slate-400 hover:text-slate-600"><Share2 className="w-4 h-4" /></button>
            </div>
          </div>
        ))}
      </div>

      <div className="w-80 space-y-6 hidden xl:block">

        <div className="bg-white rounded-[32px] p-6 border border-slate-100">
          <h3 className="font-bold text-slate-900 mb-6">Topik Tren</h3>
          <div className="space-y-6">
            {["#FedRates", "#AIBoom", "#GoldStandard"].map((topic) => (
              <div key={topic} className="flex justify-between items-center group cursor-pointer">
                <div>
                  <p className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{topic}</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">2.4k postingan minggu ini</p>
                </div>
                <TrendingUp className="w-4 h-4 text-slate-200 group-hover:text-blue-400" />
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-3 rounded-2xl border border-slate-100 text-xs font-bold text-slate-500 hover:bg-slate-50 transition-colors">LIHAT SEMUA TOPIK</button>
        </div>

        <div className="bg-white rounded-[32px] p-6 border border-slate-100">
           <h3 className="font-bold text-slate-900 mb-6">Pemikir Top</h3>
           <div className="space-y-4">
              {["Julia Vance", "David K."].map((name) => (
                <div key={name} className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-slate-100 rounded-lg"></div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{name}</p>
                      <p className="text-[10px] text-slate-400 font-bold">14.2k reputasi</p>
                    </div>
                  </div>
                  <button className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Ikuti</button>
                </div>
              ))}
           </div>
        </div>

        <button className="w-full bg-blue-600 text-white h-16 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/20 hover:scale-[1.02] transition-transform">
          <Plus className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}