import React, { useState } from "react";
import { LoginUser } from "../api/auth.api";
import { useDispatch } from "react-redux";
import { login } from "../store/slice/auth.slice";
import { useNavigate } from "@tanstack/react-router";

const SignIn = ({ onSignUpClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const payload = {
    email,
    password,
  };
  const handleSubmit = async (e) => {
    console.log(payload);
    e.preventDefault();
    // TODO: Add sign in logic
    const data = await LoginUser(payload);
    dispatch(login(data.user));
    localStorage.setItem("token", data.token);
    console.log(data);
    navigate({ to: "/dashboard" });
  };

  return (
    <div className="p-8">
      <div className="flex flex-col gap-2 mb-10">
        <h2 className="text-3xl font-semibold text-white tracking-tight">
          Login
        </h2>
        <p className="text-zinc-400 text-sm">Welcome back to the workspace.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="group">
            <label className="block text-xs text-zinc-500 font-medium mb-1.5 ml-1">
              EMAIL
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg bg-zinc-900/50 border border-zinc-800 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-white focus:bg-zinc-900 transition-all duration-200"
            />
          </div>

          <div className="group">
            <label className="block text-xs text-zinc-500 font-medium mb-1.5 ml-1">
              PASSWORD
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg bg-zinc-900/50 border border-zinc-800 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-white focus:bg-zinc-900 transition-all duration-200"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3.5 px-4 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-colors duration-200"
        >
          Sign In
        </button>

        <div className="pt-4 text-center">
          <button
            type="button"
            onClick={onSignUpClick}
            className="text-sm text-zinc-500 hover:text-white transition-colors duration-200"
          >
            Don't have an account?{" "}
            <span className="underline underline-offset-4">Create one</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
