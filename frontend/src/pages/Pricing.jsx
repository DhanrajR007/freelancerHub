import React from "react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      period: "/forever",
      desc: "Perfect for new freelancers just getting started.",
      features: [
        "3 Clients",
        "Basic Invoicing",
        "2 Active Projects",
        "Community Support",
      ],
      cta: "Start Free",
      popular: false,
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      desc: "For growing freelancers handling multiple clients.",
      features: [
        "Unlimited Clients",
        "Advanced Invoicing",
        "Unlimited Projects",
        "Priority Support",
        "Custom Branding",
        "Time Tracking",
      ],
      cta: "Go Pro",
      popular: true,
    },
    {
      name: "Agency",
      price: "$99",
      period: "/month",
      desc: "For small teams and agencies needing more power.",
      features: [
        "Everything in Pro",
        "Team Members (up to 5)",
        "Client Portal",
        "API Access",
        "Dedicated Manager",
        "White Labelling",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white relative overflow-hidden selection:bg-purple-500/30 pt-20">
      {/* Background decoration */}
      <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-160 h-160 bg-indigo-600/10 rounded-full blur-[128px] animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Simple, transparent <br />
            <span className="text-violet-400">pricing for everyone.</span>
          </h1>
          <p className="text-neutral-400 text-lg">
            No hidden fees. No credit card required to start. Cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative p-8 rounded-3xl backdrop-blur-md transition-all duration-500 
                        ${
                          plan.popular
                            ? "bg-neutral-900/80 border-2 border-violet-500 shadow-[0_0_50px_rgba(139,92,246,0.15)] scale-105 z-10"
                            : "bg-neutral-900/40 border border-white/10 hover:bg-neutral-900/60"
                        }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-violet-500 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-neutral-400 text-sm mb-6 h-10">{plan.desc}</p>

              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-bold tracking-tight">
                  {plan.price}
                </span>
                <span className="text-neutral-500 ml-2">{plan.period}</span>
              </div>

              <button
                className={`w-full py-3 rounded-xl font-semibold mb-8 transition-all duration-300 
                        ${
                          plan.popular
                            ? "bg-white text-neutral-950 hover:bg-neutral-200"
                            : "bg-white/10 text-white hover:bg-white/20"
                        }`}
              >
                {plan.cta}
              </button>

              <ul className="space-y-4">
                {plan.features.map((feat, j) => (
                  <li
                    key={j}
                    className="flex items-center gap-3 text-sm text-neutral-300"
                  >
                    <span
                      className={`flex items-center justify-center w-5 h-5 rounded-full ${
                        plan.popular
                          ? "bg-violet-500/20 text-violet-400"
                          : "bg-white/10 text-neutral-400"
                      }`}
                    >
                      <svg
                        className="w-3 h-3"
                        viewBox="0 0 12 12"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-neutral-500">
            Looking for enterprise solutions?{" "}
            <a
              href="#"
              className="text-white underline underline-offset-4 decoration-violet-500"
            >
              Contact us
            </a>{" "}
            for custom pricing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
