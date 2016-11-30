import {Component, Input} from '@angular/core';
import {Contact} from "./contact";

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
})
export class ContactItemComponent {

  @Input() contact: Contact;
  @Input() contactId: number;

}
