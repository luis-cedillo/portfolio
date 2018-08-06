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

var i = 0;
var images = [];
var time = 3000;

images[0] = 'https://github.com/luis-cedillo/portfolio/blob/gh-pages/images/me%201.png?raw=true';
images[1] = 'https://github.com/luis-cedillo/portfolio/blob/gh-pages/images/me%202.jpg?raw=true';
images[2] = 'https://github.com/luis-cedillo/portfolio/blob/gh-pages/images/me%203.jpg?raw=true';
images[3] = 'https://github.com/luis-cedillo/portfolio/blob/gh-pages/images/me%204.jpg?raw=true';
images[4] = 'https://github.com/luis-cedillo/portfolio/blob/gh-pages/images/me%205.jpg?raw=true';
images[5] = 'https://github.com/luis-cedillo/portfolio/blob/gh-pages/images/me%206.jpg?raw=true';

function changeImg(){
  document.slide.src = images[i];

  if(i < images.length - 1){
    i++;
  }
  else {
    i = 0;
  }

  setTimeout("changeImg()", time);
}

window.onload = changeImg;
