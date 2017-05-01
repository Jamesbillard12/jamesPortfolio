'use strict';

const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'))


app.get('/*', function(req, res) {
  res.sendFile(__dirname + '/index.html')
});

app.listen(PORT, function() {
  console.log(PORT);
});
