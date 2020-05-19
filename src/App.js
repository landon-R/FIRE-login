import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import LoginUser from "./pages/LoginUser";
import SignUp from "./pages/SignUp";
import Preguntas from "./pages/Preguntas";
import { AuthProvider } from "./components/Auth";
import PrivateRoute from "./components/PrivateRoute"

function App() {
  return (
    <AuthProvider>
      <BrowserRouter className="">
        <Switch>
          <PrivateRoute exact={true} path="/" component={Home} />
          <PrivateRoute exact={true} path="/preguntas" component={Preguntas} />
          <Route exact={true} path="/login" component={LoginUser} />
          <Route exact={true} path="/signup" component={SignUp} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
