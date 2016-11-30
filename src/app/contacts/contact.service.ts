import { Injectable } from '@angular/core';
import {Contact} from "./contact";

@Injectable()
export class ContactService {

  contacts: Contact[] = [
    new Contact('Aditya', 'Chandel', 'Logan, UT', '666-666-666'),
    new Contact('Michael', 'Schofield', 'NY, USA', '555-555-555'),
    new Contact('Lincoln', 'Schofield', 'ND, USA', '444-444-444'),
    new Contact('Sarah', 'Tancredi', 'TX, USA', '666-666-666'),
  ];

  constructor() { }

  getContacts() {
    return this.contacts;
  }

  getContact(id: number) {
    return this.contacts[id];
  }

}
