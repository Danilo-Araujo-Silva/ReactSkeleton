import React from 'react';

import Header from '../../shared/structure/header/header.component.js';
import Main from '../../shared/structure/main/main.component.js';
import Footer from '../../shared/structure/footer/footer.component.js';

export class NotFoundContainer extends React.Component {
  render() {
    return <div>
      <Header></Header>
      <Main>
        <h1>Not Found - Public</h1>
      </Main>
      <Footer></Footer>
    </div>;
  }
};
