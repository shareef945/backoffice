import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div
      className="main-div"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        justifyItems: "center",
      }}>
      <div>
        <img src="/eco_logo_blue.jpg" alt="logo" style={{ height: "106px" }} />
      </div>
      <div>
        <p
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            margin: "0",
            color: "#092C4C",
          }}>
          {props.header}
        </p>
      </div>

      <div
        style={{
          marginRight: "5%",
          gap: "30%",
          display: "flex",
          fontSize: "20px",
        }}>
        <div>
          <Link style={{ textDecoration: "none", color: "#092C4C" }} to="/home">
            Home
          </Link>
        </div>
        <div>
          <Link
            style={{ textDecoration: "none", color: "#092C4C" }}
            to="/login">
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
}
