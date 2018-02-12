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

function querySelectorArray(query, root) {
	return Array.prototype.slice.call((root || document).querySelectorAll(query));
  }
  
  var elements = querySelectorArray("[data-scroll]"),
	bg = document.getElementById("content"),
	container = document.querySelector(".scroll_container");
  
  elements.forEach(function(color) {
	var group = color.getAttribute("data-scroll"),
	  sections = querySelectorArray("[data-" + group + "]");
  
	container.addEventListener("scroll", function() {
	  var lastSection = false;
	  sections.forEach(function(section) {
		var offset = section.getBoundingClientRect();
		//the magic
		if (
		  offset.top - window.innerHeight / 2 < 0 &&
		  offset.top > -offset.height
		)
		  lastSection = section.getAttribute("data-" + group + "");
	  });
	  bg.className = lastSection || "";
	});
  });

