import { Procedure } from '../enums/procedure';
import { Appointment } from './appointment';
// import { Bill } from './bill';

export class Patient{
  name: string;
  address: string;
  age: number;
  gender: boolean;
  procedures: Procedure[];
  history: Appointment[];
  // billingHistory: Bill[];
}
