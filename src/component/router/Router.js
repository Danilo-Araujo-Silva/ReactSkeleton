import React from 'react';
import {Router as ReactRouter, Route, IndexRoute, Redirect, browserHistory} from 'react-router';

import {DashBoard as AdministrationDashBoard} from 'component/area/administration/DashBoard';
import {DashBoard as DevelopmentDashBoard} from 'component/area/development/DashBoard';
import {Landing as PublicLanding} from 'component/area/public/landing/Landing';
import {DashBoard as UserDashBoard} from 'component/area/user/DashBoard';
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
        <Redirect from="public/:path" to="/:path" />
        <Route path="user" component={UserDashBoard}>
          <Redirect from="dashboard" to="/user" />
        </Route>
      </Route>
      <Route path="*" component={SharedNotFound}/>
    </ReactRouter>
  );
  }
};