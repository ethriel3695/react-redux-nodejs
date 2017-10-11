import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { App } from './components';
import { AboutComponent } from './components';
import { CoursesComponent } from './components';
import { Header } from './components';

const routes = (
  <BrowserRouter>
    <div>
    <Header />
      <Route exact={true} path='/' component={App} />
      <Route path = '/courses' component={CoursesComponent} />
      <Route path = '/about' component={AboutComponent} />
    </div>
  </BrowserRouter>
);

export default routes;
