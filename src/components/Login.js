import React from "react";
import "./NavigationBar.css";
function Login() {
  return (
    <div className="login m-5">
      <h1>Login Page</h1>
      <form className="mx-auto w-50 text-center">
        <input
          type="text"
          className="form-control mb-3"
          placeholder="username"
        ></input>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="password"
        ></input>
        <button type="submit" className="btn btn-success mx-auto">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;