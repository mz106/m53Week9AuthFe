import React from "react";

import Signup from "../signup/Signup";
import Login from "../login/Login";

import "./LogOrSign.css";

const LogOrSign = () => {
  return (
    <div className="logorsign-wrapper">
      <div className="logorsign-inner-container">
        <div className="logorsign-box">
          <Signup />
        </div>
        <div className="logorsign-box">
          <Login />
        </div>
      </div>
    </div>
  );
};

export default LogOrSign;
