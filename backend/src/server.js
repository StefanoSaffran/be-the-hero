const express = require('express');

const logger = require('./utils/logger');
const routes = require('./routes');

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3003);
