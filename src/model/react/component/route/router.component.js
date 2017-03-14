import React from 'react';
import {Router as ReactRouter, Route, IndexRoute, Redirect, browserHistory} from 'react-router';

import {DashBoardContainer as AdministrationDashBoard} from '../container/administration/dashboard/dashboard-container.component';

import {DashBoardContainer as DevelopmentDashBoard} from '../container/development/dashboard/dashboard-container.component';

import {AboutContainer as PublicAbout} from '../container/public/about/about-container.component';
import {CareersContainer as PublicCareers} from '../container/public/careers/careers-container.component';
import {NotFoundContainer as PublicErrorNotFound} from '../container/public/error/not-found/not-found-container.component';
import {HelpContainer as PublicHelp} from '../container/public/help/help-container.component';
import {Landing as PublicLanding} from '../container/public/landing/landing-container.component';
import {SitemapContainer as PublicSitemap} from '../container/public/sitemap/sitemap-container.component';
import {TermsAndPrivacyContainer as PublicTermsAndPrivacy} from '../container/public/terms-and-privacy/terms-and-privacy-container.component';
import {LoginContainer as PublicUserLogin} from '../container/public/user/login/login-container.component';
import {PasswordRecoveryContainer as PublicUserPasswordRecovery} from '../container/public/user/password-recovery/password-recovery-container.component';
import {SignUpContainer as PublicUserSignUp} from '../container/public/user/sign-up/sign-up-container.component';

import {DashBoardContainer as UserDashBoard} from '../container/user/dashboard/dashboard-container.component';

export default class Router extends React.Component {
  render() {
    return (
      <ReactRouter history={browserHistory}>
        <Route path="/">
          <IndexRoute component={PublicLanding} />
          <Route path="about" component={PublicAbout} />
          <Route path="careers" component={PublicCareers} />
          <Route path="error/not-found" component={PublicErrorNotFound} />
          <Route path="help" component={PublicHelp} />
          <Route path="landing" component={PublicLanding} />
          <Route path="sitemap" component={PublicSitemap} />\
          <Route path="terms-and-privacy" component={PublicTermsAndPrivacy} />

          <Route path="administration" component={AdministrationDashBoard}>
            <Redirect from="dashboard" to="/administration" />
          </Route>
          <Route path="development" component={DevelopmentDashBoard}>
            <Redirect from="dashboard" to="/development" />
          </Route>
          <Route path="public">
            <Redirect from="/public/:path" to="/:path" />
          </Route>
          <Route path="user">
            <IndexRoute component={UserDashBoard} />
            <Route path="login" component={PublicUserLogin} />
            <Route path="password-recovery" component={PublicUserPasswordRecovery} />
            <Route path="sign-up" component={PublicUserSignUp} />
            <Redirect from="dashboard" to="/user" />
          </Route>
        </Route>
        <Route path="*" component={PublicErrorNotFound}/>
      </ReactRouter>
    );
  }
};