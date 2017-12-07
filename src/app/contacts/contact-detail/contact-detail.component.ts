import { Component, OnInit, Input } from '@angular/core';
import { ContactService } from '../shared/contact.service';
import { Contact } from '../shared/contact';

@Component({
  selector: 'contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  @Input() contact: Contact;

  constructor(private contactSvc: ContactService) { }

  ngOnInit() {
  }

  updateCreateDate() {
    let date = new Date().getTime()
    this.contactSvc.update(this.contact.$key, { createdate: date })
  }

  updateActive(value: boolean) {
    this.contactSvc.update(this.contact.$key, { active: value })
  }

  deleteContact() {
    this.contactSvc.delete(this.contact.$key)
  }

}
