import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { App, AboutComponent, CoursesComponent, HomeComponent } from './components'; // eslint-disable-line import/no-duplicates
import { ManageCourseContainer } from './components'; // eslint-disable-line import/no-named-as-default, import/no-duplicates
// import { connect } from 'react-redux';

const routes = (
  <HashRouter>
    <div>
      <Route path='/' component={App} />
      <Route exact={true} path='/' component={HomeComponent} />
      <Route exact={true} path ='/courses' component={CoursesComponent} />
      <Route exact={true} path ='/course' component={ManageCourseContainer} />
      <Route exact={true} path ='/course/:id' component={ManageCourseContainer} />
      <Route path ='/about' component={AboutComponent} />
    </div>
  </HashRouter>
);

export default routes;
