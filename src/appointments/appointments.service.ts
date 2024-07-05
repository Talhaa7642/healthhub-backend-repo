import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Appointment, AppointmentDocument } from './schemas/appointment.schema';

@Injectable()
export class AppointmentsService {
  constructor(
    @InjectModel(Appointment.name) private appointmentModel: Model<AppointmentDocument>,
  ) {}

  async create(appointment: Appointment): Promise<Appointment> {
    const createdAppointment = new this.appointmentModel(appointment);
    return createdAppointment.save();
  }

  async findAll(): Promise<Appointment[]> {
    return this.appointmentModel.find().exec();
  }
}
