import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ConfigurationService {

  public currentList:any = { "code": "students1", "description": "Toda la lista de alumnos" };
  configToolbar: any = {};

  hostName: string = "http://localhost:3000";//"http://www.serprosac.com";
  rootAPI: string = this.hostName + ""; 
  
  constructor(private http: HttpClient) {
    //console.log("Servicio listo para usar!!!");
   }

   getConfigurationByModule(id:string) {
    let url = this.rootAPI + "/configurations/" + id;
    return this.http.get(url).map(
      (resp: any) => {
        //console.log(resp);
        this.configToolbar = resp.toolbar;
        return this.configToolbar;
      }
    );
  }
}
