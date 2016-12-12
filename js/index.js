$(window).on('resize', function() {
  'use strict';
  var element	= document.querySelector('#banner'),
      elHeight = 0,
      elTop = 0,
      dHeight	= 0,
      wHeight	= 0,
      wScrollCurrent = 0,
      wScrollBefore	= 0,
      wScrollDiff	= 0;
      window.addEventListener('scroll', function () {
        // Hide the displayed menu
        $('.navbar-collapse').collapse('hide');
        $('.navbar-toggle').addClass('collapsed').blur();
        if($(window).width() <= 768) {
          elHeight = element.offsetHeight;
          dHeight = document.body.offsetHeight;
          wHeight = window.innerHeight;
          wScrollCurrent = window.pageYOffset;
          wScrollDiff = wScrollBefore - wScrollCurrent;
          elTop = parseInt(window.getComputedStyle(element).getPropertyValue('top')) + wScrollDiff;


          if(wScrollCurrent <= 0) {
              element.style.top = '0px';
          }
            else if(wScrollDiff > 0) {
              element.style.top = (elTop > 0? 0 : elTop) + 'px';
          }
            else if(wScrollDiff < 0) {

              if(wScrollCurrent + wHeight >= dHeight - elHeight) {
                element.style.top = ( ( elTop = wScrollCurrent + wHeight - dHeight ) < 0 ? elTop : 0 ) + 'px';
              }
                else { element.style.top = ( Math.abs( elTop ) > elHeight ? -elHeight : elTop ) + 'px'; }
            }
          wScrollBefore = wScrollCurrent;
        }
          else element.style.top = '0px';
      });
}).resize();


$(function() {$("body")
 .on("input propertychange", ".form-item",function(e) {
  $(this).toggleClass("form-item-filled",!! $(e.target).val());})
 .on("focus", ".form-item",function() {
  $(this).addClass("form-item-focused");})
 .on("blur", ".form-item",function() {
  $(this).removeClass("form-item-focused");});
});


$('body').scrollspy({target: '.navbar-fixed-top'})


$('.navbar-collapse ul li a').click(function() {
  $(".navbar-collapse").collapse('hide');});


$(function() {$('body').on('click', 'a.scrollable', function(event) {
  var $anchor = $(this);
  $('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top},1500,'easeInOutExpo');
  event.preventDefault();
  });
});
