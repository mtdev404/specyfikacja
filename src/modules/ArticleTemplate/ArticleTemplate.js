/* eslint-disable import/extensions */
import React from 'react';
import Paragraph from '../../components/Paragraph/Paragraph';
import Code from '../../components/Code/Code';
import { ARTICLE as articleTemplate } from '../data/article';

const template = articleTemplate;
const ArticleTemplate = () => (
  <div>
    {template.map((item) => {
      if (item.type === 'img') return <img src={item.content} alt='' />;
      if (item.type === 'code') return <Code>{item.content}</Code>;
      return <Paragraph>{item.content}</Paragraph>;
    })}
  </div>
);

export default ArticleTemplate;
