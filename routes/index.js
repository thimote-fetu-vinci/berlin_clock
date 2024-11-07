const express = require('express');
const router = express.Router();
const { simpleMinutes } = require('../functions/step1.js');

router.get('/', (req, res) => {
    res.render('index.hbs', { timestamp: simpleMinutes(new Date().getTime()) });
});

module.exports = router;