import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  SettingsService,
  SidebarService,
  SharedService,
  StudentsService,
  CourseService,
  ProductService,
  ConfigurationService,
  CommonService
} from './service.index';
import { AlertService } from './shared/alert.service';
import { StoreModule } from './store/store.module';

@NgModule({
  imports: [
    CommonModule,
    StoreModule
  ],
  providers:[
    SettingsService,
    SidebarService,
    CommonService,
    ConfigurationService,
    StudentsService,
    CourseService,
    ProductService,
    SharedService
  ],
  declarations: []
})
export class ServiceModule { }
