import "./Register.scss";
import React, { Component } from "react";
import FormInput from "../../Components/FormInput/FormInput";
import Button from "../../Components/Buttons/Button";

import { createUserProfile, auth } from "../../firebase/firebase.utils";

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }
  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };
  handleSubmit = async e => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("passwords dont match");
      return;
    }
    console.log(email);
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfile(user, { displayName });
    } catch (err) {
      console.log(err);
    }

    this.setState({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
  };
  render() {
    return (
      <div className="Register">
        <h2 className="RegisterTitle">Register a new account</h2>
        <span>Sign up with your email and password to start shopping!</span>
        <form className="RegisterForm" onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="Email"
            required
          />
          <FormInput
            name="displayName"
            type="username"
            handleChange={this.handleChange}
            value={this.state.displayName}
            label="Username"
            required
          />
          <FormInput
            name="password"
            type="password"
            handleChange={this.handleChange}
            value={this.state.password}
            label="Password"
            required
          />
          <FormInput
            name="confirmPassword"
            type="password"
            handleChange={this.handleChange}
            value={this.state.confirmPassword}
            label="Confirm password"
            required
          />
          <Button value="Register" type="submit" />
        </form>
      </div>
    );
  }
}
