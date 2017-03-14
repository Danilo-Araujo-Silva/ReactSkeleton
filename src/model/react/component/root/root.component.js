import React from 'react';
// import ThemeProvider from 'react-toolbox/lib/ThemeProvider';

import /*properties from*/ '../../../shared/configuration/properties/properties';
import '../../../shared/configuration/dependency/dependencies';
import MaterialUIThemeProvider from '../theme/material-ui/theme-provider.component';
import Router from '../route/router.component';

const Root = () => (
  <MaterialUIThemeProvider>
    <Router />
  </MaterialUIThemeProvider>
);

export default Root;