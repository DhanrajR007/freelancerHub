import React, { useState } from "react";
import {
  User,
  Mail,
  Building,
  Phone,
  MapPin,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const CreateClient = () => {
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

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden flex items-center justify-center p-4 md:p-8">
      {/* Dynamic Background */}
      <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-violet-900/20 via-black to-indigo-900/20"></div>
        <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left Side: Visual/Preview */}
        <div className="hidden lg:flex flex-col space-y-8 animate-float">
          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-violet-600 to-indigo-600 rounded-3xl blur-sm opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-neutral-900/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <Sparkles size={100} className="text-violet-500" />
              </div>

              <h3 className="text-sm font-semibold text-violet-400 uppercase tracking-widest mb-4">
                Client Preview
              </h3>

              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-violet-500 to-indigo-500 flex items-center justify-center text-2xl font-bold shadow-lg shadow-violet-500/20">
                  {formData.name ? formData.name.charAt(0).toUpperCase() : "C"}
                </div>
                <div>
                  <h2 className="text-2xl font-bold">
                    {formData.name || "Client Name"}
                  </h2>
                  <p className="text-neutral-400">
                    {formData.company || "Company Name"}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-neutral-300 p-3 rounded-xl bg-white/5 border border-white/5">
                  <Mail size={18} className="text-violet-400" />
                  <span className="truncate">
                    {formData.email || "client@example.com"}
                  </span>
                </div>
                <div className="flex items-center space-x-3 text-neutral-300 p-3 rounded-xl bg-white/5 border border-white/5">
                  <Phone size={18} className="text-violet-400" />
                  <span>{formData.phone || "+1 (555) 000-0000"}</span>
                </div>
                <div className="flex items-start space-x-3 text-neutral-300 p-3 rounded-xl bg-white/5 border border-white/5">
                  <MapPin size={18} className="text-violet-400 mt-1" />
                  <span className="text-sm">
                    {formData.address ||
                      "123 Business Avenue, Tech City, TC 90210"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center lg:text-left pl-4">
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white to-neutral-500 mb-4">
              Grow Your <br /> Network.
            </h1>
            <p className="text-neutral-400 text-lg max-w-md">
              Add new clients to your workspace and manage your relationships
              effortlessly with FreelanceHub.
            </p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full">
          <div className="bg-neutral-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-violet-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                New Client Details{" "}
                <div className="h-2 w-2 rounded-full bg-violet-500 animate-pulse"></div>
              </h2>
              <p className="text-neutral-400 text-sm">
                Fill in the information to register a new client.
              </p>
            </div>

            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="group/input">
                  <label className="block text-xs font-medium text-neutral-400 mb-1 ml-1 group-focus-within/input:text-violet-400 transition-colors">
                    Full Name
                  </label>
                  <div className="relative">
                    <User
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within/input:text-violet-400 transition-colors"
                    />
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-neutral-600 focus:outline-hidden focus:bg-white/10 focus:border-violet-500/50 transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="group/input">
                  <label className="block text-xs font-medium text-neutral-400 mb-1 ml-1 group-focus-within/input:text-violet-400 transition-colors">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within/input:text-violet-400 transition-colors"
                    />
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="john@company.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-neutral-600 focus:outline-hidden focus:bg-white/10 focus:border-violet-500/50 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="group/input">
                  <label className="block text-xs font-medium text-neutral-400 mb-1 ml-1 group-focus-within/input:text-violet-400 transition-colors">
                    Company
                  </label>
                  <div className="relative">
                    <Building
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within/input:text-violet-400 transition-colors"
                    />
                    <input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      type="text"
                      placeholder="Acme Inc."
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-neutral-600 focus:outline-hidden focus:bg-white/10 focus:border-violet-500/50 transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="group/input">
                  <label className="block text-xs font-medium text-neutral-400 mb-1 ml-1 group-focus-within/input:text-violet-400 transition-colors">
                    Phone
                  </label>
                  <div className="relative">
                    <Phone
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within/input:text-violet-400 transition-colors"
                    />
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      type="tel"
                      placeholder="+1 (555) 000-000"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-neutral-600 focus:outline-hidden focus:bg-white/10 focus:border-violet-500/50 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>

              <div className="group/input">
                <label className="block text-xs font-medium text-neutral-400 mb-1 ml-1 group-focus-within/input:text-violet-400 transition-colors">
                  Billing Address
                </label>
                <div className="relative">
                  <MapPin
                    size={18}
                    className="absolute left-3 top-3.5 text-neutral-500 group-focus-within/input:text-violet-400 transition-colors"
                  />
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="123 Business Rd, Suite 100..."
                    rows={3}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-neutral-600 focus:outline-hidden focus:bg-white/10 focus:border-violet-500/50 transition-all duration-300 resize-none"
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="w-full group relative overflow-hidden bg-white text-black font-bold py-4 rounded-xl hover:bg-neutral-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Create Client{" "}
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateClient;
