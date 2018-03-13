import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatCheckboxModule } from '@angular/material';

import { LoadingComponent } from '@core/components/loading/loading.component';
import { ErrorComponent } from '@core/components/error/error.component';
import { SplashScreenComponent } from '@core/components/splash-screen/splash-screen.component';
import { ModalComponent } from '@core/components/modal/modal.component';
import { AuthGuardService } from '@core/services/auth-guard.service';
import { LayoutComponent } from '@core/containers/layout/layout.component';
import { HeaderComponent } from '@core/components/header/header.component';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  declarations: [
    LoadingComponent,
    ErrorComponent,
    SplashScreenComponent,
    ModalComponent,
    LayoutComponent,
    HeaderComponent
  ],
  providers: [
    AuthGuardService
  ],
  exports: [
    LoadingComponent,
    ErrorComponent,
    SplashScreenComponent,
    ModalComponent,
    LayoutComponent,
    HeaderComponent,
    MatButtonModule,
    MatCheckboxModule
  ]
})
export class CoreModule { }
