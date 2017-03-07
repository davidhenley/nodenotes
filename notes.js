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

const logNote = (note) => {
  console.log('--');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
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
  logNote(note);
};

const list = () => {
  let notes = fetchNotes();
  notes.map(note => logNote(note));
};

const get = (title) => {
  let notes = fetchNotes();
  let filteredNotes = notes.filter(note => note.title === title);
  if (filteredNotes.length === 0) {
    console.log('No note found');
    return;
  }
  let note = filteredNotes[0];
  logNote(note);
};

const remove = (title) => {
  let notes = fetchNotes();
  let filteredNotes = notes.filter((note) => note.title !== title);
  if (filteredNotes.length === notes.length) {
    console.log('Note not found');
    return;
  }
  saveNotes(filteredNotes);
  console.log('Note removed!');
  console.log('--');
  console.log(`Title: ${title}`);
};

const removeAll = () => {
  saveNotes([]);
  let notes = fetchNotes();
  if (notes.length === 0) {
    console.log('All notes removed');
    return;
  }
  console.log('Error removing notes');
};

module.exports = {
  add, list, get, remove, removeAll
};
