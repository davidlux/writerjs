/*
The MIT License (MIT)
Copyright (c) <2016> <David Lux (Twitter: @itsdavelux)>

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

(function(global, $) {

  var writer = function(input, selector, milliseconds, infinite) {

    if (!selector) throw "Missing selector";

    // Setting variables and preparing text for iteration
    var text = input.toString().split("") || "Default";
    var speed = milliseconds || 100;
    var infinite = infinite || false;

    // The write fn takes each letter and puts them out after a specific
    // time.
    var write = function(letter, delayMultiplier) {
      setTimeout(function() {
        $(selector).append(letter);
      }, delayMultiplier * speed);
    };

    // This fn iterates over the prepared text and passes each letter
    // to the write function.
    var iterate = function() {
      for (var i = 0; i < text.length; i++) {
        write(text[i], i);
      }
    };

    // This fn is needed for infinite writing to clear the html
    // element.
    var clear = function() {
      $(selector).html("");
    };

    // This fn iterates infinitely over the text. I used a looped timeout
    // instead of setInterval because this makes the event queue less messy.
    var infiniteIterate = function() {
      clear();
      iterate();
      setTimeout(infiniteIterate, text.length * speed);
    };

    // Iterate once, or infinitely.
    if (!infinite) {
      iterate();
    } else {
      infiniteIterate();
    };
  };

  // Attach the writer function to the global object to make it available
  // everywhere.
  global.writer = writer;

}(window, jQuery));
