import React from "react";
import Navbar from "../utils/Nav";
import { Link } from "react-router-dom";
import SubmittedTable from "../utils/SubmittedTable";

export default function GraSubmittedRequest() {
  return (
    <div>
      <Navbar header="GRA Submitted Requests" />
      <Link to="/home">
        <img
          style={{
            height: "30px",
            margin: "2% 0 0 3%",
            transform: "rotate(180deg)",
          }}
          src="/right-arrow.svg"
          alt="back arrow"
        />
      </Link>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          justifyItems: "center",
          marginTop: "10%",
        }}>
        <SubmittedTable />
      </div>
    </div>
  );
}
