import React from 'react';
import { HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom';
import { App } from './App.js';
import { HomeComponent } from './home/HomeComponent.js';
import { AboutComponent } from './about/AboutComponent.js';

const routes = (
  <BrowserRouter>
    <div>
      <Route path='/' component={App} />
      <Route exact={true} path ='/' component={HomeComponent} />
      <Route exact={true} path = '/about' component={AboutComponent} />
      <Route path ='/error' component={HomeComponent} />
    </div>
  </BrowserRouter>
);

export default routes;
