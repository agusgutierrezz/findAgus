import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <div>
      <button className="button">
        See my work
        <div className="button__horizontal"></div>
        <div className="button__vertical"></div>
      </button>
    </div>
  );
};

export default Button;
