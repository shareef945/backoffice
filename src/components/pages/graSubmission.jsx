import React from "react";
import UploadButtons from "../utils/Upload";

export default function GraSubmission() {
  return (
    <div>
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
