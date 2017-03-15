import {browserHistory} from 'react-router';

import * as actions from '../action/actions';
import initialState from '../state/initialState';

export default function usersReducer(state = initialState.users, action) {
  switch(action.type) {
    case actions.LOAD_USERS_SUCCESS:
      return Object.assign([], state, action.users);
    case actions.CREATE_USER_SUCCESS:
      browserHistory.push(`/users/${action.user.id}`);

      return [
        ...state.filter(user => user.id !== action.user.id),
        Object.assign({}, action.user)
      ];
    case actions.UPDATE_USER_SUCCESS:
      return [
        ...state.filter(user => user.id !== action.user.id),
        Object.assign({}, action.user)
      ];
    case actions.DELETE_USER_SUCCESS:
      const nextState = Object.assign([], state);

      const indexToDelete = state.findIndex(user => {return user.id === action.user.id});

      nextState.splice(indexToDelete, 1);

      browserHistory.push('/users');
      
      return nextState;
    default:
      return state;
  }
}
