import * as types from './index';
import UsersService from '../../../../../shared/service/users.service';

const usersReadSucceeded = users => ({
  type: types.usersReadSucceeded,
  users: users
});

export const getAll = () => dispatch => {
  UsersService.getAll(users => {
    dispatch(usersReadSucceeded(users))
  })
};
