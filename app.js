console.log('Starting app.js');

// const fs = require('fs');
// const os = require('os');
const _ = require('lodash');
const notes = require('./notes');

// console.log(_.isString(true)); // false
// console.log(_.isString('David')); // true

let filteredArray = _.uniq(['David', 1, 'David', 1, 2, 3, 4]);
console.log(filteredArray);

/*
// File System and OS Node modules
let user = os.userInfo();

fs.appendFile('greetings.txt', `Hello ${user.username}!`, (err) => {
  if (err) {
    console.log('Unable to write to file.');
  }
});
*/
