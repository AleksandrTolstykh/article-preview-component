$(function () {
  $('[data-toggle="popover"]').popover();
});

$('[data-toggle="popover"]').popover({
    container: 'body',
    html: true,
    trigger: 'click',
    placement: 'top',
    content: function () { return '<p class="card-text media-text">S H A R E</p><img class="media-image" src="images/icon-facebook.svg" alt="facebook-image"> <img class="media-image" src="images/icon-twitter.svg" alt="twitter-image"> <img class="media-image" src="images/icon-pinterest.svg" alt="pinterest-image">'; },
  });

$('.circle').click(function() {
  $(this).toggleClass('circle-selected');
  if (window.innerWidth < 768) {
    if ($('.circle').hasClass('circle-selected')) {
      $('.media').addClass('hidden');
      $('.share-links').removeClass('hidden');
      $('.card-footer').css('background-color', 'hsl(217, 19%, 35%)');
    } else {
      $('.share-links').addClass('hidden');
      $('.media').removeClass('hidden');
      $('.card-footer').css('background-color', '#fff');
    }
  }
});

$(window).resize(function() {
  checkWindow()
});

function checkWindow() {
  if (window.innerWidth < 768) {
    $('[data-toggle="popover"]').popover('hide');
    $('[data-toggle="popover"]').popover('disable');
    if ($('.circle').hasClass('circle-selected')) {
      $('.media').addClass('hidden');
      $('.share-links').removeClass('hidden');
      $('.card-footer').css('background-color', 'hsl(217, 19%, 35%)');
    } else {
      $('.card-footer').css('background-color', '#fff');
    }
  } else {
    $('[data-toggle="popover"]').popover('enable');
    $('.share-links').addClass('hidden');
    $('.media').removeClass('hidden');
    $('.card-footer').css('background-color', '#fff');
    if ($('.circle').hasClass('circle-selected')) {
      $('[data-toggle="popover"]').popover('show');
    }
  }
}

checkWindow();
