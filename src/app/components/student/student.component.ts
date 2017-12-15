import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../services/students.service';
import { Router } from '@angular/router';
  
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(public _studentsService: StudentsService,
    private router: Router) {

  }

  ngOnInit() {
    this._studentsService.getStudents("test").subscribe(res => {
      console.log(res);
    });
  }

}
