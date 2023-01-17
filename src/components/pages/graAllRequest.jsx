import React from "react";
import AllRequestTable from "../utils/AllRequestTable";

export default function GraAllRequest() {
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
        <AllRequestTable />
      </div>
    </div>
  );
}
