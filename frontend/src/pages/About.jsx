import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-white relative overflow-hidden selection:bg-purple-500/30 pt-20">
      {/* Background decoration */}
      <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[128px] animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[128px] animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-violet-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-violet-400"></span>
            Our Story
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            We're building the <br />
            <span className="bg-linear-to-r from-violet-400 via-white/80 to-indigo-400 bg-clip-text text-transparent">
              future of work.
            </span>
          </h1>
          <p className="text-neutral-400 text-lg md:text-xl font-light leading-relaxed">
            FreelancerHub was born from a simple idea: independent work
            shouldn't mean working alone. We provide the tools, community, and
            structure to help creative minds thrive.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32 border-y border-white/10 py-12 bg-white/5 backdrop-blur-sm rounded-3xl">
          {[
            { label: "Active Users", value: "50K+" },
            { label: "Countries", value: "120+" },
            { label: "Transactions", value: "$10M+" },
            { label: "Team Members", value: "24" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-white bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-neutral-500 uppercase tracking-wider font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Morgan",
                role: "Founder & CEO",
                color: "from-pink-500 to-rose-500",
              },
              {
                name: "Sarah Chen",
                role: "Head of Product",
                color: "from-violet-500 to-purple-500",
              },
              {
                name: "James Wilson",
                role: "Lead Engineer",
                color: "from-blue-500 to-cyan-500",
              },
            ].map((member, i) => (
              <div
                key={i}
                className="group relative p-1 rounded-3xl bg-neutral-900/50 hover:bg-neutral-800/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-linear-to-br from-white/5 to-white/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative p-6 flex flex-col items-center text-center">
                  <div
                    className={`w-24 h-24 rounded-full mb-6 bg-linear-to-br ${member.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  ></div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-neutral-400 text-sm">{member.role}</p>

                  {/* Social placeholders */}
                  <div className="flex gap-4 mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-white/20">
                      <div className="w-4 h-4 bg-white/50 rounded-sm"></div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-white/20">
                      <div className="w-4 h-4 bg-white/50 rounded-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Core Values</h2>
            <div className="space-y-6">
              {[
                {
                  title: "Transparent by Design",
                  desc: "We believe in open communication and clear processes.",
                },
                {
                  title: "User-First Approach",
                  desc: "Every feature we build starts with user needs.",
                },
                {
                  title: "Continuous Innovation",
                  desc: "We never settle for the status quo.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                    <span className="font-bold text-violet-400">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-neutral-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-96 rounded-3xl overflow-hidden border border-white/10">
            <div className="absolute inset-0 bg-linear-to-br from-violet-900/50 to-indigo-900/50"></div>
            {/* Abstract visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 border border-white/20 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
                <div className="w-32 h-32 border border-white/30 rounded-full flex items-center justify-center animate-[spin_15s_linear_infinite_reverse]">
                  <div className="w-16 h-16 bg-white/10 rounded-full backdrop-blur-md"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
