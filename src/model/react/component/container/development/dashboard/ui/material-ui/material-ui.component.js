import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const MaterialUI = () => {
  return <div>
    <h2>Material UI</h2>
    <div>
      <RaisedButton label="Default" />
      <RaisedButton label="Primary" primary={true} />
      <RaisedButton label="Secondary" secondary={true} />
      <RaisedButton label="Disabled" disabled={true} />
      <RaisedButton label="Full width" fullWidth={true} />
    </div>
    <br/>
  </div>;
};

export default MaterialUI;