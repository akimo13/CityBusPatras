const fs = require('fs');
const path = require('path');
const dataFilePath = path.join(__dirname, '../data/users.json');

const readUsers = () => {
  const data = fs.readFileSync(dataFilePath, 'utf8');
  return JSON.parse(data);
};

const writeUsers = (data) => {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
};

// const deleteUserById = (id) => {
//   let users = readUsers();
//   users = users.filter(user => user.id !== id);
//   writeUsers(updatedUsers);
// };

module.exports = {
  readUsers,
  writeUsers
};
