import React from "react";

const Login = () => {
  return (
    <div className="container ">
      <div className="row vh-100 justify-content-center align-items-center">
        <form className="col-12 col-md-4">
          <input
            type="text"
            id="login"
            className="col-12"
            name="login"
            placeholder="login"
          />
          <input
            type="text"
            id="password"
            className="col-12"
            name="login"
            placeholder="password"
          />
          <input type="submit" className="col-12" value="Log In" />
        </form>
      </div>
    </div>
  );
};

export default Login;
