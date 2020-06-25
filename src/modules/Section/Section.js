import React from 'react';
import PropTypes from 'prop-types';

import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Article from '../Article/Article';

const Section = ({ content, title, titleClass }) => (
  <section className={`${titleClass}__section`}>
    <SectionTitle className={`${titleClass}__section__title`}>
      {title}
    </SectionTitle>
    {content.map((item) => (
      <Article
        key={`${item.subSection}__article`}
        title={item.subSectionTitle}
        titleClass={item.subSection}
        content={item.subSectionContent}
      />
    ))}
  </section>
);

Section.propTypes = {
  content: PropTypes.array,
  title: PropTypes.string,
  titleClass: PropTypes.string,
};

export default Section;
