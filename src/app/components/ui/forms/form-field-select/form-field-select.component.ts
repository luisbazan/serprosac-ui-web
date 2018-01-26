import { Component, OnInit, Input, forwardRef, TemplateRef, ContentChild } from '@angular/core';
import { FormGroup, AbstractControl } from "@angular/forms";
import { AbstractField } from '../abstractField';

import { CodeType } from '../../../../enums/code-type.enum';
import { CommonService } from '../../../../services/service.index';
import { CodeModule } from '../../../../models/code/code.module';

@Component({
  selector: 'app-form-field-select',
  templateUrl: './form-field-select.component.html',
  styleUrls: ['./form-field-select.component.css']
})

export class FormFieldSelectComponent extends AbstractField implements OnInit {
  @Input() sourceName: string;
  @Input() sourceCodeName: CodeType;
  @Input() defaultValue:string;
  @Input() groupCode:string;
    
  public listCodes:CodeModule[] = [];

  constructor(public _commonService: CommonService) {
      super();
  }

  ngOnInit() {
    if(this.sourceCodeName) {  
      this.listCodes = this._commonService.retrieveCodesByType(this.groupCode, CodeType[this.sourceCodeName]);
      if(this.defaultValue) {
        this.listCodes.unshift(new CodeModule("","", this.defaultValue));
      }
    }
  }

  verifyThereIsAnError():void {
    var errors:any = this.control.errors;
    var errorType:any;
    this.errorMessage = '';
    if (errors) {
      Object.keys(this.errorDefs).some((key:any) => {
        errorType = errors[key];
        if (errorType) {
          this.errorMessage = this.errorDefs[key];
          return true;
        }
      });
    }
  }

}
