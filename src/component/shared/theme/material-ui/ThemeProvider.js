import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import theme from 'component/shared/theme/material-ui/theme';

const ThemeProvider = (props) => (
  <MuiThemeProvider muiTheme={theme}>
    {props.children}
  </MuiThemeProvider>
);

export default ThemeProvider;