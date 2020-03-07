import React, {
  useState,
  useEffect,
  createContext,
  useReducer,
  useContext
} from "react";
import axios from "axios";
import io from "socket.io-client";

import useForm from "./CustomHooks";

import FrontPage from "./FrontPage.jsx";
import UserProfile from "./UserProfile.jsx";

import { PrivateRoute } from "./Authentication/PrivateRoute.jsx";
import LoginPage from "./Authentication/LoginPage.jsx";
import SignIn from "./Authentication/SignIn.jsx";
import ChatBox from "./Authentication/ChatBox.jsx";
import { App } from "./App.js";

import NavBar from "./NavBar.jsx";
import NewPostForm from "./NewPostForm";
import PostingDetailsContainer from "./PostingDetailsContainer";
import Skills from "./userProfile/Skills";
import WantSkills from "./userProfile/WantSkills";

import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";

const socketUrl = "http://localhost:3000";
export const socket = io(socketUrl);
export const UserState = createContext({ username: "", user_id: 21 });

export const UserStateReducer = (state, action) => {
  switch (action.type) {
    case "set-user":
      return { username: action.username, user_id: action.user_id };
    default:
      return state;
  }
};

const AppRouter = () => {
  const [userInfo, dispatchContext] = useReducer(
    UserStateReducer,
    useContext(UserState)
  );
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/login/">Login</Link>
          </li>
          <li>
            <Link to="/signup/">SignUp</Link>
          </li>
          <li>
            <Link to="/userprofile/">UserProfile</Link>
          </li>
          <li>
            <Link to="/home/">Home</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <UserState.Provider value={{ userInfo, dispatchContext }}>
          <Route path="/login/">
            <LoginPage />
          </Route>
          <Route path="/signup/">
            <SignIn />
          </Route>
          <Route path="/userprofile/">
            <UserProfile />
          </Route>
          <Route path="/home/">
            <FrontPage />
          </Route>
        </UserState.Provider>
      </Switch>
    </div>
  );
};

export default withRouter(AppRouter);

{
  /* <PrivateRoute path="/chatbox/" component={ChatBox} /> */
}

// const submitLogOut = () => {
//   axios
//     .get("/user/logout")
//     .then(data => {
//       setLogged(false);
//       console.log("logged out");
//     })
//     .catch(error => {
//       console.log(error);
//     });
// };
