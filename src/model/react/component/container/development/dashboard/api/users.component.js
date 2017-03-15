import React from 'react';

export class Users extends React.Component {

  props.users = ['asdf', 'fdsa'];

  render() {
    return <div>
      <ul>
        {this.props.users.map((user) => {
          return <li>{user}</li>
        })}
      </ul>
    </div>;
  }
}
