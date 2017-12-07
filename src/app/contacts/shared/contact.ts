// import { Phone } from './phone';
// import { Email } from './email';
// import { Address } from './address';
// import { CommunicationMethod } from './communicationmethod';
// import { Donation } from './donation';
// import { Relationship } from './relationship';

// import * as moment from 'moment';

export class Contact {
  $key: string;
  createdate: Date = new Date();
  active: boolean = true;
  greeting: string;
  firstname: string;
  lastname: string;
  birthday: Date;
  // phonenumbers: Phone[];
  // emails: Email[];
  // addresses: Address[];
  contactype: string; //individual, household, organization
  pledge: string;
  // donations: Donation[]; //the actual donation
  // communicationMethod: CommunicationMethod;
  // relationships: Relationship[]; //this is the idea of who is linked to whom

  // constructor(init?: Partial<Contact>) {
  //   Object.assign(this, init);
  // }
}
