$(function () {

  if ($(window).width() < 736) {
    var startScroll = 100;

    $('.hamburger').on('click', function () {
      $('.no-show').slideToggle('medium');
    });

    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        var currentScroll = $(this).scrollTop();
        if (currentScroll > startScroll) {
          /*console.log('up');*/
          $('#scroll-only').fadeOut('fast', 'linear');
        } else {
          /*console.log('down');*/
          $('#scroll-only').fadeIn('fast', 'linear');
        }
        startScroll = currentScroll;
      } else {
        $('#scroll-only').fadeOut('fast');
        startScroll = 100;
      }
    });
  }
});
