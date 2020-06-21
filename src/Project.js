import React from "react";

const Project = (props) => {
  let direction = props.direction;
  return (
    <div className={direction ? "projectText" : "projectTextReverse"}>
      <div className="cont-image">
        <img src={props.mockUp} alt="project" />
      </div>
      <div className="description">
        <h3>{props.name}</h3>
        {/* <div className="logos">
          {props.logos.map((logo, i) => {
            return <img key={i} src={logo} alt="logo" />;
          })}
        </div> */}
        <p>{props.description}</p>
        <div className="buttons">
          <button className="button">
            <a href={props.link} target="_blank">
              Visit
            </a>
            <div className="button__horizontal"></div>
            <div className="button__vertical"></div>
          </button>
          <button className="button">
            <a href={props.gitLink} target="_blank">
              Github
            </a>
            <div className="button__horizontal"></div>
            <div className="button__vertical"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
{
}
