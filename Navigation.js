import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Navigation = ({ routes }) => (
  <Navbar fluid>
    <Navbar.Header>
      <Navbar.Brand>
        Training
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        {routes.map((route, id) => (
          <LinkContainer key={id} to={route.to}>
            <NavItem href={route.to}>
              { route.text }
            </NavItem>
          </LinkContainer>
        ))}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;