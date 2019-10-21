import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

const NavBar = () => {
  return (
    <Navbar color="light" light expand="md">
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink to="/" className="nav-link" activeClassName="active">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/signup" className="nav-link" activeClassName="active">
            Signup
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/login" className="nav-link" activeClassName="active">
            Login
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
