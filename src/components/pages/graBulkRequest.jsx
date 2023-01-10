import React from "react";
import Navbar from "../utils/Nav";
import { Link } from "react-router-dom";
import UploadButtons from "../utils/Upload";

export default function GraBulkRequest() {
  return (
    <div>
      <Navbar header="GRA Bulk Request" />
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
          width: "50%",
          margin: "0 auto",
          alignItems: "center",
          justifyContent: "center",
          justifyItems: "center",
        }}>
        <div style={{ margin: "2%" }}>
          <p>Please upload a copy of the file</p>
        </div>
        <UploadButtons />
      </div>
    </div>
  );
}
