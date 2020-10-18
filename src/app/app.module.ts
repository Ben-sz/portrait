import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CocolioComponent } from './cocolio/cocolio.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CocolioComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
