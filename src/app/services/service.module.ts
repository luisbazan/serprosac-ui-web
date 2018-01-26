import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  SettingsService,
  SidebarService,
  SharedService,
  StudentsService,
  ConfigurationService,
  CommonService
} from './service.index';
import { AlertService } from './shared/alert.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers:[
    SettingsService,
    SidebarService,
    CommonService,
    ConfigurationService,
    StudentsService,
    SharedService
  ],
  declarations: []
})
export class ServiceModule { }
