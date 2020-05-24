import React from "react";

const Contact = (props) => {
  return (
    <>
      <h1 className="contactHeader">Contact me!</h1>
      <div className="contact">
        <div>
          <h2> Ok,now that you know me, I want to get to know you too!</h2>
          <p>I am available for a full-time position or freelance work</p>
          <div className="media">
            <a href="https://www.linkedin.com/in/agustina-gutierrez/">
              Linkedin
            </a>
            <a href="mailto: agusgutierrezperez@gmail.com">Gmail</a>
          </div>
        </div>

        <div id="contact" className="contactText">
          <img src="/profile.jpeg" alt="profile" />
        </div>
      </div>
    </>
  );
};

export default Contact;
