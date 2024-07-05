import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppointmentsModule } from './appointments/appointments.module';
import { ContactsModule } from './contacts/contacts.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://mahadahmad921:WjQ0M0JClPiGnSAr@cluster0.t9wgtar.mongodb.net/'),
    AppointmentsModule,
    ContactsModule,
  ],
})
export class AppModule {}
