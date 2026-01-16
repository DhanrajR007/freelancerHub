import { Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#030303] text-white relative overflow-hidden selection:bg-indigo-500/30 font-sans">
      {/* Dynamic Background */}
      <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Deep Atmospheric Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-violet-900/20 blur-[120px] animate-aurora mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/20 blur-[120px] animate-aurora animation-delay-5000 mix-blend-screen"></div>

        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-size-[4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        {/* Stars/Dust particles could go here if using a canvas, keeping it CSS for now */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-screen flex flex-col pt-20 md:pt-0 md:justify-center">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left Content Area */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-8 max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-white/20 transition-colors backdrop-blur-md group cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors">
                FreelancerHub v2.0 is live
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] md:leading-[1.1]">
              Work smarter, <br />
              <span className="relative">
                <span className="absolute -inset-1 bg-linear-to-r from-violet-600 to-indigo-600 blur-2xl opacity-30"></span>
                <span className="relative bg-linear-to-r from-violet-200 via-indigo-200 to-white bg-clip-text text-transparent contrast-125">
                  live better.
                </span>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed max-w-lg md:max-w-xl">
              The all-in-one ecosystem for modern freelancers. Manage clients,
              contracts, and cashflow with a level of elegance you've never seen
              before.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-4">
              <Link to="/create-client" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto group relative px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
                  <span className="relative flex items-center justify-center gap-2">
                    Get Started Free
                    <svg
                      className="w-5 h-5 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                </button>
              </Link>

              <button className="w-full sm:w-auto px-8 py-4 rounded-full font-medium text-lg text-white border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2 group">
                <svg
                  className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Watch Demo
              </button>
            </div>

            {/* Social Proof */}
            <div className="pt-8 w-full border-t border-white/5 mt-8 flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className={`w-10 h-10 rounded-full border-2 border-[#030303] bg-neutral-800 flex items-center justify-center text-xs font-medium text-neutral-400 z-${
                      10 - i
                    }`}
                  >
                    K
                  </div>
                ))}
              </div>
              <div className="text-sm text-neutral-500 text-center sm:text-left">
                <p>
                  <span className="text-white font-semibold">1,200+</span>{" "}
                  freelancers
                </p>
                <p>trust FreelancerHub daily</p>
              </div>
            </div>
          </div>

          {/* Right Content - Abstract Visual Interface */}
          <div className="relative hidden md:block w-full max-w-[500px] h-[600px] perspective-[2000px] group">
            {/* Floating Background Blobs for the card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-indigo-600/30 rounded-full blur-[80px] animate-pulse"></div>

            {/* Main Glass Card */}
            <div className="relative w-full h-full bg-[#0a0a0a]/60 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 shadow-2xl transition-all duration-700 hover:rotate-y-[-5deg] hover:rotate-x-[5deg] animate-float">
              {/* Inner Glow */}
              <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-white/5 to-transparent rounded-[2.5rem] pointer-events-none"></div>

              {/* Card Header */}
              <div className="flex justify-between items-start mb-10">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">New Project</h3>
                    <p className="text-xs text-neutral-400">
                      Design System Audit
                    </p>
                  </div>
                </div>
                <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-neutral-400">
                  Just now
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.05] transition-colors">
                  <p className="text-sm text-neutral-500 mb-2">Total Budget</p>
                  <p className="text-2xl font-semibold text-white">$12,400</p>
                </div>
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.05] transition-colors">
                  <p className="text-sm text-neutral-500 mb-2">Timeline</p>
                  <p className="text-2xl font-semibold text-white">4 Weeks</p>
                </div>
              </div>

              {/* Visualized Steps */}
              <div className="space-y-4">
                <p className="text-sm font-medium text-neutral-400 uppercase tracking-wider ml-1">
                  Process
                </p>
                {[
                  {
                    label: "Client Onboarding",
                    status: "Complete",
                    color: "text-emerald-400",
                    bg: "bg-emerald-400/10",
                  },
                  {
                    label: "Contract Signed",
                    status: "Complete",
                    color: "text-emerald-400",
                    bg: "bg-emerald-400/10",
                  },
                  {
                    label: "Initial Deposit",
                    status: "Processing",
                    color: "text-indigo-400",
                    bg: "bg-indigo-400/10",
                  },
                ].map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/[0.02] hover:bg-white/[0.05] transition-colors cursor-pointer group/item"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          step.status === "Processing"
                            ? "bg-indigo-500/20 text-indigo-400"
                            : "bg-emerald-500/20 text-emerald-400"
                        }`}
                      >
                        {step.status === "Processing" ? (
                          <span className="block w-2 h-2 bg-current rounded-full animate-bounce"></span>
                        ) : (
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                      </div>
                      <span className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors">
                        {step.label}
                      </span>
                    </div>
                    <span
                      className={`text-xs px-2 py-1 rounded-md ${step.bg} ${step.color}`}
                    >
                      {step.status}
                    </span>
                  </div>
                ))}
              </div>

              {/* Floating Decoration Elements */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-linear-to-br from-violet-500 to-fuchsia-500 rounded-2xl rotate-12 blur-sm opacity-60 animate-float animation-delay-2000 -z-10"></div>
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-linear-to-tr from-blue-500 to-cyan-500 rounded-full blur-md opacity-50 animate-float animation-delay-4000 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
