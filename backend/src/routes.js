const { Router } = require('express');

const validateOngsStore = require('./validators/OngsStore');
const validateIncidentsList = require('./validators/IncidentsList');
const validateIncidentsDelete = require('./validators/IncidentsDelete');
const validateProfileList = require('./validators/ProfileList');

const OngsController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = Router();

routes.post('/sessions', SessionController.store);

routes.post('/ongs', validateOngsStore, OngsController.store);
routes.get('/ongs', OngsController.index);
routes.delete('/ongs/:id', OngsController.delete);

routes.post('/incidents', IncidentController.store);
routes.get('/incidents', validateIncidentsList, IncidentController.index);
routes.get('/incidents/:id', IncidentController.show);
routes.put('/incidents/:id', IncidentController.update);
routes.delete(
  '/incidents/:id',
  validateIncidentsDelete,
  IncidentController.delete
);

routes.get(
  '/profile',
  validateProfileList,

  ProfileController.index
);

module.exports = routes;
