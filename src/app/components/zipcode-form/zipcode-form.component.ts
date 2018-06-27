import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, AbstractControl } from "@angular/forms";
import { CommonService } from '../../services/service.index';
import { Code } from '../../models/code';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import { AbstractField } from '../ui/forms/abstractField';

@Component({
  selector: 'app-zipcode-form',
  templateUrl: './zipcode-form.component.html',
  styleUrls: ['./zipcode-form.component.css']
})
export class ZipcodeFormComponent extends AbstractField implements OnInit {
  private stateList:Code[]=[];
  private provinceList:Code[]=[];
  private distrinctList:Code[]=[];

  constructor(private _commonService:CommonService) {
    super();
   }
  
  ngOnInit() {
    this.group.controls[this.controlName].valueChanges.subscribe((item) => {
      console.log(item);
    });
  }

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term === '' ? []
        : this._commonService.locations.filter(v => v.getSummaryDescription().toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)
        .map(r => { return  {
          cod_dep_inei: r.cod_dep_inei,
          cod_dep_reniec:r.cod_dep_reniec,
          cod_dep_sunat:r.cod_dep_sunat,
          cod_prov_inei:r.cod_prov_inei,
          cod_prov_reniec:r.cod_prov_reniec,
          cod_prov_sunat:r.cod_prov_sunat,
          cod_ubigeo_inei:r.cod_ubigeo_inei,
          cod_ubigeo_reniec:r.cod_ubigeo_reniec,
          cod_ubigeo_sunat:r.cod_ubigeo_sunat,
          desc_dep_inei:r.desc_dep_inei,
          desc_dep_reniec:r.desc_dep_reniec,
          desc_dep_sunat:r.desc_dep_sunat,
          desc_prov_inei:r.desc_prov_inei,
          desc_prov_reniec:r.desc_prov_reniec,
          desc_prov_sunat:r.desc_prov_sunat,
          desc_ubigeo_inei:r.desc_ubigeo_inei,
          desc_ubigeo_reniec:r.desc_ubigeo_reniec,
          desc_ubigeo_sunat:r.desc_ubigeo_sunat,
          summaryDescription:r.getSummaryDescriptionHTML()
        }}));

  formatter = (x: {desc_ubigeo_inei: String, desc_prov_inei:string, desc_dep_inei:string}) => x.desc_ubigeo_inei + ", " + x.desc_prov_inei + ", " + x.desc_dep_inei;
  
  selectItem(data) {
    
  }
}
