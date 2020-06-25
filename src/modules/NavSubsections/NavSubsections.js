import React from 'react';
import PropTypes from 'prop-types';

import NavItem from '../../components/NavItem/NavItem';

const NavSubsections = ({ content, handleScrollTo }) => (
  <>
    {content.map((item) => (
      <NavItem
        subsection
        key={item.name}
        name={`${item.name}__article__title`}
        className={item.name}
        onClick={handleScrollTo}
      >
        {item.title}
      </NavItem>
    ))}
  </>
);

NavSubsections.propTypes = {
  content: PropTypes.array,
  handleScrollTo: PropTypes.func,
};

export default NavSubsections;
