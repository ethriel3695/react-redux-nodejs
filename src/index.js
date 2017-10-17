import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import routes from './routes.js';
import { Provider } from 'react-redux';
import { loadCourses } from './actions/courseActions';

const store = configureStore();
store.dispatch(loadCourses());

render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('app')
);
