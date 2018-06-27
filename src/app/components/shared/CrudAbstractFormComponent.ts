import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AlertService, ICRUDService, SettingsService } from '../../services/service.index';
import swal from 'sweetalert';

export abstract class CrudAbstractFormComponent {
    @Input() showToolbar: boolean=false;
    @Output() onSubmit = new EventEmitter();
    @Output() onAfterSave = new EventEmitter();
    @Output() onAfterLoad = new EventEmitter();
    submitted: boolean= false;
    public basicForm: FormGroup;
    public isNew: boolean= false;
    public isView: boolean= false;
    public isUdpate: boolean= false;
    public id: string;  
    
    constructor(public _settings: SettingsService, 
      public _router:Router,
      public _activatedRoute: ActivatedRoute) {
        
    }

    public loadData(id:string):void {
      this.getSpinnerService().show();
      this.getService().retrieve(id).subscribe(
        (resp:any)=>{
          if(resp!==null) {
            this.basicForm.patchValue(resp);
            this.id = id;
          }              
          this.getSpinnerService().hide();
          this.onAfterLoad.emit();
          this.afterLoadData();
        });
    }
  
    afterLoadData() {
      
    }

    isOpenModal():boolean {
      return this._settings.setting.isOpenModalMain;
    }

    public getSpinnerService():Ng4LoadingSpinnerService {
      return null;
    }

    public getAlert():AlertService {
      return null;
    }

    public getService():ICRUDService {
      return null;
    }

    displayFormToUpdate(id:string) {
      this.isNew = false;
      this.isUdpate = true;
      this.isView = false;
      this.basicForm.enable();
      this.loadData(id);
    }
  
    displayFormToCreate() {
      this.isNew = true;
      this.isUdpate = false;
      this.isView = false;
      this.basicForm.enable();
      this.basicForm = this.createFormGroup();
    }
  
    displayFormToRead(id:string) {
      this.isNew = false;
      this.isUdpate = false;
      this.isView = true;
      this.showToolbar = false;
      this.basicForm.disable();
      this.loadData(id);
    }
  
    createFormGroup(): (FormGroup){
      return null;
    }
  
    getTitle():string {
      return '';
    }

    onSave(forma:FormGroup) {
      console.log('Save Button Form Student');
      
      if(forma.valid) {
        this.onSubmit.emit();
        this.getSpinnerService().show();      
        if (this.isNew) {
          this.getService().add(forma.value).subscribe((resp:any)=> {
            this.reset();
            console.log(resp);
            this.onAfterSave.emit({ isUpdate: false , result: resp, form: forma});
            this.showAlertSuccess(`${this.getTitle()} creado`, resp.key$);            
          },error=>console.error(error));
  
        } else {
          this.getService().update(forma.value, this.id).subscribe(resp=> {
            this.getSpinnerService().hide();
            this.onAfterSave.emit({ isUpdate: true , result: resp, key$: this.id });
            console.log(resp);
            this.showAlertSuccess(`${this.getTitle()} actualizado`, this.id);
          },error=>console.error(error));
        }
      } else {
        forma.markAsTouched();    
        this.showAlertInvalid();
      }
    }
  
    public showAlertSuccess(title:string, subtitle:string):void {
      this.submitted = true;
      //this.getAlert().showSuccessMessage(msg);
      swal(title, subtitle , 'success');
    }
  
    public showAlertInvalid():void {
      this.submitted = false;
      //this.getAlert().showErrorMessage("El formulario es invalido, por favor corrija los datos.");
      swal(this.getTitle(), "El formulario es invalido, por favor corrija los datos." , 'error');
    }
  
    reset():void {
      this.basicForm = this.createFormGroup();
    }
}