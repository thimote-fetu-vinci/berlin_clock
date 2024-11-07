const express = require('express');
const router = express.Router();
const { SimpleMinutes } = require('../functions/simpleMinutes');

router.get('/', (req, res) => {
    res.render('index.hbs', { timestamp: SimpleMinutes(new Date().getTime()) });
});

module.exports = router;