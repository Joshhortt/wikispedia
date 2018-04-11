
// The web browser loads your page from the top of your HTML document
// to the bottom. So when we put our JavaScript in the <head>,
// rather than at the end of the document, there are no <p> tags yet,
// and so there's nothing for .click() to attach to.
// What we need to do is tell our JavaScript not to run until the document
//  has finished loading. jQuery provides an easy way to do this:
/*
jQuery(document).ready(function() {
  jQuery("h1").click(function() {
    alert("This is a header.");
  });

  jQuery("p").click(function() {
    alert("This is a paragraph.");
  });

  jQuery("img").click(function() {
    alert("This is an image.");
  });
});
*/

// A shortcut that most JavaScript developers use:
// instead of writing jQuery() all of the time,
// we can simply use $(): --dollar sign--

$(document).ready(function() {
  $("h1").click(function() {
    alert("This is a header.");
  });

  $("p").click(function() {
    alert("This is a paragraph.");
  });

  $("img").click(function() {
    alert("This is an image.");
  });


// If something on your page isn't working right,
// you can check in Chrome to make sure that you've attached
// the event listener correctly. Right-click the element
// you want to check, go to Inspect Element, and then,
// in the upper right corner of the box on the bottom,
// click Event Listeners. If you've attached the listener
// correctly, you should see it listed there.
