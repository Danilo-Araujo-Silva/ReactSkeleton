import {combineReducers} from 'redux';
import usersReducers from './users-reducers';

const rootReducer = combineReducers({
  usersReducers,
});

export default rootReducer;
