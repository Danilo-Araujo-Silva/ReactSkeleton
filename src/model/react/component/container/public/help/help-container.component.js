import React from 'react';

import Header from '../../../shared/structure/public/header/header.component.js';
import Main from '../../../shared/structure/public/main/main.component.js';
import Footer from '../../../shared/structure/public/footer/footer.component.js';

export class HelpContainer extends React.Component {
  render() {
    return <div>
      <Header></Header>
      <Main>
        <h1>Help - Public</h1>
      </Main>
      <Footer></Footer>
    </div>;
  }
};
