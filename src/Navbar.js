import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = (props) => {
  return (
    <div className="navigation">
      <div className="navigation-sub">
        <Link to="/projects" className="item">
          Projects
        </Link>
        <Link to="/" className="item">
          About
        </Link>
        <Link to="/contact" className="item">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
