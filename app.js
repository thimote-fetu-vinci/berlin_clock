const express = require('express');
const hbs = require('hbs');
const path = require('path');
const logger = require('morgan');
const session = require('express-session');

/* eq checks if two values are equal */
hbs.registerHelper('eq', function (a, b, opts) {
    return a == b;
});

const indexRouter = require("./routes/index.js");

const app = express();
const port = 3000;

// Setup views folder and handlebar engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev')); // Log each request
app.use(express.urlencoded({ extended: false })); // Decode form values
app.use(express.static(path.join(__dirname, 'public'))); // Get static files from public folder

app.use(session({ secret: "Your secret key", resave: false, saveUninitialized: false }));
app.use(function (req, res, next) { res.locals.session = req.session; next(); });

app.use("/", indexRouter);

// Create error on page not found
app.use(function (req, res, next) {
    res.status(404).sendFile(__dirname + '/views/404.html');
});

// Show error hbs page
app.use((error, req, res) => {
    res.status(error.status || 500);
    res.render('error', { error });
});

// Launch server
app.listen(port, () => console.log('App listening on port ' + port));
