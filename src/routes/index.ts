import { Router } from 'express';
import appointmentsRouter from './appointments.routes';

const routes = Router();

routes.use('/agendamentos', appointmentsRouter);

export default routes;
