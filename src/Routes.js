import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Layout from "./layout/Layout";

function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Layout>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Layout>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Routes;
