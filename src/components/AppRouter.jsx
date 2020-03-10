import React, {
  useState,
  useEffect,
  createContext,
  useReducer,
  useContext
} from "react";
import axios from "axios";
import io from "socket.io-client";

import FrontPage from "./FrontPage.jsx";
import UserProfile from "./UserProfile.jsx";

import { PrivateRoute } from "./Authentication/PrivateRoute.jsx";
import LoginPage from "./Authentication/LoginPage.jsx";
import SignIn from "./Authentication/SignIn.jsx";
import ChatBox from "./Authentication/ChatBox.jsx";
import MessageLog from "./Authentication/MessageLog.jsx";

import NavBar from "./NavBar.jsx";
import NewPostForm from "./NewPostForm.jsx";

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

const UserStateReducer = (state, action) => {
  switch (action.type) {
    case "set-user":
      return { username: action.username, user_id: action.user_id };
    default:
      return state;
  }
};

const SwitchPath = (userInfo, dispatchContext) => {
  return (
    <Switch>
      <UserState.Provider value={{ userInfo, dispatchContext }}>
        <Route path="/login/">
          <LoginPage />
        </Route>
        <Route path="/signup/">
          <SignIn />
        </Route>
        <Route path="/message/log/">
          <MessageLog />
        </Route>
        <Route path="/profile/:username/">
          <UserProfile />
        </Route>
        <Route path="/newpost/">
          <NewPostForm />
        </Route>
        <Route path={`/chatbox/:target`}>
          <ChatBox />
        </Route>
        <Route exact path="/">
          <FrontPage />
        </Route>
      </UserState.Provider>
    </Switch>
  );
};

const AppRouter = () => {
  const [userInfo, dispatchContext] = useReducer(
    UserStateReducer,
    useContext(UserState)
  );
  //!userInfo.username.length
  if (!userInfo.username.length) {
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
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        {SwitchPath(userInfo, dispatchContext)}
      </div>
    );
  } else {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/message/log">My Messages</Link>
            </li>
            <li>
              <Link to={`/profile/${userInfo.username}`}>My Profile</Link>
            </li>
            <li>
              <Link to="/newpost/">Make a new Post</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              Log Out
              {/* <Link to="/logout/">Log Out</Link> */}
            </li>
          </ul>
        </nav>

        {SwitchPath(userInfo, dispatchContext)}
      </div>
    );
  }
};

export default withRouter(AppRouter);

// need logic in profile component that checks

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
