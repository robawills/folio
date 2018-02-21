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



// Background

var black = "#070707",
		white = "#fff";

$(window).on("scroll touchmove", function() {
		if ($(document).scrollTop() >= $("#black").position().top) {
				$('.bg').css('background', $("#black").attr("data-color"));

		};
		if ($(document).scrollTop() > $("#white").position().top) {
				$('.bg').css('background', $("#white").attr("data-color"))
		};
});





