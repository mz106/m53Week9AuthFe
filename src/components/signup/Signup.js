import { useState } from "react";

import "./Signup.css";

const Signup = () => {
  const changeHandler = (e, setter, state) => {};

  const handleSubmit = (e) => {};

  return (
    <div className="signup-wrapper">
      <div className="signup-inner-container">
        <h3 className="signup-title">Sign Up</h3>
        <form>
          <input className="signup-input" placeholder="Username" />
          <input className="signup-input" placeholder="Email" />
          <input className="signup-input" placeholder="Password" />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
