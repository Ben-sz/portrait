const express = require('express');

const app = express();

app.use(express.static('./dist/ben-sz'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/ben-sz/'}),
);

app.listen(process.env.PORT || 8080);