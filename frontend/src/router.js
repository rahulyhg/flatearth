// @flow
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/home/home';
import Singin from './containers/auth/signin/signin';
import Singup from './containers/auth/signup/signup';

// const SecretUploads = RequireAuth(Uploads);
const NoMatch = ({ location }) =>
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>;

const Main = () =>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/signin" component={Singin} />
    <Route path="/signup" component={Singup} />
    <Route component={NoMatch} />
  </Switch>;

// <Route path="/signup" component={Signup} />
// <Route path="/signout" component={Signout} />
// <Route path="/signin" component={Signin} />
// <Route path="/uploads" component={SecretUploads} />
export default Main;
