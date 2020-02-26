import React, { Component } from "react";
import "./SignupPage.scss";
import CustomButton from "../Button/Button";
import LabelInput from "../LableInput/LableInput";

export default class SignUpPage extends Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  handelChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handelSubmit = e => {
    e.preventDefault();
    this.setState({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
    console.log(this.state);
  };

  render() {
    return (
      <div className="signuppage">
        <h1 className="signuppage__title">I don't have an account</h1>
        <p className="signuppage__subtitle">
          sign up with your email and password
        </p>

        <form onSubmit={this.handelSubmit}>
          <LabelInput
            label="display name"
            name="displayName"
            type="text"
            value={this.state.displayName}
            handelChange={this.handelChange}
          />
          <LabelInput
            label="email"
            name="email"
            type="email"
            value={this.state.email}
            handelChange={this.handelChange}
          />
          <LabelInput
            label="password"
            name="password"
            type="password"
            value={this.state.password}
            handelChange={this.handelChange}
          />
          <LabelInput
            label="confirm password"
            name="confirmPassword"
            type="password"
            value={this.state.confirmPassword}
            handelChange={this.handelChange}
          />

          <CustomButton>sign up</CustomButton>
        </form>
      </div>
    );
  }
}
