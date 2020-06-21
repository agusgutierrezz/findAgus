import React from "react";
import profile from "./images/profile.jpeg";

const Contact = (props) => {
  return (
    <>
      <div className="contact">
        <div className="contact-title">
          <h1 className="title">Contact me!</h1>
          <div className="media">
            <a href="https://www.linkedin.com/in/agustina-gutierrez/">
              Linkedin
            </a>
            <a href="mailto: agusgutierrezperez@gmail.com">Gmail</a>
          </div>
        </div>

        <div id="" className="contactText">
          <img src={profile} alt="profile" />
          <h2> Ok, now that you know me, I want to get to know you too!</h2>
          <br />
          <p>I am available for a full-time position or freelance work</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
