import { useState } from "react";
import { useNavigate } from "react-router";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleAuth = () => {
    // For demo purposes, just navigate to main
    navigate("/main");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-md bg-base-100 shadow-xl p-6">
        {/* App Name */}
        <h1 className="text-2xl font-bold text-center mb-4">chat-if-y</h1>

        {/* Toggle */}
        <div className="tabs tabs-boxed mb-6">
          <button
            className={`tab w-1/2 ${isLogin ? "tab-active" : ""}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`tab w-1/2 ${!isLogin ? "tab-active" : ""}`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        {/* Form */}
        <div className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full"
            />
          )}

          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
          />

          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
          />

          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="input input-bordered w-full"
            />
          )}

          <button className="btn btn-primary w-full" onClick={handleAuth}>
            {isLogin ? "Login" : "Create Account"}
          </button>
        </div>

        {/* Divider */}
        <div className="divider my-6">OR</div>

        {/* Google Auth */}
        <button className="btn btn-outline w-full flex items-center gap-2" onClick={handleAuth}>
          {/* Google Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className="w-5 h-5"
          >
            <path
              fill="#FFC107"
              d="M43.6 20.5H42V20H24v8h11.3C33.6 32.6 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C34.1 6.5 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z"
            />
            <path
              fill="#FF3D00"
              d="M6.3 14.7l6.6 4.8C14.5 16 18.9 12 24 12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C34.1 6.5 29.3 4 24 4 16.3 4 9.7 8.4 6.3 14.7z"
            />
            <path
              fill="#4CAF50"
              d="M24 44c5.1 0 9.8-1.9 13.3-5.2l-6.1-5c-2 1.5-4.6 2.4-7.2 2.4-5.2 0-9.6-3.4-11.2-8l-6.5 5C9.7 39.6 16.3 44 24 44z"
            />
            <path
              fill="#1976D2"
              d="M43.6 20.5H42V20H24v8h11.3c-1 2.9-3 5.3-5.8 6.9l6.1 5C39.5 36.2 44 30.6 44 24c0-1.3-.1-2.3-.4-3.5z"
            />
          </svg>

          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Auth;