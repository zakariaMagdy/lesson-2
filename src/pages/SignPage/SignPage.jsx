import React from "react";
import "./SignPage.scss";
import SignIn from "../../componetns/SignInPage/SignInPage";
import SignUp from "../../componetns/SignUpPage/SignUpPage";

function SignPage() {
  return (
    <div className="signPage">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default SignPage;
