import React from "react";
import Fade from "react-reveal/Zoom";

import Contact from "./Contact.js";

function Projects(props) {
  return (
    <div className="containerProjects">
      <Fade>
        <h1 className="projects">Projects</h1>
      </Fade>
      <Fade>
        <div className="containerProject">
          <div className="projectImg">
            <img class="content-image" src="\maqueta.jpg" />
          </div>

          <div className="projectText">
            <h3>Iron Cook</h3>
            <div className="logos">
              <img src="/sass.jpg" alt="logo" />
              <img src="/mongo.jpg" alt="logo" />
              <img src="/node.png" alt="logo" />
            </div>
            <p>
              Social network cooking website where you could add your recipes,
              like and see friend's recipes and being able to add them to a
              checkout shopping list.
            </p>
            <div className="buttons">
              <a href="http://ironcook.herokuapp.com/" target="_blank">
                Visit
              </a>
              <a
                href="https://github.com/agusgutierrezz/cooking-website"
                target="_blank"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </Fade>
      <hr />
      <Fade>
        <div className="containerProject">
          <div className="projectText">
            <h3>Kinder Class</h3>
            <div className="logos">
              <img src="/sass.jpg" alt="logo" />
              <img src="/mongo.jpg" alt="logo" />
              <img src="/node.png" alt="logo" />
              <img src="/react.png" alt="logo" />
            </div>
            <p>
              Educational playground for kids and teachers. Where kids play
              games and teachers keep track of their improvements in real time.
            </p>
            <div className="buttons">
              <a href="http://kinder-class.herokuapp.com/" target="_blank">
                Visit
              </a>
              <a
                href="https://github.com/agusgutierrezz/KinderClass"
                target="_blank"
              >
                Github
              </a>
            </div>
          </div>
          <div className="projectImg">
            <img class="content-image" src="\maquetaTutti.jpg" />
          </div>
        </div>
      </Fade>

      <hr />
      <Fade>
        <div className="containerProject">
          <div className="projectImg">
            <img class="content-image" src="\maquetaFeriate.jpg" />
          </div>

          <div className="projectText">
            <h3>Feriate</h3>
            <div className="logos">
              <img src="/laravel.png" alt="logo" />
              <img src="/mysql.png" alt="logo" />
              <img src="/php.png" alt="logo" />
            </div>
            <p>
              E-Commerce dedicated to the sale and barter of reused products to
              promote sustainability
            </p>
            <div className="buttons">
              <a href="http://feriate.dhalumnos.com/" target="_blank">
                Visit
              </a>
              <a
                href="https://github.com/agusgutierrezz/Feriate"
                target="_blank"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </Fade>
      <hr />
      <Fade>
        <div id="contact">
          <Contact />
        </div>
      </Fade>
    </div>
  );
}

export default Projects;
