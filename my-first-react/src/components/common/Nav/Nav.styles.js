import styled from "styled-components";
import { NavLink as RouterNavLink } from "react-router-dom";

export const StyledNav = styled.nav`
  background-color: #333;
  color: white;
  padding: 10px;
`;

export const NavLink = styled(RouterNavLink)`
  color: white;
  margin: 0 10px;
  text-decoration: none;

  &.active {
    font-weight: bold;
    color: yellow;
  }
`;
