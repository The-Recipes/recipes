const express = require('express');
const app = express();
const PORT = 4000;
const path = require('path')

app.use(express.static(path.join(__dirname, '../public')))

app.get('/', (req,res) => res.send("Hello World!"))

app.listen(PORT ,() => console.log(`Listening on port ${PORT}`))