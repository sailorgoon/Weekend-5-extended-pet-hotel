const router = require('express').Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('GET /owner');
    pool.query(`SELECT "owners"."id", "owners"."name", SUM(CASE WHEN "pets"."owner_id" IS NULL THEN 0 ELSE 1 END)
    FROM "owners"
    LEFT OUTER JOIN "pets"
    ON "owners"."id" = "pets"."owner_id"
    GROUP BY "owners"."id", "owners"."name"
    ORDER BY "owners"."name";`)
    
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


router.delete('/', (req, res) => {
    const owner = req.query;
    console.log(req.query);
    pool.query(`DELETE FROM "owners"
                 WHERE "id" = $1`, [owner.id])
        .then(() => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('error from delete', error);
            res.sendStatus(500);
        });
});

module.exports = router;