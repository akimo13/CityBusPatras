// Create array to store contact form data
let contactForms = [];

// Save contact form data to the array
const saveContactForm = (form, callback) => {
    contactForms.push(form);
    callback(null);
};

// Export the functions
module.exports = {
    saveContactForm,
};
