const { Router } = require('express');

const OngsController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = Router();

routes.post('/sessions', SessionController.store);

routes.post('/ongs', OngsController.store);
routes.get('/ongs', OngsController.index);
routes.delete('/ongs/:id', OngsController.delete);

routes.post('/incidents', IncidentController.store);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

module.exports = routes;
