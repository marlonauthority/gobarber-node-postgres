import { Router } from 'express';
import { uuid } from 'uuidv4';
import { startOfHour, parseISO, isEqual } from 'date-fns'; // parseiso converte string no obj New Date do js

const appointmentsRouter = Router();

interface Appointment {
  id: string;
  providerName: string;
  date: Date;
}

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

  const appointment = {
    id: uuid(),
    providerName,
    date: parsedDate,
  };

  listAppointments.push(appointment);

  return response.json(appointment);
});

export default appointmentsRouter;
