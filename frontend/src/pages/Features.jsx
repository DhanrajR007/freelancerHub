import React from "react";

const Features = () => {
  const features = [
    {
      title: "Project Management",
      desc: "Organize tasks, set deadlines, and track progress with our intuitive Kanban boards.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        />
      ),
    },
    {
      title: "Smart Invoicing",
      desc: "Create professional invoices in seconds. Automated reminders for unpaid bills.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      ),
    },
    {
      title: "Client Portal",
      desc: "Give your clients a dedicated space to view progress, share files, and communicate.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      ),
    },
    {
      title: "Time Tracking",
      desc: "Track billable hours effortlessly. Generate reports to analyze productivity.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
    },
    {
      title: "Secure Payments",
      desc: "Accept credit cards, PayPal, and bank transfers with low transaction fees.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
    },
    {
      title: "Contracts & E-Sign",
      desc: "Protect your work. Send legally binding contracts and get them signed digitally.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
        />
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white relative overflow-hidden selection:bg-purple-500/30 pt-24 pb-20">
      {/* Background decoration */}
      <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[128px] animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-fade-in-up">
            Everything you need to <br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-violet-400 to-indigo-400">
              run your business.
            </span>
          </h1>
          <p className="text-neutral-400 text-lg md:text-xl leading-relaxed animate-fade-in-up delay-100">
            Powerful tools designed specifically for freelancers, consultants,
            and agencies. Focus on your work, not the paperwork.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group p-8 rounded-3xl bg-neutral-900/40 backdrop-blur-sm border border-white/5 hover:border-violet-500/30 transition-all duration-500 hover:bg-neutral-900/80 hover:-translate-y-1 shadow-lg hover:shadow-violet-500/10"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-violet-500/20 transition-all duration-500">
                <svg
                  className="w-7 h-7 text-neutral-400 group-hover:text-violet-400 transition-colors duration-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  {feature.icon}
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-neutral-200 group-hover:text-white transition-colors">
                {feature.title}
              </h3>
              <p className="text-neutral-400 leading-relaxed text-sm group-hover:text-neutral-300 transition-colors">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-32 relative group cursor-pointer">
          <div className="absolute inset-0 bg-linear-to-r from-violet-600 to-indigo-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
          <div className="relative p-12 md:p-16 rounded-3xl bg-neutral-900 border border-white/10 text-center overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>

            <div className="relative z-10 space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold">
                Ready to streamline your workflow?
              </h2>
              <p className="text-neutral-400 max-w-xl mx-auto text-lg">
                Join thousands of freelancers who are saving time and earning
                more with our platform.
              </p>
              <button className="px-10 py-5 bg-white text-neutral-950 rounded-full font-bold text-lg hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-300">
                Get Started for Free
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
