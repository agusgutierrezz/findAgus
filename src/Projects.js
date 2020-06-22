import React from "react";
import Fade from "react-reveal/Zoom";
import sass from "./images/sass.jpg";
import mongo from "./images/mongo.jpg";
import node from "./images/node.png";
import mockUpCook from "./images/maqueta.jpg";
import mockUpTutti from "./images/maquetaTutti.jpg";
import mockUpFeriate from "./images/maquetaFeriate.jpg";
import mockUpRepad from "./images/maquetaMeal.png";
import reactLogo from "./images/react.png";
import php from "./images/php.png";
import mysql from "./images/mysql.png";
import laravel from "./images/laravel.png";
import Contact from "./Contact.js";
import Project from "./Project.js";

function Projects(props) {
  return (
    <>
      <Fade>
        <h1 className="title">Projects</h1>
      </Fade>
      <div className="containerProjects">
        <div className="aux">
          <Project
            mockUp={mockUpRepad}
            name={"What´s for dinner?"}
            logos={[sass, reactLogo]}
            description={"Healthy recipe advisor"}
            link={"https://agusgutierrezz.github.io/drag-drop/"}
            gitLink={"https://github.com/agusgutierrezz/drag-drop"}
          />
          <hr />

          <Project
            direction={true}
            mockUp={mockUpCook}
            name={"Iron Cook"}
            logos={[sass, mongo, node]}
            description={
              "Social network cooking website where you could add your recipes, like and see friends recipes and being able to add them to a checkout shopping list."
            }
            link={"http://ironcook.herokuapp.com/"}
            gitLink={"https://github.com/agusgutierrezz/cooking-website"}
          />
          <hr />

          <Project
            mockUp={mockUpTutti}
            name={"Kinder Class"}
            logos={[sass, mongo, node, reactLogo]}
            description={
              " Educational playground for kids and teachers. Where kids play games and teachers keep track of their improvements in real time."
            }
            link={"http://kinder-class.herokuapp.com/"}
            gitLink={"https://github.com/agusgutierrezz/KinderClass"}
          />
          <hr />

          <Project
            mockUp={mockUpFeriate}
            name={"Feriate"}
            direction={true}
            logos={[laravel, mysql, php]}
            description={
              "  E-Commerce dedicated to the sale and barter of reused products to promote sustainability"
            }
            link={"http://feriate.dhalumnos.com/"}
            gitLink={"https://github.com/agusgutierrezz/Feriate"}
          />
        </div>
      </div>

      <hr />
      <Fade>
        <div id="contact">
          <Contact />
        </div>
      </Fade>
    </>
  );
}

export default Projects;
