import React from "react";

const CreateContract = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-white relative overflow-hidden flex items-center justify-center pt-20">
      {/* Background decoration */}
      <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
        <div className="absolute top-10 -right-10 w-[500px] h-[500px] bg-amber-600/10 rounded-full -z-10 blur-[100px]"></div>
        <div className="absolute -bottom-10 -left-10 w-[500px] h-[500px] bg-orange-600/10 rounded-full -z-10 blur-[100px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl px-6">
        <div className="bg-neutral-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold tracking-tight mb-2">
              New Contract
            </h1>
            <p className="text-neutral-400">
              Draft a new contract for your project.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-300">
                  Project Title
                </label>
                <input
                  type="text"
                  placeholder="Website Redesign"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-hidden focus:border-amber-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-300">
                  Client
                </label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-hidden focus:border-amber-500 transition-colors [&>option]:bg-neutral-900">
                  <option value="" disabled selected>
                    Select a client
                  </option>
                  <option value="1">Acme Corp</option>
                  <option value="2">Global Tech</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-300">
                  Start Date
                </label>
                <input
                  type="date"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-hidden focus:border-amber-500 transition-colors scheme-dark"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-300">
                  End Date
                </label>
                <input
                  type="date"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-hidden focus:border-amber-500 transition-colors scheme-dark"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-300">
                Contract Value ($)
              </label>
              <input
                type="number"
                placeholder="5000.00"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-hidden focus:border-amber-500 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-300">
                Terms & Conditions
              </label>
              <textarea
                placeholder="Enter the contract terms here..."
                rows={6}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-hidden focus:border-amber-500 transition-colors resize-none font-mono text-sm"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-white text-neutral-950 font-bold py-4 rounded-xl hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
            >
              Create Contract
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateContract;
