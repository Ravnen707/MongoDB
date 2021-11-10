const route = require("./route");

const connectDB = require("./db");
connectDB();

console.log('Server-side code running');

const express = require('express');
const app = express();

app.use("/click", route);

app.use(express.static('public'));



app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

const PORT = 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));