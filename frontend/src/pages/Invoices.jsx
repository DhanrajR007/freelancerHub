import React from "react";
import { Link } from "@tanstack/react-router";
import {
  Receipt,
  Plus,
  Search,
  MoreVertical,
  Calendar,
  CheckCircle,
  Clock,
  AlertOctagon,
  User,
  ArrowUpRight,
} from "lucide-react";

const Invoices = () => {
  // Dummy Data for Invoices
  const invoices = [
    {
      id: "INV-2024-001",
      client: "Acme Corp",
      amount: "2,500.00",
      status: "Paid",
      date: "2024-01-15",
      dueDate: "2024-01-30",
    },
    {
      id: "INV-2024-002",
      client: "Global Tech",
      amount: "4,250.50",
      status: "Pending",
      date: "2024-02-01",
      dueDate: "2024-02-15",
    },
    {
      id: "INV-2024-003",
      client: "Starlight Inc",
      amount: "800.00",
      status: "Overdue",
      date: "2023-12-20",
      dueDate: "2024-01-05",
    },
    {
      id: "INV-2024-004",
      client: "BrightFuture",
      amount: "1,500.00",
      status: "Draft",
      date: "2024-02-10",
      dueDate: "2024-02-24",
    },
    {
      id: "INV-2024-005",
      client: "Nebula Systems",
      amount: "3,100.00",
      status: "Pending",
      date: "2024-02-12",
      dueDate: "2024-02-26",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Paid":
        return "text-emerald-400 bg-emerald-400/10 border-emerald-400/20";
      case "Pending":
        return "text-sky-400 bg-sky-400/10 border-sky-400/20";
      case "Overdue":
        return "text-rose-400 bg-rose-400/10 border-rose-400/20";
      case "Draft":
        return "text-neutral-400 bg-neutral-400/10 border-neutral-400/20";
      default:
        return "text-white bg-white/10";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Paid":
        return <CheckCircle size={14} />;
      case "Pending":
        return <Clock size={14} />;
      case "Overdue":
        return <AlertOctagon size={14} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-emerald-500/30 pb-20">
      {/* Background Ambience */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-emerald-900/10 rounded-full blur-[100px] animate-slow-spin"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-cyan-900/10 rounded-full blur-[100px] animate-float"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-24 space-y-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 animate-fade-in-up">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white to-neutral-500">
              Invoices
            </h1>
            <p className="text-neutral-400 mt-1">
              Track payments and manage billing.
            </p>
          </div>
          <Link
            to="/create-invoice"
            className="flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-xl font-semibold hover:bg-neutral-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] active:scale-95 w-fit"
          >
            <Plus size={18} />
            <span>New Invoice</span>
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
              placeholder="Search invoices..."
              className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-white placeholder:text-neutral-600 focus:outline-hidden focus:bg-white/10 focus:border-emerald-500/50 transition-all"
            />
          </div>
          <button className="px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-neutral-400 hover:text-white hover:bg-white/10 transition-all text-sm font-medium">
            Filter
          </button>
        </div>

        {/* Invoices List (Table style for invoices usually better) */}
        <div
          className="bg-neutral-900/40 backdrop-blur-sm border border-white/5 rounded-3xl overflow-hidden animate-fade-in-up"
          style={{ animationDelay: "200ms" }}
        >
          <div className="grid grid-cols-12 gap-4 p-4 border-b border-white/5 text-xs font-semibold text-neutral-500 uppercase tracking-wider">
            <div className="col-span-4 md:col-span-3">Invoice Details</div>
            <div className="col-span-3 md:col-span-3">Client</div>
            <div className="col-span-3 md:col-span-2 text-right">Amount</div>
            <div className="col-span-2 md:col-span-2 text-center">Status</div>
            <div className="hidden md:block col-span-2 text-right">Actions</div>
          </div>

          <div className="divide-y divide-white/5">
            {invoices.map((invoice) => (
              <div
                key={invoice.id}
                className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-white/5 transition-colors group cursor-pointer"
              >
                <div className="col-span-4 md:col-span-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-neutral-800 text-neutral-400 group-hover:bg-emerald-500/10 group-hover:text-emerald-400 transition-colors">
                      <Receipt size={18} />
                    </div>
                    <div>
                      <p className="font-mono font-medium text-white">
                        {invoice.id}
                      </p>
                      <p className="text-xs text-neutral-500 mt-0.5">
                        Due {invoice.dueDate}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-3 md:col-span-3">
                  <div className="flex items-center gap-2 text-neutral-300">
                    <User size={14} className="text-neutral-500" />
                    <span className="truncate">{invoice.client}</span>
                  </div>
                </div>
                <div className="col-span-3 md:col-span-2 text-right">
                  <span className="font-mono font-bold text-white">
                    ${invoice.amount}
                  </span>
                </div>
                <div className="col-span-2 md:col-span-2 flex justify-center">
                  <div
                    className={`px-2.5 py-1 rounded-full text-[10px] font-bold border flex items-center gap-1.5 w-fit ${getStatusColor(invoice.status)}`}
                  >
                    {getStatusIcon(invoice.status)}
                    {invoice.status}
                  </div>
                </div>
                <div className="hidden md:block col-span-2 text-right">
                  <button className="p-2 text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition-colors opacity-0 group-hover:opacity-100">
                    <ArrowUpRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoices;
