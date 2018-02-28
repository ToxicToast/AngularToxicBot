import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from '@core/components/loading/loading.component';
import { ErrorComponent } from '@core/components/error/error.component';
import { SplashScreenComponent } from '@core/Components/splash-screen/splash-screen.component';
import { ModalComponent } from '@core/Components/modal/modal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoadingComponent,
    ErrorComponent,
    SplashScreenComponent,
    ModalComponent
  ]
})
export class CoreModule { }
