import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

export default function AuthPage() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "linear-gradient(135deg, #1976d2 0%, #ff4081 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "360px",
          maxWidth: "90vw",
          background: "#fff",
          borderRadius: 16,
          boxShadow: "0 8px 32px rgba(25, 118, 210, 0.15)",
          padding: "32px 28px 28px 28px",
          textAlign: "center",
          margin: "0 auto"
        }}
      >
        <h2
          style={{
            marginBottom: 28,
            fontWeight: 700,
            fontSize: "2rem",
            color: "#1976d2",
            letterSpacing: "1px",
          }}
        >
          Welcome!
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 24,
          }}
        >
          <button
            onClick={() => setShowLogin(true)}
            style={{
              flex: 1,
              padding: "12px 0",
              marginRight: 8,
              background: showLogin ? "#1976d2" : "#f3f3f3",
              color: showLogin ? "#fff" : "#1976d2",
              border: showLogin ? "none" : "1px solid #1976d2",
              borderRadius: 8,
              fontWeight: 600,
              fontSize: "1rem",
              cursor: "pointer",
              boxShadow: showLogin ? "0 2px 8px #1976d2aa" : "none",
              transition: "all 0.2s",
            }}
          >
            Login
          </button>
          <button
            onClick={() => setShowLogin(false)}
            style={{
              flex: 1,
              padding: "12px 0",
              background: !showLogin ? "#ff4081" : "#f3f3f3",
              color: !showLogin ? "#fff" : "#ff4081",
              border: !showLogin ? "none" : "1px solid #ff4081",
              borderRadius: 8,
              fontWeight: 600,
              fontSize: "1rem",
              cursor: "pointer",
              boxShadow: !showLogin ? "0 2px 8px #ff4081aa" : "none",
              transition: "all 0.2s",
            }}
          >
            Register
          </button>
        </div>
        <div style={{ marginTop: 8 }}>
          {showLogin ? (
            <Login />
          ) : (
            <Register onRegisterSuccess={() => setShowLogin(true)} />
          )}
        </div>
      </div>
    </div>
  );
}
