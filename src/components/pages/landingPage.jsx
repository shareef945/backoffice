import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      style={{
        margin: "20% 10% 10% 10%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}>
      <div className="center-div">
        <div
          style={{ display: "flex", justifyContent: "center", width: "400px" }}>
          <img
            style={{ width: "180px", height: "120px", marginBottom: "15px" }}
            src="/eco_logo_blue.jpg"
            alt="logo"
          />
        </div>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "400px",
          }}>
          <div style={{ width: "400px" }}>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="email"
            />
          </div>
          <div style={{ width: "400px" }}>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="password"
            />
          </div>
          <div style={{ width: "100%" }}>
            <Link to="/home">
              <button
                style={{ width: "100%", fontSize: "15px" }}
                className="btn btn-outline-dark ">
                Log In
              </button>
            </Link>
          </div>
          <div style={{ width: "100%" }}>
            <Link to="/home">
              <button
                style={{ width: "100%", fontSize: "15px" }}
                className="btn btn-outline-secondary ">
                Set-Up 2FA
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
