import { Component, OnInit } from '@angular/core';
import { ContactService } from '../shared/contact.service';
import { Contact } from '../shared/contact';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  contacts: FirebaseListObservable<Contact[]>;

  showSpinner: boolean = true;

  constructor(private contactSvc: ContactService) { }

  ngOnInit() {
    this.contacts = this.contactSvc.getList({limitToLast: 5});
    this.contacts.subscribe(() => this.showSpinner = false);
  }

  deleteContacts() {
    this.contactSvc.deleteAll();
  }

}
