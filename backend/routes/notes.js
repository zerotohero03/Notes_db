// backend/routes/notes.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all notes
router.get('/notes', (req, res) => {
    db.query('SELECT * FROM notes', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// Add a new note
router.post('/notes', (req, res) => {
    const { title, content } = req.body;
    db.query('INSERT INTO notes (title, content) VALUES (?, ?)', [title, content], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ id: result.insertId, title, content });
    });
});

// Delete a note
router.delete('/notes/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM notes WHERE id = ?', [id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Note deleted successfully' });
    });
});

module.exports = router;
