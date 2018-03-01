import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '@core/core.module';

import { TwitchRoutingModule } from '@twitch/twitch-routing.module';
import { TwitchService } from '@twitch/services/twitch.service';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    TwitchRoutingModule
  ],
  declarations: [],
  providers: [
    TwitchService
  ]
})
export class TwitchModule { }
