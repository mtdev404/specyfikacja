import React from 'react';
import styled, { css } from 'styled-components';

const NavItem = styled.button`
  font-family: inherit;
  font-size: 1.4rem;
  font-weight: 200;
  text-transform: uppercase;
  text-align: left;
  padding: 2px 0 2px 5px;
  background-color: #fff;
  border: none;
  outline: none;
  color: #222;
  &:hover {
    color: blue;
  }
  ${({ subsection }) =>
    subsection &&
    css`
      text-transform: lowercase;
      padding: 2px 0 2px 20px;
    `};
`;

export default NavItem;
