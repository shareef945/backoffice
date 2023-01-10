import React from "react";
import Navbar from "../utils/Nav";
import { Link } from "react-router-dom";
import UploadButtons from "../utils/Upload";
import SelectGra from "../utils/SelectGra";

export default function GraSubmission() {
  return (
    <div>
      <Navbar header="GRA Submission" />
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
          alignItems: "center",
          justifyContent: "center",
          justifyItems: "center",
        }}>
        <div style={{ margin: "2%" }}>
          <SelectGra />
        </div>
        <UploadButtons />
      </div>
    </div>
  );
}