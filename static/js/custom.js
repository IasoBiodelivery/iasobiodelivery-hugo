/* global $this: true */
/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "animationsSlider" }] */

$(function () {
  slidersCustom()
})

/* sliders */
function slidersCustom () {
  if ($('.owl-carousel').length) {
    // Produtos
    $(".testimonials").data('owlCarousel').reinit({
      items: 2
    });
    // Sobre
    $(".customers").data('owlCarousel').reinit({
      items: 1
    });
  }
}
