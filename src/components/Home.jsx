import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Nav";
import List from "./List";
import { borderRadius, padding } from "@mui/system";

export default function Home() {
  return (
    <div>
      <Navbar header="Available Reports" />
      <div
        style={{
          display:"flex",
          borderStyle:"solid",
          borderRadius:"10px",
          padding:"5%",
          margin:"5% 35% 0 35%",
          borderColor:"#D6DAE1"
        }}>
        <List />
      </div>
    </div>
  );
}
