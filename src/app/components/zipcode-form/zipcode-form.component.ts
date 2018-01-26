import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, AbstractControl } from "@angular/forms";
import { CommonService } from '../../services/service.index';
import { CodeModule } from '../../models/code/code.module';
import {Observable} from 'rxjs/Observable';
import { LocationModule } from '../../models/location/location.module';
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
  private stateList:CodeModule[]=[];
  private provinceList:CodeModule[]=[];
  private distrinctList:CodeModule[]=[];

  constructor(private _commonService:CommonService) {
    super();
   }
  
  ngOnInit() {
    this.group.controls[this.controlName].valueChanges.subscribe((item) => {
      
    });
  }

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term === '' ? []
        : this._commonService.locations.filter(v => v.getSummaryDescription().toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));

  formatter = (x: {desc_ubigeo_inei: String, desc_prov_inei:string, desc_dep_inei:string}) => x.desc_ubigeo_inei + ", " + x.desc_prov_inei + ", " + x.desc_dep_inei;
  
  selectItem(data) {
    
  }
}
