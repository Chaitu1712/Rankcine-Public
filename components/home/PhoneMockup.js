import { Star, Heart, Download, Sparkles, Home, Compass, User, PlayCircle } from 'lucide-react';

const contents = [
  { title: "Midnight Echoes", rating: "4.8", gradient: "from-sky-400 to-indigo-500", type: "MOVIE" },
  { title: "Neon Genesis", rating: "4.9", gradient: "from-fuchsia-400 to-pink-500", type: "SHORT" },
  { title: "The Last Horizon", rating: "4.5", gradient: "from-amber-400 to-orange-500", type: "SERIES" },
];

export default function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[280px] sm:w-[300px] h-[600px] rounded-[3rem] border-[8px] border-rc-black bg-[#f8f9fa] shadow-2xl overflow-hidden ring-4 ring-rc-purple/10">

      {/* Dynamic Island / Notch */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 h-6 w-24 bg-black rounded-full z-50 flex items-center justify-between px-2">
        <div className="h-2 w-2 rounded-full bg-white/10"></div>
        <div className="h-1.5 w-1.5 rounded-full bg-emerald-400/80 shadow-[0_0_8px_#34d399]"></div>
      </div>

      {/* Top Half - Gradient Hero */}
      <div className="relative bg-gradient-to-br from-rc-purple-dark via-rc-purple to-indigo-400 px-6 pt-14 pb-14 text-white overflow-hidden">
        {/* Glossy overlay effect */}
        <div className="absolute -top-20 -right-20 w-48 h-48 bg-white/20 blur-3xl rounded-full pointer-events-none"></div>

        <div className="flex items-center justify-between mb-6">
          <span className="text-[10px] font-bold tracking-widest opacity-80">9:41</span>
          <div className="flex gap-1.5 items-center">
            <div className="h-1.5 w-1.5 bg-white rounded-full"></div>
            <div className="h-1.5 w-1.5 bg-white/50 rounded-full"></div>
            <div className="h-1.5 w-1.5 bg-white/50 rounded-full"></div>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-6">
          <Sparkles size={20} className="text-pink-300" />
          <p className="font-display text-2xl font-black tracking-tight">RANKCINE</p>
        </div>

        <button className="w-full rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 py-3.5 text-[10px] font-bold text-white uppercase tracking-wider mb-3 transition-transform hover:scale-[1.02] shadow-lg">
          Join The Community
        </button>
        <button className="w-full rounded-2xl bg-white py-3.5 text-[10px] font-bold text-rc-purple-dark uppercase tracking-wider flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] shadow-xl">
          <Download size={14} /> Download App
        </button>
      </div>

      {/* Bottom Half - Content Feed */}
      <div className="relative -mt-6 bg-[#f8f9fa] rounded-t-3xl h-full p-5 shadow-[0_-10px_20px_rgba(0,0,0,0.08)] z-10">
        <div className="flex justify-between items-center mb-5">
          <p className="text-xs font-black text-rc-black tracking-wide uppercase">Your Feed</p>
          <span className="text-[9px] font-bold text-rc-purple bg-rc-purple-light/50 px-2.5 py-1 rounded-lg">LIVE</span>
        </div>

        <div className="flex gap-2 mb-6">
          <span className="flex-1 text-center rounded-xl bg-rc-black py-2.5 text-[9px] font-bold text-white shadow-md">
            ✓ REVIEWED
          </span>
          <span className="flex-1 text-center rounded-xl bg-white border border-gray-200 py-2.5 text-[9px] font-bold text-gray-500">
            UPLOADED
          </span>
        </div>

        <ul className="space-y-4">
          {contents.map((item, idx) => (
            <li key={idx} className="flex items-center gap-3 group cursor-pointer">
              <div className={`h-12 w-12 shrink-0 rounded-2xl bg-gradient-to-br ${item.gradient} shadow-sm flex items-center justify-center text-white/50 group-hover:text-white transition-colors`}>
                <PlayCircle size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="truncate text-xs font-extrabold text-rc-black mb-1">{item.title}</p>
                <div className="flex items-center gap-1.5">
                  <Star size={10} className="text-amber-400 fill-amber-400" />
                  <span className="text-[10px] font-bold text-gray-600">{item.rating}</span>
                  <span className="text-[8px] font-bold text-gray-400 ml-1 bg-gray-200 px-1.5 py-0.5 rounded-sm">{item.type}</span>
                </div>
              </div>
              <button className="h-8 w-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm text-gray-400 hover:text-pink-500 hover:bg-pink-50 transition-colors">
                <Heart size={12} />
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Floating Dock (Bottom Nav) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-5/6 bg-rc-black/95 backdrop-blur-xl rounded-2xl px-6 py-3.5 flex justify-between items-center shadow-2xl z-50 border border-gray-800">
        <Home size={18} className="text-white cursor-pointer hover:scale-110 transition-transform" />
        <Compass size={18} className="text-gray-500 cursor-pointer hover:text-white transition-colors" />
        <div className="w-11 h-11 bg-gradient-to-br from-rc-purple to-pink-500 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(108,92,231,0.5)] -my-6 border-4 border-[#f8f9fa] cursor-pointer hover:scale-105 transition-transform">
          <Sparkles size={16} className="text-white" />
        </div>
        <Star size={18} className="text-gray-500 cursor-pointer hover:text-white transition-colors" />
        <User size={18} className="text-gray-500 cursor-pointer hover:text-white transition-colors" />
      </div>

    </div>
  );
}