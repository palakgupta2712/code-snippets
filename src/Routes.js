import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./layout/Layout";

function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Layout>
            <Route to="/"></Route>
            <Route to="/login"></Route>
          </Layout>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Routes;
