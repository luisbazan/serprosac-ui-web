import { Component } from '@angular/core';
import { CommonService, SettingsService } from './services/service.index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private _commonService:CommonService, public _settingsService: SettingsService) {
    this._commonService.loadLocations();
   }
}
