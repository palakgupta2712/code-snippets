import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Layout from "./layout/Layout";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NewSnippets from "./pages/NewSnippets";
import Snippet from "./components/Snippet/Snippet";
import UserSnippets from "./components/UserSnippets/UserSnippets";

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
            <Route path="/new">
              <NewSnippets />
            </Route>
            <Route path="/snippet/:id">
              <Snippet />
            </Route>
            <Route path="/snippets">
              <UserSnippets />
            </Route>
          </Layout>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Routes;
