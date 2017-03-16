import {combineReducers} from 'redux';

import {
  usersReadSucceeded
} from '../action';

let initialState = {
  user: {},
  users: []
};

const userReducer = (state = initialState.user, action) => {
  console.log('userReducer', 'state', state, 'action', action);

  switch (action.type) {
    default:
      return state;
  }
};

const usersReducer = (state = initialState.users, action) => {
  console.log('usersReducer', 'state', state, 'action', action);

  switch (action.type) {
    case usersReadSucceeded:
      return {
        ...[],
        ...state,
        ...action.users
      };
    default:
      return state;
  }
};

const usersReducers = combineReducers({
  userReducer,
  usersReducer,
});

export default usersReducers;
