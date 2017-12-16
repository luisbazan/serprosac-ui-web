import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ConfigurationService {

  configToolbar: any = {};

  hostName: string = "http://localhost:3000";//"http://www.serprosac.com";
  rootAPI: string = this.hostName + ""; 
  
  constructor(private http: HttpClient) {
    console.log("Servicio listo para usar!!!");
   }

   getConfigurationByModule(id:string) {
    let url = this.rootAPI + "/configuration";
    return this.http.get(url).map(
      (resp: any) => {
        this.configToolbar = resp.configuration.toolbar;
        return this.configToolbar;
      }
    );
  }
}
