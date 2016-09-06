(function loadMenu() {

  document.addEventListener("DOMContentLoaded", function(event) {
    var desktopScreen = screen.width > 650;
    var mobileScreen = !desktopScreen;

    if(mobileScreen) {
      return;
    }

    $('#menu-becode').click(function() {
      $('html, body').animate({
        scrollTop: $('#becode').offset().top
      }, "slow");
    });
    $('#menu-team').click(function() {
      $('html, body').animate({
        scrollTop: $('#team').offset().top
      }, "slow");
    });
    $('#menu-projects').click(function() {
      $('html, body').animate({
        scrollTop: $('#projects').offset().top
      }, "slow");
    });
    $('#menu-contact').click(function() {
      $('html, body').animate({
        scrollTop: $('#contact').offset().top
      }, "slow");
    });
    resize();
    window.onresize = resize;
  });
})();

function viewport() {
    var e = window,
        a = 'inner';
    if (!('innerWidth' in window)) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return {
        width: e[a + 'Width'],
        height: e[a + 'Height']
    }
}

var resize = function() {
    var sections = ['becode', 'team', 'projects', 'contact', 'opacity'];
    var theViewport = viewport();

    jQuery.each(sections, function(index, section) {
        var $section = $('#' + section);
        $section.css('height', '');

        $section.height(theViewport.height > $section.height() ? theViewport.height: '');
    });
};

