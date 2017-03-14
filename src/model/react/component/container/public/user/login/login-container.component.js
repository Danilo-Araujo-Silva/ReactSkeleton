import React from 'react';

import Header from '../../../../shared/structure/user/header/header.component';
import Main from '../../../../shared/structure/user/main/main.component';
import Footer from '../../../../shared/structure/user/footer/footer.component';

export class LoginContainer extends React.Component {
  render() {
    return <div>
      <Header></Header>
      <Main>
        <h1>Login - Public</h1>
      </Main>
      <Footer></Footer>
    </div>;
  }
};
