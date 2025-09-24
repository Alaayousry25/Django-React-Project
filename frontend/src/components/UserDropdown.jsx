import React, { useState, useRef, useEffect } from "react";
import { ACCESS_TOKEN } from "../constants";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export default function UserDropdown() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  let username = "User";
  try {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      const decoded = jwtDecode(token);
      username = decoded.username || decoded.user || "User";
    }
  } catch (e) {}

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleLogout() {
    localStorage.clear();
    navigate("/auth");
  }

  return (
    <div
      style={{ position: "relative", display: "inline-block" }}
      ref={dropdownRef}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          background: "#1976d2",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: 40,
          height: 40,
          fontSize: 22,
          cursor: "pointer",
          boxShadow: "0 2px 8px #1976d2aa",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        title="User menu"
      >
        <span role="img" aria-label="user">
          👤
        </span>
      </button>
      {open && (
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 48,
            background: "#fff",
            borderRadius: 8,
            boxShadow: "0 4px 16px #1976d2aa",
            minWidth: 160,
            zIndex: 10,
            padding: "16px 12px",
            textAlign: "left",
          }}
        >
          <div style={{ marginBottom: 12, fontWeight: 600, color: "#1976d2" }}>
            {username}
          </div>
          <button
            onClick={handleLogout}
            style={{
              background: "#ff4081",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              padding: "8px 16px",
              fontWeight: 600,
              cursor: "pointer",
              width: "100%",
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
