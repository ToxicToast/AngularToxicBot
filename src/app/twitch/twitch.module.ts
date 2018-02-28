import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwitchRoutingModule } from './twitch-routing.module';
import { TwitchService } from '@twitch/services/twitch.service';
import { SettingsComponent } from './Containers/settings/settings.component';

@NgModule({
  imports: [
    CommonModule,
    TwitchRoutingModule
  ],
  declarations: [SettingsComponent],
  providers: [
    TwitchService
  ]
})
export class TwitchModule { }
