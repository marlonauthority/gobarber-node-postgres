import { uuid } from 'uuidv4';

class Appointment {
  id: string;

  providerName: string;

  date: Date;

  constructor(providerName: string, date: Date) {
    this.id = uuid();
    this.providerName = providerName;
    this.date = date;
  }
}

export default Appointment;
