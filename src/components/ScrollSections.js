// eslint-disable-next-line no-unused-expressions
export default null;

import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

function activateSection(sectionIndex) {
  const section = document.querySelectorAll('.section')[sectionIndex];
  const bgPosition = sectionIndex % 2 === 0 ? '0' : '50%';
  section.style.backgroundPositionX = bgPosition;
  section.classList.add('active');
}

function deactivateSection(sectionIndex) {
  const section = document.querySelectorAll('.section')[sectionIndex];
  section.style.backgroundPositionX = '';
  section.classList.remove('active');
}

function updateActiveSection() {
  const sections = document.querySelectorAll('.section');
  const windowHeight = window.innerHeight;

  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    const sectionTop = section.offsetTop - windowHeight / 2;
    const sectionHeight = section.offsetHeight;
    const sectionIndex = parseInt(section.getAttribute('data-index'));

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      activateSection(sectionIndex);
    }
