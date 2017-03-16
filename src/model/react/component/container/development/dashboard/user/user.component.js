import React, {PropTypes} from 'react';

const User = ({ id, username }) => (
  <div>
    Id: {id} <br/>
    Username: {username}
  </div>
);

User.propTypes = {
  id: PropTypes.number,
  username: PropTypes.string,
};

export default User;

