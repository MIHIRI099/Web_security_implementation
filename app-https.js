const express = require('express');
const https = require('https');
const fs = require('fs');
const app = express();
const PORT = 3002;

const options = {
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert'),
};

app.get('/', (req, res) => {
    res.send('Hello, this is an HTTPS endpoint!');
});

https.createServer(options, app).listen(PORT, () => {
    console.log(`Server is running on https://localhost:${PORT}`);
});