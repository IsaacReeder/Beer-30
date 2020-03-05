import React, { Component } from "react";
import axios from "axios";
// import { Redirect } from "react-router-dom";
import "./RegForm.css";

export default class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    redirect: false,
    authError: false,
    isLoading: false
  };

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };
  handlePwdChange = event => {
    this.setState({ password: event.target.value });
  };
  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ isLoading: true });
    const url = "https://gowtham-rest-api-crud.herokuapp.com/register";
    const email = this.state.email;
    const password = this.state.password;
    const name = this.state.name;
    let bodyFormData = new FormData();
    bodyFormData.set("email", email);
    bodyFormData.set("name", name);
    bodyFormData.set("password", password);
    axios
      .post(url, bodyFormData)
      .then(result => {
        this.setState({ isLoading: false });
        if (result.data.status !== "fail") {
          this.setState({ redirect: true, authError: true });
        } else {
          this.setState({ redirect: false, authError: true });
        }
      })
      .catch(error => {
        console.log(error);
        this.setState({ authError: true, isLoading: false });
      });
  };

  render() {
    // const isLoading = this.state.isLoading;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="container3">
          <label htmlFor="inputName">Name</label>
          <input
            type="text"
            id="inputName"
            placeholder="name"
            name="name"
            onChange={this.handleNameChange}
            autoFocus
            required
          />

          <label htmlFor="inputEmail">Email address</label>
          <input
            id="inputEmail"
            placeholder="Email address"
            type="text"
            name="email"
            onChange={this.handleEmailChange}
            required
          />

          <label htmlFor="inputPassword">Password</label>
          <input
            type="password"
            id="inputPassword"
            placeholder="******"
            name="password"
            onChange={this.handlePwdChange}
            required
          />

          <button
            className="registerbtn"
            type="submit"
            disabled={this.state.isLoading ? true : false}
          >
            Register
          </button>
        </div>
      </form>
    );
  }
}
