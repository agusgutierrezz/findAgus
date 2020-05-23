import React from "react";

function Projects(props) {
  return (
    <div>
      <div className="project">
        <img src="\tutti-frutti-game.png" alt="tutti-frutti" />
        <div className="textProject">
          <h4>Kinder Class</h4>
          <p>
            Designed and developed with ReactJS, Express, NodeJS and MongoDB.
            Deployed with Heroku
          </p>
          <p>
            <a href="http://kinder-class.herokuapp.com/">See here! </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
