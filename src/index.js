const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://localhost/mevn-db')
    .then(db => console.log('BD conectada'))
    .catch(err => console.log('Error al conectar BD'))

// Settings
app.set('port', process.env.PORT || 8000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/tasks', require('./routes/tasks'));

// Static files
app.use(express.static(__dirname + '/public'));

// Server is listening
app.listen(app.get('port'), () => {
    console.log(`Servidor iniciado en el puerto ${app.get('port')}`);
})