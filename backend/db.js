//This file is for only to Setup the database
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'Your_Hostid',
    user: 'User',
    password: 'Your_password',
    database: 'Your_db',
});

connection.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to MySQL database.');
});

module.exports = connection;
