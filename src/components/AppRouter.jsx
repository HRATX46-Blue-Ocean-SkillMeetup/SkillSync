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

const socketUrl = "http://localhost:3000";
export const socket = io(socketUrl);
export const UserState = createContext({
  username: "",
  user_id: 0,
  notification: false
});

const UserStateReducer = (state, action) => {
  console.log(state["newMessage"]);
  switch (action.type) {
    case "set-user":
      return { ...state, username: action.username, user_id: action.user_id };
    case "notification":
      return { ...state, notification: true };
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
        <PrivateRoute path={`/chatbox/:target`}>
          <ChatBox />
        </PrivateRoute>
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
    socket.on("notification", addNotification);
  }, []);

  const addNotification = from_username => {
    console.log("addNotification ran", from_username);
    dispatchContext({ type: "notification", user: "test" });
  };

  return (
    <div>
      <NavBar loggedIn={userInfo.username.length} userInfo={userInfo} />
      {SwitchPath(userInfo, dispatchContext)}
    </div>
  );
};

export default withRouter(AppRouter);

