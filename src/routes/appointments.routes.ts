import { Router } from 'express';
import { startOfHour, parseISO } from 'date-fns'; // parseiso converte string no obj New Date do js

import AppointmentsRepository from '../repositories/AppointmentsRepository';

const appointmentsRouter = Router();

const appointmentsRepository = new AppointmentsRepository();

appointmentsRouter.post('/', (request, response) => {
  const { providerName, date } = request.body;

  const parsedDate = startOfHour(parseISO(date));

  const findAppointmentInSameDate =
    appointmentsRepository.findByDate(parsedDate);

  if (findAppointmentInSameDate)
    return response
      .status(400)
      .json({ message: 'Já existe um agendamento marcado nesta data.' });

  const appointment = appointmentsRepository.create(providerName, parsedDate);

  return response.json(appointment);
});

export default appointmentsRouter;
