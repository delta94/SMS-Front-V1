import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Router, Route, Redirect } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

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
  AdminRouter,
  ManagementRouter
} from "./routers";
import { jsonActionCreater } from "./modules/action/json";
import { history } from "./modules/store";
import { ToastContainer } from "react-toastify";

const App: FC<{}> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(jsonActionCreater.getJsonSaga());
  }, []);

  return (
    <>
      {location.pathname.includes("parent") ? (
        <BrowserRouter>
          <GlobalStyle />
          <Switch>
            <Route
              path="/parent/outing/:confirmUuid"
              component={ParentContainer}
            />
          </Switch>
        </GlobalBody>
      </Router>
    </GlobalContainer>
        </BrowserRouter>
      ) : (
        <GlobalContainer>
          <GlobalStyle />
          <BrowserRouter>
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
                <Route path="/admin" component={AdminRouter} />
                <Route path="/management" component={ManagementRouter} />
                <Redirect path="/" to="/home" />
                <Route path="*" component={PageNotFound} />
              </Switch>
            </GlobalBody>
          </BrowserRouter>
        </GlobalContainer>
      )}
  );
};

export default App;
