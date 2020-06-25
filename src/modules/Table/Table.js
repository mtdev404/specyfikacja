import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Span from '../../components/Span/Span';

const TableWrapper = styled.div`
  min-width: 320px;
`;
const Row = styled.p`
  display: flex;
  max-width: 600px;
  min-width: 320px;
  margin: 0 auto;
  &:first-child {
    background-color: #222;
    color: #ffffff;
    text-align: center;
    margin-top: 20px;
    font-weight: 400;
  }
`;

const RowItem = styled(Span)`
  display: block;
  font-size: 1.4rem;
  line-height: 1.4em;
  width: 50%;
  border: 1px solid #222;
  margin-top: -1px;
  margin-right: -1px;
  padding: 2px 10px;
`;

const Table = ({ content }) => (
  <TableWrapper>
    {content.map((item) => {
      const id = Math.floor(Math.random() * 100000);
      return (
        <Row key={`${id}-row`}>
          <RowItem>{item[0]}</RowItem>
          <RowItem>{item[1]}</RowItem>
        </Row>
      );
    })}
  </TableWrapper>
);

Table.propTypes = {
  content: PropTypes.array,
};

export default Table;
