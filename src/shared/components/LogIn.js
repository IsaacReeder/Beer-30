import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

import "./LogIn.css";

export default class LogIn extends Component {
  state = {
    email: "",
    password: "",
    redirect: false,
    isLoading: false,
    toast: false,
    toastMessage: "",
    loading: false
  };

  handleEmailChange = async event => {
    this.setState({ email: event.target.value });
  };

  handlePwdChange = event => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({ isLoading: true });

    console.log("submitted");

    const url = "https://gowtham-rest-api-crud.herokuapp.com/login";
    const email = this.state.email;
    const password = this.state.password;
    let bodyFormData = new FormData();
    bodyFormData.set("email", email);
    bodyFormData.set("password", password);
    axios
      .post(url, bodyFormData)
      .then(result => {
        if (result.data.status) {
          localStorage.setItem("token", result.data.token);
          this.setState({ redirect: true, isLoading: false });
          localStorage.setItem("isLoggedIn", true);
        }
      })
      .catch(error => {
        console.log(error);
        this.setState({ authError: true, isLoading: false });
      });
    // {
    //   this.renderRedirect();
    // }
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/WheresMyBrew" />;
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="container">
          <input
            id="inputEmail"
            placeholder="Email address"
            type="email"
            name="email"
            onChange={this.handleEmailChange}
            autoFocus
            required
          />
          <input
            type="password"
            id="inputPassword"
            placeholder="**************"
            name="password"
            onChange={this.handlePwdChange}
            required
          />
          <button
            className="loginbtn"
            type="submit"
            disabled={this.state.isLoading ? true : false}
          >
            Login
          </button>
          {this.renderRedirect()}
        </div>
      </form>
    );
  }
}
