import path from 'path';
import open from 'open';
import express from 'express';
let port = 5000;

let app = express();

app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, (err) => {
   err !== true ? open('http://localhost:' +port) : console.log(err)
});
