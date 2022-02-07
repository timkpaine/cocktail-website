import React from "react";
import {Route, HashRouter, Switch, Redirect} from "react-router-dom";
import Main from "./components/Main";
import ScrollToTop from "./components/ScrollTop";

export default function () {
  return (
    <HashRouter>
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={Main} />
          {/* eslint-disable-next-line react/no-unstable-nested-components */}
          <Route component={() => <Redirect to="/" />} />
        </Switch>
      </ScrollToTop>
    </HashRouter>
  );
}
