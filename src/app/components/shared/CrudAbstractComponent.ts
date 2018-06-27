import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AbstractCRUDServices, AlertService, ICRUDService } from '../../services/service.index';
import { IFormResponse } from '../../interfaces/iform';
import { Toolbar } from '../../enums/module.enum';
import { ModalFormComponent } from '../modal-form/modal-form.component';
import { ConfirmModalComponent } from '../ui/confirm-modal/confirm-modal.component';
import { CrudAbstractFormComponent } from '../../components/shared/CrudAbstractFormComponent';
import { SettingsService } from '../../services/service.index';

import swal from 'sweetalert';

export abstract class CrudAbstractComponent {
  @ViewChild(ModalFormComponent) dialog: ModalFormComponent;
  @ViewChild(ConfirmModalComponent) confirmDialog: ConfirmModalComponent
  
  public currentListId:string = "";
  public data: Array<any> = [];
  public dataRemoved: Array<any> = [];
  messageDialog:string;
  isbtnSaveDisabled:boolean = true;
  isCloseModal:boolean = true;
  
  constructor(public _settings: SettingsService, public _router:Router) {

  }

  createGrid():void {
    
  }

  getCrudService():ICRUDService {
    return null;
  }

  getSpinnerService():Ng4LoadingSpinnerService {
    return null;
  }

  getAlertService():AlertService {
      return null;
  }

  getCrudForm():CrudAbstractFormComponent {
    return null;
  }

  isOpenModal():boolean {
    return this._settings.setting.isOpenModalMain;
  }

  refreshGrid():void {    
    this.getCrudService().retrieveAll().subscribe((resp:any[])=>{ 
      //console.log(resp);
      this.data = resp;
      this.getSpinnerService().hide();
    });
  }

  onAfterLoad() {
    this.isbtnSaveDisabled = false;
  }

  onAfterSave(event:IFormResponse) {    
    if(event.isUpdate) {
      let index = this.data.findIndex(item=>item.key$ == event.key$);
      if(index!=-1) {
        event.result.key$ = event.key$;
        this.data[index] = event.result;
      }
    } else {
      event.form.value.key$ = event.result.name;
      this.data.push(event.form.value); 
    }
    this.data = this.data.filter(item => !this.dataRemoved.includes(item));
    this.isbtnSaveDisabled = false;
    if(event.isUpdate || (this.isCloseModal && !event.isUpdate)) {
      this.dialog.close();
    }
    this.getSpinnerService().hide();          
  }

  onSave(data) {
  }

  onSubmitForm() {
    this.isbtnSaveDisabled = true;
  }

  getTitle():string {
    return '';
  }

  onRemoveDetail(value:any) {
    this.confirmDialog.show('Confirmar solicitud', 'Esta seguro de eliminar el registro?')
    .then(res=>
      this.confirmRemoveDetail(res, value)
    );
  }

  onChangeCloseModal(value) {
    this.isCloseModal = value;
  }

  confirmRemoveDetail(res, value:any) {
    if(res=='Y') {
      this.getSpinnerService().show();
      this.getCrudService().remove(value.key$).subscribe((resp:any)=>{ 
        this.dataRemoved.push(value);
        this.data = this.data.filter(item => !this.dataRemoved.includes(item));
        this.getSpinnerService().hide();
        console.log(resp);
        this.showAlertSuccess(`${this.getTitle()} eliminado`, resp);
      })
    }
  }

  public showAlertSuccess(title:string, subtitle:string):void {
    swal(title, subtitle , 'success');
  }

  public showAlertInvalid():void {
    swal(this.getTitle(), 'El formulario es invalido, por favor corrija los datos.', 'error');
  }

  onUpdateDetail(value:any,link:string) {
    this.isbtnSaveDisabled = true;    
    if(this.isOpenModal()) {
      this.dialog.title = 'Actualizar ' + this.getTitle();
      this.dialog.showSubmit = true;      
      this.getCrudForm().displayFormToUpdate(value.key$);
      this.dialog.show({
        size:'lg',
        backdrop: 'static'
      });
    } else {
      this.getCrudForm().displayFormToUpdate(value.key$);
      this._router.navigate([link, value.key$]);
    }
  }

  onViewDetail(value:any,link:string) {
    if(this.isOpenModal()) {
      this.dialog.title = 'Vista ' + this.getTitle();
      this.dialog.showSubmit = false;
      this.isbtnSaveDisabled = true;
      this.getCrudForm().displayFormToRead(value.key$);
      this.dialog.show({
        size:'lg',
        backdrop: 'static'
      });
    } else {
      this.getCrudForm().displayFormToRead(value.key$);
      this._router.navigate([link,value.key$]);
    }
    
  }

  onAddNewRow(link:string) {
    //console.log(this.isOpenModal());
    if(this.isOpenModal()) {
      this.dialog.title = 'Registrar ' + this.getTitle();
      this.dialog.showSubmit = true;
      this.isbtnSaveDisabled = false;
      this.getCrudForm().displayFormToCreate();
      this.dialog.show({
        size:'lg',
        backdrop: 'static'
      });
    } else {
      this.getCrudForm().displayFormToCreate();
      this._router.navigate([link,'nuevo']);
    }
  }
}