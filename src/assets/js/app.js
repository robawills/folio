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



$(window).scroll(function(event){

	var yOffset = window.pageYOffset;
	var breakpoint = 150;
	if (yOffset > breakpoint){
	  $(".bg-gray").addClass('active');
	}else{
	  $(".bg-gray").removeClass('active');
	}
  
  });





// Background colours

var darkgrey = "#0e0e0e",
	white = "#ffffff",
	lightgrey = "#F7F6F2",
	white2 = "#ffffff";

$(window).on("scroll touchmove", function() {
		if ($(document).scrollTop() >= $("#darkgrey").position().top) {
				$('.hero').css('background-color', $("#darkgrey").attr("data-color"));
		};

		if ($(document).scrollTop() > $("#white").position().top) {
				$('.hero').css('background', $("#white").attr("data-color"))
		};

		if ($(document).scrollTop() > $("#white2").position().top) {
				$('body').css('background', $("#white2").attr("data-color"))
		};

		if ($(document).scrollTop() > $("#lightgrey").position().top) {
				$('body').css('background', $("#lightgrey").attr("data-color"))
		};

		

});
jackHarnerSig("light")


