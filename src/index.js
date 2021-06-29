const express = require('express');
const path = require('path');
const exphbs = require('');
// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views',path.join(__dirname,'views'));
app.engine('.hbs',)

// Middlewares

// Global Variables

// Routes

// Static files

// Server is listenning
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});