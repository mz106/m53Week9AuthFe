import React from "react";

import Signup from "../signup/Signup";
import Login from "../login/Login";

import "./LogOrSign.css";

const LogOrSign = ({ setLoggedIn }) => {
  return (
    <div className="logorsign-wrapper">
      <div className="logorsign-inner-container">
        <div className="logorsign-box">
          <Signup />
        </div>
        <div className="logorsign-box">
          <Login setLoggedIn={setLoggedIn} />
        </div>
      </div>
    </div>
  );
};

export default LogOrSign;
