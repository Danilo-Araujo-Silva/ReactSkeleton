import React from 'react';

import Header from '../shared/structure/header/header.component';
import Main from '../shared/structure/main/main.component';
import Footer from '../shared/structure/footer/footer.component';

export class DashBoardContainer extends React.Component {
  render() {
    return <div>
      <Header>Header</Header>
      <Main>
        <h1>DashBoard - User</h1>
      </Main>
      <Footer>Footer</Footer>
    </div>;
  }
};
