// Create web server
const express = require('express');
const app = express();

// Add comments
const comments = [
    { name: 'John', comment: 'Hello' },
    { name: 'Mary', comment: 'Hi' }
];

// Path: /
app.get('/', (req, res) => {
    res.send('Welcome to the comments page');
});

// Path: /comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Path: /comments/:name
app.get('/comments/:name', (req, res) => {
    const name = req.params.name;
    const comment = comments.find(comment => comment.name === name);
    res.json(comment);
});

// Start web server
app.listen(3000, () => {
    console.log('Web server is running on port 3000');
});