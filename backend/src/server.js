const app = require('./app');
const logger = require('./utils/logger');

app.listen(3003, () => {
  logger.info('Server running on port 3003');
});
