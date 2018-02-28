import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from '@core/services/auth-guard.service';

const routes: Routes = [
  { path: '', loadChildren: '@dashboard/dashboard.module#DashboardModule', pathMatch: 'full', canActivate: [AuthGuardService] },
  { path: 'chat', loadChildren: '@chat/chat.module#ChatModule', pathMatch: 'full' },
  { path: 'twitch', loadChildren: '@twitch/twitch.module#TwitchModule', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
