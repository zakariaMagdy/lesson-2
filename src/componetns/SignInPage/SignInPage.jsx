import React, { Component } from "react";
import LabelInput from "../LableInput/LableInput";
import CustomButton from "../Button/Button";
import { signInWithGoogle } from "../../fireBase/FireBaseConfig";
import "./SignInPage.scss";
import { withRouter } from "react-router-dom";

class SignInPage extends Component {
  state = {
    email: "",
    password: ""
  };

  handelChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handelSubmit = e => {
    e.preventDefault();

    this.setState({ email: "", password: "" });
  };
  render() {
    return (
      <div className="signinpage">
        <h1 className="signinpage__title">I already have an account</h1>
        <p className="signinpage__subtitle">
          sign in with your email and password
        </p>
        <form onSubmit={this.handelSubmit}>
          <LabelInput
            label="Email"
            name="email"
            type="email"
            value={this.state.email}
            handelChange={this.handelChange}
          />
          <LabelInput
            name="password"
            type="password"
            label="Password"
            value={this.state.password}
            handelChange={this.handelChange}
          />
          <div className="signinpage__btns">
            <CustomButton>sign in</CustomButton>
            <CustomButton
              google
              onClick={() => {
                signInWithGoogle();
              }}
            >
              sign in with google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignInPage);
