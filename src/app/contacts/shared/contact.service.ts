import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Contact } from './contact';

@Injectable()
export class ContactService {
  private basePath: string = '/contacts';
  items: FirebaseListObservable<Contact[]> = null; //  list of objects
  item: FirebaseObjectObservable<Contact> = null; //   single object

  constructor(private db: AngularFireDatabase) { }

  getList(query = {}): FirebaseListObservable<Contact[]> {
    this.items = this.db.list(this.basePath, {
      query: query
    });
    return this.items;
  }

  get(key: string): FirebaseObjectObservable<Contact> {
    const itemPath = `${this.basePath}/${key}`;
    this.item = this.db.object(itemPath);
    return this.item;
  }

  create(contact: Contact): void {
    this.items.push(contact)
      .catch(error => this.handleError(error));
  }

  update(key: string, value: any): void {
    this.items.update(key, value)
      .catch(error => this.handleError(error));
  }

  delete(key: string): void {
    this.items.remove(key)
      .catch(error => this.handleError(error));
  }

  deleteAll(): void {
    this.items.remove()
      .catch(error => this.handleError(error));
  }

  private handleError(error) {
    console.log(error);
  }
}
