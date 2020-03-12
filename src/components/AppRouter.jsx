import React, {
  useState,
  useEffect,
  createContext,
  useReducer,
  useContext
} from "react";
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
import PostingDetailsContainer from "./PostingDetailsContainer";

import { Switch, Route, withRouter } from "react-router-dom";
import PostingList from "./PostingList.js";

const socketUrl = "https://skillsync.herokuapp.com";
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
        <Route path="/search?q=:query">
          <PostingList />
        </Route>
        <Route path="/search/postings/">
          <PostingList />
        </Route>
        <Route path="/postings/:id">
          <PostingDetailsContainer />
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

  return (
    <div>
      <NavBar
        loggedIn={userInfo.username.length}
        userInfo={userInfo}
        dispatchContext={dispatchContext}
      />
      {SwitchPath(userInfo, dispatchContext)}
    </div>
  );
};

export default withRouter(AppRouter);
