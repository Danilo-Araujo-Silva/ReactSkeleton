import React from 'react';

import Header from '../shared/structure/header/header.component.js';
import Main from '../shared/structure/main/main.component.js';
import Footer from '../shared/structure/footer/footer.component.js';

import './landing-container.component.css';

export class Landing extends React.Component {
  render() {
    return <div>
      <Header></Header>
      <Main>
        <h1>Landing - Public</h1>
      </Main>
      <Footer></Footer>
    </div>;
  }
};
