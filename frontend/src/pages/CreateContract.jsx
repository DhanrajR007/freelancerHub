import React, { useState } from "react";
import { useSelector } from "react-redux";
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
  const clients = useSelector((state) => state.clients.clients);
  console.log(clients);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden flex items-center justify-center p-4 md:p-8 pt-24 pb-12">
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
            <div className="bg-neutral-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
              {/* Decoration Line */}
              <div className="absolute top-0 left-0 w-1 h-full bg-linear-to-b from-amber-500 via-orange-500 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>

              <div className="mb-8">
                <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                  <div className="p-2 bg-amber-500/10 rounded-lg">
                    <FileText className="text-amber-500" size={24} />
                  </div>
                  Draft Contract
                </h1>
                <p className="text-neutral-400 pl-1">
                  Create a new binding agreement for your project.
                </p>
              </div>

              <form className="space-y-8">
                {/* Title & Client */}
                <div className="space-y-8">
                  <div className="group/input">
                    <label className="block text-xs font-semibold text-neutral-400 mb-2 font-mono uppercase tracking-wider">
                      Project Title
                    </label>
                    <input
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      type="text"
                      placeholder="e.g. Website Redesign for Fintech Co."
                      className="w-full bg-transparent border-b border-white/10 py-3 text-lg font-medium text-white placeholder:text-neutral-700 focus:outline-hidden focus:border-amber-500 transition-all focus:pl-2"
                    />
                  </div>

                  <div className="group/input">
                    <label className="block text-xs font-semibold text-neutral-400 mb-2 font-mono uppercase tracking-wider">
                      Client
                    </label>
                    <div className="relative group/select">
                      <User
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within/select:text-amber-500 transition-colors"
                      />
                      <select
                        name="client"
                        value={formData.client}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-hidden focus:border-amber-500 focus:bg-white/10 transition-all [&>option]:bg-neutral-900 appearance-none cursor-pointer hover:bg-white/10"
                      >
                        <option value="" disabled>
                          Select a client
                        </option>
                        {clients?.map((client) => (
                          <option key={client._id} value={client._id}>
                            {client.name}
                          </option>
                        ))}
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-neutral-400 font-mono uppercase tracking-wider">
                      Start Date
                    </label>
                    <div className="relative group/date">
                      <Calendar
                        size={16}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within/date:text-amber-500 transition-colors"
                      />
                      <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-3 text-sm text-white focus:outline-hidden focus:border-amber-500 focus:ring-1 focus:ring-amber-500/20 transition-all scheme-dark"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-neutral-400 font-mono uppercase tracking-wider">
                      End Date
                    </label>
                    <div className="relative group/date">
                      <Calendar
                        size={16}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within/date:text-amber-500 transition-colors"
                      />
                      <input
                        type="date"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-3 text-sm text-white focus:outline-hidden focus:border-amber-500 focus:ring-1 focus:ring-amber-500/20 transition-all scheme-dark"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-amber-500/90 font-mono uppercase tracking-wider">
                      Total Value
                    </label>
                    <div className="relative group/value">
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
                        className="w-full bg-amber-500/5 border border-amber-500/30 rounded-lg py-3 pl-10 pr-3 text-amber-100 placeholder:text-amber-900/50 focus:outline-hidden focus:border-amber-500 focus:bg-amber-500/10 transition-all font-mono font-medium"
                      />
                    </div>
                  </div>
                </div>

                {/* Terms */}
                <div className="space-y-3 pt-4">
                  <label className="text-xs font-semibold text-neutral-400 font-mono uppercase flex justify-between items-center">
                    <span>Terms & Conditions</span>
                    <span className="text-neutral-600 bg-white/5 px-2 py-1 rounded text-[10px] flex items-center gap-1">
                      <PenTool size={10} /> Markdown Supported
                    </span>
                  </label>
                  <div className="relative">
                    <textarea
                      name="terms"
                      value={formData.terms}
                      onChange={handleChange}
                      placeholder="## 1. Scope of Work&#10;The Freelancer will provide..."
                      rows={10}
                      className="w-full bg-neutral-950 border border-white/10 rounded-xl p-5 text-sm text-neutral-300 placeholder:text-neutral-800 focus:outline-hidden focus:border-amber-500 focus:ring-1 focus:ring-amber-500/20 transition-all resize-none font-mono leading-relaxed"
                    ></textarea>
                  </div>
                </div>

                <div className="pt-6 flex items-center justify-end gap-4 border-t border-white/5">
                  <button
                    type="button"
                    className="px-4 py-2 text-neutral-400 hover:text-white text-sm font-medium transition-colors"
                  >
                    Save as Draft
                  </button>
                  <button
                    type="submit"
                    className="bg-white text-black px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-amber-50 transition-all shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] transform hover:-translate-y-0.5"
                  >
                    Create Contract <ArrowRight size={18} />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Side: Summary/Tips (Desktop only) */}
          <div className="hidden md:block w-80 space-y-6">
            <div className="bg-neutral-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-white mb-6 border-b border-white/5 pb-4">
                Contract Summary
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${formData.title ? "bg-amber-500/20 text-amber-500" : "bg-neutral-800 text-neutral-600"}`}
                  >
                    <CheckCircle size={16} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-200">
                      Project Details
                    </p>
                    <p className="text-xs text-neutral-500 mt-1">
                      {formData.title ? "Completed" : "Awaiting Title"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${formData.client ? "bg-amber-500/20 text-amber-500" : "bg-neutral-800 text-neutral-600"}`}
                  >
                    <CheckCircle size={16} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-200">
                      Client Info
                    </p>
                    <p className="text-xs text-neutral-500 mt-1">
                      {formData.client ? "Selected" : "Awaiting Selection"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${formData.value ? "bg-amber-500/20 text-amber-500" : "bg-neutral-800 text-neutral-600"}`}
                  >
                    <CheckCircle size={16} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-200">
                      Payment Terms
                    </p>
                    <p className="text-xs text-neutral-500 mt-1">
                      {formData.value ? "Value Set" : "Awaiting Value"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-linear-to-br from-amber-500/10 to-orange-500/5 border border-amber-500/20 rounded-2xl p-6 sticky top-[400px]">
              <h4 className="text-amber-400 font-medium mb-3 flex items-center gap-2">
                <Sparkles size={16} /> Pro Tip
              </h4>
              <p className="text-xs text-amber-200/70 leading-relaxed">
                Be specific with your terms to avoid scope creep. Clearly define
                deliverables and timelines in the terms section using markdown
                lists.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateContract;
