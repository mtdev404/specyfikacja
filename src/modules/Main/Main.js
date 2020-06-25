import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import Section from '../Section/Section';

import { content } from '../../data/mainData';

const Wrapper = styled.main`
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
`;

const MainTitle = styled.h1`
  font-weight: 400;
  font-size: 3rem;
  text-transform: uppercase;
  text-align: center;
  ${({ sub }) =>
    sub &&
    css`
      font-size: 2.6rem;
    `};
`;

const MainTitleSection = styled.section`
  padding: 50px 0;
`;

const Main = () => (
  <Wrapper>
    <MainTitleSection>
      <MainTitle>Specyfikacja techniczna</MainTitle>
      <MainTitle sub>formatów reklamowych Digital Contact</MainTitle>
    </MainTitleSection>

    {content.map((item) => (
      <Section
        key={`${item.section}__section`}
        title={item.sectionTitle}
        titleClass={item.section}
        content={item.sectionContent}
      />
    ))}
  </Wrapper>
);

export default Main;
