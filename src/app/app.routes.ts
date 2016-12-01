import {Routes, RouterModule} from "@angular/router";
import {ContactsComponent} from "./contacts/contacts.component";
import {CONTACT_ROUTES} from "./contacts/contacts.routes";

const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/contacts', pathMatch: 'full'},
  {path: 'contacts', component: ContactsComponent, children: CONTACT_ROUTES}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
