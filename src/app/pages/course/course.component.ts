import { Component, OnInit, ViewChild } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { CourseService, AlertService, AbstractCRUDServices } from '../../services/service.index';

import { CourseFormComponent } from '../course/course-form/course-form.component';
import { CrudAbstractComponent } from '../../components/shared/CrudAbstractComponent';
import { CrudAbstractFormComponent } from '../../components/shared/CrudAbstractFormComponent';
import { DatatableComponent, dtColumn, dtField } from '../../components/ui/datatable/datatable.component';

import { Course } from '../../interfaces/course';
import { CodeType } from '../../enums/code-type.enum';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent extends CrudAbstractComponent implements OnInit {
  @ViewChild(CourseFormComponent) courseForm: CourseFormComponent;
  public cols:dtColumn[];
  public fiels:dtField[];
  
  constructor(public _courseService: CourseService,
    private _alert: AlertService,
    public spinnerService: Ng4LoadingSpinnerService) {
      super();
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

  getTitle():String {
    return "Curso";
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

  ngOnInit() {
    this.refreshGrid();
  }
}
