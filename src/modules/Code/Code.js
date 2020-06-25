import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import Paragraph from '../../components/Paragraph/Paragraph';
import Span from '../../components/Span/Span';

const Wrapper = styled.div`
  padding: 30px 60px 30px 40px;
  margin: 0 auto;
  position: relative;
`;

const Block = styled.div`
  min-width: 540px;
  border: 0.5px solid #aaa;
  border-radius: 5px;
  padding: 30px 20px;
  background-color: hsla(16, 1%, 98%, 0.54);
  /* overflow: hidden; */
`;

const BlockTitle = styled.div`
  position: absolute;
  border: 1px solid #aaa;
  border-radius: 5px;
  background-color: #222;
  color: #ffffff;
  font-weight: 400;
  top: 20px;
  right: 100px;
  padding: 2px 15px;
  font-size: 1.2rem;
  overflow-wrap: break-word;
`;

const CodeLine = styled(Paragraph)`
  display: flex;
  font-family: 'Fira Code', monospace;
  padding: 0;
  line-height: 1.1em;
  overflow-wrap: break-word;
`;

const Code = ({ content }) => (
  <Wrapper>
    <BlockTitle>Kod</BlockTitle>
    <Block>
      {content.map((item) => {
        const id = Math.floor(Math.random() * 100000);
        return (
          <CodeLine key={`${id}-code`}>
            <Span num>{content.indexOf(item) + 1}.</Span>
            <Span>{item}</Span>
          </CodeLine>
        );
      })}
    </Block>
  </Wrapper>
);

Code.propTypes = {
  content: PropTypes.array,
};
export default Code;
