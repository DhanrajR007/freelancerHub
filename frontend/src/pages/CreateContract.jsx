import React, { useState } from "react";
import {
  FileText,
  Calendar,
  DollarSign,
  Building,
  User,
  PenTool,
  CheckCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const CreateContract = () => {
  const [formData, setFormData] = useState({
    title: "",
    client: "",
    startDate: "",
    endDate: "",
    value: "",
    terms: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden flex items-center justify-center p-4 md:p-8 pt-20">
      {/* Background Decoration */}
      <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-linear-to-bl from-amber-900/10 via-black to-orange-900/10"></div>
        <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[100px] animate-slow-spin"></div>
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[100px] animate-slow-spin"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main Form Section */}
          <div className="flex-1">
            <div className="bg-neutral-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              {/* Decoration Line */}
              <div className="absolute top-0 left-0 w-1 h-full bg-linear-to-b from-amber-500 via-orange-500 to-transparent"></div>

              <div className="mb-8">
                <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                  <FileText className="text-amber-500" /> Draft Contract
                </h1>
                <p className="text-neutral-400">
                  Create a new binding agreement for your project.
                </p>
              </div>

              <form className="space-y-6">
                {/* Title & Client */}
                <div className="space-y-6">
                  <div className="group/input">
                    <label className="block text-xs font-medium text-neutral-400 mb-1 font-mono uppercase tracking-wider">
                      Project Title
                    </label>
                    <input
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      type="text"
                      placeholder="e.g. Website Redesign"
                      className="w-full bg-transparent border-b-2 border-white/10 py-3 text-xl font-medium text-white placeholder:text-neutral-700 focus:outline-hidden focus:border-amber-500 transition-colors"
                    />
                  </div>

                  <div className="group/input">
                    <label className="block text-xs font-medium text-neutral-400 mb-1 font-mono uppercase tracking-wider">
                      Client
                    </label>
                    <div className="relative">
                      <User
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500"
                      />
                      <select
                        name="client"
                        value={formData.client}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-hidden focus:border-amber-500 transition-colors [&>option]:bg-neutral-900 appearance-none"
                      >
                        <option value="" disabled>
                          Select a client
                        </option>
                        <option value="1">Acme Corp</option>
                        <option value="2">Global Tech</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg
                          width="10"
                          height="6"
                          viewBox="0 0 10 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1L5 5L9 1"
                            stroke="#737373"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dates & Value */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                  <div className="space-y-2">
                    <label className="block text-xs font-medium text-neutral-400 font-mono uppercase">
                      Start Date
                    </label>
                    <div className="relative">
                      <Calendar
                        size={16}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500"
                      />
                      <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 pl-10 pr-3 text-sm text-white focus:outline-hidden focus:border-amber-500 transition-colors scheme-dark"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-medium text-neutral-400 font-mono uppercase">
                      End Date
                    </label>
                    <div className="relative">
                      <Calendar
                        size={16}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500"
                      />
                      <input
                        type="date"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 pl-10 pr-3 text-sm text-white focus:outline-hidden focus:border-amber-500 transition-colors scheme-dark"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-medium text-amber-500/80 font-mono uppercase">
                      Total Value
                    </label>
                    <div className="relative">
                      <DollarSign
                        size={16}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-500"
                      />
                      <input
                        type="number"
                        name="value"
                        value={formData.value}
                        onChange={handleChange}
                        placeholder="0.00"
                        className="w-full bg-amber-500/5 border border-amber-500/20 rounded-lg py-2.5 pl-10 pr-3 text-sm text-amber-200 placeholder:text-amber-900/50 focus:outline-hidden focus:border-amber-500 transition-colors font-mono"
                      />
                    </div>
                  </div>
                </div>

                {/* Terms */}
                <div className="space-y-2 pt-4">
                  <label className=" text-xs font-medium text-neutral-400 font-mono uppercase flex justify-between">
                    <span>Terms & Conditions</span>
                    <span className="text-neutral-600 flex items-center gap-1">
                      <PenTool size={10} /> Markdown supported
                    </span>
                  </label>
                  <textarea
                    name="terms"
                    value={formData.terms}
                    onChange={handleChange}
                    placeholder="## 1. Scope of Work..."
                    rows={8}
                    className="w-full bg-neutral-950/50 border border-white/10 rounded-xl p-4 text-sm text-neutral-300 placeholder:text-neutral-700 focus:outline-hidden focus:border-amber-500 transition-colors resize-none font-mono leading-relaxed"
                  ></textarea>
                </div>

                <div className="pt-6 flex items-center justify-end gap-4">
                  <button
                    type="button"
                    className="text-neutral-400 hover:text-white text-sm font-medium transition-colors"
                  >
                    Save Draft
                  </button>
                  <button
                    type="submit"
                    className="bg-white text-black px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-amber-50 transition-colors shadow-[0_0_20px_rgba(251,191,36,0.2)] hover:shadow-[0_0_30px_rgba(251,191,36,0.4)]"
                  >
                    Create Contract <ArrowRight size={18} />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Side: Summary/Tips (Desktop only) */}
          <div className="hidden md:block w-80 space-y-6">
            <div className="bg-neutral-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">
                Contract Summary
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center shrink-0">
                    <CheckCircle
                      size={14}
                      className={
                        formData.title ? "text-amber-500" : "text-neutral-600"
                      }
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-300">
                      Project Details
                    </p>
                    <p className="text-xs text-neutral-500">
                      {formData.title ? "Completed" : "Pending"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center shrink-0">
                    <CheckCircle
                      size={14}
                      className={
                        formData.client ? "text-amber-500" : "text-neutral-600"
                      }
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-300">
                      Client Info
                    </p>
                    <p className="text-xs text-neutral-500">
                      {formData.client ? "Selected" : "Pending"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center shrink-0">
                    <CheckCircle
                      size={14}
                      className={
                        formData.value ? "text-amber-500" : "text-neutral-600"
                      }
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-300">
                      Payment Terms
                    </p>
                    <p className="text-xs text-neutral-500">
                      {formData.value ? "Set" : "Pending"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-6">
              <h4 className="text-amber-400 font-medium mb-2 flex items-center gap-2">
                <Sparkles size={16} /> Pro Tip
              </h4>
              <p className="text-xs text-amber-200/70 leading-relaxed">
                Be specific with your terms to avoid scope creep. clearly define
                deliverables and timelines in the terms section.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateContract;
