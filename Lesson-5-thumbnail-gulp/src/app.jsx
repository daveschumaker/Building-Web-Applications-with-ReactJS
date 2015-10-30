var React = require('react');
var ThumbnailList = require('./thumbnail-list');

var options = {
  thumbnailData: [{
    title: 'Show Courses',
    number: 12,
    header: 'Learn React',
    description: 'React is a fantastic new library for making fast, dynamic pages. Oh, shit! And now, we\'re successfully nesting one component inside of another component. This stuff is just downright crazy, man. CRAZY! Seriously. IT IS OFF THE CHAIN.',
    imageUrl: 'http://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg',
  },
  {
    title: 'Show Courses',
    number: 125,
    header: 'Learn Gulp',
    description: 'Gulp is a fun tool that can help automate the build process when you are developing a new website and speed up your development workflow. It is a great thing to know and this will add to our list of buttons. Oh, yes.',
    imageUrl: 'http://forevertwentysomethings.com/wp-content/uploads/2015/10/taco-dog.jpg',
  }]
};

// React, please render this class.
var element = React.createElement(ThumbnailList, options);

// React, after you render this class, please place it in my body tag.
React.render(element, document.querySelector('.target'));