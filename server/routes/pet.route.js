const router = require('express').Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('GET /pet');
    pool.query(`SELECT * FROM "pets"`)
        .then(result => {
            // console.log(result);
            res.send(result.rows);
        })
        .catch(error => {
            console.log('ERROR SELECTING SHIPS - GET /pet -', error);
            res.sendStatus(500);
        });
});

module.exports = router;