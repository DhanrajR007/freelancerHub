import React, { useState } from "react";
import { RegisterUser } from "../api/auth.api";
import { useDispatch } from "react-redux";
import { login } from "../store/slice/auth.slice";
import { useNavigate } from "@tanstack/react-router";

const SignUp = ({ onSignInClick }) => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const payload = {
    name,
    username: userName,
    email,
    password,
  };

  const handleSubmit = async (e) => {
    console.log(name, userName, email, password);
    e.preventDefault();
    const data = await RegisterUser(payload);
    dispatch(login(data.user));
    localStorage.setItem("token", data.token);
    navigate({ to: "/dashboard" });
    console.log(data);
  };

  return (
    <div className="p-8">
      <div className="flex flex-col gap-2 mb-10">
        <h2 className="text-3xl font-semibold text-white tracking-tight">
          Create Account
        </h2>
        <p className="text-zinc-400 text-sm">Start your journey with us.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="group">
            <label className="block text-xs text-zinc-500 font-medium mb-1.5 ml-1">
              USER NAME
            </label>
            <input
              type="text"
              placeholder="JohnDoe_01"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg bg-zinc-900/50 border border-zinc-800 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-white focus:bg-zinc-900 transition-all duration-200"
            />
          </div>
          <div className="group">
            <label className="block text-xs text-zinc-500 font-medium mb-1.5 ml-1">
              FULL NAME
            </label>
            <input
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg bg-zinc-900/50 border border-zinc-800 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-white focus:bg-zinc-900 transition-all duration-200"
            />
          </div>

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
          className="w-full py-3.5 px-4 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-colors duration-200 mt-2"
        >
          Create Account
        </button>

        <div className="pt-4 text-center">
          <button
            type="button"
            onClick={onSignInClick}
            className="text-sm text-zinc-500 hover:text-white transition-colors duration-200"
          >
            Already have an account?{" "}
            <span className="underline underline-offset-4">Sign In</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
