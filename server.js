require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log('Connected to DB');
});

mongoose.connection.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

const express = require('express');
const app = express();

const cors = require('cors')
app.use(cors())

app.use(express.json());

const PetsCtrl = require('./controllers/pets')

const morgan = require('morgan');
app.use(morgan('dev'));



app.use('/pets', PetsCtrl)


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Express is ready on port ${PORT}`);
});
