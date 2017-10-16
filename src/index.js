import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import routes from './routes.js';
import { Provider } from 'react-redux';

// https://github.com/coryhouse/pluralsight-redux-starter/tree/master/src
// https://github.com/stukent/chump

const store = configureStore();

render(
  <Provider store={store}>
  routes,
  </Provider>,
  document.getElementById('app')
);
