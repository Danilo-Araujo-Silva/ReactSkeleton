import React from 'react';

import properties from 'configuration/properties';

import Header from 'component/shared/structure/header/Header';
import Main from 'component/shared/structure/main/Main';
import Footer from 'component/shared/structure/footer/Footer';

// import AntDesign from './ui/ant-design/AntDesign';
import MaterialComponentsWeb from './ui/material-components-web/MaterialComponentsWeb';
import MaterialDesignLite from './ui/material-design-lite/MaterialDesignLite';
import MaterialUI from './ui/material-ui/MaterialUI';
import MaterializeCSS from './ui/materialize-css/MaterializeCSS';
// import ReactToolbox from './ui/react-toolbox/ReactToolbox';
import SemanticUI from './ui/semantic-ui/SemanticUI';

export class DashBoard extends React.Component {
  render() {
    return <div>
      <Header>Header</Header>
      <Main>
        <h1>DashBoard - Development</h1>
        {/*
          properties.variables.dependencies.ui['ant-design'].enabled
          && <AntDesign /> : false
        */}
        {
          properties.variables.dependencies.ui['material-components-web'].enabled
          && <MaterialComponentsWeb />
        }
        {
          properties.variables.dependencies.ui['material-design-lite'].enabled
          && <MaterialDesignLite />
        }
        {
          properties.variables.dependencies.ui['material-ui'].enabled
          && <MaterialUI />
        }
        {
          properties.variables.dependencies.ui['materialize-css'].enabled
          && <MaterializeCSS />
        }
        {/*
          properties.variables.dependencies.ui['react-toolbox'].enabled
          && <ReactToolbox /> : false
        */}
        {
          properties.variables.dependencies.ui['semantic-ui'].enabled
          && <SemanticUI />
        }
      </Main>
      <Footer>Footer</Footer>
    </div>;
  }
};