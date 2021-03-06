import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatModule } from '@chat/chat.module';
import { CoreModule } from '@core/core.module';
import { DashboardModule } from '@dashboard/dashboard.module';
import { TwitchModule } from '@twitch/twitch.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AppRoutingModule,
    CoreModule,
    TwitchModule,
    ChatModule,
    DashboardModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
