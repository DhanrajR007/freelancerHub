import React, { useState } from "react";
import {
  User,
  Mail,
  Building,
  MapPin,
  ArrowRight,
  Sparkles,
  ChevronLeft,
} from "lucide-react";
import { Link, useNavigate } from "@tanstack/react-router";
import { createClient } from "../api/client.api";

const CreateClient = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    address: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createClient(formData);
      console.log(response);
      console.log(formData);
      setFormData({
        name: "",
        email: "",
        company: "",
        address: "",
      });
      navigate({ to: "/dashboard" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col relative overflow-hidden font-sans selection:bg-violet-500/30">
      {/* Subtle Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-neutral-900/0 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-900/10 blur-[120px] rounded-full"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 p-6 md:p-10 flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group"
        >
          <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
            <ChevronLeft size={16} />
          </div>
          <span className="text-sm font-medium">Back to Home</span>
        </Link>
      </header>

      <main className="flex-1 relative z-10 flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left: Minimal Intro & Preview */}
          <div className="lg:col-span-5 flex flex-col gap-10 lg:sticky lg:top-24">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                New Client
              </h1>
              <p className="text-neutral-400 text-lg leading-relaxed">
                Expand your portfolio. Add a new client to track projects,
                contracts, and invoices.
              </p>
            </div>

            {/* Preview Card - Minimalist */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-2xl opacity-20 group-hover:opacity-40 blur transition duration-500"></div>
              <div className="relative bg-[#0A0A0A] rounded-2xl p-6 border border-white/5 shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400 text-xl font-bold border border-violet-500/20">
                    {formData.name ? (
                      formData.name.charAt(0).toUpperCase()
                    ) : (
                      <Sparkles size={20} />
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg">
                      {formData.name || "Client Name"}
                    </h3>
                    <p className="text-sm text-neutral-500">
                      {formData.company || "Company Inc."}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm text-neutral-400">
                    <Mail size={16} className="text-neutral-600" />
                    <span className="truncate">
                      {formData.email || "email@example.com"}
                    </span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-neutral-400">
                    <MapPin size={16} className="text-neutral-600 mt-0.5" />
                    <span className="line-clamp-2">
                      {formData.address || "123 Street, City, Country"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: The Form */}
          <div className="lg:col-span-7 w-full">
            <div className="backdrop-blur-sm">
              <form className="space-y-8">
                {/* Personal Info Group */}
                <div className="space-y-6">
                  <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider">
                    Client Details
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-neutral-300">
                        Full Name
                      </label>
                      <div className="relative group/input">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User
                            size={16}
                            className="text-neutral-600 group-focus-within/input:text-violet-400 transition-colors"
                          />
                        </div>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Sarah Smith"
                          className="block w-full pl-10 pr-3 py-3 bg-[#0A0A0A] border border-white/10 rounded-xl focus:ring-1 focus:ring-violet-500/50 focus:border-violet-500/50 sm:text-sm text-white placeholder-neutral-700 transition-all shadow-sm"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-neutral-300">
                        Email Address
                      </label>
                      <div className="relative group/input">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail
                            size={16}
                            className="text-neutral-600 group-focus-within/input:text-violet-400 transition-colors"
                          />
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. sarah@acme.com"
                          className="block w-full pl-10 pr-3 py-3 bg-[#0A0A0A] border border-white/10 rounded-xl focus:ring-1 focus:ring-violet-500/50 focus:border-violet-500/50 sm:text-sm text-white placeholder-neutral-700 transition-all shadow-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Company Info Group */}
                <div className="space-y-6">
                  <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider">
                    Organization
                  </h3>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-neutral-300">
                        Company Name
                      </label>
                      <div className="relative group/input">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Building
                            size={16}
                            className="text-neutral-600 group-focus-within/input:text-violet-400 transition-colors"
                          />
                        </div>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="e.g. Acme Corp"
                          className="block w-full pl-10 pr-3 py-3 bg-[#0A0A0A] border border-white/10 rounded-xl focus:ring-1 focus:ring-violet-500/50 focus:border-violet-500/50 sm:text-sm text-white placeholder-neutral-700 transition-all shadow-sm"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-neutral-300">
                        Billing Address
                      </label>
                      <div className="relative group/input">
                        <div className="absolute top-3.5 left-3 flex items-start pointer-events-none">
                          <MapPin
                            size={16}
                            className="text-neutral-600 group-focus-within/input:text-violet-400 transition-colors"
                          />
                        </div>
                        <textarea
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          rows={3}
                          placeholder="Full billing address..."
                          className="block w-full pl-10 pr-3 py-3 bg-[#0A0A0A] border border-white/10 rounded-xl focus:ring-1 focus:ring-violet-500/50 focus:border-violet-500/50 sm:text-sm text-white placeholder-neutral-700 transition-all shadow-sm resize-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full flex justify-center items-center gap-2 px-6 py-4 border border-transparent text-sm font-bold rounded-xl text-black bg-white hover:bg-neutral-200 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:-translate-y-0.5"
                    onClick={handleSubmit}
                  >
                    Create Client
                    <ArrowRight size={18} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreateClient;
