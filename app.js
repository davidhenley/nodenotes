const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const { argv } = yargs;
const command = argv._[0];

switch (command) {
  case 'add':
    notes.add(argv.title, argv.body);
    break;
  case 'list':
    notes.list();
    break;
  case 'get':
    notes.get(argv.title);
    break;
  case 'remove':
    notes.remove(argv.title);
    break;
  default:
    console.log('Command not recognized');
}
