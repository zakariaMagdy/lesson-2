import React from "react";
import Spinner from "../Spinner/Spinner";

const WithSpinner = WrapedComponent => {
  return ({ isLoading, ...props }) => {
    return isLoading ? <Spinner /> : <WrapedComponent {...props} />;
  };
};

export default WithSpinner;
