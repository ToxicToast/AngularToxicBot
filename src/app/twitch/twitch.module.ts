import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '@core/core.module';

import { TwitchRoutingModule } from '@twitch/twitch-routing.module';
import { TwitchService } from '@twitch/services/twitch.service';
import { SettingsContainerComponent } from '@twitch/containers/settings-container/settings-container.component';
import { FirstStartComponent } from '@twitch/components/first-start/first-start.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    TwitchRoutingModule
  ],
  declarations: [
    SettingsContainerComponent,
    FirstStartComponent
  ],
  providers: [
    TwitchService
  ]
})
export class TwitchModule { }
