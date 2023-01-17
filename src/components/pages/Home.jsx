import React from "react";
import Navbar from "../utils/Nav";

export default function Home() {
  const date = new Date().toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div>
      <Navbar header={date} />
    </div>
  );
}
