import { Component, OnInit, ViewChild } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { CourseService, AlertService, AbstractCRUDServices, SettingsService } from '../../services/service.index';

import { CourseFormComponent } from '../course/course-form/course-form.component';
import { CrudAbstractComponent } from '../../components/shared/CrudAbstractComponent';
import { CrudAbstractFormComponent } from '../../components/shared/CrudAbstractFormComponent';
import { DatatableComponent, dtColumn, dtField } from '../../components/ui/datatable/datatable.component';

import { Course } from '../../interfaces/course';
import { CodeType } from '../../enums/code-type.enum';
import { Router } from '@angular/router';
import { IFormResponse } from '../../interfaces/iform';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent extends CrudAbstractComponent implements OnInit {
  @ViewChild(CourseFormComponent) courseForm: CourseFormComponent;
  public cols:dtColumn[];
  public fiels:dtField[];
  public searchValue = new Subject();
  constructor(public _courseService: CourseService,
    private _alert: AlertService,
    public spinnerService: Ng4LoadingSpinnerService,
    public _settings: SettingsService, public _router:Router) {
      super(_settings, _router);
      this.createGrid();
  }

  getCrudService():CourseService {
    return this._courseService;
  }

  getSpinnerService():Ng4LoadingSpinnerService {
    return this.spinnerService;
  }

  getAlertService():AlertService {
      return this._alert;
  }

  getCrudForm():CrudAbstractFormComponent {
    return this.courseForm;
  }

  getTitle():string {
    return 'Curso';
  }

  createGrid():void {
    this.cols = [
      {
        title:'Codigo'
      },
      {
        title:'Titulo'
      },
      {
        title:'Description'
      },
      {
        title:'Precio de Lista'
      },
      {
        title:'Precio Actual'
      },
      {
        title:'Tipo'
      },
      {
        title:'Estatus'
      },
      {
        title:'Estado'
      },
      {
        title:'Categoria'
      }
    ]

    this.fiels = [
      {
        name:'code'
      },
      {
        name:'title'
      },
      {
        name:'shortDescription'
      },
      {
        name:'listPrice'
      },
      {
        name:'currentPrice'
      },
      {
        name:'type',
        codeType: CodeType.TYPE
      },
      {
        name:'status',
        codeType: CodeType.STATUS
      },
      {
        name:'state',
        codeType: CodeType.STATE
      },
      {
        name:'category',
        codeType: CodeType.CATEGORY
      }
    ]
  }

  onAfterSave(event:IFormResponse) {    
    this.isbtnSaveDisabled = false;
    if(event.isUpdate || (this.isCloseModal && !event.isUpdate)) {
      this.dialog.close();
    }
    this.getSpinnerService().hide();          
  }
  
  onSearch($event) {
    let value = $event.target.value;
    this.searchValue.next(value);
  }

  ngOnInit() {
    //this.refreshGrid();
    this.searchValue.subscribe(text => console.log(text));
      this._courseService.search('122').subscribe(result=> 
        {
          console.log(result);
          this.data = result;
        }
      );
  }
}
