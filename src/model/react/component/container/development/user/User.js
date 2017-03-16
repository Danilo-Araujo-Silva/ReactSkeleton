import React, { PropTypes } from 'react';

const User = ({ username }) => (
  <div>
    {username}
  </div>
);

User.propTypes = {
  username: PropTypes.string
};

export default User;
