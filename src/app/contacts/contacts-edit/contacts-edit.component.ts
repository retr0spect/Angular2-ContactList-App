import {Component, OnInit, OnDestroy} from "@angular/core";
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Contact} from "../model/contact";
import {ContactService} from "../contact.service";

@Component({
  selector: 'app-contacts-edit',
  templateUrl: './contacts-edit.component.html',
})
export class ContactsEditComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  private contactIndex: number;
  private contact: Contact;
  private contactEditForm: FormGroup;
  private isNew = true;

  constructor(private route: ActivatedRoute,
              private contactService: ContactService,
              private router: Router,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.isNew = false;
          this.contactIndex = +params['id'];
          this.contact = this.contactService.getContact(this.contactIndex);
        } else {
          this.isNew = true;
          this.contact = null;
        }
        this.initForm();
      }
    )
  }

  initForm() {
    let firstName = '';
    let lastName = '';
    let address = '';
    let phoneNumber = '';
    let imageUrl = '';

    if (!this.isNew) {
      firstName = this.contact.firstName;
      lastName = this.contact.lastName;
      address = this.contact.address;
      phoneNumber = this.contact.phoneNumber;
      imageUrl = this.contact.imageUrl;
    }

    this.contactEditForm = this.formBuilder.group({
      firstName: [firstName, Validators.required],
      lastName: [lastName, Validators.required],
      address: [address, Validators.required],
      phoneNumber: [phoneNumber, Validators.required],
      imageUrl: [imageUrl, Validators.required]
    });
  }

  private navigateBack() {
    this.router.navigate(['../']);
  }

  onCancel() {
    this.navigateBack();
  }

  onSubmit() {
    const newContact = this.contactEditForm.value;
    if (this.isNew) {
      this.contactService.addContact(newContact);
    } else {
      this.contactService.editContact(this.contact, newContact);
    }
    this.navigateBack();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
