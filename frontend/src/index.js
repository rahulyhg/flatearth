import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './theme/index.css';

const mountNode = document.getElementById('root');
const render = Component => {
  ReactDOM.render(<Component />, mountNode);
};

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}

render(App);
registerServiceWorker();
