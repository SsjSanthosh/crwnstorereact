import React, { Component } from "react";
import "./Signin.scss";
import FormInput from "../../Components/FormInput/FormInput";
import Button from "../../Components/Buttons/Button";
import { signInWithGoogle } from "../../firebase/firebase.utils";
export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
  };
  render() {
    return (
      <div className="Signin">
        <h2> I already have an account</h2>
        <span>Log in to your existing account</span>
        <FormInput
          label="email"
          type="email"
          handleChange={this.handleChange}
          value={this.state.email}
        />
        <FormInput
          label="password"
          type="password"
          handleChange={this.handleChange}
          value={this.state.password}
        />
        <Button
          type="submit"
          value="Sign in"
          onclick={this.handleSubmit}
        ></Button>
        <Button
          onclick={signInWithGoogle}
          googleSignIn={true}
          value="Sign in with Google"
        ></Button>
      </div>
    );
  }
}
