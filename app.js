import express from 'express';
import hbs from 'hbs';
import path from 'path';
import logger from 'morgan';
import session from 'express-session';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

/* eq checks if two values are equal */
hbs.registerHelper('eq', function (a, b, opts) {
    return a == b;
});

import indexRouter from './routes/index.js';

const app = express();
const port = 3001;

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// Show error hbs page
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.render('error', { error });
});

// Launch server
app.listen(port, () => console.log('App listening on port ' + port));
