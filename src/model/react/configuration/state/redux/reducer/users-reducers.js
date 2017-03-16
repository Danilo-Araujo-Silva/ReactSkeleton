import {combineReducers} from 'redux';

import {
  userCreated,
  userRead,
  userUpdated,
  userDeleted,
  usersCreated,
  usersRead,
  usersUpdated,
  usersDeleted
} from '../action';

let initialState = {
  user: {},
  users: []
};

const userReducer = (state = initialState.user, action) => {
  console.log('userReducer', 'state', state, 'action', action);

  switch (action.type) {
    case userCreated:
      return null;
    case userRead:
      return null;
    case userUpdated:
      return null;
    case userDeleted:
      return null;
    default:
      return state;
  }
};

const usersReducer = (state = initialState.users, action) => {
  console.log('usersReducer', 'state', state, 'action', action);

  switch (action.type) {
    case usersCreated:
      return null;
    case usersRead:
      return {
        ...[],
        ...state,
        ...action.users
      };
    case usersUpdated:
      return null;
    case usersDeleted:
      return null;
    default:
      return state;
  }
};

const usersReducers = combineReducers({
  userReducer,
  usersReducer,
});

export default usersReducers;
