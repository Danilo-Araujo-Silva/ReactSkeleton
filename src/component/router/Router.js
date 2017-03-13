import React from 'react';
import {Router as ReactRouter, Route, IndexRoute, Redirect, browserHistory} from 'react-router';

import {DashBoard as AdministrationDashBoard} from 'component/area/administration/dashboard/DashBoard';
import {DashBoard as DevelopmentDashBoard} from 'component/area/development/dashboard/DashBoard';
import {Landing as PublicLanding} from 'component/area/public/landing/Landing';
import {About as PublicAbout} from 'component/area/public/about/About';
import {DashBoard as UserDashBoard} from 'component/area/user/dashboard/DashBoard';
import {NotFound as SharedNotFound} from 'component/shared/error/not-found/NotFound';

export default class Router extends React.Component {
  render() {
    return (
      <ReactRouter history={browserHistory}>
        <Route path="/">
          <IndexRoute component={PublicLanding} />
          <Route path="administration" component={AdministrationDashBoard}>
            <Redirect from="dashboard" to="/administration" />
          </Route>
          <Route path="development" component={DevelopmentDashBoard}>
            <Redirect from="dashboard" to="/development" />
          </Route>
          <Route path="public">
            <Route path="/landing" component={PublicLanding} />
            <Route path="/about" component={PublicAbout} />
            <Redirect from="/public/:path" to="/:path" />
          </Route>
          <Route path="user" component={UserDashBoard}>
            <Redirect from="dashboard" to="/user" />
          </Route>
        </Route>
        <Route path="*" component={SharedNotFound}/>
      </ReactRouter>
    );
  }
};