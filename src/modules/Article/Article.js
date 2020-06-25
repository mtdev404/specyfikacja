/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';

import ArticleTitle from '../../components/ArticleTitle/ArticleTitle';
import Paragraph from '../../components/Paragraph/Paragraph';
import Img from '../../components/Img/Img';
import Code from '../Code/Code';
import Table from '../Table/Table';
import List from '../List/List';

import videoMailing from '../../assets/video_mailing.png';

const Article = ({ content, title, titleClass }) => (
  <>
    <ArticleTitle className={`${titleClass}__article__title`}>
      {title}
    </ArticleTitle>
    <article className={`${titleClass}__article`}>
      {content.map((item) => {
        const id = Math.floor(Math.random() * 100000);
        if (item.type === 'image')
          return <Img src={videoMailing} alt={item.name} key={item.name} />;
        if (item.type === 'list')
          return <List content={item.content} key={`${id}-list`} />;
        if (item.type === 'code')
          return <Code content={item.content} key={`${id}-code`} />;
        if (item.type === 'table')
          return <Table content={item.content} key={`${id}-table`} />;
        return <Paragraph key={`${id}-p`}>{item.content}</Paragraph>;
      })}
    </article>
  </>
);

Article.propTypes = {
  content: PropTypes.array,
  title: PropTypes.string,
  titleClass: PropTypes.string,
};

export default Article;
