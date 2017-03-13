import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

class ReactFlexBoxGrid extends React.Component {
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={6} md={6}>
            Hello, world!
          </Col>
          <Col xs={6} md={6}>
            Hello, world!
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default ReactFlexBoxGrid;