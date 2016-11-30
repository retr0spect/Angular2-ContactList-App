import {Component, OnInit} from '@angular/core';
import {ContactService} from "./contact.service";
import {Contact} from "./contact";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
})
export class ContactListComponent implements OnInit {

  contacts: Contact[] = [];

  constructor(private contactService: ContactService) {
  }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }

}
