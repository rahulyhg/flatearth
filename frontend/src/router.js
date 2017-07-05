// @flow
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './containers/home/home';
import Signin from './containers/auth/signin/signin';
import Signup from './containers/auth/signup/signup';
import Profile from './containers/profile/profile';
import FlatEarth from './containers/flatearth/flatearth';
import RequireAuth from './containers/auth/require_auth';
import { Homewrapper } from './theme/components.styled';

// const SecretUploads = RequireAuth(Uploads);
const NoMatch = ({ location }) =>
  <Homewrapper>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </Homewrapper>;

const Main = () =>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route
      path="/signin"
      render={(props) => (localStorage.getItem('token') ? <Redirect to="/" /> : <Signin {...props}/>)}
    />
    <Route path="/signup" component={Signup} />
    <Route path="/profile" component={Profile} />
    <Route path="/flatearth" component={RequireAuth(FlatEarth)} />
    <Route component={NoMatch} />
  </Switch>;

// <Route path="/signup" component={Signup} />
// <Route path="/signout" component={Signout} />
// <Route path="/signin" component={Signin} />
// <Route path="/uploads" component={SecretUploads} />
export default Main;
