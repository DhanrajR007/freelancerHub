import React, { useState } from "react";
import {
  Receipt,
  Calendar,
  CreditCard,
  Hash,
  DollarSign,
  User,
  Plus,
  Send,
  Download,
  ArrowRight,
} from "lucide-react";

const CreateInvoice = () => {
  const [formData, setFormData] = useState({
    client: "",
    number: "INV-" + Math.floor(1000 + Math.random() * 9000),
    issueDate: new Date().toISOString().split("T")[0],
    dueDate: "",
    description: "",
    amount: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden flex items-center justify-center p-4 md:p-8 pt-24 pb-12">
      {/* Background Decoration */}
      <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-linear-to-bl from-emerald-900/10 via-black to-cyan-900/10"></div>

        {/* Animated Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[20%] left-[20%] w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[80px] animate-float"></div>
          <div className="absolute bottom-[20%] right-[20%] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[80px] animate-float delay-1000"></div>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Side: Invoice Form */}
        <div className="lg:col-span-8">
          <div className="bg-neutral-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
              <div>
                <h1 className="text-3xl font-bold text-white flex items-center gap-3">
                  <div className="p-2 bg-emerald-500/10 rounded-lg">
                    <Receipt className="text-emerald-500" size={24} />
                  </div>
                  New Invoice
                </h1>
                <p className="text-neutral-400 mt-1 pl-1">
                  Generate a professional invoice for your work.
                </p>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-mono font-medium self-start sm:self-center">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                Status: DRAFT
              </div>
            </div>

            <form className="space-y-8">
              {/* Top Row: Client & Invoice # */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-neutral-400 uppercase tracking-wider pl-1">
                    Bill To
                  </label>
                  <div className="relative group/input">
                    <User
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within/input:text-emerald-400 transition-colors"
                    />
                    <select
                      name="client"
                      value={formData.client}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-hidden focus:border-emerald-500 focus:bg-white/10 transition-all [&>option]:bg-neutral-900 appearance-none cursor-pointer"
                    >
                      <option value="" disabled>
                        Select Client
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

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-neutral-400 uppercase tracking-wider pl-1">
                    Invoice Number
                  </label>
                  <div className="relative group/input">
                    <Hash
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within/input:text-emerald-400 transition-colors"
                    />
                    <input
                      type="text"
                      name="number"
                      value={formData.number}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white font-mono placeholder:text-neutral-600 focus:outline-hidden focus:border-emerald-500 focus:bg-white/10 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Dates Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-neutral-400 uppercase tracking-wider pl-1">
                    Issued On
                  </label>
                  <div className="relative group/input">
                    <Calendar
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within/input:text-emerald-400 transition-colors"
                    />
                    <input
                      type="date"
                      name="issueDate"
                      value={formData.issueDate}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-hidden focus:border-emerald-500 focus:bg-white/10 transition-all scheme-dark"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-neutral-400 uppercase tracking-wider pl-1">
                    Due On
                  </label>
                  <div className="relative group/input">
                    <Calendar
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within/input:text-emerald-400 transition-colors"
                    />
                    <input
                      type="date"
                      name="dueDate"
                      value={formData.dueDate}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-hidden focus:border-emerald-500 focus:bg-white/10 transition-all scheme-dark"
                    />
                  </div>
                </div>
              </div>

              {/* Line Items Area */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                    Service Details
                  </h3>
                  <button
                    type="button"
                    className="text-emerald-400 text-xs font-bold hover:text-emerald-300 flex items-center gap-1 transition-colors px-3 py-1.5 rounded-lg hover:bg-emerald-500/10"
                  >
                    <Plus size={14} /> Add Item
                  </button>
                </div>

                <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    <div className="md:col-span-8 space-y-2">
                      <label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                        Description
                      </label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="e.g. Frontend Development for Dashboard..."
                        rows={2}
                        className="w-full bg-black/20 border border-white/10 rounded-xl p-3 text-white placeholder:text-neutral-700 focus:outline-hidden focus:border-emerald-500 transition-colors resize-none text-sm"
                      ></textarea>
                    </div>
                    <div className="md:col-span-4 space-y-2">
                      <label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                        Amount
                      </label>
                      <div className="relative group/input">
                        <DollarSign
                          size={16}
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within/input:text-emerald-400 transition-colors"
                        />
                        <input
                          type="number"
                          name="amount"
                          value={formData.amount}
                          onChange={handleChange}
                          placeholder="0.00"
                          className="w-full bg-emerald-500/5 border border-emerald-500/20 rounded-xl py-3 pl-9 pr-4 text-white font-mono placeholder:text-neutral-700 focus:outline-hidden focus:border-emerald-500 focus:bg-emerald-500/10 transition-all"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Right Side: Total & Actions */}
        <div className="lg:col-span-4 space-y-6">
          {/* Total Card */}
          <div className="bg-linear-to-br from-emerald-600 to-cyan-700 rounded-3xl p-8 shadow-xl transform transition hover:scale-[1.02] duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/20 transition-colors duration-500"></div>

            <h3 className="text-emerald-100/80 text-sm font-medium mb-2 uppercase tracking-wide relative z-10">
              Total Due
            </h3>
            <div className="text-5xl font-bold text-white mb-8 relative z-10 tracking-tight">
              ${formData.amount || "0.00"}
            </div>

            <div className="space-y-3 relative z-10">
              <button className="w-full bg-white text-emerald-950 font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-emerald-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Generate Invoice <ArrowRight size={18} />
              </button>
              <div className="grid grid-cols-2 gap-3">
                <button className="bg-black/20 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-black/30 transition-colors backdrop-blur-sm border border-white/5">
                  <Send size={16} /> Email
                </button>
                <button className="bg-black/20 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-black/30 transition-colors backdrop-blur-sm border border-white/5">
                  <Download size={16} /> PDF
                </button>
              </div>
            </div>
          </div>

          {/* Payment Methods Info */}
          <div className="bg-neutral-900/40 backdrop-blur-md border border-white/5 rounded-3xl p-6">
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <CreditCard size={18} className="text-neutral-400" /> Payment
              Details
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed mb-4">
              Payment details will be automatically attached to the bottom of
              the invoice based on your settings.
            </p>
            <div className="flex gap-2 opacity-50">
              <div className="h-8 w-12 bg-white/10 rounded-md animate-pulse"></div>
              <div className="h-8 w-12 bg-white/10 rounded-md animate-pulse delay-75"></div>
              <div className="h-8 w-12 bg-white/10 rounded-md animate-pulse delay-150"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateInvoice;
