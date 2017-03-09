import React from 'react';
import {Router as ReactRouter, Route, browserHistory} from 'react-router';

import {Landing as PublicLanding} from 'component/area/public/landing/Landing';
import {NotFound as SharedNotFound} from 'component/shared/error/not-found/NotFound';

export default class Router extends React.Component {
  render() {
  return (
    <ReactRouter history={browserHistory}>
      <Route path="/" component={PublicLanding}>
      </Route>
      <Route path="*" component={SharedNotFound}/>
    </ReactRouter>
  );
  }
};