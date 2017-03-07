// console.log('Starting notes.js');

const add = (title, body) => {
  console.log('Adding note', title, body);
};

const list = () => {
  console.log('Getting all notes');
};

const get = (title) => {
  console.log('Reading note', title);
};

const remove = (title) => {
  console.log('Removing note', title);
};

module.exports = {
  add,
  list,
  get,
  remove
};
