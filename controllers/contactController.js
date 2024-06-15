// Handles the GET request to render the contact form
exports.getForm = (req, res) => {
    res.render('contact-form');
  };
  
  // Handles the POST request to submit the contact form
  exports.postForm = (req, res) => {
    // Handle form submission logic
    res.redirect('/contact/form');
  };
  