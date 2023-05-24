

const swiper = new Swiper('.slider', {
  spaceBetween: 50,
	loop: true,
	autoheight: true,
  navigation: {
    nextEl: '.looking__arrow.swiper-button-next',
    prevEl: '.looking__arrow.swiper-button-prev',
  },
});