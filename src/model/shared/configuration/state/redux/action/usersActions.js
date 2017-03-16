import * as types from './actions';
import UsersService from '../../../../service/users.service';

const receiveUsers = users => ({
  type: types.RECEIVE_USERS,
  users: users
});

export const getAllUsers = () => dispatch => {
  UsersService.getAll(users => {
    dispatch(receiveUsers(users))
  })
};

