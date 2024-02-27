import cargo from './cargo.js';
import guide from './guide.js';
import home from './home.js';
import nav from './nav.js';

$('body').css('background-color', 'lightblue');

nav();

if (location.pathname === '/') {
  home();
}

if (location.pathname === '/ApplicationArea/Guide') {
  guide();
}

if (location.pathname === '/ApplicationArea/CargoTrackingBranches') {
  cargo();
}
