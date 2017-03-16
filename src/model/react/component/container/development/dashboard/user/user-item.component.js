import React, {PropTypes} from 'react'
import User from './user.component';

const UserItem = ({user}) => (
  <div>
    <User
      id={user.id}
      username={user.username}
    />
    <button
      onClick={() => {alert("Button clicked.");}}
    >
      Click me
    </button>
  </div>
);

UserItem.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired
  }).isRequired
};

export default UserItem;
