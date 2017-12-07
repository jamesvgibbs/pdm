export interface Relationship {
  id: string;
  contactid: string;
  type: string;
}

export class Relationship implements Relationship {
  constructor(init?: Partial<Relationship>) {
    Object.assign(this, init);
  }
}
