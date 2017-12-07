export interface Address {
  id: string;
  contactid: string;
  street1: string;
  street2: string;
  city: string;
  state: string;
  zip: string;
  primary: boolean;
  type: string;
}

export class Address implements Address {
  constructor(init?: Partial<Address>) {
    Object.assign(this, init);
  }
}
