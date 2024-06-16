// Helper functions for Handlebars templating engine
const Handlebars = require('handlebars');

// eq helper function to compare two values
// Register 'eq' helper
Handlebars.registerHelper('eq', function (a, b) {
    return a === b;
});

module.exports = Handlebars;

// even helper function to check if a number is even
// Register 'even' helper
Handlebars.registerHelper('even', function (index) {
    return index % 2 === 0;
});

// Register 'inc' helper to increment index
Handlebars.registerHelper('inc', function (value) {
    return parseInt(value) + 1;
});

// Register 'isImage' helper to check if a file is an image
Handlebars.registerHelper('isImage', function(filename) {
    const extension = filename.split('.').pop().toLowerCase();
    return ['jpg', 'jpeg', 'png', 'gif'].includes(extension);
});