import { combineReducers } from 'redux';

import { RECEIVE_USERS } from '../action/actions';

const users = (state, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const byId = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users.reduce((obj, user) => {
          obj[user.id] = user
          return obj
        }, {})
      }
    default:
      const { userId } = action
      if (userId) {
        return {
          ...state,
          [userId]: users(state[userId], action)
        }
      }
      return state
  }
}

const visibleIds = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return action.users.map(user => user.id)
    default:
      return state
  }
}

export default combineReducers({
  byId,
  visibleIds
})

export const getUser = (state, id) =>
  state.byId[id]

export const getVisibleUsers = state => {
  state.visibleIds.map(id => getUser(state, id))
}
