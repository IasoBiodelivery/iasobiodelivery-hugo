/* global $this: true */
/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "animationsSlider" }] */

$(function () {
  slidersCustom();
})

/* sliders */
function slidersCustom() {
  if ($('.owl-carousel').length) {
    // Produtos
    $(".testimonials").data('owlCarousel').reinit({
      items: 3
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
