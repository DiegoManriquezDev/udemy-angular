import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import {Assignment3Component} from './assignment3/assignment3.component'

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    Assignment3Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
