/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter  } from "react-router-dom";
import TodoContainer from "/home/isaka/to-do/src/functionalBased/components/TodoContainer.js";
import "/home/isaka/to-do/src/functionalBased/App.css";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <TodoContainer />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
