export interface Phone {
  id: string;
  contactid: string;
  phone: string;
  primary: boolean;
  type: string;
}

export class Phone implements Phone {
  constructor(init?: Partial<Phone>) {
    Object.assign(this, init);
  }
}
