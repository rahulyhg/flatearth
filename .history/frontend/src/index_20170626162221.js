import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const mountNode = document.getElementById('root');
const render = Component => {
  ReactDOM.render(<Component />, mountNode);
};

render(App);

if (module.hot) {
  console.log('ok');
}

// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
