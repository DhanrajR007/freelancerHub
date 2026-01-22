import React, { useEffect, useState } from "react";
import {
  User,
  Mail,
  Building,
  Phone,
  Plus,
  Search,
  MoreVertical,
  CreditCard,
  Briefcase,
  X,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { createClient, getAllClient } from "../api/client.api";
import { updateClients } from "../store/slice/client.slice";
import { useQuery } from "@tanstack/react-query";

const Dashboard = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    address: "",
  });

  const user = useSelector((state) => state.auth.user);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const dispatch = useDispatch();
  const {
    data: clientss = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["clients"],
    queryFn: getAllClient,
    refetchInterval: 30000, // Refetch every 30 seconds to update click counts
    staleTime: 0, // Consider data stale immediately so it refetches when invalidated
  });
  useEffect(() => {
    dispatch(updateClients(clientss.allClients));
    console.log(clientss.allClients);
  }, [clientss]);
  if (isLoading) {
    return <div className="text-white">Loading...</div>;
  }

  if (isError) {
    return <div className="text-red-500">Error: {error.message}</div>;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const response = await createClient(formData);
    console.log(response);
    setFormData({ name: "", email: "", company: "", address: "" });
    setIsCreateModalOpen(false);
    setIsSubmitting(false);
  };

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
              Overview of your activity and clients (Demo Mode).
            </p>
          </div>
          <button
            onClick={() => setIsCreateModalOpen(true)}
            className="flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-xl font-semibold hover:bg-neutral-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] active:scale-95 w-fit"
          >
            <Plus size={18} />
            <span>Create Client</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: User & Stats */}
          <div
            className="space-y-6 lg:col-span-1 animate-fade-in-up"
            style={{ animationDelay: "100ms" }}
          >
            {/* User Profile Card */}
            <div className="rounded-3xl bg-neutral-900/40 backdrop-blur-xl border border-white/5 p-6 relative overflow-hidden group hover:border-white/10 transition-colors">
              <div className="absolute inset-0 bg-linear-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="flex items-center gap-5 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-indigo-500 to-purple-600 p-0.5 shadow-lg shadow-indigo-500/20">
                  <div className="w-full h-full bg-black rounded-[14px] flex items-center justify-center text-2xl font-bold text-white">
                    {user?.name?.charAt(0).toUpperCase() || "U"}
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white tracking-tight">
                    {user?.name || "User Name"}
                  </h2>
                  <p className="text-sm text-neutral-400 font-medium">
                    {user?.email || "user@example.com"}
                  </p>
                </div>
              </div>
            </div>

            {/* Total Clients Stat */}
            <div className="rounded-3xl bg-neutral-900/40 backdrop-blur-xl border border-white/5 p-6 group hover:border-indigo-500/20 transition-colors relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 text-indigo-500 transform translate-x-1/2 -translate-y-1/2">
                <Briefcase size={100} />
              </div>
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
                  <Briefcase size={20} />
                </div>
                <p className="text-4xl font-bold text-white tracking-tight">
                  {clientss?.allClients?.length}
                </p>
                <p className="text-neutral-500 text-sm font-medium mt-1">
                  Total Active Clients
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Client Management */}
          <div
            className="lg:col-span-2 space-y-6 animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            {/* Client List Header */}
            <div className="flex items-center justify-between px-2">
              <h3 className="text-lg font-bold text-white">Your Clients</h3>
              <div className="text-neutral-500 text-sm">
                {clientss?.allClients?.length} Clients
              </div>
            </div>

            {/* Client Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {clientss?.allClients?.length === 0 ? (
                <div className="col-span-full flex flex-col items-center justify-center py-16 text-neutral-500 border border-white/5 rounded-3xl bg-neutral-900/20 border-dashed">
                  <Briefcase size={48} className="mb-4 opacity-20" />
                  <p>No clients found.</p>
                  <button
                    onClick={() => setIsCreateModalOpen(true)}
                    className="text-indigo-400 text-sm mt-2 hover:underline"
                  >
                    Create your first client
                  </button>
                </div>
              ) : (
                clientss.allClients.map((client) => (
                  <div
                    key={client._id}
                    className="group relative p-5 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-white/10 hover:bg-neutral-900/60 transition-all cursor-pointer overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                    <div className="relative z-10 flex flex-col h-full justify-between gap-4">
                      <div className="flex justify-between items-start">
                        <div className="w-12 h-12 rounded-xl bg-linear-to-br from-neutral-800 to-neutral-900 border border-white/5 flex items-center justify-center text-lg font-bold text-white shadow-inner">
                          {client.name.charAt(0).toUpperCase()}
                        </div>
                        <button className="text-neutral-600 hover:text-white transition-colors">
                          <MoreVertical size={18} />
                        </button>
                      </div>

                      <div>
                        <h4 className="font-bold text-lg text-white group-hover:text-indigo-300 transition-colors mb-1">
                          {client.name}
                        </h4>
                        <div className="flex items-center gap-2 text-sm text-neutral-400 mb-1">
                          <Building size={14} />
                          <span className="truncate">{client.company}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-500">
                          <Mail size={12} />
                          <span className="truncate">{client.email}</span>
                        </div>
                      </div>

                      {/* <div className="mt-2 pt-3 border-t border-white/5 flex justify-between items-center">
                        <div
                          className={`flex items-center gap-1.5 text-xs font-medium px-2 py-1 rounded-md ${
                            client.status === "Active"
                              ? "bg-emerald-500/10 text-emerald-400"
                              : "bg-amber-500/10 text-amber-400"
                          }`}
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full ${
                              client.status === "Active"
                                ? "bg-emerald-500"
                                : "bg-amber-500"
                            }`}
                          ></div>
                          {client.status}
                        </div>
                      </div> */}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Create Client Modal */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in"
            onClick={() => setIsCreateModalOpen(false)}
          ></div>
          <div className="relative w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 shadow-2xl animate-scale-up">
            <button
              onClick={() => setIsCreateModalOpen(false)}
              className="absolute top-6 right-6 text-neutral-500 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">New Client</h2>
              <p className="text-neutral-400 text-sm">
                Add a new client to your dashboard (Demo).
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-neutral-400 ml-1">
                  Client Name
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  type="text"
                  placeholder="e.g. Marcus Johnson"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-neutral-600 focus:outline-hidden focus:bg-white/10 focus:border-indigo-500/50 transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-neutral-400 ml-1">
                  Email
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  type="email"
                  placeholder="client@mail.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-neutral-600 focus:outline-hidden focus:bg-white/10 focus:border-indigo-500/50 transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-neutral-400 ml-1">
                  Company
                </label>
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  type="text"
                  placeholder="e.g. TechFlow Solutions"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-neutral-600 focus:outline-hidden focus:bg-white/10 focus:border-indigo-500/50 transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-neutral-400 ml-1">
                  Address
                </label>
                <input
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  type="text"
                  placeholder="Full Address"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-neutral-600 focus:outline-hidden focus:bg-white/10 focus:border-indigo-500/50 transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-white text-black rounded-xl font-bold hover:bg-neutral-200 transition-colors shadow-lg shadow-white/5 mt-4 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <Loader2 size={18} className="animate-spin" />
                ) : (
                  <span>Create Client</span>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
