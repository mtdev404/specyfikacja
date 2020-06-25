import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Ul = styled.ul`
  min-width: 540px;
  padding: 0 40px;
`;

const Li = styled.li`
  font-size: 1.4rem;
`;

const List = ({ content }) => (
  <Ul>
    {content.map((item) => {
      const id = Math.floor(Math.random() * 100000);
      return <Li key={`${id}-list-item`}>{item}</Li>;
    })}
  </Ul>
);

List.propTypes = {
  content: PropTypes.array,
};

export default List;
