import React from "react";
import {Link} from "react-router-dom"
import { Button } from "react-bootstrap";
import app from "../config/firebase";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Button onClick={() => app.auth().signOut()}>Sign out</Button>
      <button>
          <Link to="preguntas" >
              ir a preguntas
          </Link>
      </button>
    </div>
  );
}
