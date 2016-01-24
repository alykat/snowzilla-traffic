# snowzilla-traffic
Screen-capping Google Maps during the January 2016 blizzard to see how bad traffic tracks with the storm

The morning of the January 2016 blizzard, my husband showed me Google Maps on his phone, with North Carolina's highways lit up with bad traffic: "I guess we know where the storm is!"

When we got home, I wrote a quick, crude [PhantomJS](http://phantomjs.org) script to take regular screenshots of Google Maps for the rest of the day. Then I selected the screenshots I wanted to use and turned them into a GIF using [ImageMagick](http://www.imagemagick.org/script/convert.php).

This was a crude, pulled-together-in-10-min-or-so project, so nothing is done in a clean or optimized way. I'm saving it here on GitHub mostly for my own future reference.

----------

## Screencapture

The [PhantomJS](http://phantomjs.org) script (TK TK TK)

----------

## Composite

I used [ImageMagick](http://www.imagemagick.org/script/convert.php) to turn my frames into a GIF:

```
convert -background white -alpha remove -layers optimize-plus -delay 15x60 -resize 800 *.png -loop 0 filmstrip.gif
```

Then I brought the GIF into PhotoShop to crop out the Google Maps controls. I probably could have also done this with ImageMagick, but this was the speediest way I knew off the top of my head to it.
