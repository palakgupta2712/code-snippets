import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Layout from "./layout/Layout";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

function Routes() {
  const [user] = useAuthState(auth);

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Layout>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              {user ? <Redirect to="/" /> : <Login />}
            </Route>
          </Layout>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Routes;
