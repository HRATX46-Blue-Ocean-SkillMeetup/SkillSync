import React, { useContext } from "react";
import { Router, Route, Redirect } from "react-router-dom";

import { UserState } from "../AppRouter.jsx";

export const PrivateRoute = ({ children, ...props }) => {
  const { userInfo } = useContext(UserState);
  const { username } = userInfo;
  return (
    <Route
      // puts all props in the Route Component
      {...props}
      render={innerProps => {
        // need to refactor to setHook
        return username.length ? (
          // spreads all props within Route Component
          children
        ) : (
          <Redirect to="/login/" />
        );
      }}
    />
  );
};
