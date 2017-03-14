import React from 'react';

import Header from '../../../user/shared/structure/header/header.component';
import Main from '../../../user/shared/structure/main/main.component';
import Footer from '../../../user/shared/structure/footer/footer.component';

export class PasswordRecoveryContainer extends React.Component {
  render() {
    return <div>
      <Header></Header>
      <Main>
        <h1>Password Recovery - Public</h1>
      </Main>
      <Footer></Footer>
    </div>;
  }
};
