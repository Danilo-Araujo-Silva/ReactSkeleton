import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import theme from 'model/react/configuration/theme/material-ui/theme';

const MaterialUIThemeProvider = (props) => (
  <MuiThemeProvider muiTheme={theme}>
    {props.children}
  </MuiThemeProvider>
);

export default MaterialUIThemeProvider;