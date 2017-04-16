'use strict';

// TODO: Initialize your project using NPM to create and populate a package.json file

// TODO: Require the Express package that you installed via NPM, and instantiate the app
// Remember to install express, and be sure that it's been added to your package.json as a dependency

var express = require('express')
var app = express()

var PORT = process.env.PORT || 3000;

// TODO: Include all of the static resources as an argument to app.use()

app.use(express.static(__dirname + '/public'))

app.get('*', function(req, res) {
  // TODO: Using the response object, send the index.html file back to the user
  res.sendFile(__dirname + '/index.html')
});



// TODO: (STRETCH) Write a new route that will handle a request and send the new.html file back to the user

app.listen(PORT, function() {
  console.log(PORT);
  // TODO: Log to the console a message that lets you know which port your server has started on
});
