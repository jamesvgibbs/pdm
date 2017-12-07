export interface Email {
  id: string;
  contactid: string;
  email: string;
  primary: boolean;
  type: string;
}

export class Email implements Email {
  constructor(init?: Partial<Email>) {
    Object.assign(this, init);
  }
}
