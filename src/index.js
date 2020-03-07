import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./components/AppRouter.jsx";
import { Router } from "react-router-dom";

import { createBrowserHistory } from "history";
export const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history} basename={"http://localhost:3000/"}>
    <AppRouter />
  </Router>,

  document.getElementById("root")
);
