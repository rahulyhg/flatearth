// @flow
import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import reduxThunk from 'redux-thunk';
import 'normalize.css';
import './theme/index.css';

import rootReducer from './reducers';
import logMiddleware from './middlewares/01-logger';
import wsMiddleware from './middlewares/02-websocket';
import { AUTH_USER, USER_INFO } from './actions/types';

import App from './App';
import registerServiceWorker from './services/registerServiceWorker';

const mountNode = document.getElementById('root');
const createStoreWithMiddleware = applyMiddleware(
  logMiddleware,
  wsMiddleware,
  reduxThunk
)(createStore);
const store = createStoreWithMiddleware(rootReducer);

const token: ?string = localStorage.getItem('token');
const userInfo: ?string = localStorage.getItem('user');
// If we have a token, consider the user to be signed in
if (token) {
  // we need update application state
  store.dispatch({ type: AUTH_USER, payload: { accessToken: token } });
  store.dispatch({ type: USER_INFO, payload: { userInfo: JSON.parse(userInfo) } });
}
const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Component />
      </Router>
    </Provider>,
    mountNode
  );
};

if (module.hot) {
  module.hot.accept('./App', () => {
    // eslint-disable-next-line
    const NewApp = require('./App').default;
    render(NewApp);
  });

  module.hot.accept('./reducers', () => {
    // eslint-disable-next-line
    const nextReducer = require('./reducers').default;
    store.replaceReducer(nextReducer);
  });
}

render(App);
registerServiceWorker();
