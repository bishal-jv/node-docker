const express = require('express');
const app = express()
const port = 3000;

app.get('/', (req,res) => res.send('hello world'));
app.get('/next', (req,res) => res.send('This is the next page'));

app.listen(port, () => {
    console.log('API running on:', port)
})