import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, BrowserRouter, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import { GlobalStyle, GlobalContainer, GlobalBody } from "./GlobalStyle";
import { PageNotFound } from "./components";
import {
  CirclesRouter,
  NoticeRouter,
  OutingRouter,
  MainRouter,
  AdminRouter,
  ManagementRouter
} from "./routers";
import { jsonActionCreater } from "./modules/action/json";
import { LoginContainer, HeaderContainer } from "./containers";

const App: FC<{}> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(jsonActionCreater.getJsonSaga());
  }, []);

  return (
    <GlobalContainer>
      <GlobalStyle />
      <BrowserRouter>
        <Navigation />
        <GlobalBody>
          <HeaderContainer />
          <Switch>
            <Route path="/login" component={LoginContainer} />
            <Route path="/home" component={MainRouter} />
            <Route path="/notice" component={NoticeRouter} />
            <Route path="/circles" component={CirclesRouter} />
            <Route path="/outing" component={OutingRouter} />
            <Route path="/admin" component={AdminRouter} />
            <Route path="/management" component={ManagementRouter} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </GlobalBody>
      </BrowserRouter>
    </GlobalContainer>
  );
};

export default App;
