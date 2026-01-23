import React, { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  FileText,
  Plus,
  Search,
  MoreVertical,
  Calendar,
  CheckCircle,
  Clock,
  AlertCircle,
  DollarSign,
  User,
  X,
  CreditCard,
  Building,
} from "lucide-react";
import { getContractByuserId } from "../api/contract.api";
import { useQuery } from "@tanstack/react-query";

const ContractDetailsModal = ({ contract, onClose }) => {
  if (!contract) return null;

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "text-emerald-400 bg-emerald-400/10 border-emerald-400/20";
      case "Draft":
        return "text-amber-400 bg-amber-400/10 border-amber-400/20";
      case "Completed":
        return "text-blue-400 bg-blue-400/10 border-blue-400/20";
      default:
        return "text-neutral-400 bg-neutral-400/10 border-neutral-400/20";
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      ></div>
      <div className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 shadow-2xl animate-scale-up max-h-[90vh] overflow-y-auto custom-scrollbar">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-neutral-500 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <div className="space-y-8">
          {/* Header */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-amber-500/10 text-amber-500">
                <FileText size={24} />
              </div>
              <div
                className={`px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(
                  contract.status,
                )}`}
              >
                {contract.status}
              </div>
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">
              {contract.title}
            </h2>
            <div className="flex items-center gap-2 text-neutral-400">
              <Building size={16} />
              <span>{contract.client}</span>
            </div>
          </div>

          {/* Key Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
              <p className="text-xs text-neutral-500 uppercase font-bold tracking-wider mb-2">
                Total Value
              </p>
              <div className="flex items-center gap-2 text-white font-mono text-xl font-medium">
                <DollarSign size={20} className="text-amber-500" />
                {contract.value}
              </div>
            </div>
            <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
              <p className="text-xs text-neutral-500 uppercase font-bold tracking-wider mb-2">
                Start Date
              </p>
              <div className="flex items-center gap-2 text-white font-mono text-sm font-medium">
                <Calendar size={16} className="text-neutral-400" />
                {contract.startDate}
              </div>
            </div>
            <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
              <p className="text-xs text-neutral-500 uppercase font-bold tracking-wider mb-2">
                End Date
              </p>
              <div className="flex items-center gap-2 text-white font-mono text-sm font-medium">
                <Clock size={16} className="text-neutral-400" />
                {contract.endDate}
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-b border-white/5 pb-2">
              Description
            </h3>
            <p className="text-neutral-300 leading-relaxed text-sm">
              {contract.description ||
                "No description provided for this contract."}
            </p>
          </div>

          {/* Terms & Conditions */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-b border-white/5 pb-2">
              Terms & Conditions
            </h3>
            <div className="bg-neutral-900/50 rounded-2xl p-6 border border-white/5">
              <p className="text-neutral-400 font-mono text-xs leading-relaxed whitespace-pre-wrap">
                {contract.terms ||
                  "1. Scope of Work\nThe Contractor agrees to perform the services described in the attached Scope of Work.\n\n2. Compensation\nThe Client agrees to pay the Contractor the total amount specified upon completion of the milestones.\n\n3. Confidentiality\nBoth parties agree to maintain the confidentiality of any proprietary information shared during the term of this agreement."}
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 pt-4">
            <button className="flex-1 bg-white text-black py-3 rounded-xl font-bold hover:bg-neutral-200 transition-colors shadow-lg shadow-white/5">
              Edit Contract
            </button>
            <button className="flex-1 bg-white/5 text-white border border-white/10 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors">
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Contracts = () => {
  const [selectedContract, setSelectedContract] = useState(null);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["contracts"],
    queryFn: getContractByuserId,
    refetchInterval: 10000, // Refetch every 30 seconds to update click counts
    staleTime: 0, // Consider data stale immediately so it refetches when invalidated
  });
  console.log(data?.allContract);

  // Dummy Data for Contracts
  const contracts = [
    {
      id: 1,
      title: "Website Redesign",
      client: "Acme Corp",
      value: "5,000",
      status: "Active",
      startDate: "2024-01-15",
      endDate: "2024-03-01",
      description:
        "Complete overhaul of the corporate website including new branding, responsive design, and CMS integration.",
      terms:
        "1. Visual Design: 3 concepts to be provided.\n2. Development: React & Tailwind stack.\n3. Content: Provided by client by 2024-01-20.",
    },
    {
      id: 2,
      title: "Mobile App Development",
      client: "Global Tech",
      value: "12,500",
      status: "Draft",
      startDate: "2024-02-01",
      endDate: "2024-05-30",
      description:
        "Native iOS and Android application for inventory management system with real-time sync.",
    },
    {
      id: 3,
      title: "SEO Optimization",
      client: "Starlight Inc",
      value: "1,200",
      status: "Completed",
      startDate: "2023-11-01",
      endDate: "2024-01-10",
      description:
        "3-month SEO campaign focusing on technical audit, on-page optimization, and backlink strategy.",
    },
    {
      id: 4,
      title: "Marketing Campaign",
      client: "BrightFuture",
      value: "3,000",
      status: "Active",
      startDate: "2024-01-20",
      endDate: "2024-04-20",
      description:
        "Social media marketing campaign for Q1 product launch across LinkedIn and Twitter.",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "text-emerald-400 bg-emerald-400/10 border-emerald-400/20";
      case "Draft":
        return "text-amber-400 bg-amber-400/10 border-amber-400/20";
      case "Completed":
        return "text-blue-400 bg-blue-400/10 border-blue-400/20";
      default:
        return "text-neutral-400 bg-neutral-400/10 border-neutral-400/20";
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-amber-500/30 pb-20">
      {/* Background Ambience */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-amber-900/10 rounded-full blur-[100px] animate-slow-spin"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-orange-900/10 rounded-full blur-[100px] animate-float"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-24 space-y-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 animate-fade-in-up">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white to-neutral-500">
              Contracts
            </h1>
            <p className="text-neutral-400 mt-1">
              Manage your agreements and legal documents.
            </p>
          </div>
          <Link
            to="/create-contract"
            className="flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-xl font-semibold hover:bg-neutral-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] active:scale-95 w-fit"
          >
            <Plus size={18} />
            <span>New Contract</span>
          </Link>
        </div>

        {/* Search & Filter (Visual Only) */}
        <div
          className="flex items-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "100ms" }}
        >
          <div className="relative flex-1 max-w-md">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500"
              size={18}
            />
            <input
              type="text"
              placeholder="Search contracts..."
              className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-white placeholder:text-neutral-600 focus:outline-hidden focus:bg-white/10 focus:border-amber-500/50 transition-all"
            />
          </div>
          <button className="px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-neutral-400 hover:text-white hover:bg-white/10 transition-all text-sm font-medium">
            Filter
          </button>
        </div>

        {/* Contracts Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up"
          style={{ animationDelay: "200ms" }}
        >
          {data?.allContract?.map((contract) => (
            <div
              key={contract._id}
              onClick={() => setSelectedContract(contract)}
              className="group relative bg-neutral-900/40 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:border-amber-500/30 transition-all hover:-translate-y-1 cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 space-y-4">
                <div className="flex justify-between items-start">
                  <div className="p-3 rounded-xl bg-amber-500/10 text-amber-500">
                    <FileText size={24} />
                  </div>
                  <button className="text-neutral-600 hover:text-white transition-colors">
                    <MoreVertical size={18} />
                  </button>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-amber-200 transition-colors">
                    {contract.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-neutral-400">
                    <User size={14} />
                    <span>{contract.clientId}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-xs text-neutral-500 uppercase font-bold tracking-wider">
                      Value
                    </span>
                    <span className="text-white font-mono font-medium">
                      500
                    </span>
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(
                      contract.active,
                    )}`}
                  >
                    {contract.active ? "Active" : "Inactive"}
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs text-neutral-500 pt-2">
                  <div className="flex items-center gap-1">
                    <Calendar size={12} />
                    <span>{contract.startDate}</span>
                  </div>
                  <div className="w-1 h-1 rounded-full bg-neutral-700"></div>
                  <div className="flex items-center gap-1">
                    <Clock size={12} />
                    <span>{contract.endDate}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedContract && (
        <ContractDetailsModal
          contract={selectedContract}
          onClose={() => setSelectedContract(null)}
        />
      )}
    </div>
  );
};

export default Contracts;
