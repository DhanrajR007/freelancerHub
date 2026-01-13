import { Link } from "@tanstack/react-router";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 p-6 flex justify-between items-center max-w-7xl mx-auto right-0">
      <Link to="/" className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-linear-to-br from-violet-600 to-indigo-600 flex items-center justify-center font-bold text-lg text-white">
          F
        </div>
        <span className="font-semibold text-lg tracking-tight text-white">
          FreelancerHub
        </span>
      </Link>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
        <Link
          to="/features"
          className="hover:text-white transition-colors [&.active]:text-white"
        >
          Features
        </Link>
        <Link
          to="/pricing"
          className="hover:text-white transition-colors [&.active]:text-white"
        >
          Pricing
        </Link>
        <Link
          to="/about"
          className="hover:text-white transition-colors [&.active]:text-white"
        >
          About
        </Link>
      </div>
      <button className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors">
        <Link
          to="/auth"
          className="hover:text-white transition-colors [&.active]:text-white"
        >
          Login
        </Link>
      </button>
    </nav>
  );
};

export default Navbar;
