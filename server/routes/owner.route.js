const router = require('express').Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('GET /owner');
    pool.query(`SELECT * FROM "owners"`)
        .then(result => {
            // console.log(result);
            res.send(result.rows);
        })
        .catch(error => {
            console.log('ERROR SELECTING OWNERS - GET /owner -', error);
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    console.log('POST /owner', req.body);
    const owner = req.body;
    const queryText = `INSERT INTO "owners" ("name") 
                       VALUES ($1)`;
    pool.query(queryText, [owner.name])
        .then(result => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log('error making owner insert query', error);
            res.sendStatus(500);
        });
});

module.exports = router;