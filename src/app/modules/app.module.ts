import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../app-root/app.component';
import { ShowTimeComponent } from '../cmps/show-time/show-time.component';
import { CountDownComponent } from '../cmps/count-down/count-down.component';
import { ShowCoordsComponent } from '../cmps/show-coords/show-coords.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowTimeComponent,
    CountDownComponent,
    ShowCoordsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
