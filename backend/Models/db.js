const mongoose = require('mongoose');

// const DB_URL = process.env.DB_URL;
const DB_URL = "mongodb+srv://rohit:rohit@firstproject.gkcyapd.mongodb.net/TaskManager?appName=firstProject";

mongoose.connect(DB_URL).then(()=>{
  console.log('MongoDB is connected....');
}).catch((err) =>{
  console.log('mongodb connection err ...' ,err);
})