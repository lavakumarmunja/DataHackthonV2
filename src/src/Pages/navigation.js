import React from "react";
import Nav from 'react-bootstrap/Nav';
function Navigation() {
  return (
    <Nav activeKey="/" fill variant="tabs" >
      <Nav.Item>
        <Nav.Link href="/">Projects</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/useCases">UseCases</Nav.Link>
      </Nav.Item>     
    </Nav>

  );
}

export default Navigation;