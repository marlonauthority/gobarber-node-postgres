import isEqual from 'date-fns/isEqual';
import Appointment from '../models/Appointment';

interface CreateAppointDataTransferObject {
  provider: string;
  date: Date;
}

class AppointmentsRepository {
  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  public all(): Appointment[] {
    return this.appointments;
  }

  public findByDate(date: Date): Appointment | null {
    const findAppointment = this.appointments.find(item =>
      isEqual(date, item.date),
    );

    return findAppointment || null;
  }

  public create({
    provider,
    date,
  }: CreateAppointDataTransferObject): Appointment {
    const appointment = new Appointment({ provider, date });

    this.appointments.push(appointment);
    return appointment;
  }
}

export default AppointmentsRepository;
