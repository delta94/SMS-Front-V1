import React, { FC } from "react";
import { Switch, Router, Route, Redirect } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import "./lib/confirm/confirm.css";
import { GlobalStyle, GlobalContainer, GlobalBody } from "./GlobalStyle";
import { PageNotFound, Navigation } from "./components";
import {
  LoginContainer,
  HeaderContainer,
  PasswordChangeContainer,
  ParentContainer
} from "./containers";
import {
  CirclesRouter,
  NoticeRouter,
  OutingRouter,
  MainRouter,
  ManagementRouter
} from "./routers";
import { history } from "./modules/store";
import { ToastContainer } from "react-toastify";

const App: FC<{}> = () => {
  return (
    <>
      {location.pathname.includes("parent") ? (
        <Router history={history}>
          <ToastContainer autoClose={2000} />
          <GlobalStyle />
          <Switch>
            <Route path="/parent/:confirmUuid" component={ParentContainer} />
          </Switch>
        </Router>
      ) : (
        <GlobalContainer>
          <GlobalStyle />
          <Router history={history}>
            <ToastContainer autoClose={2000} />
            <Navigation />
            <GlobalBody>
              <HeaderContainer />
              <Switch>
                <Route path="/pw-change" component={PasswordChangeContainer} />
                <Route path="/login" component={LoginContainer} />
                <Route path="/home" component={MainRouter} />
                <Route path="/notice" component={NoticeRouter} />
                <Route path="/circles" component={CirclesRouter} />
                <Route path="/outing" component={OutingRouter} />
                <Route path="/management" component={ManagementRouter} />
                <Redirect path="/" to="/home" />
                <Route path="*" component={PageNotFound} />
              </Switch>
            </GlobalBody>
          </Router>
        </GlobalContainer>
      )}
    </>
  );
};

export default App;
