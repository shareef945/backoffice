import React from "react";
import Navbar from "../utils/Nav";
import { Link } from "react-router-dom";
import UploadButtons from "../utils/Upload";
import GraAllRequest from "./graAllRequest";

export default function GraSubmission() {
  return (
    <div>
      {/* <Navbar header="GRA Submission"/> */}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          justifyItems: "center",
        }}>
        <div style={{ marginTop: "10%" }}>
          <p>Please upload a copy of the file</p>
        </div>
        <UploadButtons />
      </div>
    </div>
  );
}
