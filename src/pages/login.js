import React from "react";

const Login = () => {
  return (
    <div className="bg-secondary bg-gradient">
      <div className="container" id="login-container">
        <div className="row vh-100 justify-content-center align-items-center">
          <form className="col-12 col-md-4 py-3 bg-white rounded shadow">
            <div className="col-12">
              <img
                className="h-25 w-100"
                src="https://www.metgroupsas.com/Archivos/Banners/g0cob8dmwxm2jzcpwbp1.png"
                alt="logo login"
              />
            </div>
            <div className="py-2">
              <input
                type="text"
                id="login"
                className="col-12 bg-light bg-gradient rounded border border border-primary"
                name="login"
                placeholder="Username"
              />
            </div>
            <div className="py-2">
              <input
                type="text"
                id="password"
                className="col-12 bg-light bg-gradient rounded border border-primary"
                name="login"
                placeholder="Password"
              />
            </div>
            <div className="py-2">
              <input
                type="submit"
                className="col-12 fw-bold text-white btn bg-primary bg-gradient border-0"
                value="Log In"
              />
            </div>
            <div className="py-2">
              <label className="text-secondary">Crear Usuario</label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
