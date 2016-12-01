import {Injectable} from "@angular/core";
import {Contact} from "./contact";

@Injectable()
export class ContactService {

  contacts: Contact[] = [
    new Contact('Aditya', 'Chandel', 'UT, USA', '666-666-666'),
    new Contact('Michael', 'Schofield', 'NY, USA', '555-555-555'),
    new Contact('Lincoln', 'Schofield', 'ND, USA', '444-444-444'),
    new Contact('Sarah', 'Tancredi', 'TX, USA', '666-666-666'),
  ];

  constructor() {
  }

  getContacts() {
    return this.contacts;
  }

  getContact(id: number) {
    return this.contacts[id];
  }

  addContact(newContact: Contact) {
    this.contacts.push(newContact);
  }

  deleteContact(selectedContact: Contact) {
    this.contacts.splice(this.contacts.indexOf(selectedContact), 1);
  }

  editContact(oldContact: Contact, newContact: Contact) {
    this.contacts[this.contacts.indexOf(oldContact)] = newContact;
  }


}
