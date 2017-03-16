import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import rootReducer from './../reducer';

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

export default function initializeStore() {
  return createStore(
    rootReducer,
    applyMiddleware(...middleware)
  );
}
