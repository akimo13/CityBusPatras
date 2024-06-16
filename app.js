const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const Handlebars = require('./utils/helpers'); // Import handlebars helpers
const mainRoutes = require('./routes/mainRoutes');
const userRoutes = require('./routes/userRoutes');
const contactRoutes = require('./routes/contactRoutes');

const app = express();

// Set up Handlebars as the view engine
app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials')
}));
app.set('view engine', 'hbs');

// Set up the public directory of static assets
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve the uploads directory as a static folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// Create the uploads directory if it doesn't exist
if (!fs.existsSync(path.join(__dirname, 'uploads'))) {
  fs.mkdirSync(path.join(__dirname, 'uploads'));
}

//Use the routes
app.use('/', require('./routes/mainRoutes'));
app.use('/users', require('./routes/userRoutes'));
app.use('/contact', require('./routes/contactRoutes'));

// Configure middleware
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use('/users', userRoutes);
app.use(express.json());

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;