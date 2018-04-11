$(document).ready(function() {
  $(".clickable").click(function() {
    $("#wikipedia-showing").slideToggle();
    $("#wikipedia-hidden").slideToggle();
  });
});
$(document).ready(function() {
  $(".clickable").click(function() {
    $("#mediawiki-showing").fadeUp();
    $("#mediawiki-hidden").fadeUp();
  });
});
