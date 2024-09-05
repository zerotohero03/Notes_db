// backend/index.js
const express = require('express');
const cors = require('cors');
const notesRoutes = require('./routes/notes');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use('/api', notesRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
