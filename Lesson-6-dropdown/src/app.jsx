var React = require('react');
var Dropdown = require('./dropdown');

var options = {
  title: 'Choose a dessert', // What should show up in the buttom?
  items: [  // List of items to show in drop down
    'Apple Pie',
    'Pumpkin Pie',
    'Cocounut Cream Pie'
  ]
};

// React, please render this class.
var element = React.createElement(Dropdown, options);

// React, after you render this class, please place it in my body tag.
React.render(element, document.querySelector('.target'));