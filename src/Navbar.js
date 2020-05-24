import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = (props) => {
  return (
    <div className="navigation">
      <div className="navigation-sub">
        <NavLink to="/projects" className="Nav_link">
          Projects
        </NavLink>
        <NavLink to="/" className="Nav_link">
          About
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
