import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { device } from "../../Styles/device";

const Nav = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  text-decoration: none;
  font-size: 3rem;
  background-color: #fcddbc;
  padding: 1em 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  @media;
`;

const ButtonDiv = styled.div`
  display: flex;

  @media ${device.tablet} {
    a {
      padding: 0 1em;
    }
  }
`;

const NavBar = props => {
  const [loggedIn, setLoggedIn] = useState();

  useEffect(() => {
    setLoggedIn(props.token);
  }, [props.token]);

  return (
    <Nav>
      <NavLink to="/" className="nav-link" activeClassName="active">
        <img src="/images/logo-cropped.png" alt-text="Home page" />
      </NavLink>

      <ButtonDiv>
        {loggedIn ? (
          <NavLink to="/logout" className="nav-link" activeClassName="active">
            Logout
          </NavLink>
        ) : (
          <>
            <NavLink to="/signup" className="nav-link" activeClassName="active">
              Signup
            </NavLink>
            <NavLink to="/login" className="nav-link" activeClassName="active">
              Login
            </NavLink>
          </>
        )}
      </ButtonDiv>
    </Nav>
  );
};

export default NavBar;
