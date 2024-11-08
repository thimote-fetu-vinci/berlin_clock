const express = require('express');
const router = express.Router();
const SimpleMinutes = require('../functions/simpleMinutes.js');
const FiveMinutes = require('../functions/fiveMinutes.js');
const SimpleHours = require('../functions/simpleHours.js');
const FiveHours = require('../functions/fiveHours.js');
const LampSeconds = require('../functions/lampSeconds.js');

router.get('/', (req, res) => {
    const timestamp = new Date().getTime();

    res.render('index.hbs', { lampSeconds: LampSeconds(timestamp), fiveHours: FiveHours(timestamp), simpleHours: SimpleHours(timestamp), fiveMinutes: FiveMinutes(timestamp), simpleMinutes: SimpleMinutes(timestamp) })
});

module.exports = router;