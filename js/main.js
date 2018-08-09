// Hamburger Menu and Owl Slider
$(document).ready(function() {
  $('.drawer').drawer();

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        675:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:false,
            loop:false
        }
      }
    })
});

//Disabled Button
$(function(){
  $('.input').keyup(function() {

    var empty = false;
    $('.input').each(function(){
      if ($(this).val() == '') {
        empty = true;
      }
    });

    if (empty) {
      $('#submit').attr('disabled', 'disabled').hasClass('.button--disabled').removeClass('button--primary');
    } else {
      $('#submit').removeAttr('disabled').addClass('button--primary').removeClass('button--disabled');
    }
  });
})

//POPOVER
var $popoverTrigger = $('.popover__trigger'),
    $popover = $('.popover'),
    $popoverContainer = $('.popover__container'),
    popoverActive = 'popover--active';

$popoverTrigger.on('click', function(e) {
  e.preventDefault();

  console.log('hey');
  // $(this).toggleClass(popoverActive);
  $(this).parent($popoverContainer).find($popover).toggleClass(popoverActive);
});
