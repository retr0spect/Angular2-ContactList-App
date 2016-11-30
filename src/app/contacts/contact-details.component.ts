import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {Contact} from "./contact";
import {ContactService} from "./contact.service";

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html'
})
export class ContactDetailsComponent implements OnInit, OnDestroy {


  private subscription: Subscription;
  private contactIndex: number;
  selectedContact: Contact;

  constructor(private route: ActivatedRoute, private contactService: ContactService) {
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.contactIndex = params['id'];
        this.selectedContact = this.contactService.getContact(this.contactIndex);
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
