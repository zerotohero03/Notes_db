// frontend/src/components/Note.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const Note = ({ note, onDelete }) => {
    return (
        <div className="note">
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <div className="note-footer">
                <span>{new Date(note.created_at).toLocaleString()}</span>
                <FontAwesomeIcon icon={faTrash} className="delete-icon" onClick={() => onDelete(note.id)} />
            </div>

        </div>
    );
};

export default Note;
