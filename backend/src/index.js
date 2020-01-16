const express = require('express');
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://talles:omnistack@cluster0-ieqsy.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);
