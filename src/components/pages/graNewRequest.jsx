import React from "react";
import Navbar from "../utils/Nav";
import { Link } from "react-router-dom";
import UploadButtons from "../utils/Upload";
import SelectGra from "../utils/SelectGra";
import Input from "../utils/Input";

export default function GraNewRequest() {
  return (
    <div>
      <Navbar header="GRA New Request" />
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
        <div style={{ margin: "5%" }}>
          <SelectGra />
        </div>
        <div></div>
        <div style={{ margin: "5%" }}>
          <Input label="Notes/Comments" />
        </div>
        <UploadButtons />
      </div>
    </div>
  );
}
