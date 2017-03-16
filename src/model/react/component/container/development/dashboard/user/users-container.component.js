import React from 'react';
import {connect} from 'react-redux';

import {usersReducer} from '../../../../../configuration/state/redux/reducer/users-reducers';

import Users from './users.component';
import UserItem from './user-item.component';

const UsersContainer = ({users}) => {
  return <div>
    <h2>Users - API</h2>
    <Users>
      {console.log('users', users)}
      {users.map(user =>
        <UserItem
          key={user.id}
          user={user}
        />
      )}
    </Users>
  </div>;
};

const mapStateToProps = state => ({
  users: usersReducer(state.users)
});

export default connect(
  mapStateToProps
)(UsersContainer);
