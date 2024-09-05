// frontend/src/components/Note.js
import React from 'react';

const Note = ({ note, onDelete }) => {
    return (
        <div className="note">
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <small>{new Date(note.created_at).toLocaleString()}</small>
            <button onClick={() => onDelete(note.id)}>Delete</button>
        </div>
    );
};

export default Note;
