console.log('Starting app.js');

// const fs = require('fs');
// const os = require('os');
const notes = require('./notes');

console.log('Result:', notes.add(19, 23));

/*
let user = os.userInfo();

fs.appendFile('greetings.txt', `Hello ${user.username}!`, (err) => {
  if (err) {
    console.log('Unable to write to file.');
  }
});
*/
