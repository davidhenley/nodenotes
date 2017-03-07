const fs = require('fs');

const originalNote = {
  title: 'Some title',
  body: 'Some body'
};

fs.writeFileSync('notes.json', JSON.stringify(originalNote));

const note = JSON.parse(fs.readFileSync('notes.json'));

console.log(note);
