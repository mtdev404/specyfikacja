/* eslint-disable prefer-destructuring */
import React from 'react';

import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Nav from './modules/Nav/Nav';
import Main from './modules/Main/Main';

import './App.sass';

const handleScrollTo = (e) => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  const name = e.target.name;
  console.log('clicked:', name);
  console.log('target', e.target);
  gsap.to(window, {
    duration: 1.5,
    scrollTo: `.${name}`,
    ease: 'sine.inOut',
  });
};

const App = () => (
  <div className='main--wrapper'>
    <Nav handleScrollTo={handleScrollTo} />
    <Main />
  </div>
);

export default App;
