import React from 'react';

import Header from 'component/shared/structure/header/Header';
import Main from 'component/shared/structure/main/Main';
import Footer from 'component/shared/structure/footer/Footer';

import MaterialComponentsWeb from './ui/material-components-web/MaterialComponentsWeb';
import MaterialDesignLite from './ui/material-design-lite/MaterialDesignLite';
import MaterialUI from './ui/material-ui/MaterialUI';
import MaterializeCSS from './ui/materialize-css/MaterializeCSS';
import ReactToolbox from './ui/react-toolbox/ReactToolbox';
import SemanticUI from './ui/semantic-ui/SemanticUI';
import Vue from './ui/vue/Vue';

export class DashBoard extends React.Component {
  render() {
    return <div>
      <Header>Header</Header>
      <Main>
        <h1>DashBoard - Development</h1>
        
        <MaterialComponentsWeb />
        <MaterialDesignLite />
        <MaterialUI />
        <MaterializeCSS />
        <ReactToolbox />
        <SemanticUI />
        <Vue />
      </Main>
      <Footer>Footer</Footer>
    </div>;
  }
};