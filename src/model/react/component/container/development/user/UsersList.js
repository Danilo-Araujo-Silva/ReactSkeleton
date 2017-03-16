import React, { PropTypes } from 'react';

const UsersList = ({ title, children }) => (
  <div>
    <h3>{title}</h3>
    <div>{children}</div>
  </div>
);

UsersList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
};

export default UsersList;
