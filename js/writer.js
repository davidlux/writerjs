(function(global, $) {

  var writer = function(input, selector, milliseconds, infinite) {

    if (!selector) throw "Missing selector";

    var text = input.toString().split("") || "Default";
    var speed = milliseconds || 100;
    var infinite = infinite || false;

    var write = function(letter, delayMultiplier) {
      setTimeout(function() {
        $(selector).append(letter);
      }, delayMultiplier * speed);
    };

    var iterate = function() {
      for (var i = 0; i < text.length; i++) {
        write(text[i], i);
      }
    };

    var clear = function() {
      $(selector).html("");
    };

    var infiniteIterate = function() {
      clear();
      iterate();
      setTimeout(infiniteIterate, text.length * speed);
    }

    if (!infinite) {
      iterate();
    } else {
      infiniteIterate();
    }
  };

  global.writer = writer;

}(window, jQuery));
