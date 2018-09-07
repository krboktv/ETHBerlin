const express = require('express');
const bodyParser = require('body-parser');
const handler = require('./handlers/handlers');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use('/', express.static(path.join(__dirname, 'frontend')))

app.get('/newKeyPair/:userID/:publickKey', async (req, res) => handler.createUser(req, res));

app.listen(3000);