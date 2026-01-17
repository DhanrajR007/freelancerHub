import { Link } from "@tanstack/react-router";
import { useSelector } from "react-redux";

const Navbar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <nav className="sticky top-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-neutral-950/70 border-b border-white/5 transition-all duration-300">
      <Link to="/" className="flex items-center gap-3 group">
        <div className="w-9 h-9 rounded-xl bg-linear-to-br from-violet-600 to-indigo-600 flex items-center justify-center font-bold text-lg text-white shadow-lg shadow-violet-500/20 group-hover:shadow-violet-500/40 transition-all duration-300">
          F
        </div>
        <span className="font-semibold text-lg tracking-tight text-white group-hover:text-violet-200 transition-colors">
          FreelancerHub
        </span>
      </Link>
      <div className="hidden md:flex items-center gap-1 text-sm font-medium text-neutral-400 bg-white/5 p-1 rounded-full border border-white/5">
        {[
          { to: "/features", label: "Features" },
          { to: "/pricing", label: "Pricing" },
          { to: "/about", label: "About" },
        ].map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="px-4 py-1.5 rounded-full hover:text-white hover:bg-white/5 transition-all duration-300 [&.active]:text-white [&.active]:bg-white/10"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-4">
        {isAuthenticated ? (
          <Link
            to="/dashboard"
            className="px-5 py-2 rounded-xl bg-white text-neutral-950 font-semibold text-sm hover:bg-neutral-200 transition-colors shadow-lg shadow-white/10"
          >
            Dashboard
          </Link>
        ) : (
          <Link
            to="/auth"
            className="px-5 py-2 rounded-xl bg-neutral-800 text-white font-medium text-sm hover:bg-neutral-700 transition-colors border border-white/10 hover:border-white/20"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
