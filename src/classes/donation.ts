export interface Donation {
  id: string;
  contactid: string;
  amount: number;
  source:string;
  recieved: Date;
}

export class Donation implements Donation {
  constructor(init?: Partial<Donation>) {
    Object.assign(this, init);
  }
}
