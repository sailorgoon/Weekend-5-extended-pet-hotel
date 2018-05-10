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

router.post('/', (req, res) => {
    console.log('POST /pet', req.body);
    const pet = req.body;
    const queryText = `INSERT INTO "pets" ("owner", "name", "breed", "color") 
                       VALUES ($1, $2, $3, $4)`;
    pool.query(queryText, [pet.owner, pet.name, pet.breed, pet.color])
        .then(result => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log('error making ship insert query', error);
            res.sendStatus(500);
        });
});

module.exports = router;