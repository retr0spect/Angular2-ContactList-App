import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./header/header.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {routing} from "./app.routes";
import {ContactService} from "./contacts/contact.service";
import {ContactStartComponent} from "./contacts/contact-start.component";
import {FilterPipe} from "./contacts/filter.pipe";
import {ContactListComponent} from "./contacts/contact-list/contact-list.component";
import {ContactDetailsComponent} from "./contacts/contact-details/contact-details.component";
import {ContactsEditComponent} from "./contacts/contacts-edit/contacts-edit.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactsComponent,
    ContactListComponent,
    ContactDetailsComponent,
    ContactStartComponent,
    ContactsEditComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
