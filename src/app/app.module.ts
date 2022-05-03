import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { AdressbuchComponent } from './adressbuch/adressbuch.component';
import { AdressbuchFormComponent } from './adressbuch-form/adressbuch-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AdressbuchComponent,
    AdressbuchFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
