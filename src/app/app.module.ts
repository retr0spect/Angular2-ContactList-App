import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./header/header.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {routing} from "./app.routes";
import {ContactListComponent} from "./contacts/contact-list.component";
import {ContactDetailsComponent} from "./contacts/contact-details.component";
import {ContactService} from "./contacts/contact.service";
import {ContactItemComponent} from "./contacts/contact-item.component";
import {ContactStartComponent} from "./contacts/contact-start.component";
import {ContactsEditComponent} from "./contacts-edit/contacts-edit.component";
import {FilterPipe} from "./contacts/filter.pipe";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactsComponent,
    ContactListComponent,
    ContactDetailsComponent,
    ContactItemComponent,
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
