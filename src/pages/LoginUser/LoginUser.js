import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { Alert } from "react-bootstrap";
import { withRouter, Redirect, Link } from "react-router-dom";
import app from "../../config/firebase";
import { AuthContext } from "../../components/Auth";

//img
import avatar from "../../assets/img/avatar.svg";
import bg from "../../assets/img/login.svg";
import wave from "../../assets/img/wave.png";

import "./LoginUser.scss";

// const [password, setPassword] = useState("");

//login en firebase

const Login = () => {
 
  const [errox, setErrox] = useState(false)

  console.log((errox));
  

  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    validationSchema: Yup.object({
      email: Yup.string()
        .email("No es un correo valido")
        .required("El email es requerido."),
      password: Yup.string()
        .min(6, "El password debe tener más de 6 caracteres.")
        .required(),
    }),
  });

  const onSubmit = async ({ email, password }) => {
    // alert(`Login: ${email}, password: ${password}`);
    // event.preventDefault();
    setErrox(false)
    try {
      await app.auth().signInWithEmailAndPassword(email, password)
    } catch (error) {
    //  alert(error);
     setErrox(true)
      console.log(error.message);
    }
  };

  // utilizando useContext para direccionar cuando haga el login correcto
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <img className="wave" src={wave} alt="logo" />
      <div className="container">
        <div className="img">
          <img src={bg} alt="logo" />
        </div>
        <div className="login-content">
          <form onSubmit={handleSubmit(onSubmit)}>
          {errox && (<Alert className="alerta-error-pass"  variant="danger">Usuario o Password Incorrecto</Alert>) }
            <img src={avatar} alt="logo" />
            <h2 className="title">Welcome</h2>
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                <input
                  className="input"
                  name="email"
                  type="email"
                  placeholder="Email"
                  ref={register}
                />
              </div>
            </div>
            {errors.email && (
              <Alert variant="danger">{errors.email.message}</Alert>
            )}
            {errors.email ? null : <br />}
            <div className="input-div pass">
              <div className="i">
                <i className="fas fa-lock"></i>
              </div>
              <div className="div">
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="input"
                  ref={register}
                />
              </div>
            </div>
            {errors.password && (
              <Alert variant="danger">{errors.password.message}</Alert>
            )}
            <Link className="a" to="/signup">
              Registrate como User
            </Link>
            <input type="submit" className="btnx" value="Login" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);

/////////////

// import React, { useContext, useState } from "react";
// import { withRouter, Redirect } from "react-router-dom";
// import app from "../../config/firebase";
// import { AuthContext } from "../../components/Auth";

// //img
// import avatar from "../../assets/img/avatar.svg";
// import bg from "../../assets/img/bg.svg";
// import wave from "../../assets/img/wave.png";

// import "./LoginUser.scss";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   //login en firebase
//   const handleLogin = async (event) => {
//     event.preventDefault();
//     try {
//       await app.auth().signInWithEmailAndPassword(email, password);
//     } catch (error) {
//       alert(error);
//     }
//   };

//   // utilizando useContext para direccionar cuando haga el login correcto
//   const { currentUser } = useContext(AuthContext);

//   if (currentUser) {
//     return <Redirect to="/" />;
//   }

//   return (
//     <div>
//       <img className="wave" src={wave} alt="logo" />
//       <div className="container">
//         <div className="img">
//           <img src={bg} alt="logo" />
//         </div>
//         <div className="login-content">
//           <form onSubmit={handleLogin}>
//             <img src={avatar} alt="logo" />
//             <h2 className="title">Welcome</h2>
//             <div className="input-div one">
//               <div className="i">
//                 <i className="fas fa-user"></i>
//               </div>
//               <div className="div">
//                 <input
//                   className="input"
//                   name="email"
//                   type="email"
//                   placeholder="Email"
//                   onChange={(ev) => setEmail(ev.target.value)}
//                 />
//               </div>
//             </div>
//             <div className="input-div pass">
//               <div className="i">
//                 <i className="fas fa-lock"></i>
//               </div>
//               <div className="div">
//                 <input
//                   name="password"
//                   type="password"
//                   placeholder="Password"
//                   className="input"
//                   onChange={(ev) => setPassword(ev.target.value)}
//                 />
//               </div>
//             </div>
//             <a href="/">Forgot Password?</a>
//             <input type="submit" className="btnx" value="Login" />
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default withRouter(Login);

//////////////////////

// import React, { useCallback, useContext } from "react";
// import { withRouter, Redirect } from "react-router-dom";
// import app from "../../config/firebase";
// import { AuthContext } from "../../components/Auth";

// //img
// import avatar from "../../assets/img/avatar.svg"
// import bg from "../../assets/img/bg.svg"
// import wave from "../../assets/img/wave.png"

// import "./LoginUser.scss"

// const Login = ({ history }) => {

//   //login en firebase
//   const handleLogin = useCallback(
//     async event => {
//       event.preventDefault();
//       const { email, password } = event.target.elements;
//       try {
//         await app
//           .auth()
//           .signInWithEmailAndPassword(email.value, password.value);
//         history.push("/");
//       } catch (error) {
//         alert(error);
//       }
//     },
//     [history]
//   );

//   // utilizando useContext para direccionar cuando haga el login correcto
//   const { currentUser } = useContext(AuthContext);

//   if (currentUser) {
//     return <Redirect to="/" />;
//   }

//   return (
//     <div>
//       <img className="wave" src={wave} alt="logo" />
//       <div className="container">
//         <div className="img">
//           <img src={bg} alt="logo" />
//         </div>
//         <div className="login-content">
//           <form onSubmit={handleLogin} >
//             <img src={avatar} alt="logo" />
//             <h2 className="title">Welcome</h2>
//             <div className="input-div one">
//               <div className="i">
//                 <i className="fas fa-user"></i>
//               </div>
//               <div className="div">
//                 <input className="input" name="email" type="email" placeholder="Email" />
//               </div>
//             </div>
//             <div className="input-div pass">
//               <div className="i">
//                 <i className="fas fa-lock"></i>
//               </div>
//               <div className="div">
//                 <input name="password" type="password" placeholder="Password" className="input" />
//               </div>
//             </div>
//             <a href="/" >Forgot Password?</a>
//             <input type="submit" className="btnx" value="Login" />
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default withRouter(Login);
