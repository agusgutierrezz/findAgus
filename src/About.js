import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const About = (props) => {
  return (
    <div className="bodyAbout">
      <div>
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        <div className="content">
          <h1>
            Hello, I'm <span className="name"> Agustina!</span>
          </h1>
          <h3>
            I'm a full-stack web developer based in Berlin, passionate for
            design.
          </h3>
          <button className="button">
            <a href="/projects">See my work</a>
            <div className="button__horizontal"></div>
            <div className="button__vertical"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
