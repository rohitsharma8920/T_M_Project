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
const cors = require('cors');

app.use(cors({
  origin: ['https://t-m-project-ui.vercel.app'],  // your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(bodyParser.json());
app.use('/tasks',TaskRouter)


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
})
