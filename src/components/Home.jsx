import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Nav";

export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Link to="/login">Login</Link>
        </div>
    );
}