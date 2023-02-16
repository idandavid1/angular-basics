import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../app-root/app.component';
import { ShowTimeComponent } from '../cmps/show-time/show-time.component';
import { CountDownComponent } from '../cmps/count-down/count-down.component';
import { ShowCoordsComponent } from '../cmps/show-coords/show-coords.component';
import { WhoWatchComponent } from '../cmps/who-watch/who-watch.component';
import { WhoWatchListComponent } from '../cmps/who-watch-list/who-watch-list.component';
import { WhoWatchPreviewComponent } from '../cmps/who-watch-preview/who-watch-preview.component';
import { WhoWatchDetailsComponent } from '../cmps/who-watch-details/who-watch-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowTimeComponent,
    CountDownComponent,
    ShowCoordsComponent,
    WhoWatchComponent,
    WhoWatchListComponent,
    WhoWatchPreviewComponent,
    WhoWatchDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
