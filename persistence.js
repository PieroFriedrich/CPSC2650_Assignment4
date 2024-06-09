let _notes = [
  { id: "2", text: "CPSC 2650" },
  { id: "1", text: "An awesome web dev Note" },
];

// TODO: implement addNote and removeNote
// For fun: why do we export a function instead of notes directly?
const notes = () => _notes;

const addNote = (note) => {
  _notes.push(note);
};

const editNote = (id, newText) => {
  const noteIndex = _notes.findIndex((note) => note.id === id);
  if (noteIndex !== -1) {
    _notes[noteIndex].text = newText;
  }
};

const removeNote = (id) => {
  _notes = _notes.filter((note) => note.id !== id);
};


export { addNote, editNote, removeNote, notes };