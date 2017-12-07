export interface CommunicationMethod {
  id: string;
  contactid: string;
  nophone: boolean;
  noemail: boolean;
  nomail: boolean;
  nosms: boolean;
}

export class CommunicationMethod implements CommunicationMethod {
  constructor(init?: Partial<CommunicationMethod>) {
    Object.assign(this, init);
  }
}
