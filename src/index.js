import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import routes from './routes.js';
import { Provider } from 'react-redux';

const store = configureStore();

render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('app')
);
