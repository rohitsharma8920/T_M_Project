const express = require('express');
const app = express();
require('dotenv').config();
require('./Models/db');
// const PORT = process.env.PORT

const TaskRouter = require('./Routes/TaskRouter');
const bodyParser = require('body-parser');
const cors = require('cors');

app.get('/', (req, res) => {
  res.send('hello from the server');
})
app.use(cors());
app.use(bodyParser.json());
app.use('/tasks',TaskRouter)


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
})