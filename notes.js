console.log('Starting notes.js');

module.exports = {
  addNote() {
    console.log('Adding a note.');
    return 'New note';
  },
  add(a, b) {
    return a + b;
  }
};
