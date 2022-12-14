import React, { useState } from "react";

function Login({ Login, error }) {
  const [details, setDetails] = useState({ name: "", password: "" });
  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={submitHandler}>
        <div>
          <div>
            <input
              type="text"
              name="name"
              onChange={(e) => setDetails({ ...details, name: e.target.value })}
              value={details.name}
              placeholder="Username"
              className="login-input"
            />
          </div>

        </div>

        <div>
          <div>
            <input
              className="login-input"
              type="password"
              name="password"
              onChange={(e) => setDetails({ ...details, password: e.target.value })}
              value={details.password}
              placeholder="Password"
            ></input>
          </div>
        </div>

        <div className="login-button">
          <input type="submit" value="Login" />
        </div>
      </form>
      {error ? <div>{error}</div> : <></>}
    </div>

  );
}

export default Login;