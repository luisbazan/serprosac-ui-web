import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAlert, NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertComponent } from '../../components/alert/alert.component';
import { AlertService } from '../../services/service.index';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    NgbAlertModule.forRoot()
  ],
  declarations: [
    AlertComponent
  ],
  exports: [AlertComponent]
})
export class AlertModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AlertModule,
      providers: [AlertService]
    }
  }
 }
