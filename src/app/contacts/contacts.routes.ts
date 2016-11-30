import {Routes, RouterModule} from "@angular/router";
import {ContactsComponent} from "./contacts.component";
import {ContactDetailsComponent} from "./contact-details.component";

const CONTACT_ROUTES: Routes = [
  {path: '', component: ContactsComponent, children: [
    {path: ':id', component: ContactDetailsComponent}
  ]}
];

export const contactRouting = RouterModule.forChild(CONTACT_ROUTES);
