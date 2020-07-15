import textBalancer from 'text-balancer';
import initiatePage from './scripts/page';
import { intersectTop } from './scripts/utils';
import $ from "jquery";
import ScrollMagic from 'scrollmagic';

import { spectate as spectateConfig } from '../package.json';

// Main page initiation

initiatePage();

// Fade in navbar at scroll trigger

const navbar = document.getElementById('navbar');

const { USE_NEWS_NAV, USE_EYE_NAV, USE_COVER_HED } = spectateConfig;
if (USE_NEWS_NAV || USE_EYE_NAV || USE_COVER_HED) {
  intersectTop({
    node: document.getElementById('headline'),
    onEnter: () => {
      navbar.classList.remove('only-eye-logo');
      navbar.classList.remove('hide-news-navbar');
    },
    onExit: () => {
      navbar.classList.remove('show-nav-links');
      navbar.classList.add('only-eye-logo');
      navbar.classList.add('hide-news-navbar');
    },
  });
}

// Mobile navbar hamburger trigger

export function hamburgerTrigger() {
  navbar.classList.toggle('show-nav-links');
}

// Text balance headline, deck, and image captions

if (window.innerWidth <= 460) {
  textBalancer.balanceText('#headline, .deck, .image-caption-text');
}

var controller = new ScrollMagic.Controller({ vertical: false });

new ScrollMagic.Scene({
  triggerElement: "#trigger",
  duration: 100, // the scene should last for a scroll distance of 100px
  offset: 50 // start this scene after scrolling for 50px
})
  .addTo(controller); // assign the scene to the controller