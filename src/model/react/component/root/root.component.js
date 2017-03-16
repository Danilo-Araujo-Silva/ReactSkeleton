import React from 'react';
import {Provider} from 'react-redux';
// import ThemeProvider from 'react-toolbox/lib/ThemeProvider';

import /*properties from*/ '../../../shared/configuration/properties/properties';
import '../../../shared/configuration/dependency/dependencies';
import MaterialUIThemeProvider from '../theme/material-ui/theme-provider.component';
import Router from '../route/router.component';
import store from '../../configuration/state/redux/store';

const Root = () => (
  <Provider store={store}>
    <MaterialUIThemeProvider>
      <Router />
    </MaterialUIThemeProvider>
  </Provider>
);

export default Root;