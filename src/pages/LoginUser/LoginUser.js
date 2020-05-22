import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../../config/firebase";
import { AuthContext } from "../../components/Auth";
import avatar from "../../assets/img/avatar.svg"
import bg from "../../assets/img/bg.svg"
import wave from "../../assets/img/wave.png"

import "./LoginUser.scss"

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }






  return (
    <div>
      {/* <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Log in</button>
      </form> */}

      
      <img className="wave" src={wave} alt="logo" />
      <div className="container">
        <div className="img">
          <img src={bg} alt="logo" />
        </div>
        <div className="login-content">
          <form onSubmit={handleLogin} >
            <img src={avatar} alt="logo" />
            <h2 className="title">Welcome</h2>
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                <input className="input" name="email" type="email" placeholder="Email" />
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
                <i className="fas fa-lock"></i>
              </div>
              <div className="div">
                <input name="password" type="password" placeholder="Password" className="input" />
              </div>
            </div>
            <a href="/" >Forgot Password?</a>
            <input type="submit" className="btnx" value="Login" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);