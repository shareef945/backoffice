import React from "react";
import TinTable from "../utils/TinTable";
import Textarea from "@mui/joy/Textarea";
import UploadButtons from "../utils/Upload";

export default function GraTinStatus() {
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
          marginTop: "10%",
        }}>
        <Textarea
          minRows={2}
          placeholder="Please paste all the TINs in the area below"
          style={{
            width: "50%",
            margin: "0 0 5% 0",
            overflowY: "scroll",
            height: "100px",
          }}
        />
        <div style={{marginBottom:"60px"}}>
          <UploadButtons />
        </div>
        <TinTable />
      </div>
    </div>
  );
}
