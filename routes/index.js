import express from 'express';
import SimpleMinutes from '../functions/simpleMinutes.js';
import FiveMinutes from '../functions/fiveMinutes.js';
import SimpleHours from '../functions/simpleHours.js';
import FiveHours from '../functions/fiveHours.js';
import LampSeconds from '../functions/lampSeconds.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.hbs');
});

router.get('/api/clock', (req, res) => {
    const timestamp = new Date().getTime();

    res.json({ lampSeconds: LampSeconds(timestamp), fiveHours: FiveHours(timestamp), simpleHours: SimpleHours(timestamp + 3600000), fiveMinutes: FiveMinutes(timestamp), simpleMinutes: SimpleMinutes(timestamp) });
});

export default router;