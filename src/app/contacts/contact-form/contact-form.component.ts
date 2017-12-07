import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../shared/contact.service';
import { Contact } from '../shared/contact';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contact: Contact = new Contact();

  constructor(private contactSvc: ContactService) { }

  ngOnInit() {
  }

  createContact() {
    this.contactSvc.create(this.contact);
    this.contact = new Contact();
  }
}
