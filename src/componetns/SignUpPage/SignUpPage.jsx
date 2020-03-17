import React, { Component } from "react";
import "./SignupPage.scss";
import CustomButton from "../Button/Button";
import LabelInput from "../LableInput/LableInput";
import { auth, createUserProfileDocument } from "../../fireBase/FireBaseConfig";

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

  handelSubmit = async e => {
    e.preventDefault();
    const { displayName, password, confirmPassword, email } = this.state;

    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (e) {
      console.log(e);
    }
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
