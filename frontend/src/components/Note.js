
import React from 'react';
//Accessing Fonts form Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Note = ({ note, onDelete }) => {
    return (
        <div className="note">
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <div className="note-footer">
                <small>{new Date(note.created_at).toLocaleString()}</small>
                <button id='delete-button'>  <FontAwesomeIcon icon={faTrash} className="delete-icon" onClick={() => onDelete(note.id)} Delete /></button>
            </div>
        </div>
    );
};

export default Note;
