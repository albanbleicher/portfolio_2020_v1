$(document).ready(function(e) {
  var cursor = $("#mouse");

var posX = 0,
    posY = 0;

var mouseX = 0,
    mouseY = 0;

TweenMax.to({}, 0.0015, {
  repeat: -1,
  onRepeat: function() {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;

    TweenMax.set(cursor, {
        css: {
        left: posX-7.5,
        top: posY-7.5
        }
    });
  }
});

$(document).on("mousemove", function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});
// yellow circle
$(".rightArrow, .leftArrow, a").on("mouseenter", function() {
    cursor.addClass("hoverCursor");
    // follower.addClass("active");
});
$(".rightArrow, .leftArrow, a").on("mouseleave", function() {
    cursor.removeClass("hoverCursor");
    // follower.removeClass("active");
});
})
