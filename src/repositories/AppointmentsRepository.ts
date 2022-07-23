import isEqual from 'date-fns/isEqual';
import Appointment from '../models/Appointment';

class AppointmentsRepository {
  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  public findByDate(date: Date): Appointment | null {
    const findAppointment = this.appointments.find(item =>
      isEqual(date, item.date),
    );

    return findAppointment || null;
  }

  public create(providerName: string, date: Date): Appointment {
    const appointment = new Appointment(providerName, date);

    this.appointments.push(appointment);
    return appointment;
  }
}

export default AppointmentsRepository;
