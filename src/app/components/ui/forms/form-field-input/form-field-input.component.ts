import { Component, OnInit, Input, forwardRef, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, AbstractControl } from "@angular/forms";
import { AbstractField } from '../abstractField';

@Component({
  selector: 'app-form-field-input',
  templateUrl: './form-field-input.component.html',
  styleUrls: ['./form-field-input.component.css']
})

export class FormFieldInputComponent extends AbstractField {  
  @ViewChild('fieldInput') fieldInput: ElementRef;

  enabled(value): void {
    this.fieldInput.nativeElement.disabled = !value;
  }
}
