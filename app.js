const cors = require('cors');
const mongoose = require('mongoose');
const express = require('express');

const app = express();

const msg = () => {console.log('Port is listening')}

const server = app.listen(3000, msg);
const uri = 'mongodb+srv://hectormelgoza:thetrailblaze@cluster0-h4g1e.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})

const connection = mongoose.connection;

connection.once('open', () => {console.log('MongoDB connected')})

const userRouter = require('./routes/users');
app.use(cors());
app.use(express.json())
app.use('/user', userRouter);

