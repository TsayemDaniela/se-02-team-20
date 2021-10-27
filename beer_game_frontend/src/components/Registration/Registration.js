import React, { createRef, useState } from "react";
import {Button, Grid} from "@material-ui/core/";
import {
  Link,
  Route,
  Switch,

} from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie"
import "./Registration.css";
import InstructorForm from "./InstructorForm";
import PlayerForm from "./PlayerForm";
export default class Registration extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleInstructor = this.toggleInstructor.bind(this);
    this.userDetailsElement = React.createRef();
    this.state = {
    email: "",
    password: "",
    confirmpassword: "",
    usertype: "",
    }
  };

  handleChange(e) {
    const { id, value } = e.target;
    this.setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
    console.log("changing", this.state);
  };

  handleSubmit() {
  console.log("creating", this.state)
  var csrftoken = Cookies.get("csrftoken");
  axios
    .post("api/instructors/", this.state, { headers: {"X-CSRFToken": csrftoken}})
    .then((res) => console.log(res.statusText));
  }

  toggleInstructor(e) {
    this.handleChange(e);
    this.setState((state) => ({usertype: "instructor"}));
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0 && (this.state.password === this.state.confirmpassword);
  }

  UserTypeChoice = () => {
    return (
      <Grid container spacing={3}>
        <Grid item>
          <Link to="instructor">
            <Button variant="contained" color="primary">
              Instructor
            </Button>
          </Link>
        </Grid>
        <Grid item>
          <Link to="player">
            <Button variant="contained" color="primary">
              Player
            </Button>
          </Link>
        </Grid>
      </Grid>
    );
  }

  render() {
    return (
      <div id="parent" className="col-12">
        <div
          id="wallpaper"
          className="wallpaper"
          data-image="wallpaper.jpg"
        ></div>
        <div id="card" className="card col-lg-8 login-card hv-center">
          <h1>Register</h1>
          <Switch>
            <Route path="/registration/instructor">
              <InstructorForm />
            </Route>
            <Route path="/registration/player">
              <PlayerForm />
            </Route>
            <Route path="/">
              <this.UserTypeChoice/>
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}
