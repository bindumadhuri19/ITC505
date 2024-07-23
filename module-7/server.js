const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/add-task', (req, res) => {
    const { name, task } = req.body;
    if (name && task) {
        // Save task and name in cookies
        res.cookie('name', name, { maxAge: 900000, httpOnly: true });
        res.cookie('task', task, { maxAge: 900000, httpOnly: true });
        res.status(200).send('Task added');
    } else {
        res.status(400).send('Bad Request');
    }
});

app.get('/home', (req, res) => {
    res.send('Welcome to Home Page');
});

app.get('*', (req, res) => {
    res.status(404).send('Page Not Found');
});

const port = 8080;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
