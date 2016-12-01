import {Component, OnInit, OnDestroy} from "@angular/core";
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {Contact} from "../model/contact";
import {ContactService} from "../contact.service";

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html'
})
export class ContactDetailsComponent implements OnInit, OnDestroy {


  private subscription: Subscription;
  private contactIndex: number;
  selectedContact: Contact;

  constructor(private route: ActivatedRoute,
              private contactService: ContactService,
              private router: Router) {
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.contactIndex = params['id'];
        this.selectedContact = this.contactService.getContact(this.contactIndex);
      }
    )
  }

  onDelete() {
    this.contactService.deleteContact(this.selectedContact);
    this.router.navigate(['/contacts']);
  }

  onEdit() {
    this.router.navigate(['/contacts', this.contactIndex, 'edit']);
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
