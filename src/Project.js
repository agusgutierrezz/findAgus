import React from "react";

const Project = (props) => {
  return (
    <div className="containerProject">
      <div className="projectImg">
        <img className="content-image" src={props.mockUp} alt="" />
      </div>

      <div className="projectText">
        <h3>{props.name}</h3>
        <div className="logos">
          {props.logos.map((logo, i) => {
            return <img key={i} src={logo} alt="logo" />;
          })}
        </div>
        <p>{props.description}</p>
        <div className="buttons">
          <a href={props.link} target="_blank">
            Visit
          </a>
          <a href={props.gitLink} target="_blank">
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
