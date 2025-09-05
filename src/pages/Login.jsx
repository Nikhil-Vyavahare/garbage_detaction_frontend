import React, { useEffect, useState } from "react";
import logo from "../assets/logo.jpeg";

const Login = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState("login"); // "login" | "signup"
  const [year] = useState(new Date().getFullYear());

  // Splash screen hide after 3s
  useEffect(() => {
    console.log("Garbage Detection Website Loaded");
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Dummy handlers (no storage, just log in console)
  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Signup form submitted");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login form submitted");
  };

  return (
    <div className="login-body">
      {/* Splash */}
      {showSplash && (
        <div id="splash" className="splash">
          <img src={logo} alt="City Surveillance Logo" className="splash-logo" />
          <div className="splash-title">CITY SURVEILLANCE SYSTEM</div>
        </div>
      )}

      {/* App */}
      {!showSplash && (
        <main id="app">
          <header className="header">
            <h1 className="project-title">CITY SURVEILLANCE SYSTEM</h1>
            <p className="project-subtitle">Smart Garbage Collection Portal</p>
          </header>

          <section className="auth-card">
            <div className="tab-buttons">
              <button
                className={`tab ${activeTab === "login" ? "active" : ""}`}
                onClick={() => setActiveTab("login")}
              >
                Login
              </button>
              <button
                className={`tab ${activeTab === "signup" ? "active" : ""}`}
                onClick={() => setActiveTab("signup")}
              >
                Sign Up
              </button>
            </div>

            {/* LOGIN FORM */}
            {activeTab === "login" && (
              <form id="loginForm" className="form visible" onSubmit={handleLogin}>
                <label>Email</label>
                <input type="email" name="loginEmail" required />
                <label>Password</label>
                <input type="password" name="loginPassword" minLength="6" required />
                <button type="submit" className="primary-btn">Login</button>
                <p className="note">
                  New here?{" "}
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab("signup");
                    }}
                  >
                    Create account
                  </a>
                </p>
              </form>
            )}

            {/* SIGNUP FORM */}
            {activeTab === "signup" && (
              <form id="signupForm" className="form visible" onSubmit={handleSignup}>
                <label>Full Name</label>
                <input type="text" name="signupName" />
                <label>Email</label>
                <input type="email" name="signupEmail" required />
                <label>Password</label>
                <input type="password" name="signupPassword" minLength="6" required />
                <label>Confirm Password</label>
                <input type="password" name="signupConfirm" minLength="6" required />
                <button type="submit" className="primary-btn">Create Account</button>
                <p className="note">
                  Already have an account?{" "}
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab("login");
                    }}
                  >
                    Login
                  </a>
                </p>
              </form>
            )}
          </section>

          <footer className="footer">
            <small>© <span>{year}</span> City Surveillance – Garbage Collection</small>
          </footer>
        </main>
      )}
    </div>
  );
};

export default Login;
