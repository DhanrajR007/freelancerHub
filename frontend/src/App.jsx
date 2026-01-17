import { Outlet } from "@tanstack/react-router";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col font-sans selection:bg-violet-500/30">
      <Navbar />
      <div className="flex-1 w-full max-w-7xl mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
