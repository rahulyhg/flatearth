// @flow
import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import reduxThunk from 'redux-thunk';


import rootReducer from './reducers';
import logMiddleware from './middlewares/01-logger';
import { AUTH_USER } from './actions/types';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './theme/index.css';
import 'normalize.css';

const mountNode = document.getElementById('root');
const createStoreWithMiddleware = applyMiddleware(logMiddleware, reduxThunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);

const token = localStorage.getItem('token');
const user = localStorage.getItem('user');
// If we have a token, consider the user to be signed in
if (token) {
  // we need update application state
  store.dispatch({ type: AUTH_USER, accessToken: token, user });
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
    const NewApp = require('./App').default;
    render(NewApp);
  });

  module.hot.accept('./reducers', () => {
    const nextReducer = require('./reducers').default;
    store.replaceReducer(nextReducer);
  });
}

render(App);
registerServiceWorker();
