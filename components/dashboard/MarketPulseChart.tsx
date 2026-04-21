"use client";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { time: '09:00', value: 7180 },
  { time: '10:00', value: 7210 },
  { time: '11:00', value: 7195 },
  { time: '12:00', value: 7225 },
  { time: '13:00', value: 7240 },
  { time: '14:00', value: 7210 },
  { time: '15:00', value: 7260 },
  { time: '16:00', value: 7245 },
];

export default function MarketPulseChart() {
  return (
    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h3 className="text-lg font-bold text-gray-900">Indeks Harga Saham Gabungan (IHSG)</h3>
          <p className="text-sm text-gray-500">Real-time performance benchmark</p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-black text-gray-900">7,245.12</div>
          <div className="text-sm font-bold text-emerald-500">+1.24% (+88.10)</div>
        </div>
      </div>

      <div className="h-[250px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2563eb" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="time" 
              axisLine={false} 
              tickLine={false} 
              tick={{fontSize: 10, fill: '#94a3b8'}}
              dy={10}
            />
            <Tooltip 
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
            />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="#2563eb" 
              strokeWidth={3} 
              fillOpacity={1} 
              fill="url(#colorValue)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}