/* global $this: true */
/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "animationsSlider" }] */

$(function () {
  // slidersCustom();
})

/* slider homepage */
function sliderHomepage () {
  // $('#slider').owlCarousel({
}

/* sliders */
function sliders () {
  if ($('.owl-carousel').length) {
    $('.testimonials').owlCarousel({
      items: 3,
      itemsDesktop: [1199, 3],
      itemsDesktopSmall: [980, 3],
      itemsTablet: [768, 2],
      itemsMobile: [479, 1]
    });
    // $('.customers').owlCarousel({
    // $('.project').owlCarousel({
    // $('.homepage').owlCarousel({
  }
}

/* sliders */
function slidersCustom() {
  if ($('.owl-carousel').length) {
    // Produtos
    $(".testimonials").data('owlCarousel').reinit({
      items: 3,
      itemsDesktop: [1199, 3],
      itemsDesktopSmall: [980, 3],
      itemsTablet: [768, 2],
      itemsMobile: [479, 1]
    });
    // Sobre
    // $(".customers").data('owlCarousel').reinit({ items: 1 });
  }
}

/* contact */
function contactForm() {
  var form = $('.contact-form');

  // FIXME Dev
  // $('#name').val('Denis');
  // $('#email').val('john@smith.com');
  // $('#phone').val('(48) 99176-0460');
  // $('#subject').val('Elogio');
  // $('#message').val('Que bonito este site!');

  // Does not use ajax for form submission
  form.submit(function() {
    $this = $(this);
    $.post($(this).attr('action'), $this.serialize());
  })
}
