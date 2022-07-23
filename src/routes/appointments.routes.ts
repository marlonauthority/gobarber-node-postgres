import { Router } from 'express';
import { uuid } from 'uuidv4';

const appointmentsRouter = Router();

const listAppointments = [];

appointmentsRouter.post('/', (request, response) => {
  const { providerName, date } = request.body;

  const appointment = {
    id: uuid(),
    providerName,
    date,
  };

  listAppointments.push(appointment);

  return response.json(appointment);
});

export default appointmentsRouter;
