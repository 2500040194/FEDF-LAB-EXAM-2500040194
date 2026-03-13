import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Registration from "./Registration";
import Demo1 from "./Demo1";
import ViewUsers from "./ViewUsers";
import "./mainnavbar.css";

const MainNavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="layout">

      {/* Topbar */}
      <div className="topbar">
        <button className="menu-btn" onClick={() => setOpen(!open)}>
          ☰ Menu
        </button>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${open ? "show" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/registration" onClick={() => setOpen(false)}>Registration</Link>
        <Link to="/api" onClick={() => setOpen(false)}>API Demo</Link>
        <Link to="/users" onClick={() => setOpen(false)}>View Registers</Link>

      </div>

      {/* Page Content */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/api" element={<Demo1 />} />
          <Route path="/users" element={<ViewUsers />} />
        </Routes>
      </div>

    </div>
  );
};

export default MainNavBar;