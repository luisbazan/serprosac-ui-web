import { Injectable } from '@angular/core';
import { Code } from '../../models/code';
import { CodeUtils } from '../../common/codeutils';
import { CodeType } from '../../enums/code-type.enum';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Location } from '../../models/location';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Injectable()
export class CommonService {
  //private apiLocation: string = './assets/data/location.json';
  private apiLocation: string = 'https://raw.githubusercontent.com/CONCYTEC/ubigeo-peru/master/equivalencia-ubigeos-oti-concytec.json';
  public locations: Location[] = [];
  constructor(private http: HttpClient, public spinnerService: Ng4LoadingSpinnerService) { }

  public retrieveCodesByType(group:string, type):(Code[]) {
    return CodeUtils.getCodeByType(group, type);    
  }
  
  public retrieveCodesByTypeAndCode(group:string, type, code):(Code) {
    return CodeUtils.getCodeByTypeAndCode(group, type, code);
  }

  public loadLocations():void  {
    this.spinnerService.show();
    this.http.get(this.apiLocation)
    .map((response:any[]) => response)
    .subscribe(resp=>{resp.map(item=> 
      this.locations.push(new Location(item.cod_dep_inei,
        item.cod_dep_reniec,
        item.cod_dep_sunat,
        item.cod_prov_inei,
        item.cod_prov_reniec,
        item.cod_prov_sunat,
        item.cod_ubigeo_inei,
        item.cod_ubigeo_reniec,
        item.cod_ubigeo_sunat,
        item.desc_dep_inei,
        item.desc_dep_reniec,
        item.desc_dep_sunat,
        item.desc_prov_inei,
        item.desc_prov_reniec,
        item.desc_prov_sunat,
        item.desc_ubigeo_inei,
        item.desc_ubigeo_reniec,
        item.desc_ubigeo_sunat
        ))
    ); this.spinnerService.hide();} );
  }
}
