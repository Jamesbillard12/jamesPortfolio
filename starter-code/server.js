'use strict';

const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000;

const constring = process.env.PORT;

app.use(express.static(__dirname + '/public'))
function proxyGitHub(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}

// REVIEW: This is a new route that will utilize our middle man proxy.
app.get('/github/*', proxyGitHub);


app.get('/*', function(req, res) {
  res.sendFile(__dirname + '/index.html')
});

app.listen(PORT, function() {
  console.log(PORT);
});
