const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');

const app = express();

//putting the data into json format
app.use(express.json());

//getting the port from .env file
const PORT = process.env.PORT;

//using cors
app.use(cors());

//importing router
const todoItemRoute = require('./routes/todoItems');

//connecting to the mongodb database
mongoose.connect(process.env.DB_CONNECT)
.then(()=> console.log("Database Connected"))
.catch(err => console.log(err))

app.use('/', todoItemRoute);

//Adding a port and connecting to database
app.listen(PORT, ()=> console.log("Server Connected"))