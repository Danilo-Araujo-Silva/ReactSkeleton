import React from 'react';

import /*properties from*/ 'configuration/properties';
import 'configuration/dependency/dependencies';
import ThemeProvider from 'component/shared/theme/material-ui/ThemeProvider';
// import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import Router from 'component/router/Router';

const Root = () => (
  <ThemeProvider>
    <Router />
  </ThemeProvider>
);

export default Root;