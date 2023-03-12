$(function() {
    $('ul').hide();
  });

  setInterval(function() {
      $('ul').show().addClass("animated fadeIn");
}, 1100);