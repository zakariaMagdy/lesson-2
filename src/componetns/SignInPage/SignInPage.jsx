import React, { Component } from "react";
import "./SignInPage.scss";
import LabelInput from "../LableInput/LableInput";
import CustomButton from "../Button/Button";
import ErrorBox from "../ErrorBox/ErrorBox";

import { withRouter } from "react-router-dom";
import {
  googleSignInStart,
  emailSignInStart
} from "../../redux/Users/UserAction";
import { connect } from "react-redux";

class SignInPage extends Component {
  state = {
    email: "",
    password: ""
  };

  handelChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handelSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.signInWithEmail(email, password);
    this.setState({ email: "", password: "" });
  };
  render() {
    const { signInWithGooglee } = this.props;
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
            <CustomButton type="button" google onClick={signInWithGooglee}>
              sign in with google
            </CustomButton>
          </div>
        </form>
        {this.props.error && <ErrorBox msg={this.props.error} />}
      </div>
    );
  }
}

const mapStateToprops = state => ({
  error: state.user.errorMsg
});
const mapDispatchToprops = dispatch => ({
  signInWithGooglee: () => dispatch(googleSignInStart()),
  signInWithEmail: (email, pass) => dispatch(emailSignInStart(email, pass))
});

export default withRouter(
  connect(mapStateToprops, mapDispatchToprops)(SignInPage)
);
