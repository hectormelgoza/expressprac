const express = require('express');
const app = express();

const msg = () => {
console.log('Port is listening')
}

const server = app.listen(3000, msg);

app.get('/', (req, res) => {
    res.send('hyyy');
})