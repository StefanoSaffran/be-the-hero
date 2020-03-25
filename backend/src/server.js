const express = require('express');

const cors = require('cors');
const logger = require('./utils/logger');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(3003, () => {
  logger.info('Server running on port 3003');
});
