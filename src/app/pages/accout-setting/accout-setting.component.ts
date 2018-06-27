import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { forEach } from '@angular/router/src/utils/collection';
import { SettingsService } from '../../services/service.index';
import { AlertService } from '../../services/shared/alert.service';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-accout-setting',
  templateUrl: './accout-setting.component.html',
  styles: []
})
export class AccoutSettingComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _document, 
  public _settings:SettingsService,
  public _alertService:AlertService
) { }

  ngOnInit() {
    this.putCheck();
  }

  changeColor(event) {
    let theme = event.target.dataset.theme;
    
    this.applyCheck(event.target);

    this._settings.applyTheme(theme);

    this.saveSettings();
  }

  changeModal(event) {
    this._settings.setting.isOpenModalMain = event;
    this._settings.saveSettings();
    this.saveSettings();
  }

  saveSettings(){
    this._alertService.showSuccessMessage("Los cambios fueron aplicados");
  }

  applyCheck(link:any) {
    let selectors: any = document.getElementsByClassName('selector');

    for(let ref of selectors) {
      ref.classList.remove('working');
    }

    link.classList.add('working');
  }

  putCheck() {
    let selectors: any = document.getElementsByClassName('selector');
    let theme = this._settings.setting.theme;
    for(let ref of selectors) {
      if(ref.getAttribute('data-theme') === theme) {
        ref.classList.add('working');
        break;
      }
    }
  }
}
