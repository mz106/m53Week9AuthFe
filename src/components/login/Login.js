import { useState } from "react";

const Login = () => {
  const changeHandler = () => {};

  const handleSubmit = () => {};

  return (
    <div className="signup-wrapper">
      <div className="signup-inner-container">
        <h3 className="signup-title">Login</h3>
        <form>
          <input className="signup-input" placeholder="Username" />
          <input className="signup-input" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
