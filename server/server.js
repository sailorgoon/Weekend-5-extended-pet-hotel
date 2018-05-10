const pg = require('pg');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

const petRouter = require('./routes/pet.route');
const ownerRouter = require('./routes/owner.route');

app.use(express.static('server/public'));
app.use(bodyParser.json());
app.use('/pet', petRouter);
app.use('/owner', ownerRouter);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});