import React from "react";
import "./NavigationBar.css";
function Register() {
  return (
    <div className="register">
      <div className="m-5">
        <h1 className="">User Registration</h1>
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
          <input
            type="email"
            className="form-control mb-3"
            placeholder="E-mail"
          ></input>
          <input
            type="date"
            className="form-control mb-3"
            placeholder="DateOfBirth"
          ></input>
          <button type="submit" className="btn btn-success mx-auto">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
