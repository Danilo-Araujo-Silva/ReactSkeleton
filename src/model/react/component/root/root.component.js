import React from 'react';
import {Provider} from 'react-redux';
// import ThemeProvider from 'react-toolbox/lib/ThemeProvider';

import /*properties from*/ '../../../shared/configuration/properties/properties';
import '../../../shared/configuration/dependency/dependencies';
import MaterialUIThemeProvider from '../theme/material-ui/theme-provider.component';
import Router from '../route/router.component';
import {getAllProducts} from '../container/development/user/actions';
import reducer from '../container/development/user/reducers'
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';


const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

store.dispatch(getAllProducts())

const Root = () => (
  <Provider store={store}>
    <MaterialUIThemeProvider>
      <Router />
    </MaterialUIThemeProvider>
  </Provider>
);

export default Root;