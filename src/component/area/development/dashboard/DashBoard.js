import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';

import Header from 'component/shared/structure/header/Header';
import Main from 'component/shared/structure/main/Main';
import Footer from 'component/shared/structure/footer/Footer';

const style = {
  margin: 12,
};

export class DashBoard extends React.Component {
  render() {
    return <div>
      <Header>Header</Header>
      <Main>
        <h1>DashBoard - Development</h1>
        <RaisedButton label="Default" style={style} />
        <RaisedButton label="Primary" primary={true} style={style} />
        <RaisedButton label="Secondary" secondary={true} style={style} />
        <RaisedButton label="Disabled" disabled={true} style={style} />
        <br />
        <br />
        <RaisedButton label="Full width" fullWidth={true} />
        <hr />
        <h1 className="mdc-typography--display1">Hello, World!</h1>
        <button type="button" className="mdc-button mdc-button--raised mdc-button--primary">
          Press Me
        </button>
        <hr />
        <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
          Button
        </button>
        <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
          <i className="material-icons">add</i>
        </button>
        <hr />
        <hr />
        <a className="waves-effect waves-light btn"><i className="material-icons left">cloud</i>button</a>
      </Main>
      <Footer>Footer</Footer>
    </div>;
  }
};