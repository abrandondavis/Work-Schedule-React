import React, { useEffect } from "react";

export default function LoginForm({ enableScrolling, disableScrolling }) {


  useEffect(() => {
    // Disable scrolling when the component is mounted
    disableScrolling();

    // Enable scrolling when the component is unmounted
    return enableScrolling;
  }, []);

  
  return (
    <form>
      <h3>Login</h3>
      <div className="form-group">
        <label>Username:</label>
        <input className="form-control mb-1" type="text" name="username" id="username" placeholder="username" />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input className="form-control mb-1" type="text" name="password" id="password" placeholder="password" />
      </div>
      <div className="form-group">
        <input className="btn btn-dark" type="submit" value={'Submit'} />
      </div>
    </form>
  );
}