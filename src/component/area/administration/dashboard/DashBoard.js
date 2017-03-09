import React from 'react';

import Header from 'component/shared/structure/header/Header';
import Main from 'component/shared/structure/main/Main';
import Footer from 'component/shared/structure/footer/Footer';

export class DashBoard extends React.Component {
  render() {
    return <div>
      <Header>Header</Header>
      <Main>
        <h1>DashBoard - Administration</h1>
      </Main>
      <Footer>Footer</Footer>
    </div>;
  }
};
