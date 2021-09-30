/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom"; 
import TodoContainer from "/home/isaka/to-do/src/functionalBased/components/TodoContainer.js";
import "/home/isaka/to-do/src/functionalBased/App.css";

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      {" "}
      <TodoContainer />{" "}
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
