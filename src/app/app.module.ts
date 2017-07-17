import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { CoordinatesService } from './coordinates.service'
import { AppComponent } from './app.component';
import { BotalikeComponent } from './botalike/botalike.component';
import { TwitterFeedComponent } from './twitter-feed/twitter-feed.component';
import { TwitterService } from './twitter.service';
import { ChartComponent } from './chart/chart.component'
import { ChartsModule } from 'ng2-charts';
import { NouisliderModule } from 'ng2-nouislider';
import { CustomComponent } from './custom/custom.component';

@NgModule({
  declarations: [
    AppComponent,
    BotalikeComponent,
    TwitterFeedComponent,
    ChartComponent,
    CustomComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    ChartsModule,
    NouisliderModule
  ],
  providers: [TwitterService, CoordinatesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
