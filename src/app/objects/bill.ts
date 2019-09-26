import { PaymentForm } from '../enums/paymentForm'

export class Bill{
  invoice: number;
  name: string;
  paymentForm: PaymentForm;
  description: string;
}
