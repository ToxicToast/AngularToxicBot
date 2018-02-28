import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwitchRoutingModule } from './twitch-routing.module';
import { TwitchService } from '@twitch/services/twitch.service';

@NgModule({
  imports: [
    CommonModule,
    TwitchRoutingModule
  ],
  declarations: [],
  providers: [
    TwitchService
  ]
})
export class TwitchModule { }
