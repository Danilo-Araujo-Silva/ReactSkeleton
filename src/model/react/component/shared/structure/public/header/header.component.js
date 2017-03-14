import React from 'react';

import GenericHeader from '../../generic/header/header.component';
import './header.component.css';

export default class Header extends React.Component {
  render() {
    return <GenericHeader>
      {this.props.children}
    </GenericHeader>;
  }
};