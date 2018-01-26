import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { FormGroup, AbstractControl } from "@angular/forms";

export abstract class AbstractField {
    @Input() type: string="text";
    @Input() label: string;
    @Input() controlName: string;
    @Input() maxlength: string;
    @Input() group: FormGroup;
    @Input() isRequired: boolean = false;
    @Input() errorDefs:any={required: 'El campo es requerido', 
    maxlength: 'La longitud maxima es {max}, actual {act}',
    minlength: 'La longitud minima es {min}, actual {act}',
    pattern: 'Ingrese un {type} valido'}; 
      
  public control: AbstractControl;
  public isValid:boolean;
  public errorMessage:string = 'El campo es requerido';

  isHasError():boolean {
    this.control = this.group.controls[this.controlName];
    var errors = this.control.errors;
    this.verifyThereIsAnError();
    
    this.isValid = (this.group.touched || !this.control.pristine) && errors!=null;
    return this.isValid;
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
          if(this.errorMessage && key == "maxlength") {
            this.errorMessage = this.errorMessage.replace('{max}', errorType.requiredLength);
            this.errorMessage = this.errorMessage.replace('{act}', errorType.actualLength);
          }
          if(this.errorMessage && key == "minlength") {
            this.errorMessage = this.errorMessage.replace('{min}', errorType.requiredLength);
            this.errorMessage = this.errorMessage.replace('{act}', errorType.actualLength);
          }
          if(this.errorMessage && key == "pattern") {
            this.errorMessage = this.errorMessage.replace('{type}', this.type);
          }
          return true;
        }
      });
    }
  }
}