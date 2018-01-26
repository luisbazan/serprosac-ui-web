import { FormGroup } from '@angular/forms';

export interface IForm {
}

export interface IFormResponse {
    isUpdate:boolean,
    result:any,
    form?:FormGroup
    key$?:string
}
