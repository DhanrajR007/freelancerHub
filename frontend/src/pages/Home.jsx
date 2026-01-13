import { Link } from "@tanstack/react-router";

const Home = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-white relative overflow-hidden selection:bg-purple-500/30">
      {/* Navbar Removed - Now Global */}

      {/* Background decoration */}
      <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-screen flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
        {/* Left Content */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-8 mt-20 md:mt-0">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-violet-300">
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse"></span>
              v2.0 is now live
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1]">
              Manage clients <br />
              <span className="bg-linear-to-r from-violet-400 via-white/80 to-indigo-400 bg-clip-text text-transparent">
                with elegance.
              </span>
            </h1>
            <p className="text-neutral-400 text-lg md:text-xl font-light tracking-wide max-w-lg leading-relaxed">
              Streamline your freelance workflow. Organizing clients, projects,
              and payments has never looked this good.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <Link to="/create-client" className="w-full sm:w-auto">
              <button className="w-full group relative px-8 py-4 bg-white text-neutral-950 rounded-full font-semibold text-lg tracking-wide hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] active:scale-95">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Create Client
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </button>
            </Link>

            <button className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-lg tracking-wide text-white border border-white/20 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              Watch Demo
            </button>
          </div>

          <div className="pt-8 border-t border-white/10 w-full max-w-sm mt-4">
            <p className="text-xs text-neutral-500 mb-3 uppercase tracking-wider font-semibold">
              Trusted by freelancers from
            </p>
            <div className="flex items-center gap-6 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Dummy Logos */}
              <div className="h-6 w-20 bg-white/20 rounded"></div>
              <div className="h-6 w-20 bg-white/20 rounded"></div>
              <div className="h-6 w-20 bg-white/20 rounded"></div>
            </div>
          </div>
        </div>

        {/* Right Content - Visual */}
        <div className="flex-1 w-full max-w-md md:max-w-full relative group perspective-1000">
          {/* Main Glass Card */}
          <div className="relative z-20 bg-neutral-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl transform transition-transform duration-700 hover:rotate-y-6 hover:rotate-x-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-linear-to-tr from-violet-500 to-indigo-500"></div>
                <div>
                  <div className="h-2 w-24 bg-white/20 rounded mb-1"></div>
                  <div className="h-2 w-16 bg-white/10 rounded"></div>
                </div>
              </div>
              <div className="px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 text-xs font-medium">
                Active
              </div>
            </div>

            {/* Dashboard Elements */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                <div className="text-2xl font-bold mb-1">$12.4k</div>
                <div className="text-xs text-neutral-500">Total Revenue</div>
              </div>
              <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                <div className="text-2xl font-bold mb-1">12</div>
                <div className="text-xs text-neutral-500">Active Projects</div>
              </div>
            </div>

            {/* List Items */}
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group/item"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center text-xs text-neutral-400 group-hover/item:text-white transition-colors">
                      P{i}
                    </div>
                    <div className="h-2 w-20 bg-white/10 rounded group-hover/item:bg-white/20 transition-colors"></div>
                  </div>
                  <div className="h-2 w-8 bg-white/5 rounded"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Background Decorative Cards */}
          <div className="absolute top-10 -right-10 w-full h-full bg-violet-600/10 rounded-3xl -z-10 blur-xl"></div>
          <div className="absolute -bottom-10 -left-10 w-full h-full bg-indigo-600/10 rounded-3xl -z-10 blur-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
