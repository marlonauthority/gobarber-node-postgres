import { Router } from 'express';
import { startOfHour, parseISO, isEqual } from 'date-fns'; // parseiso converte string no obj New Date do js

import Appointment from '../models/Appointment';

const appointmentsRouter = Router();

const listAppointments: Appointment[] = [];

appointmentsRouter.post('/', (request, response) => {
  const { providerName, date } = request.body;

  const parsedDate = startOfHour(parseISO(date));

  const findAppointmentInSameDate = listAppointments.find(item =>
    isEqual(parsedDate, item.date),
  );

  if (findAppointmentInSameDate)
    return response
      .status(400)
      .json({ message: 'Já existe um agendamento marcado nesta data.' });

  const appointment = new Appointment(providerName, parsedDate);

  listAppointments.push(appointment);

  return response.json(appointment);
});

export default appointmentsRouter;
