const express = require('express');
const router = express.Router();
const { SimpleMinutes } = require('../functions/simpleMinutes.js');
const { FiveMinutes } = require('../functions/fiveMinutes.js');

router.get('/', (req, res) => {
    res.render('index.hbs', { timestamp: { simpleMinutes: SimpleMinutes(new Date().getTime()), fiveMinutes: FiveMinutes(new Date().getTime()) } });
});

module.exports = router;