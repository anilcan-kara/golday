console.log(`window`, window);
console.log(`window.jQuery`, window.jQuery);
console.log(`window.$`, window.$);
console.log(`document`, document);

$(document).ready(function () {
  $('body').css('background-color', 'lightblue');
  console.log('jQuery is loaded and the main function has run.');
});