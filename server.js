const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);
mongoose.Connection.on('connected'), ()=>{
    console.log('Connected to DB');
}

const express = require('express');
const app = express();
app.use(express.json)

const morgan = require('morgan');
app.use(morgan('dev'));

app.listen(3000, ()=>{
    console.log('Express is ready'); 
})