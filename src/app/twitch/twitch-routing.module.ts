import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsContainerComponent } from '@twitch/containers/settings-container/settings-container.component';

const routes: Routes = [
  { path: '', component: SettingsContainerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TwitchRoutingModule { }
