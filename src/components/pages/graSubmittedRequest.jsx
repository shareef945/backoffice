import React from "react";
import Navbar from "../utils/Nav";
import { Link } from "react-router-dom";
import SubmittedTable from "../utils/SubmittedTable";

export default function GraSubmittedRequest() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          justifyItems: "center",
          marginTop: "17%",
        }}>
        <SubmittedTable />
      </div>
    </div>
  );
}
