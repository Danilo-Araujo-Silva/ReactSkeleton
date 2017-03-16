import React from 'react';

import properties from 'model/shared/configuration/properties/properties';

import Header from '../shared/structure/header/header.component';
import Main from '../shared/structure/main/main.component';
import Footer from '../shared/structure/footer/footer.component';

// import AntDesign from './ui/ant-design/ant-design.component';
import MaterialComponentsWeb from './ui/material-components-web/material-components-web.component';
// import MaterialDesignLite from './ui/material-design-lite/material-design-lite.component';
import MaterialUI from './ui/material-ui/material-ui.component';
import MaterializeCSS from './ui/materialize-css/materialize-css.component';
// import ReactToolbox from './ui/react-toolbox/react-toolbox.component'
import SemanticUI from './ui/semantic-ui/semantic-ui.component';
// import ReactFlexboxGrid from './utility/grid/react-flexbox-grid.component';

//import UsersContainer from '../user/UsersContainer';
import ProductsContainer from '../user/containers/ProductsContainer';

export class DashBoardContainer extends React.Component {
  render() {
    return <div>
      <Header></Header>
      <Main>
        <ProductsContainer />
        <h1>DashBoard - Development</h1>
        {/*<ReactFlexboxGrid />*/}
        {/*
          properties.variables.dependencies.ui['ant-design'].enabled
          && <AntDesign />
        */}
        {
          properties.variables.dependencies.ui['material-components-web'].enabled
          && <MaterialComponentsWeb />
        }
        {/*
          properties.variables.dependencies.ui['material-design-lite'].enabled
          && <MaterialDesignLite />
        */}
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
          && <ReactToolbox />
        */}
        {
          properties.variables.dependencies.ui['semantic-ui'].enabled
          && <SemanticUI />
        }
      </Main>
      <Footer></Footer>
    </div>;
  }
};