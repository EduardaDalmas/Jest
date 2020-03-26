import { Router } from 'express';
import ExampleController from './app/controllers/ExampleController';
import PropertyController from './app/controllers/PropertyController';

const routes = Router();

routes.get('/', (req, res) => res.json('START-API-NODE'));

routes.get('/example/', ExampleController.index);

routes.get('/properties', PropertyController.index);
routes.post('/properties', (req, res) => res.json({ id: 1 }));
routes.delete('/properties', (req, res) => res.json({ id: 1 }));
routes.put('/properties', (req, res) => res.json({ id: 1 }));

export default routes;
