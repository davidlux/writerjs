# writerjs

Hey there, this is a little framework I made to practice my JS coding. It can be used to get animated typing on your website. Watch this example: http://davidlux.de/writerjs/

I hope you like it! :-) Feel free to make Pull requests or fork the whole damn thing.

<br>
<br>
<strong>HOW TO USE IT:</strong>

<strong>Step 1:</strong> Put this into your html (The first is jQuery and the second one is writer.js that you find in this repo in the js folder):
```html
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.3/jquery.js"></script>
<script type="text/javascript" src="js/writer.js"></script></pre>
```

<strong>Step 2:</strong> Put this into you html, where you want your text to be written:
```html
<span id="writer-output"></span><span class='cursor'>|</span>
```

<strong>Step 3:</strong> Put the content of css/cursor.css into your css

<strong>Step 4:</strong> Use <strong>writer(text, selector, speed, infinte)</strong> to get your writing animation going

- <strong>text:</strong> Put in the text you want to be written. Either as a "String" or as an ["Array of Strings"].
- <strong>selector:</strong> Put in the jQuery Selector of the element you want the text be written into. E.g. "#writer-output".
- <strong>speed:</strong> this one is optional, it's the speed you want the text to be written. It's 150 by default.
- <strong>infinte:</strong> this one is optional, put in <strong>true</strong> to loop the animation infinitely.
