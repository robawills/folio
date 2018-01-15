import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();


var prev = 0;
var $window = $(window);
var nav = $('.head');

$window.on('scroll', function(){
  var scrollTop = $window.scrollTop();
  nav.toggleClass('hidden', scrollTop > prev);
  prev = scrollTop;
});


// Background colours

var darkgrey = "#171717",
	white = "#ffffff",
	lightgrey = "#F7F6F2";

$(window).on("scroll touchmove", function() {
		if ($(document).scrollTop() >= $("#darkgrey").position().top) {
				$('.hero').css('background', $("#darkgrey").attr("data-color"));

		};
		if ($(document).scrollTop() > $("#white").position().top) {
				$('.hero').css('background', $("#white").attr("data-color"))
		};
		if ($(document).scrollTop() > $("#lightgrey").position().top) {

				$('.services').css('background', $("#lightgrey").attr("data-color"))
		};

});
jackHarnerSig("light")