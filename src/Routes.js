import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route to="/"></Route>
          <Route to="/login"></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Routes;
