const express = require('express');
const app = express();
require('dotenv').config();
require('./Models/db');
const TaskRouter = require('./Routes/TaskRouter');
const bodyParser = require('body-parser');
const cors = require('cors');   // ✅ only once

// ✅ Middleware
app.use(cors({
  origin: ['https://t-m-project-ui.vercel.app'],  // your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(bodyParser.json());

// ✅ Routes
app.get('/', (req, res) => {
  res.send('hello from the server');
});

app.use('/tasks', TaskRouter);

// ✅ Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
