const fs = require('fs');

// Helpers
const fetchNotes = () => {
  let notes;
  try {
    notes = JSON.parse(fs.readFileSync('notes-data.json'));
  } catch (e) {
    notes = [];
  }
  return notes;
};

const saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

// Exports
const add = (title, body) => {
  let notes = fetchNotes();
  const note = {
    title, body
  };

  let duplicateNotes = notes.filter((note) => note.title === title);
  if (duplicateNotes.length > 0) {
    console.log('Error: Duplicate title');
    return;
  }

  notes.push(note);
  saveNotes(notes);
  console.log('Note added!');
  console.log('--');
  console.log(`Title: ${title}`);
  console.log(`Body: ${body}`);
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
