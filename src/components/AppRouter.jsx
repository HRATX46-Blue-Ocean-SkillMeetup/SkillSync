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
import ReviewPage from "./ReviewPage.js";
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
export const UserState = createContext({
  username: "",
  user_id: 0,
  notification: false
});

const UserStateReducer = (state, action) => {
  switch (action.type) {
    case "set-user":
      return { ...state, username: action.username, user_id: action.user_id };
    case "notification":
      return { ...state, notification: action.bool };
    case "logout":
      return { ...state, username: "", user_id: 0 };
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
        <PrivateRoute path="/message/log/">
          <MessageLog />
        </PrivateRoute>
        <Route path="/profile/:username/">
          <UserProfile />
        </Route>
        <PrivateRoute path="/newpost/">
          <NewPostForm />
        </PrivateRoute>
        <Route path={`/chatbox/:target`}>
          <ChatBox />
        </Route>
        <PrivateRoute path={`/review/:target`}>
          <ReviewPage />
        </PrivateRoute>
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

  useEffect(() => {
    socket.on("notification", addNotification.bind(null, true));
  }, []);

  const addNotification = bool => {
    console.log("addNotification ran", bool);
    dispatchContext({ type: "notification", bool });
  };

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
            <li
              onClick={() => {
                dispatchContext({ type: "logout" });
                socket.emit("logout", userInfo.user_id);
              }}
            >
              Log Out
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
