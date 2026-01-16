import React from "react";
import {
  MapPin,
  Github,
  Twitter,
  Linkedin,
  Mail,
  ArrowUpRight,
  Monitor,
  Smartphone,
  Database,
  Code,
  Layers,
  Zap,
  Globe,
  Cpu,
} from "lucide-react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8 pt-24 font-sans selection:bg-indigo-500/30">
      {/* Subtle animated background mesh */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[80%] bg-indigo-900/10 rounded-full blur-[100px] animate-slow-spin"></div>
        <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-fuchsia-900/10 rounded-full blur-[100px] animate-float"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[180px]">
        {/* 1. Main Profile Card (Large) */}
        <div
          className="md:col-span-2 md:row-span-2 rounded-[2.5rem] bg-neutral-900/40 backdrop-blur-2xl border border-white/5 p-8 flex flex-col justify-between relative overflow-hidden group hover:border-white/10 transition-all duration-500 animate-fade-in-up opacity-0"
          style={{ animationDelay: "0ms" }}
        >
          <div className="absolute inset-0 bg-linear-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="relative z-10 flex items-start justify-between">
            <div className="relative">
              <div className="w-24 h-24 rounded-full p-1 bg-linear-to-br from-white/10 to-transparent">
                <div className="w-full h-full rounded-full overflow-hidden bg-neutral-800">
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop"
                    alt="Profile"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="absolute bottom-1 right-1 px-2.5 py-0.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[10px] font-medium text-white flex items-center gap-1.5 shadow-lg">
                🇺🇸 LA
              </div>
            </div>

            <button className="px-4 py-2 rounded-full bg-white text-black text-sm font-bold hover:bg-neutral-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.15)] flex items-center gap-2">
              <Mail size={16} /> Contact
            </button>
          </div>

          <div className="relative z-10 space-y-3 mt-4">
            <div className="flex items-center gap-2">
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-neutral-400 transition-all duration-300">
                Alex Morgan
              </h1>
            </div>
            <p className="text-lg text-indigo-200 font-medium flex items-center gap-2">
              Senior Product Designer{" "}
              <span className="w-1 h-1 rounded-full bg-indigo-400"></span>{" "}
              Developer
            </p>
            <p className="text-sm text-neutral-400 max-w-md leading-relaxed">
              Crafting digital experiences that blend aesthetic beauty with
              functional precision. Obsessed with micro-interactions and clean
              code.
            </p>
          </div>
        </div>

        {/* 2. Availability Status */}
        <div
          className="rounded-[2rem] bg-neutral-900/40 backdrop-blur-xl border border-white/5 p-6 flex flex-col justify-between group hover:border-emerald-500/30 transition-colors animate-fade-in-up opacity-0"
          style={{ animationDelay: "100ms" }}
        >
          <div className="flex justify-between items-start">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-2 group-hover:scale-110 transition-transform">
              <Globe size={20} />
            </div>
            <ArrowUpRight
              size={20}
              className="text-neutral-600 group-hover:text-emerald-400 transition-colors"
            />
          </div>
          <div>
            <p className="text-neutral-400 text-xs uppercase tracking-wider font-semibold mb-1">
              Status
            </p>
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <p className="text-lg font-medium text-white">Available</p>
            </div>
          </div>
        </div>

        {/* 3. Social Links Grid */}
        <div
          className="rounded-[2rem] bg-neutral-900/40 backdrop-blur-xl border border-white/5 p-4 grid grid-cols-2 gap-2 animate-fade-in-up opacity-0"
          style={{ animationDelay: "150ms" }}
        >
          {[Github, Twitter, Linkedin, Mail].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="flex items-center justify-center rounded-2xl bg-white/5 border border-white/0 hover:border-white/10 hover:bg-white/10 transition-all text-neutral-400 hover:text-white group relative overflow-hidden"
            >
              <Icon size={22} className="relative z-10" />
              <div className="absolute inset-0 bg-linear-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
          ))}
        </div>

        {/* 4. Stats Card (Wide) */}
        <div
          className="md:col-span-2 rounded-[2rem] bg-neutral-900/40 backdrop-blur-xl border border-white/5 p-8 flex items-center justify-around group hover:border-white/10 transition-colors relative overflow-hidden animate-fade-in-up opacity-0"
          style={{ animationDelay: "200ms" }}
        >
          <div className="absolute top-0 right-0 p-[20%] bg-indigo-500/5 rounded-full blur-[80px] group-hover:bg-indigo-500/10 transition-colors"></div>

          {[
            { label: "Revenue", value: "$124k" },
            { label: "Projects", value: "42" },
            { label: "Clients", value: "18" },
            { label: "Exp.", value: "5 Yrs" },
          ].map((stat, i) => (
            <div key={i} className="text-center relative z-10">
              <p className="text-neutral-500 text-[10px] uppercase tracking-widest font-bold mb-1 group-hover:text-indigo-300 transition-colors">
                {stat.label}
              </p>
              <p className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* 5. Tech Stack (Tall) */}
        <div
          className="md:row-span-2 rounded-[2rem] bg-neutral-900/40 backdrop-blur-xl border border-white/5 p-6 flex flex-col group hover:border-indigo-500/30 transition-colors animate-fade-in-up opacity-0"
          style={{ animationDelay: "250ms" }}
        >
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Cpu size={18} className="text-indigo-400" /> Stack
              </h3>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></div>
          </div>

          <div className="flex-1 space-y-2">
            {[
              { icon: Code, label: "React & Next", color: "text-blue-400" },
              { icon: Database, label: "Postgres", color: "text-sky-300" },
              { icon: Layers, label: "Figma", color: "text-pink-400" },
              { icon: Monitor, label: "Tailwind", color: "text-cyan-400" },
              {
                icon: Smartphone,
                label: "React Native",
                color: "text-violet-400",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/5 text-sm font-medium text-neutral-300 group/item hover:bg-white/10 hover:translate-x-1 transition-all"
              >
                <item.icon
                  size={16}
                  className={`${item.color} opacity-70 group-hover/item:opacity-100 transition-opacity`}
                />
                {item.label}
              </div>
            ))}
          </div>
        </div>

        {/* 6. Recent Work (Large) */}
        <div
          className="md:col-span-2 md:row-span-2 rounded-[2.5rem] bg-neutral-900/40 backdrop-blur-xl border border-white/5 p-8 flex flex-col justify-between group overflow-hidden relative animate-fade-in-up opacity-0"
          style={{ animationDelay: "300ms" }}
        >
          <div className="flex items-center justify-between mb-6 z-10">
            <div>
              <h3 className="text-2xl font-bold text-white">Selected Work</h3>
              <p className="text-neutral-400 text-sm">
                Recent highlights & case studies
              </p>
            </div>
            <button className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black hover:scale-110 transition-all font-bold">
              <ArrowUpRight size={20} />
            </button>
          </div>

          <div className="flex-1 grid grid-cols-2 gap-4 z-10 w-full h-[300px]">
            <div className="rounded-[1.5rem] bg-neutral-800 border border-white/5 overflow-hidden relative group/work cursor-pointer shadow-2xl">
              <div className="absolute inset-x-0 bottom-0 top-1/2 bg-linear-to-t from-black/80 to-transparent opacity-0 group-hover/work:opacity-100 transition-all duration-500 z-10 flex items-end p-6">
                <div>
                  <p className="text-white font-bold text-lg">
                    Fintech Dashboard
                  </p>
                  <p className="text-neutral-300 text-xs">React • D3.js</p>
                </div>
              </div>
              <div className="w-full h-full bg-neutral-800 relative">
                <div className="absolute inset-0 bg-linear-to-tr from-indigo-500/20 via-neutral-900 to-black group-hover/work:scale-110 transition-transform duration-700"></div>
                {/* Decorative Circles */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-white/10 group-hover/work:scale-150 transition-transform duration-700"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-white/5 group-hover/work:scale-[1.2] transition-transform duration-1000"></div>
              </div>
            </div>
            <div className="rounded-[1.5rem] bg-neutral-800 border border-white/5 overflow-hidden relative group/work cursor-pointer shadow-2xl">
              <div className="absolute inset-x-0 bottom-0 top-1/2 bg-linear-to-t from-black/80 to-transparent opacity-0 group-hover/work:opacity-100 transition-all duration-500 z-10 flex items-end p-6">
                <div>
                  <p className="text-white font-bold text-lg">E-commerce App</p>
                  <p className="text-neutral-300 text-xs">Next.js • Stripe</p>
                </div>
              </div>
              <div className="w-full h-full bg-neutral-800 relative">
                <div className="absolute inset-0 bg-linear-to-bl from-emerald-500/20 via-neutral-900 to-black group-hover/work:scale-110 transition-transform duration-700"></div>
                {/* Decorative Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[16px_16px] mask-image-linear-to-b from-black to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* 7. CTA Card */}
        <div
          className="rounded-2xl bg-indigo-600 text-white p-4 flex flex-col justify-between group hover:bg-indigo-500 hover:scale-[1.02] transition-all duration-300 cursor-pointer relative overflow-hidden animate-fade-in-up opacity-0 shadow-lg shadow-indigo-900/20"
          style={{ animationDelay: "350ms" }}
        >
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
          <div>
            <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-4 backdrop-blur-sm">
              <Mail size={20} />
            </div>
            <h3 className="text-xl font-bold leading-tight">
              Project in mind?
            </h3>
            <p className="text-indigo-200 text-sm mt-1">
              Let's create something.
            </p>
          </div>
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
            <span className="text-sm font-bold">Email me</span>
            <ArrowUpRight
              size={18}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
