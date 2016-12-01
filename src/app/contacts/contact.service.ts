import {Injectable} from "@angular/core";
import {Contact} from "./model/contact";

@Injectable()
export class ContactService {

  contacts: Contact[] = [
    new Contact('Aditya', 'Chandel', 'UT, USA', '666-666-666', 'https://2.bp.blogspot.com/-H1SBFA79-kk/V-rqTvwlQLI/AAAAAAAAHZk/zYb5R0Y1CeU8lf61NiMk4149AXAlXNHkwCPcB/s200/angular2.png'),
    new Contact('Michael', 'Schofield', 'NY, USA', '555-555-555', 'https://s-media-cache-ak0.pinimg.com/236x/1c/61/0f/1c610f4684f4664878b7bb317c2b5925.jpg'),
    new Contact('Lincoln', 'Schofield', 'ND, USA', '444-444-444', 'http://img2.tvtome.com/i/tvc/gQ/128824.jpg'),
    new Contact('Sarah', 'Tancredi', 'TX, USA', '666-666-666', 'http://file2.answcdn.com/answ-cld/image/upload/w_200,h_200,c_fill,g_face:center,q_60/v1401325190/vn4ue7zwnjyhsuvsn8s5.jpg'),
    new Contact('T', 'Bag', 'GE, USA', '777-777-777', 'https://v.cdn.vine.co/r/avatars/F0BFF2030E1401168473132253184_55aba4d7297.39.0.jpg?versionId=mscpv8Td_m3caCBTjS3WnWd1KP_Ho_rO'),
    new Contact('Alex', 'Mahone', 'RI, USA', '111-111-111', 'https://media1.giphy.com/media/xCApre7YdooKI/200_s.gif'),
    new Contact('Paul', 'Kellerman', 'MN, USA', '987-654-321', 'http://rs205.pbsrc.com/albums/bb78/kravecki/Kellerman/Kellerman00001.jpg~c200')
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
