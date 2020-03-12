import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./components/AppRouter.jsx";
import { Router } from "react-router-dom";

import { createBrowserHistory } from "history";
export const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history} >
    <AppRouter />
  </Router>,

  document.getElementById("root")
);
