import {combineReducers} from 'redux';
import usersReducers from './users.reducer';

const rootReducer = combineReducers({
  usersReducers,
});

export default rootReducer;
