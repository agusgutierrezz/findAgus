import React from "react";
import { Switch, Route } from "react-router-dom";
import Projects from "./Projects.js";
import Contact from "./Contact.js";
import About from "./About.js";
import Navbar from "./Navbar.js";
import "./App.scss";

function App() {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route exact path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={About} />
      </Switch>
    </div>
  );
}

export default App;
