// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Note from './components/Note';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({ title: '', content: '' });

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const response = await axios.get('http://localhost:5000/api/notes');
    setNotes(response.data);
  };

  const addNote = async () => {
    const response = await axios.post('http://localhost:5000/api/notes', newNote);
    setNotes([...notes, response.data]);
    setNewNote({ title: '', content: '' });
  };

  const deleteNote = async (id) => {
    await axios.delete(`http://localhost:5000/api/notes/${id}`);
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="App">
      <h1>--Notes</h1>
      <div className="note-input">
        <input
          type="text"
          placeholder="Title"
          value={newNote.title}
          onChange={e => setNewNote({ ...newNote, title: e.target.value })}
        />
        <textarea
          placeholder="Content"
          value={newNote.content}
          onChange={e => setNewNote({ ...newNote, content: e.target.value })}
        />
        <button onClick={addNote}>Add Note</button>
      </div>
      <div className="notes-list">
        {notes.map(note => (
          <Note key={note.id} note={note} onDelete={deleteNote} />
        ))}
      </div>
    </div>
  );
};

export default App;
