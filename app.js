const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const title = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};
const body = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
};

const { argv } = yargs
  .command('list', 'list all notes')
  .command('remove-all', 'remove all notes')
  .command('add', 'add a note', {
    title,
    body
  })
  .command('get', 'get an individual note', {
    title
  })
  .command('remove', 'remove an individual note', {
    title
  })
  .help();
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
  case 'remove-all':
    notes.removeAll();
    break;
  default:
    console.log('Command not recognized');
}
