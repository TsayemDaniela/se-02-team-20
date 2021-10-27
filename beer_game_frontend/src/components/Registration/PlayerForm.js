import React, { createRef, useState } from "react";
import { Button, TextField, Select, MenuItem, FormControl, InputLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import "./Registration.css";

export default class PlayerForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.setClassYear = this.setClassYear.bind(this);
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      classYear: 1,
      isInstructor: false,
    };
  }

  useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    }));

  handleChange(e) {
    const { id, value } = e.target;
    this.setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
    console.log("changing", this.state);
  }

  setClassYear(e) {
      this.setState((prevstate) => ({
          classYear: e.target.value
      }))
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log("creating", this.state);
    var csrftoken = Cookies.get("csrftoken");
    axios
      .post("/api/players/", this.state, {
        headers: { "X-CSRFToken": csrftoken },
      })
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  }

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password === this.state.confirmPassword
    );
  }

  render() {
    
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
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
        </div>
        <br />
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
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          id="confirmPassword"
          autoComplete="new-password"
          value={this.state.confirmPassword}
          onChange={this.handleChange}
        />
        <hr />
        <label id="label-radio" htmlFor="exampleInputUser">
          User Details
        </label>
        <div>
          <FormControl>
            <InputLabel id="selectLabel">Class Year</InputLabel>
            <Select
              fullWidth
              id="classYear"
              labelId="selectLabel"
              value={this.state.classYear}
              onChange={this.setClassYear}
            >
              <MenuItem value={1}>First Year</MenuItem>
              <MenuItem value={2}>Second Year</MenuItem>
              <MenuItem value={3}>Three Year</MenuItem>
            </Select>
          </FormControl>
        </div>
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
