import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { App, AboutComponent, CoursesComponent, Header, ManageCourseContainer } from './components';

const routes = (
  <HashRouter>
    <div>
      <Header />
      <Route exact={true} path='/' component={App} />
      <Route exact={true} path ='/courses' component={CoursesComponent} />
      <Route exact={true} path ='/course' component={ManageCourseContainer} />
      <Route exact={true} path ='/course/:id' component={ManageCourseContainer} />
      <Route path ='/about' component={AboutComponent} />
    </div>
  </HashRouter>
);

export default routes;
