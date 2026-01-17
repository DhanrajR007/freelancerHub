import React, { useEffect, useState } from "react";
import {
  User,
  Mail,
  Building,
  Phone,
  MapPin,
  Plus,
  Search,
  MoreVertical,
  Globe,
  Briefcase,
  X,
  CreditCard,
  FileText,
  CheckCircle2,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { getAllClient } from "../api/client.api";

const Dashboard = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [clients, setClients] = useState([
    {
      id: 1,
      name: "Marcus Johnson",
      company: "TechFlow Solutions",
      email: "marcus@techflow.com",
      status: "Active",
      avatar: "M",
    },
    {
      id: 2,
      name: "Sarah Williams",
      company: "Design Crafters",
      email: "sarah@designcrafters.com",
      status: "Pending",
      avatar: "S",
    },
    {
      id: 3,
      name: "James Chen",
      company: "Apex Innovations",
      email: "james.c@apex.io",
      status: "Active",
      avatar: "J",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newClient = {
      id: clients.length + 1,
      name: formData.name,
      company: formData.company,
      email: formData.email,
      status: "Active",
      avatar: formData.name.charAt(0).toUpperCase(),
    };
    setClients([...clients, newClient]);
    setFormData({ name: "", email: "", company: "", phone: "", address: "" });
    setIsCreateModalOpen(false);
  };

  useEffect(() => {
    const clints = getAllClient().then((res) => res.allClients);
    console.log(clints);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-indigo-500/30 pb-20">
      {/* Background Ambience */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-indigo-900/10 rounded-full blur-[100px] animate-slow-spin"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-fuchsia-900/10 rounded-full blur-[100px] animate-float"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-24 space-y-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 animate-fade-in-up">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white to-neutral-500">
              Dashboard
            </h1>
            <p className="text-neutral-400 mt-1">
              Welcome back, Alex. Here's what's happening today.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setIsCreateModalOpen(true)}
              className="flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-xl font-semibold hover:bg-neutral-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] active:scale-95"
            >
              <Plus size={18} />
              <span>Create Client</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Profile & Stats */}
          <div
            className="space-y-6 lg:col-span-1 animate-fade-in-up"
            style={{ animationDelay: "100ms" }}
          >
            {/* Profile Card */}
            <div className="rounded-3xl bg-neutral-900/40 backdrop-blur-xl border border-white/5 p-6 relative overflow-hidden group">
              <div className="absolute inset-0 bg-linear-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="flex items-center gap-4 relative z-10">
                <div className="w-16 h-16 rounded-full p-0.5 bg-linear-to-br from-white/20 to-transparent">
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop"
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Alex Morgan</h2>
                  <p className="text-sm text-indigo-300">
                    Senior Product Designer
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/5 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-neutral-500 text-xs uppercase tracking-wider font-bold mb-1">
                    Status
                  </p>
                  <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    Available
                  </div>
                </div>
                <div>
                  <p className="text-neutral-500 text-xs uppercase tracking-wider font-bold mb-1">
                    Location
                  </p>
                  <div className="flex items-center gap-1 text-white text-sm">
                    🇺🇸 Los Angeles
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl bg-neutral-900/40 backdrop-blur-xl border border-white/5 p-5 group hover:border-indigo-500/20 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-3 group-hover:scale-110 transition-transform">
                  <CreditCard size={20} />
                </div>
                <p className="text-2xl font-bold text-white">$12.4k</p>
                <p className="text-neutral-500 text-xs mt-1">
                  Revenue this month
                </p>
              </div>
              <div className="rounded-3xl bg-neutral-900/40 backdrop-blur-xl border border-white/5 p-5 group hover:border-violet-500/20 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400 mb-3 group-hover:scale-110 transition-transform">
                  <Briefcase size={20} />
                </div>
                <p className="text-2xl font-bold text-white">4</p>
                <p className="text-neutral-500 text-xs mt-1">Active Projects</p>
              </div>
            </div>
          </div>

          {/* Right Column: Client Management */}
          <div
            className="lg:col-span-2 space-y-6 animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            {/* Search & Filter Bar */}
            <div className="flex gap-4">
              <div className="flex-1 relative group">
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within:text-white transition-colors"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Search clients..."
                  className="w-full bg-neutral-900/40 border border-white/5 rounded-2xl py-3 pl-12 pr-4 text-white placeholder:text-neutral-600 focus:outline-hidden focus:bg-neutral-900/60 focus:border-white/10 transition-all hover:bg-neutral-900/60"
                />
              </div>
              <button className="px-4 bg-neutral-900/40 border border-white/5 rounded-2xl text-neutral-400 hover:text-white hover:bg-neutral-900/60 transition-all">
                <MoreVertical size={18} />
              </button>
            </div>

            {/* Client List */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-white px-2">
                Recent Clients
              </h3>
              <div className="grid gap-3">
                {clients.map((client) => (
                  <div
                    key={client.id}
                    className="group flex items-center justify-between p-4 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-white/10 hover:bg-neutral-900/60 transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-linear-to-br from-neutral-800 to-neutral-900 border border-white/5 flex items-center justify-center text-lg font-bold text-white group-hover:scale-105 transition-transform">
                        {client.avatar}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white group-hover:text-indigo-300 transition-colors">
                          {client.name}
                        </h4>
                        <p className="text-sm text-neutral-500">
                          {client.company}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div
                        className={`hidden sm:flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border ${
                          client.status === "Active"
                            ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                            : "bg-amber-500/10 border-amber-500/20 text-amber-400"
                        }`}
                      >
                        {client.status === "Active" && (
                          <CheckCircle2 size={12} />
                        )}
                        {client.status}
                      </div>
                      <button className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center text-neutral-500 hover:text-white hover:bg-white/10 transition-colors">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Create Client Modal */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsCreateModalOpen(false)}
          ></div>
          <div className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 shadow-2xl animate-fade-in-up">
            <button
              onClick={() => setIsCreateModalOpen(false)}
              className="absolute top-6 right-6 text-neutral-500 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">
                Add New Client
              </h2>
              <p className="text-neutral-400 text-sm">
                Create a new client profile to manage projects and invoices.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-neutral-400 ml-1">
                    Client Name
                  </label>
                  <div className="relative group/input">
                    <User
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within/input:text-indigo-400 transition-colors"
                    />
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-neutral-600 focus:outline-hidden focus:bg-white/10 focus:border-indigo-500/50 transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-neutral-400 ml-1">
                    Email Address
                  </label>
                  <div className="relative group/input">
                    <Mail
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within/input:text-indigo-400 transition-colors"
                    />
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-neutral-600 focus:outline-hidden focus:bg-white/10 focus:border-indigo-500/50 transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-neutral-400 ml-1">
                    Company
                  </label>
                  <div className="relative group/input">
                    <Building
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within/input:text-indigo-400 transition-colors"
                    />
                    <input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      type="text"
                      placeholder="Acme Inc."
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-neutral-600 focus:outline-hidden focus:bg-white/10 focus:border-indigo-500/50 transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-neutral-400 ml-1">
                    Phone
                  </label>
                  <div className="relative group/input">
                    <Phone
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within/input:text-indigo-400 transition-colors"
                    />
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-neutral-600 focus:outline-hidden focus:bg-white/10 focus:border-indigo-500/50 transition-all"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-white text-black rounded-xl font-bold hover:bg-neutral-200 transition-colors shadow-lg shadow-white/5 mt-4"
              >
                Create Client
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
