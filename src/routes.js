import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { App, AboutComponent, CoursesComponent, Header } from './components';

const routes = (
  <BrowserRouter>
    <div>
      <Header />
        <Route exact={true} path='/' component={App} />
        <Route exact={true} path = '/courses' component={CoursesComponent} />
        <Route path = '/about' component={AboutComponent} />
    </div>
  </BrowserRouter>
);

export default routes;
