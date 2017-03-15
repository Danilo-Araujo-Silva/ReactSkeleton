import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../../../../shared/configuration/state/redux/action/usersActions';
import {browserHistory} from 'react-router';

class UsersContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      user: Object.assign({}, this.props.user),
      saving: false,
      isEditing: false
    };
    this.saveUser = this.saveUser.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.redirect = this.redirect.bind(this);
  }


  componentWillReceiveProps(nextProps) {
    if (this.props.user.id !== nextProps.user.id) {
      this.setState({user: Object.assign({}, nextProps.user)});
    }

    this.setState({saving: false, isEditing: false});
  }

  toggleEdit() {
    this.setState({isEditing: true});
  }

  updateUserState(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;
    return this.setState({user: user});
  }

  saveUser(event) {
    event.preventDefault();
    this.setState({saving: true});
    this.props.actions.updateUser(this.state.user);

  }

  deleteUser(event) {
    this.props.actions.deleteUser(this.state.user)
  }

  redirect() {
    browserHistory.push('/users');
  }

  render() {
    if (this.state.isEditing) {
      return (
        <div>
          <h1>edit user</h1>
          {/*<UserForm
            user={this.state.user}
            onSave={this.saveUser}
            onChange={this.updateUserState}
            saving={this.state.saving}/>*/}
        </div>
      )
    }
    return (
      <div className="col-md-8 col-md-offset-2">
        <h1>{this.state.user.id}: {this.state.user.username}</h1>
        <p>username: {this.state.user.username}</p>
        <button onClick={this.toggleEdit} className="btn btn-default  ">edit</button>
        <button onClick={this.deleteUser} className="btn btn-default  ">delete</button>
      </div>
    );
  }
}

function getUserById(users, id) {
  let user = users.find(user => user.id === id)
  return Object.assign({}, user)
}

function mapStateToProps(state, ownProps) {
  console.log('ownProps', ownProps);
  let user = {username: ''};
  const userId = ownProps.params.id;
  if (userId && state.users.length > 0) {
    user = getUserById(state.users, ownProps.params.id);
  }
  return {user: user};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default UsersContainer;

//export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);