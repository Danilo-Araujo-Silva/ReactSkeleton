import React from 'react';

import './header.component.css';

export default class Header extends React.Component {
  render() {
    return <header>
      {this.props.children}
    </header>;
  }
};