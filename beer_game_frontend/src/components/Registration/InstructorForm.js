import React, { createRef, useState } from "react";
import {Button, TextField} from "@material-ui/core";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import "./Registration.css";


export default class InstructorForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.state = {
      email: "",
      password: "",
      confirmpassword: "",
      institution: "",
      isInstructor: true,
    };
  }

  handleChange(e) {
    const { id, value } = e.target;
    this.setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
    console.log("changing", this.state);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("creating", this.state);
    var csrftoken = Cookies.get("csrftoken");
    axios
      .post("/api/instructors/", this.state, {
        headers: { "X-CSRFToken": csrftoken },
      })
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  }

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password === this.state.confirmpassword
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <TextField
            autoComplete="email"
            name="email"
            variant="outlined"
            required
            fullWidth
            id="email"
            label="Email"
            autoFocus
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br /><br />
        <div>
          <TextField
            variant="outlined"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            value={this.state.password}
            onChange={this.handleChange}
          /> 
          <br /><br />
        </div>
        <TextField
          variant="outlined"
          required
          fullWidth
          name="confirmpassword"
          label="Confirm Password"
          type="password"
          id="confirmpassword"
          autoComplete="new-password"
          value={this.state.confirmpassword}
          onChange={this.handleChange}
        />
        <hr />
        <label id="label-radio" htmlFor="exampleInputUser">
          User Details
        </label>
        <TextField
          variant="outlined"
          fullWidth
          name="institution"
          label="Institution"
          type="text"
          id="institution"
          value={this.state.institution}
          onChange={this.handleChange}
        />
        <div id="register-button">
          <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            disabled={!this.validateForm()}
          >
            Register
          </Button>
        </div>
      </form>
    );
  }
}