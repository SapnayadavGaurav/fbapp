# FBAPP
Introduction
------------

Facebook Page Posts Tracking App which will give the summary of post message, likes. shares, comments.

Installation Procedure
----------------------
# Install Node and in command prompt execute ```npm install```
# Copy properties.json.example to properties.json in client directory
# specify proper facebook app ID and facebook script version
# Run using node
``` node server.js [host] [port]```


DIrectiry Architecture
-----------------------

---- server.js  // node server
  |
  -- package.json // npm package details for current application
  |
  -- README.md    // Description about current application
  |
  -- client  -- index.html // root point for web server
            |
             -- assets/ ---- bootstrap.min.css // Bootstrap theming library used as css framework
                      |                       // ref: http://www.getbootstrap.com
                       ----- jquery.min.js     // Jquery library for dom manipulation
                      |                       // ref: http://www.jquery.org
                       ----- main.js           // cutomlibrary for application
		      |
		       ----- favicon.ico
