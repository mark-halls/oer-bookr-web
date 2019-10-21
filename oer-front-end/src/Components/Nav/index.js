import React from "react";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";

const NavBar = () => {
  return (
    <Navbar color="light" light expand="md">
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/signup">Signup</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/login">Login</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
