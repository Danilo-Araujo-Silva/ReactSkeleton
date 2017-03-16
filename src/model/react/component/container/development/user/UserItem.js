import React, { PropTypes } from 'react';
import User from './User';

const UserItem = ({ user }) => (
  <div style={{ marginBottom: 20 }}>
    <User
      username={user.username}
    />
  </div>
);

UserItem.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired
  }).isRequired
};

export default UserItem;
