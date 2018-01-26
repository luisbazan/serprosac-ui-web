import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Pattern } from '../../../common/pattern';
import { AlertComponent } from '../../../components/alert/alert.component';
import { CrudAbstractFormComponent } from '../../../components/shared/CrudAbstractFormComponent';
import { StudentsService, AlertService, ICRUDService, SettingsService } from '../../../services/service.index';
import { Student } from '../../../interfaces/student';
import { FormFieldInputComponent } from '../../../components/ui/forms/form-field-input/form-field-input.component';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent extends CrudAbstractFormComponent {
  @ViewChild('fieldInputDNI') fieldInput: FormFieldInputComponent;

  constructor( 
    private _studentsService: StudentsService,
    private spinnerService: Ng4LoadingSpinnerService,
    private _fb: FormBuilder,
    private _alert: AlertService,
    public _settings: SettingsService, 
    public _router:Router,
    public _activatedRoute: ActivatedRoute) {
      super(_settings, _router, _activatedRoute);
      this.basicForm = this.createFormGroup();
      _activatedRoute.params.subscribe( params => {
        if(!this.isOpenModal()) {
          this.showToolbar = true;
          let id = params['id'];
          if ( id !== 'nuevo' ) {
            this.loadData( id );
            
          }
        }
      });
  }
  
  afterLoadData() {
    //console.log(this.isView);
    this.fieldInput.enabled(false);
  }

  getTitle():string {
    return "El alumno";
  }

  createFormGroup(): (FormGroup){
    return this._fb.group({
      firstName: [, [Validators.required, Validators.maxLength(30)]],
      lastName: [, [Validators.required, Validators.maxLength(30)]],
      dni: [, [Validators.required, Validators.maxLength(8), Validators.minLength(8)]],
      sexo: ['', [Validators.required]],
      nroCelular: [, [Validators.required, Validators.maxLength(14)]],
      nroCasa: [, [Validators.maxLength(14)]],
      email: [, [Validators.required, Validators.maxLength(80), Validators.pattern(Pattern.EMAIL)]],
      moodleUser: ['', [Validators.maxLength(10)]],
      moodlePwd: ['', [Validators.maxLength(10)]],
      address: [, [Validators.required, Validators.maxLength(120)]],
      location: ['', [Validators.required]],
      state: ['A', [Validators.required]],
      status: ['M', [Validators.required]]
     });
  }

  public getSpinnerService():Ng4LoadingSpinnerService {
    return this.spinnerService;
  }

  public getAlert():AlertService {
    return this._alert;
  }

  public getService():ICRUDService {
    return this._studentsService;
  }
  
  displayFormToUpdate(id:string) {
    super.displayFormToUpdate(id);
    this.fieldInput.enabled(false);
  }

  displayFormToCreate() {
    super.displayFormToCreate();
    this.fieldInput.enabled(true);
  }

}