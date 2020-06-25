import React from 'react';
import styled, { css } from 'styled-components';

const Span = styled.span`
  display: block;
  padding: 0 5px;
  min-width: 160px;
  max-width: 480px;
  overflow-wrap: break-word;
  ${({ num }) =>
    num &&
    css`
      width: 40px;
      min-width: 40px;
    `};
`;

export default Span;
