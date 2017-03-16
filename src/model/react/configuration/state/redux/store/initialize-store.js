import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import properties from '../../../../../shared/configuration/properties/properties';
import rootReducer from './../reducer';

const middleware = [thunk];
if (!properties.variables.environment.production) {
  middleware.push(createLogger());
}

export default function initializeStore() {
  return createStore(
    rootReducer,
    applyMiddleware(...middleware)
  );
}
