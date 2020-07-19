import textBalancer from 'text-balancer';
import initiatePage from './scripts/page';
import { intersectTop } from './scripts/utils';
import Rellax from 'rellax';
import $ from "jquery";

// Main page initiation
import { spectate as spectateConfig } from '../package.json';

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

var rellax = new Rellax('#background-photo', {
  center: true,
  speed:-2,
  vertical: false,
  horizontal: true,
  zindex:0
});

var rellax2 = new Rellax('#section-2', {
  center: true,
  vertical: false,
  horizontal: true,
  zindex:1,
  speed:-2,

});

var rellax3 = new Rellax('#section-3', {
  center: true,
  vertical: false,
  horizontal: true,
  zindex:0,
  speed:-3,
});

var rellax3 = new Rellax('#section-4', {
  center: true,
  vertical: false,
  horizontal: true,
  zindex:0,
  speed:-1,
});

var rellax4 = new Rellax('#start', {
  center: true,
  vertical: false,
  horizontal: true,
  zindex:0,
  speed:1,
});
