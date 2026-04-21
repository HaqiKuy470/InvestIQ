"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  GraduationCap,
  BrainCircuit,
  Users,
  TrendingUp,
  Settings,
  HelpCircle,
  Zap
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { name: "Alur Belajar", icon: GraduationCap, path: "/learnpath" },
    { name: "Penasihat", icon: BrainCircuit, path: "/advisor" },
    { name: "Komunitas", icon: Users, path: "/community" },
    { name: "Denyut Pasar", icon: TrendingUp, path: "/market-pulse" },
  ];

  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-100 flex flex-col justify-between fixed left-0 top-0">
      <div>

        <div className="p-6">
          <h1 className="text-2xl font-bold text-blue-600 flex items-center gap-2">
            <TrendingUp className="w-6 h-6" /> InvestIQ
          </h1>
        </div>

        <nav className="mt-6 px-4 space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname.includes(item.path);
            return (
              <Link key={item.name} href={item.path}>
                <span className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  isActive ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-50"
                }`}>
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="p-4 space-y-2">
        <Link href="/start-challenge" className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium transition-colors">
          <Zap className="w-4 h-4 fill-current" /> Mulai Tantangan
        </Link>
        <div className="mt-4 space-y-1">
          <Link href="#" className="flex items-center gap-3 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900">
            <Settings className="w-5 h-5" /> Pengaturan
          </Link>
          <Link href="/help" className="flex items-center gap-3 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900">
            <HelpCircle className="w-5 h-5" /> Bantuan
          </Link>
        </div>
      </div>
    </aside>
  );
}