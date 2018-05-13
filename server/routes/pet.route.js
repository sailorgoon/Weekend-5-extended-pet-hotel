const router = require('express').Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('GET /pet');
    pool.query(`SELECT 
    "p"."id",
    "p"."name",
    "p"."breed",
    "p"."color",
    "p"."checked_in",
    "p"."date",
    "o"."name" as "owner_name"
FROM "pets" as "p" JOIN "owners" as "o"
ON "p"."owner_id" = "o"."id"
ORDER BY "o"."name";`)
        .then(result => {
            // console.log(result);
            res.send(result.rows);
        })
        .catch(error => {
            console.log('ERROR SELECTING PETS - GET /pet -', error);
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    console.log('POST /pet', req.body);
    const pet = req.body;
    const queryText = `INSERT INTO "pets" ("name", "breed", "color", "checked_in", "owner_id") 
                       VALUES ($1, $2, $3, $4, $5)`;
    pool.query(queryText, [pet.name, pet.breed, pet.color, pet.checked_in, pet.owner_id])
        .then(result => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log('error making pet insert query', error);
            res.sendStatus(500);
        });
});

router.delete('/', (req, res) => {
    const pet = req.query;
    console.log(req.query);
    pool.query(`DELETE FROM "pets"
                 WHERE "id" = $1`, [pet.id])
        .then(() => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('error from delete', error);
            res.sendStatus(500);
        });
});

router.put('/', (req, res) => {
    const pet = req.body;
    console.log(pet);
    pool.query(`UPDATE "pets"
            SET "checked_in" = $1, "date" = current_date
            WHERE "id" = $2`, [pet.checked_in, pet.id])
        .then(() => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('error from update', error);
            res.sendStatus(500);
        })
});

module.exports = router;