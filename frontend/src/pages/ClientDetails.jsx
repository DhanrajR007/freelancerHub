import React, { useEffect, useState } from "react";
import { Link, useNavigate, useSearch } from "@tanstack/react-router";
import {
  ChevronLeft,
  Mail,
  Building,
  MapPin,
  ExternalLink,
  FileText,
  Receipt,
  MoreVertical,
  Calendar,
  Clock,
  Briefcase,
} from "lucide-react";
import { getClienById } from "../api/client.api";
import { useQuery } from "@tanstack/react-query";

const ClientDetails = () => {
  const navigate = useNavigate();
  const [clienttt, setClient] = useState(null);

  // Dummy Client Data
  const client = {
    id: "1",
    name: "Sarah Smith",
    email: "sarah@techflow.com",
    company: "TechFlow Solutions",
    address: "42 Innovation Dr, Silicon Valley, CA",
    initials: "SS",
    status: "Active",
    joinedDate: "Jan 15, 2024",
    totalProjects: 3,
    totalSpent: "$12,500",
  };

  const { id } = useSearch({
    strict: false,
  });
  const { data, isLoading, isError } = useQuery({
    queryKey: ["client", id],
    queryFn: () => getClienById(id),
    enabled: !!id, // only run when id exists
  });
  console.log(data?.client);

  // useEffect(() => {
  //   if (clientt) {
  //     setClient(clientt);
  //   }
  // }, [clientt]);

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col relative overflow-hidden font-sans selection:bg-indigo-500/30">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-900/10 blur-[120px] rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-fuchsia-900/5 blur-[100px] rounded-full"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
      </div>

      {/* Header */}
      <header className="z-10 p-6 md:px-10 md:py-8 flex justify-between items-center bg-black/20 backdrop-blur-md sticky top-0 border-b border-white/5">
        <Link
          to="/dashboard"
          className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group"
        >
          <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
            <ChevronLeft size={16} />
          </div>
          <span className="text-sm font-medium">Back to Dashboard</span>
        </Link>

        <div className="flex gap-2">
          <button className="p-2 text-neutral-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
            <MoreVertical size={20} />
          </button>
        </div>
      </header>

      <main className="relative z-10 flex-1 p-4 md:p-10 max-w-6xl mx-auto w-full space-y-8 animate-fade-in-up">
        {/* Client Header Section */}
        <section className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-3xl bg-linear-to-br from-indigo-500 to-purple-600 p-0.5 shadow-2xl shadow-indigo-500/20">
              <div className="w-full h-full bg-[#0A0A0A] rounded-[22px] flex items-center justify-center text-3xl font-bold text-white">
                {data?.client?.name?.charAt(0).toUpperCase() || "U"}
              </div>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white tracking-tight mb-2">
                {data?.client?.name}
              </h1>
              <div className="flex items-center gap-3 text-neutral-400">
                <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                  <Building size={14} className="text-indigo-400" />
                  <span className="text-sm">{data?.client?.company}</span>
                </div>
                <div className="w-1 h-1 bg-neutral-700 rounded-full"></div>
                <span className="text-sm">{data?.client?.email}</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4 w-full md:w-auto">
            {/* Action Buttons */}
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-[#0A0A0A] text-white border border-white/10 rounded-xl hover:bg-white/5 transition-all active:scale-95 group">
              <FileText
                size={18}
                className="text-neutral-400 group-hover:text-indigo-400 transition-colors"
              />
              <span
                className="font-semibold text-sm"
                onClick={() =>
                  navigate({ to: "/create-contract", search: { clientId: id } })
                }
              >
                Create Contract
              </span>
            </button>

            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-white text-black rounded-xl hover:bg-neutral-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] active:scale-95 font-bold text-sm">
              <Receipt size={18} />
              <span>Create Invoice</span>
            </button>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Detailed Info Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 bg-neutral-900/40 backdrop-blur-md rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                <p className="text-neutral-500 text-xs font-medium uppercase tracking-wider mb-1">
                  Total Projects
                </p>
                <p className="text-2xl font-bold text-white">
                  {client.totalProjects}
                </p>
              </div>
              <div className="p-5 bg-neutral-900/40 backdrop-blur-md rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                <p className="text-neutral-500 text-xs font-medium uppercase tracking-wider mb-1">
                  Total Value
                </p>
                <p className="text-2xl font-bold text-white">
                  {client.totalSpent}
                </p>
              </div>
              <div className="p-5 bg-neutral-900/40 backdrop-blur-md rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-neutral-500 text-xs font-medium uppercase tracking-wider">
                    Status
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                  <p className="text-xl font-bold text-white">
                    {client.status}
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="p-8 bg-neutral-900/30 backdrop-blur-md rounded-3xl border border-white/5 space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <UserIconWrapper>
                  <Briefcase size={16} className="text-white" />
                </UserIconWrapper>
                Client Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
                <InfoItem
                  label="Full Name"
                  value={data?.client?.name}
                  icon={<Briefcase size={16} />}
                />
                <InfoItem
                  label="Email Address"
                  value={data?.client?.email}
                  icon={<Mail size={16} />}
                />
                <InfoItem
                  label="Company"
                  value={data?.client?.company}
                  icon={<Building size={16} />}
                />
                <InfoItem
                  label="Address"
                  value={data?.client?.address}
                  icon={<MapPin size={16} />}
                />
                <InfoItem
                  label="Client Since"
                  value={data?.client?.createdAt}
                  icon={<Calendar size={16} />}
                />
                <InfoItem
                  label="Timezone"
                  value="GMT-7 (PST)"
                  icon={<Clock size={16} />}
                />
              </div>
            </div>
          </div>

          {/* Activity / Notes Column (Visual Filler) */}
          <div className="lg:col-span-1 space-y-6">
            <div className="h-full min-h-[300px] p-6 bg-neutral-900/30 backdrop-blur-md rounded-3xl border border-white/5 flex flex-col justify-center items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-2">
                <ExternalLink size={24} className="text-neutral-600" />
              </div>
              <h3 className="text-lg font-semibold text-white">
                No Recent Activity
              </h3>
              <p className="text-sm text-neutral-500 max-w-[200px] leading-relaxed">
                Create a contract or invoice to start tracking activity for this
                client.
              </p>
              <button className="text-xs text-indigo-400 hover:text-indigo-300 font-medium tracking-wide uppercase border-b border-indigo-500/30 hover:border-indigo-500 transition-all pb-0.5">
                View All Activity
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Helper Components for cleaner code
const InfoItem = ({ label, value, icon }) => (
  <div className="space-y-2 group">
    <p className="text-xs font-medium text-neutral-500 uppercase tracking-wider flex items-center gap-2">
      {label}
    </p>
    <p className="text-base text-neutral-200 font-medium group-hover:text-white transition-colors">
      {value}
    </p>
  </div>
);

const UserIconWrapper = ({ children }) => (
  <div className="p-1.5 rounded-lg bg-white/5 border border-white/5 text-neutral-400 flex items-center justify-center">
    {children}
  </div>
);

export default ClientDetails;
