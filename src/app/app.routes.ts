import {Routes, RouterModule} from "@angular/router";
import {ContactsComponent} from "./contacts/contacts.component";
const APP_ROUTES: Routes = [
  {path: '', component: ContactsComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
