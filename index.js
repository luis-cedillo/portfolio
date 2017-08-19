$(document).ready(function() {
	$(window).resize(function() {

      if ($(this).width() < 800) {
        $('.subTitleTwo').hide();
        $('.homePage').css('background-size', 'cover');
        $('#removeLink').hide();
      } else {
        $('.subTitleTwo').show();
        $('.homePage').css('background-size', 'cover');
        $('#removeLink').show();
      };
  });

});
