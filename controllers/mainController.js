// Import the 'fs' and 'path' modules
const fs = require('fs');
const path = require('path');
// Define the path to the JSON file
const dataFilePath = path.join(__dirname, '../data/users.json');

// Reads data from the JSON file
const readData = () => {
  const data = fs.readFileSync(dataFilePath);
  return JSON.parse(data);
};

// Writes data to the JSON file
const writeData = (data) => {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
};

// Controller functions
// 'getIndex' reads the data from the JSON file and renders the 'index' view
exports.getIndex = (req, res) => {
  const data = readData();
  res.render('index', { title: 'Home', data });
};

// 'getRoutes' reads the data from the JSON file and renders the 'routes' view
exports.getRoutes = (req, res) => {
  const data = readData();
  res.render('routes', { title: 'Routes', routes: data.routes });
};

// purchaseTicket reads the data from the JSON file, finds the user, and adds the ticket to their tickets array
exports.purchaseTicket = (req, res) => {
  const { userId, ticketId } = req.body;
  const data = readData();

  // Find the user and add the ticket to their tickets array
  const user = data.users.find(u => u.id === parseInt(userId));
  if (user) {
    user.tickets.push(ticketId);
    writeData(data);
    res.status(200).json({ message: 'Ticket purchased successfully', user });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};
