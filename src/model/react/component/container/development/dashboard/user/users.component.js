import React, {PropTypes} from 'react';

const Users = ({children}) => (
  <div>
    <h3>Users</h3>
    <div>{children}</div>
  </div>
);

Users.propTypes = {
  children: PropTypes.node,
};

export default Users;
