import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import NavItem from '../../components/NavItem/NavItem';
import NavSubsections from '../NavSubsections/NavSubsections';

import { sections } from '../../data/mainData';

const Container = styled.nav`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: calc(50vw - 688px);
  width: 270px;
  height: 100vh;
  border-right: 1px solid #eee;
  padding: 200px 0 0 0;
  @media (max-width: 1369px) {
    display: none;
  }
`;

const NavSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const Nav = ({ handleScrollTo }) => (
  <Container>
    {sections.map((item) => (
      <NavSection key={item.name}>
        <NavItem
          onClick={handleScrollTo}
          name={`${item.name}__section__title`}
          className={item.name}
        >
          {item.section}
        </NavItem>
        <NavSubsections
          handleScrollTo={handleScrollTo}
          content={item.subsections}
        />
      </NavSection>
    ))}
  </Container>
);

Nav.propTypes = {
  handleScrollTo: PropTypes.func,
};

export default Nav;
