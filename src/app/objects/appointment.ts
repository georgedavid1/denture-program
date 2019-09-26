import { Procedure } from '../enums/procedure';
// import { Bill } from './bill';

export class Appointment{
  date: string;
  time: number;
  length: number;
  procedure: Procedure;
  cost: number;
  //cost: bill
}
