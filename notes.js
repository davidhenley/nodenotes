const fs = require('fs');

const add = (title, body) => {
  let notes;
  try {
    notes = JSON.parse(fs.readFileSync('notes-data.json'));
  } catch (e) {
    notes = [];
  }

  const note = {
    title, body
  };

  let duplicateNotes = notes.filter((note) => note.title === title);
  if (duplicateNotes.length > 0) {
    console.log('Error: Duplicate title');
    return;
  }

  notes.push(note);
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const list = () => {
  console.log('Getting all notes');
};

const get = (title) => {
  console.log('Getting note:', title);
};

const remove = (title) => {
  console.log('Removing note:', title);
};

module.exports = {
  add, list, get, remove
};
