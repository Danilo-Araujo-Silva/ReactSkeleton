import React from 'react';

import 'configuration/properties';
import 'configuration/dependency/dependencies';
import ThemeProvider from 'component/shared/theme/material-ui/ThemeProvider';
import Router from 'component/router/Router';


const Root = () => (
  <ThemeProvider>
    <Router />
  </ThemeProvider>
);

export default Root;