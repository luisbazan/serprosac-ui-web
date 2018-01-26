import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { CodeType } from '../../../enums/code-type.enum';
import { CommonService } from '../../../services/service.index';
import { Student } from '../../../interfaces/student';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent {

  @Input() placeHolderSearch:string;
  @Input() btnNameToAdd:string;
  @Input() cardTitle:string;
  @Input() cols:dtColumn[];
  @Input() fields:dtField[];
  @Input() data:any[];
  @Input() groupData:string;

  @Output() onClickAddRow = new EventEmitter();
  @Output() onClickRemoveDetail = new EventEmitter();
  @Output() onClickUpdateDetail = new EventEmitter();
  @Output() onClickViewDetail = new EventEmitter();

  constructor(public _commonService: CommonService) { }

  getValue(pdata:any, field:dtField):any {
    var name = field.name, names = name.split('.');
    //console.log(data);
    if(names.length==1) {
      return this.getTransformedValue(pdata[name], field);
    }
    for(let i=0; i<names.length ; i++) {
      pdata = pdata[names[i]];
    }
    return this.getTransformedValue(pdata, field);
  }

  getTransformedValue(pdata:any, field:dtField) {
    if(field.codeType !=null) {
      
      let code = this._commonService.retrieveCodesByTypeAndCode(this.groupData, field.codeType, pdata);
      return code!=null?code.getDescription():'';
    }
    return pdata;
  }

  removeDetail(value:Student) {
    this.onClickRemoveDetail.emit(value);
  }

  updateDetail(value:Student) {
    this.onClickUpdateDetail.emit(value);
  }

  viewDetail(value:Student) {
    this.onClickViewDetail.emit(value);
  }

  addRow() {
    this.onClickAddRow.emit();
  }
}

export interface dtColumn {
  title:string;
}

export interface dtField {
  name:string;
  url?:string;
  codeType?:CodeType;
}