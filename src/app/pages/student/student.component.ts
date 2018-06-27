import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { StudentsService, AlertService, SettingsService } from '../../services/service.index';

import { StudentFormComponent } from '../student/student-form/student-form.component';
import { CrudAbstractComponent } from '../../components/shared/CrudAbstractComponent';
import { CrudAbstractFormComponent } from '../../components/shared/CrudAbstractFormComponent';
import { DatatableComponent, dtColumn, dtField } from '../../components/ui/datatable/datatable.component';

import { Student } from '../../interfaces/student';
import { CodeType } from '../../enums/code-type.enum';
import { IFormResponse } from '../../interfaces/iform';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent extends CrudAbstractComponent implements OnInit {
  @ViewChild(StudentFormComponent) studentForm: StudentFormComponent;
  public cols:dtColumn[];
  public fiels:dtField[];
  public searchValue = new Subject();
  
  constructor(public _studentsService: StudentsService,
    private _alert: AlertService,
    public spinnerService: Ng4LoadingSpinnerService,
    public _settings: SettingsService,
    public _router:Router) {
      super(_settings, _router);
      this.createGrid();
  }

  getCrudService():StudentsService {
    return this._studentsService;
  }

  getSpinnerService():Ng4LoadingSpinnerService {
    return this.spinnerService;
  }

  getAlertService():AlertService {
      return this._alert;
  }

  getCrudForm():CrudAbstractFormComponent {
    return this.studentForm;
  }

  getTitle():string {
    return 'Alumno';
  }

  createGrid():void {
    this.cols = [
      {
        title:'DNI'
      },
      {
        title:'Apellidos'
      },
      {
        title:'Nombres'
      },
      {
        title:'Email'
      },
      {
        title:'Departamento'
      },
      {
        title:'NroCelular'
      },
      {
        title:'Estado'
      },
      {
        title:'Condicion'
      }
    ]

    this.fiels = [
      {
        name:'dni',
        url:'test'
      },
      {
        name:'lastName'
      },
      {
        name:'firstName'
      },
      {
        name:'email'
      },
      {
        name:'location.desc_dep_inei'
      },
      {
        name:'nroCelular'
      },
      {
        name:'status',
        codeType: CodeType.STATUS
      },
      {
        name:'state',
        codeType: CodeType.STATE
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
    this.searchValue.subscribe(text => console.log(text));
      this._studentsService.search('122').subscribe(result=> 
        {
          console.log(result);
          this.data = result;
        }
      );
  }
}
