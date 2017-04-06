// Navbar Shrink on Scroll

function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 300,
            header = document.querySelector("header");
        if (distanceY > shrinkOn) {
            classie.add(header,"smaller");
        } else {
            if (classie.has(header,"smaller")) {
                classie.remove(header,"smaller");
            }
        }
    });
}
window.onload = init();



$('a[href^="#"]').click(function(){

var the_id = $(this).attr("href");

    $('html, body').animate({
        scrollTop:$(the_id).offset().top
    }, 'slow');

return false;});

var span = $('<span>').css('display','inline-block')
.css('word-break','break-all').appendTo('body').css('visibility','hidden');
function initSpan(textarea){
  span.text(textarea.text())
      .width(textarea.width())
      .css('font',textarea.css('font'));
}
$('textarea').on({
    input: function(){
      var text = $(this).val();
      span.text(text);
      $(this).height(text ? span.height() : '1.1em');
    },
    focus: function(){
     initSpan($(this));
    },
    keypress: function(e){
        if(e.which == 13) e.preventDefault();
    }
});






