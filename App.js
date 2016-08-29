import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Navigation from './Navigation';

import routes from './routes';

const App = ({ children }) => (
  <div>
    <Navigation routes={routes} />
    <Grid>
      <Row>
        <Col md={12}>
          {children}
        </Col>
      </Row>
    </Grid>
  </div>
);

export default App;