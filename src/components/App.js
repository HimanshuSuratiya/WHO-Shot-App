import React, { useEffect, useState } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Layout from "./Layout";
import Error from "../pages/error";
import Login from "../pages/login";
import { useUserState } from "../context/UserContext";

export default function App() {
  // var { isAuthenticated } = useUserState();
  const [isAuthenticated, setIsAuthenticated] = useState((parseInt(localStorage.getItem('isAuthenticated')) ? true : false))
  var { isUserType } = useUserState();

  useEffect(() => {
    const LoginData = { email: 'adminWHO@gmail.com', password: '12345@' }
    if (localStorage.getItem('isAuthenticated') === null) {
      localStorage.setItem('isAuthenticated', 0)
    } else {
      if (parseInt(localStorage.getItem('isAuthenticated')) === 1) {
        localStorage.setItem('isAuthenticated', 1)
      } else {
        localStorage.setItem('isAuthenticated', 0)
      }
    }
    localStorage.setItem('LoginData', JSON.stringify(LoginData));
  }, [])

  if (isUserType == 0) {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/app/dashboard" />} />
          <Route exact path="/app" render={() => <Redirect to="/app/dashboard" />} />
          <PrivateRoute path="/app" component={Layout} />
          <PublicRoute path="/login" component={Login} />
          <Route component={Error} />
        </Switch>
      </HashRouter>
    );
  }

  else if (isUserType == 1) {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/app/dashboard" />} />
          <Route exact path="/app" render={() => <Redirect to="/app/dashboard" />} />
          {/* <PrivateRoute path="/app" component={AdminLayout} /> */}
          <PublicRoute path="/login" component={Login} />
          <Route component={Error} />
        </Switch>
      </HashRouter>
    );
  }

  else if (isUserType == 2) {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/app/dashboard" />} />
          <Route exact path="/app" render={() => <Redirect to="/app/dashboard" />} />
          <PublicRoute path="/login" component={Login} />
          <Route component={Error} />
        </Switch>
      </HashRouter>
    );
  }

  else {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/app/dashboard" />} />
          <Route exact path="/app" render={() => <Redirect to="/app/dashboard" />} />
          <PrivateRoute path="/app" component={Layout} />
          <PublicRoute path="/login" component={Login} />
          <Route component={Error} />
        </Switch>
      </HashRouter>
    );
  }

  function PrivateRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            React.createElement(component, props)
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          )
        }
      />
    );
  }

  function PublicRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          ) : (
            React.createElement(component, props)
          )
        }
      />
    );
  }
}
