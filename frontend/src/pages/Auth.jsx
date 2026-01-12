import React, { useState } from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const Auth = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black p-4 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-zinc-800/30 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-zinc-900/40 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-md border border-zinc-800 bg-zinc-950/50 rounded-2xl p-2 relative z-10 transition-all duration-300 backdrop-blur-xl">
        {showSignUp ? (
          <SignUp onSignInClick={() => setShowSignUp(false)} />
        ) : (
          <SignIn onSignUpClick={() => setShowSignUp(true)} />
        )}
      </div>
    </div>
  );
};

export default Auth;
