import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Pattern } from '../../../common/pattern';
import { AlertComponent } from '../../../components/alert/alert.component';
import { CrudAbstractFormComponent } from '../../../components/shared/CrudAbstractFormComponent';
import { CourseService, AlertService, ICRUDService } from '../../../services/service.index';
import { Course } from '../../../interfaces/course';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent extends CrudAbstractFormComponent{

  constructor( 
    private _CourseService: CourseService,
    private spinnerService: Ng4LoadingSpinnerService,
    private _fb: FormBuilder,
    private _alert: AlertService) {
      super();
      this.basicForm = this.createFormGroup();
  }

  getTitle():string {
    return "El curso";
  }

  createFormGroup(): (FormGroup){
    return this._fb.group({
      code: [, [Validators.required, Validators.maxLength(10)]],
      title: [, [Validators.required, Validators.maxLength(60)]],
      shortDescription: [, [Validators.required, Validators.maxLength(120), Validators.minLength(30)]],
      description: [],
      listPrice: [, [Validators.required]],
      currentPrice: [, [Validators.required]],
      type: ['', [Validators.required]],
      category: ['N', [Validators.required]],
      state: ['A', [Validators.required]],
      status: ['', [Validators.required]]
    });
  }

  public getSpinnerService():Ng4LoadingSpinnerService {
    return this.spinnerService;
  }

  public getAlert():AlertService {
    return this._alert;
  }

  public getService():ICRUDService {
    return this._CourseService;
  }

}
