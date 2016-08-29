import React from 'react';
import { PageHeader } from 'react-bootstrap';

const Another = ({ params }) => (
  <PageHeader>
    Another <small>({ params.id })</small>
  </PageHeader>
);

export default Another;