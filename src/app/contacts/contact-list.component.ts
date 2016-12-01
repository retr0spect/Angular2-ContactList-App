import {Component, OnInit} from "@angular/core";
import {ContactService} from "./contact.service";
import {Contact} from "./contact";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
})
export class ContactListComponent implements OnInit {

  contacts: Contact[] = [];

  constructor(private contactService: ContactService,
              private router: Router) {
  }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }

  onEdit() {
    this.router.navigate(['/contacts/new']);
  }

}
