// console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const { argv } = yargs;
const command = process.argv[2];
console.log('Yargs:', argv);

switch (command) {
  case 'add':
    notes.addNote(argv.title, argv.body);
    break;
  case 'list':
    console.log('Listing all notes');
    break;
  case 'read':
    console.log('Reading individual note');
    break;
  case 'remove':
    console.log('Removing note');
    break;
  default:
    console.log('Command not recognized');
}
