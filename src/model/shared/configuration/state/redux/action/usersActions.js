import * as types from './actions';
import UsersService from '../../../../service/users.service';

export function loadUsersSuccess(users) {
  return {type: types.LOAD_USERS_SUCCESS, users};
}

export function updateUserSuccess(user) {
  return {type: types.UPDATE_USER_SUCCESS, user}
}

export function createUserSuccess(user) {
  return {type: types.CREATE_USER_SUCCESS, user}
}

export function deleteUserSuccess(user) {
  return {type: types.DELETE_USER_SUCCESS, user}
}

export function loadUsers() {
  return function(dispatch) {
    return UsersService.getAll().then(users => {
      dispatch(loadUsersSuccess(users));
    }).catch(error => {
      throw(error);
    });
  };
}

export function updateUser(user) {
  return function (dispatch) {
    return UsersService.update(user).then(responseUser => {
      dispatch(updateUserSuccess(responseUser));
    }).catch(error => {
      throw(error);
    });
  };
}

export function createUser(user) {
  return function (dispatch) {
    return UsersService.create(user).then(responseUser => {
      dispatch(createUserSuccess(responseUser));
      return responseUser;
    }).catch(error => {
      throw(error);
    });
  };
}

export function deleteUser(user) {
  return function(dispatch) {
    return UsersService.destroy(user).then(() => {
      console.log(`Deleted ${user.id}`)
      dispatch(deleteUserSuccess(user));
      return;
    }).catch(error => {
      throw(error);
    })
  }
}
