import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '@core/core.module';

import { DashboardRoutingModule } from '@dashboard/dashboard-routing.module';
import { DashboardIndexContainerComponent } from '@dashboard/containers/dashboard-index-container/dashboard-index-container.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardIndexContainerComponent
  ]
})
export class DashboardModule { }
