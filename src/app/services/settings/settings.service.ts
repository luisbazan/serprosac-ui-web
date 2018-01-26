import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class SettingsService {

  private lsKeySetting: string = 'setting';
  setting:Setting = {
    themeUrl: 'assets/css/colors/default-dark.css',
    theme: 'default-dark.css',
    isOpenModalMain: true
  };

  constructor(@Inject(DOCUMENT) private _document) { 
    this.loadSettings();
  }

  saveSettings() {
    localStorage.setItem(this.lsKeySetting, JSON.stringify(this.setting));
  }

  loadSettings() {
    if(localStorage.getItem(this.lsKeySetting)){
      this.setting = JSON.parse(localStorage.getItem(this.lsKeySetting));      
    }
    this.applyTheme(this.setting.theme);
  }

  applyTheme(theme:string) {
    let url = `assets/css/colors/${theme}.css`
    this._document.getElementById('theme').setAttribute('href', url);

    this.setting.theme = theme;
    this.setting.themeUrl = url;
    this.saveSettings();
  }
}

interface Setting {
  themeUrl:string,
  theme:string,
  isOpenModalMain:boolean
}
