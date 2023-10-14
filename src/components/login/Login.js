import React, { useState, useEffect } from "react";
import LoginForm from "./LoginForm";
import SignUp from "./SignUp";
import "../../css/login.css";

export default function Login() {
  const [isMember, setIsMember] = useState(false);

  const toggleFormType = () => {
    setIsMember(!isMember);
  };

  function disableScrolling() {
    document.body.classList.add("no-scroll");
  }

  function enableScrolling() {
    document.body.classList.remove("no-scroll");
  }

  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <div className="col-md-6">
          <div className="login-form">
            {/* Render the appropriate form based on isMember */}
            {isMember
              ? <LoginForm disableScrolling={disableScrolling} enableScrolling={enableScrolling} />
              : <SignUp disableScrolling={disableScrolling} enableScrolling={enableScrolling} />}
          </div>
          <div className="text-center">
            {/* Toggle button to switch between Sign Up and Login */}
            <button className="btn btn-dark login-toggle" onClick={toggleFormType}>
              {isMember ? "Not a member? Sign up" : "Already a member? Login"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
