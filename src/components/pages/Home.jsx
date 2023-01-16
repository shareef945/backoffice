import React from "react";
import Navbar from "../utils/Nav";
import BasicList from "../utils/List";
import BasicSelect from "../utils/Select";

export default function Home() {
  const reports = [
    {
      name: "Bulk Request Upload",
      category: "GRA Related",
      path: "/grabulkrequest",
    },
    {
      name: "Raise New Request",
      category: "GRA Related",
      path: "/granewrequest",
    },
    {
      name: "View Submitted Requests",
      category: "GRA Related",
      path: "/grasubmittedrequests",
    },
    {
      name: "View All Requests",
      category: "GRA Related",
      path: "/graallrequests",
    },
    { name: "TIN Status", category: "GRA Related", path: "/gratinstatus" },
    {
      name: "GRA Simulation",
      category: "GRA Related",
      path: "/grasimulation",
    },
  ];

  return (
    <div>
      <Navbar header="Available Reports" />

      {/* <div
        style={{
          display: "flex",
          borderStyle: "solid",
          borderRadius: "10px",
          padding: "5%",
          margin: "5% 35% 0 35%",
          borderColor: "#D6DAE1",
          flexDirection: "column",
          overflowY: "scroll",
          height: "400px",          
        }} >
        <BasicList reports={reports} />
      </div> */}
      {/* <div
        style={{
          display: "flex",
          margin: "2% 35% 0 35%",
          borderColor: "#D6DAE1",
          flexDirection: "column",
        }} >
        <BasicSelect />
      </div> */}
    </div>
  );
}
