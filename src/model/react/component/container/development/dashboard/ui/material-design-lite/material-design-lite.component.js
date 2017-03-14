import React from 'react';

const MaterialDesignLite = () => {
  return <div>
    <h2>Material Design Lite</h2>
    <div>
      <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
        Button
      </button>
      <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
        <i className="material-icons">add</i>
      </button>
    </div>
    <br/>
  </div>;
};

export default MaterialDesignLite;