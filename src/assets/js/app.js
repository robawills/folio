import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

$(document).foundation();

import bgScroll from './modules/bgScroll';
new bgScroll();



$('[data-curtain-menu-button]').click(function(){
    $('body').toggleClass('curtain-menu-open');
  })