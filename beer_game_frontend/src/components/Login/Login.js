import React, { useState } from "react";
import "./Login.css";

export default function Login(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
    usertype: "",
    successMessage: null,
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    const payload = {
      email: state.email,
      password: state.password,
      usertype: state.usertype,
    };
  };

  function validateForm() {
    return state.email.length > 0 && state.password.length > 0;
  }

  return (
    <div id="parent" class="col-12">
      <div class="wallpaper" ></div>
      <div id="card" className="card col-lg-8 login-card hv-center">
        <h1>Login</h1>
        <hr />
        <form action="/login" method="POST">
          <div className="form-group text-left">
            <label class="required" htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={state.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group text-left">
            <label class="required" htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={state.password}
              onChange={handleChange}
              required
            />
          </div>
          
          <div id="submit-button">
            <button
              id="submit-button1"
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmitClick}
              disabled={!validateForm()}
            >
              Submit
            </button>
          </div>
        </form>
        <div
          className="alert alert-success mt-2"
          style={{ display: state.successMessage ? "block" : "none" }}
          role="alert"
        >
          {state.successMessage}
        </div>
        <div className="registerMessage">
          <span>Dont have an account? </span>
          <span className="loginText"><a href="/registration/">Register</a></span>
        </div>
      </div>
    </div>
  );
}
