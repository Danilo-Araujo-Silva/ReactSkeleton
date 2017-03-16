import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import UserItem from './UserItem';
import UsersList from './UsersList';
import { getVisibleUsers } from '../../../../../shared/configuration/state/redux/reducer/users.reducer';


const UsersContainer = ({ users }) => (
  <UsersList title="Users">
    {users.map(user =>
      <UserItem
        key={user.id}
        user={user}
      />
    )}
  </UsersList>
);

UsersContainer.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired
  })).isRequired
};

const mapStateToProps = state => ({
  users: getVisibleUsers(state.users)
});

export default connect(
  mapStateToProps,
  null
)(UsersContainer)
