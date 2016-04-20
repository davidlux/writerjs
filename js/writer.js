(function(global, $) {

  var writer = function(input, selector, milliseconds, infinite) {

    if (!selector) throw "Missing selector";

    var text = input.toString().split("") || "Default";
    var duration = milliseconds || 100;
    var infinite = infinite || false;

    var write = function(letter, delayMultiplier) {
      setTimeout(function() {
        $(selector).append(letter);
      }, delayMultiplier * duration);
    };

    var clear = function() {
      $(selector).html("");
    }

    if (!infinite) {
      for (var i = 0; i < text.length; i++) {
        write(text[i], i);
      }
    } else {

      for (var i = 0; i < text.length; i++) {
        write(text[i], i);
      };

      setInterval(function() {
        clear();
        for (var i = 0; i < text.length; i++) {
          write(text[i], i);
          }
      }, text.length * duration);
    }

  };

  global.writer = writer;

}(window, jQuery));
