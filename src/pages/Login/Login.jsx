import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  // useState hooks for handling input fields
  //Login form
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [oauth, setOauth] = useState("yes");

  //useState hook to show helper message if the entered username or password are incorrect in the login process
  // const [incorrectLoginCredentials, setIncorrectLoginCredentials] =
  //   useState(false);

  // Handling Input fields
  const handleUsernameInput = (e) => {
    setLoginUsername(e.target.value);
  };
  const handlePasswordInput = (e) => {
    setLoginPassword(e.target.value);
  };

  // Handling form submit
  return (
    <div className="Login">
      <form id="login-form" action="../../../../auth/login" method="POST">
        <h1>Login</h1>
        <input
          type="text"
          name="username"
          placeholder="Enter your username"
          value={loginUsername}
          onChange={handleUsernameInput}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={loginPassword}
          onChange={handlePasswordInput}
        />
        <button className="btn login-submit-btn" type="submit">Login</button>
        <button name="foroauth" className="btn login-submit-btn" type="submit" value={oauth} >Sign in with google</button>
        <p className="helper-msg">
          Don't have an account ?{" "}
          <Link to="/register" className="link-text">
            <span>Create one</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
