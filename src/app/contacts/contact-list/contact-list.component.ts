import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Contact} from "../model/contact";
import {ContactService} from "../contact.service";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
})
export class ContactListComponent implements OnInit {

  // @Input() filterFn: string = '';
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
