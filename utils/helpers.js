// Helper functions for Handlebars templating engine
const Handlebars = require('handlebars');

Handlebars.registerHelper('eq', function (a, b) {
    return a === b;
});

module.exports = Handlebars;
