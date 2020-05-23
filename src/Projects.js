import React from "react";
import Fade from "react-reveal/Zoom";

function Projects(props) {
  return (
    <div className="containerProjects">
      <Fade>
        <h1 className="projects">Projects</h1>
      </Fade>

      <div class="containerProject">
        <div class="container">
          <div class="content1">
            <a href="http://ironcook.herokuapp.com/" target="_blank">
              <div class="content-overlay"></div>
              <img class="content-image" src="\maqueta.jpg" />
              <div class="content-details fadeIn-bottom">
                <h3 class="content-title">Iron Cook </h3>
                <div class="content-text">
                  <img src="/mongo.jpg" alt="logo" />
                  <img src="/node.png" alt="logo" />
                </div>
              </div>
            </a>
          </div>
        </div>
        <div>
          <h3>Iron Cook</h3>
          <p>
            Social network cooking website where you could add your recipes,
            like and see friends' recipes and being able to add them to a
            checkout shopping list.
          </p>
        </div>
      </div>
      {/* <div class="container">
        <div class="content1">
          <a href="http://feriate.dhalumnos.com/" target="_blank">
            <div class="content-overlay"></div>
            <img class="content-image" src="\feriate2.png" />
            <div class="content-details fadeIn-bottom">
              <h3 class="content-title">Feriate </h3>
              <p class="content-text"> PHP Laravel MySql Bootstrap</p>
            </div>
          </a>
        </div>
      </div> */}
      {/* <div class="container">
        <div class="content1">
          <a href="http://kinder-class.herokuapp.com/" target="_blank">
            <div class="content-overlay"></div>
            <img class="content-image" src="\tutti-frutti-game.png" />
            <div class="content-details fadeIn-bottom">
              <h3 class="content-title">Kinder Class </h3>
              <p class="content-text"> React MongoDB NodeJs Sass</p>
            </div>
          </a>
        </div>
      </div> */}
    </div>
  );
}

export default Projects;
