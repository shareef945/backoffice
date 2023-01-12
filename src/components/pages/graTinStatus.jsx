import React from "react";
import Navbar from "../utils/Nav";
import { Link } from "react-router-dom";
import TinTable from "../utils/TinTable";
import Textarea from "@mui/joy/Textarea";

export default function GraTinStatus() {
  return (
    <div>
      <Navbar header="GRA Tin Status" />
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
        <TinTable />
      </div>
    </div>
  );
}
