var Fetch = require('whatwg-fetch');
var rootUrl = 'https://api.imgur.com/3/';

var apiKey = require('../config').clientID;

module.exports = window.api = {
  get: function(url) {
    return fetch(rootUrl + url, {
      headers: {
        'Authorization': 'Client-ID ' + apiKey
      }
    })
    .then(function(response) {
      return response.json();
    });
  }
};
