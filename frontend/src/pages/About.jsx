import React, { useEffect, useRef } from "react";

const About = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    // Smooth scroll effect handling could go here if needed
  }, []);

  return (
    <div className="relative py-12 md:py-20 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="fixed inset-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-violet-600/10 rounded-[100%] blur-[100px] animate-pulse"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24 relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-violet-300 mb-8 hover:bg-white/10 transition-colors cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
            </span>
            Reimagining Work
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            We're building the <br />
            <span className="bg-linear-to-r from-violet-400 via-fuchsia-300 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg">
              economy of tomorrow.
            </span>
          </h1>

          <p className="text-neutral-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            FreelancerHub is more than a platform; it's a movement. We're
            dismantling the barriers between talent and opportunity, creating a
            world where independent work is the standard, not the exception.
          </p>
        </div>

        {/* Mission Card */}
        <div className="relative mb-32 group">
          <div className="absolute -inset-1 bg-linear-to-r from-violet-600 via-indigo-600 to-purple-600 rounded-3xl opacity-25 group-hover:opacity-50 blur transition duration-500"></div>
          <div className="relative bg-neutral-900 border border-white/10 rounded-2xl p-8 md:p-12 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 bg-linear-to-b from-white to-white/60 bg-clip-text text-transparent">
                  Our Mission
                </h2>
                <div className="space-y-6 text-neutral-400 leading-relaxed">
                  <p>
                    We believe that talent is equally distributed, but
                    opportunity is not. Our mission is to bridge that gap using
                    cutting-edge technology and human-centric design.
                  </p>
                  <p>
                    By handling the friction of contracts, payments, and
                    management, we liberate creators to do what they do best:{" "}
                    <span className="text-white font-medium">Create.</span>
                  </p>
                </div>
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden bg-neutral-800/50 border border-white/5">
                {/* Abstract UI representation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full max-w-[200px] space-y-3 p-4">
                    <div className="h-2 w-1/3 bg-neutral-700 rounded-full animate-pulse"></div>
                    <div className="h-2 w-2/3 bg-neutral-600 rounded-full animate-pulse delay-75"></div>
                    <div className="h-24 w-full bg-neutral-700/50 rounded-lg animate-pulse delay-150"></div>
                    <div className="flex gap-2 justify-end pt-2">
                      <div className="h-8 w-20 bg-violet-600/20 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-32">
          {[
            { label: "Global Users", value: "100K+", icon: "🌍" },
            { label: "Projects Done", value: "500K+", icon: "🚀" },
            { label: "Paid to Talent", value: "$50M+", icon: "💰" },
            { label: "Satisfaction", value: "99%", icon: "❤️" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/5 p-6 rounded-2xl text-center hover:bg-white/10 transition-colors group cursor-default"
            >
              <div className="text-2xl mb-4 grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-1 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs text-neutral-500 font-medium uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center py-20 border-t border-white/10">
          <h2 className="text-4xl font-bold mb-6">
            Ready to shape the future?
          </h2>
          <p className="text-neutral-400 mb-8 max-w-md mx-auto">
            Join thousands of others who are actively building their dreams on
            FreelancerHub.
          </p>
          <button className="px-8 py-4 bg-white text-neutral-950 font-bold rounded-full hover:bg-neutral-200 transition-all hover:scale-105 shadow-xl shadow-white/5">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
