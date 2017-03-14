import React from 'react';

import './footer.component.css';

export default class Footer extends React.Component {
  render() {
    return <footer>
      {this.props.children}
    </footer>;
  }
};
