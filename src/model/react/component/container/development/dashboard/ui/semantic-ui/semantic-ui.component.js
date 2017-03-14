import React from 'react';

const SemanticUI = () => {
  return <div>
    <h2>Semantic UI</h2>
    <div>
      <div className="ui labeled button">
        <div className="ui red button">
          <i className="heart icon"></i> Like
        </div>
        <a className="ui basic red left pointing label">
          1,048
        </a>
      </div>
      <div className="ui labeled button">
        <div className="ui basic blue button">
          <i className="fork icon"></i> Forks
        </div>
        <a className="ui basic left pointing blue label">
          1,048
        </a>
      </div>
    </div>
    <br/>
  </div>;
};

export default SemanticUI;