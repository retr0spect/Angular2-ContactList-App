import {Routes} from "@angular/router";
import {ContactStartComponent} from "./contact-start.component";
import {ContactDetailsComponent} from "./contact-details/contact-details.component";
import {ContactsEditComponent} from "./contacts-edit/contacts-edit.component";

export const CONTACT_ROUTES: Routes = [
  {path: '', component: ContactStartComponent},
  {path: 'new', component: ContactsEditComponent},
  {path: ':id', component: ContactDetailsComponent},
  {path: ':id/edit', component: ContactsEditComponent}
];

