import React from 'react';

import GenericMain from '../../generic/main/main.component';
import './main.component.css';

export default class Footer extends React.Component {
  render() {
    return <GenericMain>
      {this.props.children}
    </GenericMain>;
  }
};